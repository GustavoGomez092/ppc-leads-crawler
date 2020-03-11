import { ApolloError } from 'apollo-server-express'
import crawler from '../utils/crawler'
import leadModel from '../schema/lead'

export default {
  Query: {
    findLeads: async (root, { crawledBy = '', service, lastName, zipCode, state, city, pagesToCrawl = 10 }, context, info) => {
      try {
        const leads = await crawler(service, lastName, zipCode, state, city, pagesToCrawl)

        for (const lead of leads) {
          await leadModel.create({
            ...lead,
            keyword: `${service} ${lastName} ${zipCode} ${state} ${city}`,
            crawledBy
          })
        }

        const count = await leadModel.estimatedDocumentCount()
        return count
      } catch (e) {
        throw new ApolloError(e)
      }
    }
  }
}
