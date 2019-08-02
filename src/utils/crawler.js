import puppeteer from 'puppeteer'

export default async (
  service,
  lastName,
  zipCode,
  state,
  city,
  pagesToCrawl
) => {
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
        let adsElms = document.querySelectorAll('li.ads-ad')
        // get the hotel data
        adsElms.forEach(function main (adElement) {
          let adJson = {}
          try {
            adJson.adName = adElement.querySelector('a h3').innerText
            adJson.adLink = adElement
              .querySelector('a.V0MxL')
              .getAttribute('href')
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
      await Promise.all([page.click('.cur+td > a'), page.waitForNavigation()])

      // increase the iterator
      currentIteration++
    }

    // console.log(allLeads)
    // Curate results
    let final = allLeads.reduce((x, { adLink, adName }) => {
      let domain = adLink.match(/(:\/\/)([^/]*)\//)
      domain = domain ? domain[2] : adLink
      if (!x.find(u => u.adLink.includes(domain))) {
        x.push({
          adLink,
          adName
        })
      }
      return x
    }, [])

    let completeItems = []
    for (let x of final) {
      if (!x.adLink.includes('googleadservices') && x.adLink.includes('http') && x.adLink.includes('https')) {
        try {
          await page.goto(x.adLink)
        } catch (e) {
          console.log(e)
        }
        let completeData = await page.evaluate(() => {
          let phoneRegex = /\(?([0-9]{3})\)?([ -.]?)([0-9]{3})([ -.])([0-9]{4})/
          let phones = []
          let phoneArray = Array.from(document.querySelectorAll('*'))
          for (let l of phoneArray) {
            if (l && l.innerText && l.innerText.match(phoneRegex)) {
              phones.push(phoneRegex.exec(l.innerText)[0].toString())
            }
          }
          let filtered = y => y.filter((v, i) => y.indexOf(v) === i)
          return filtered(phones)
        })

        completeItems.push({
          adLink: x.adLink,
          adPhones: completeData,
          adName: x.adName
        })
      }
    }
    await page.close()
    await browser.close()
    return completeItems
  } catch (error) {
    console.log(error)
    await page.close()
    await browser.close()
  }
}
