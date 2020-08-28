import { ApolloError } from 'apollo-server-express'
import crawler from '../utils/crawler'
import leadModel from '../schema/lead'
import moment from 'moment'

export default {
  Query: {
    findLeads: async (root, { crawledBy = '', service = '', lastName = '', zipCode = '', state = '', city = '', pagesToCrawl = 10 }, context, info) => {
      try {
        // get leads
        const leads = await crawler.getLeads(service, lastName, zipCode, state, city, pagesToCrawl)

        // Get the urls of the leads only
        const urls = leads.map(u => u.adLink)

        // Check leads agains DB
        const newLeads = await leadModel.find({ adLink: urls }, { adLink: 1 })

        // Compare the existing vs the crawled
        const curatedLeads = leads.filter(u => !newLeads.some(x => x.adLink === u.adLink))

        if (curatedLeads.length) {
          // Crawl the pages
          const crawledPages = await crawler.crawlResults(curatedLeads)

          if (crawledPages.length) {
            for (const lead of crawledPages) {
              try {
                await leadModel.create({
                  ...lead,
                  keyword: `${service}`,
                  crawledBy,
                  state: `${state}`,
                  city: `${city}`
                })
              } catch (e) {
                console.log('found a duplicate')
              }
            }
          }
        }

        const count = await leadModel.countDocuments({
          createdAt: {
            $gte: moment().startOf('day').toDate(),
            $lte: moment().endOf('day').toDate()
          }
        })
        return count
      } catch (e) {
        console.log(e)
        throw new ApolloError(e)
      }
    }
  }
}
