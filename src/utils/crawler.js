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

    const query = finalArray.join('+')

    let currentIteration = 0
    const allLeads = []

    // console.log(query)
    await page.goto(`https://www.google.com/search?q=${query}`, {waitUntil: 'networkidle0'})

    while (currentIteration < pagesToCrawl) {
      // get ads details
      const adsData = await page.evaluate(() => {
        const ads = []
        // get the ads elements
        const adsElms = document.querySelectorAll('li.ads-ad')
        // get the hotel data
        adsElms.forEach(function main (adElement) {
          const adJson = {}
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
      await Promise.all([page.click(`a[aria-label="Page ${currentIteration + 2}"]`), page.waitForNavigation()])

      // increase the iterator
      currentIteration++
    }

    // console.log(allLeads)
    // Curate results
    const final = allLeads.reduce((x, { adLink, adName }) => {
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

    const completeItems = []
    for (const x of final) {
      if (!x.adLink.includes('googleadservices') && x.adLink.includes('http') && x.adLink.includes('https')) {
        try {
          await page.goto(x.adLink, {
			  timeout: 60000,
			  waitUntil: 'networkidle0'
		  })
        } catch (e) {
          console.log(e)
        }
        const completeData = await page.evaluate(() => {
          const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
          const emailRegex = /([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
          const phones = []
          const emails = []
          const theArray = Array.from(document.querySelectorAll('*'))
          for (const l of theArray) {
            if (l && l.innerText && l.innerText.match(phoneRegex)) {
              phones.push(phoneRegex.exec(l.innerText)[0].toString().trim())
            }
            if (l && l.innerText && l.innerText.match(emailRegex)) {
              emails.push(emailRegex.exec(l.innerText)[0].toString().trim())
            }
          }
          const filtered = y => y.filter((v, i) => y.indexOf(v) === i)
          const phonesFinal = filtered(phones)
          const emailsFinal = filtered(emails)
          return { phonesFinal, emailsFinal }
        })

        completeItems.push({
          adLink: x.adLink.trim(),
          adPhones: completeData.phonesFinal,
          adEmails: completeData.emailsFinal,
          adName: x.adName.trim()
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
