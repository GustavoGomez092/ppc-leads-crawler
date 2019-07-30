import puppeteer from 'puppeteer'

export default async (service, lastName, zipCode, state, city, pagesToCrawl) => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 200 })
  const page = await browser.newPage()
  try {
    // check what parameters were sent and build string

    const ArrayString = [service, lastName, zipCode, state, city]
    const finalArray = []
    ArrayString.filter(function (el) {
      if (el != null) {
        finalArray.push(el)
      }
    })

    let query = finalArray.join('+')

    let currentIteration = 0
    let allLeads = []

    // console.log(query)
    await page.goto(`https://www.google.com/search?q=${query}`)
    await page.waitForSelector('#navcnt')

    while (currentIteration < pagesToCrawl) {
      // get ads details
      let adsData = await page.evaluate(() => {
        let ads = []
        // get the ads elements
        let adsElms = document.querySelectorAll('li.ads-ad');
        // get the hotel data
        adsElms.forEach((adElement) => {
          let adJson = {}
          try {
            adJson.adName = adElement.querySelector('a h3').innerText
            adJson.adLink = adElement.querySelector('a.V0MxL').getAttribute('href')
          } catch (e) {
            console.log(e)
          }
          ads.push(adJson)
        })

        return ads
      })

      // push to master array
      allLeads.push(...adsData)

      // Click next page
      await Promise.all([
        page.click('.cur+td > a'),
        page.waitForNavigation()
      ])

      // increase the iterator
      currentIteration++
    }

    // console.log(allLeads)
    // Curate results
    let final = allLeads.reduce((x, { adLink, adName }) => {
      let domain = adLink.match(/(:\/\/)([^/]*)\//)
      domain = domain
        ? domain[2]
        : adLink
      if (!x.find((u) => u.adLink.includes(domain))) {
        x.push({
          adLink,
          adName
        })
      }
      return x
    }, [])

    await page.close()
    await browser.close()

    return final
  } catch (error) {
    console.log(error)
    await page.close()
    await browser.close()
  }
}
