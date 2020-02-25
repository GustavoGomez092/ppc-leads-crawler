import { ApolloError } from 'apollo-server-express'
import crawler from '../utils/crawler'
import leadModel from '../schema/lead'

export default {
  Query: {
    findLeads: async (root, { service, lastName, zipCode, state, city, pagesToCrawl = 10 }, context, info) => {
      try {
        const leads = await crawler(service, lastName, zipCode, state, city, pagesToCrawl)
        console.log(leads)
        await leadModel.insertMany(leads, { ordered: false, rawResult: true })

        const count = await leadModel.estimatedDocumentCount()
        return count
      } catch (e) {
        throw new ApolloError(e)
      }
    }
  }
}