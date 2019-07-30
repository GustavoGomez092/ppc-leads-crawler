import { ApolloError } from 'apollo-server-express'
import crawler from '../utils/crawler'

export default {
  Query: {
    findLeads: async (root, { service, lastName, zipCode, state, city, pagesToCrawl = 10 }, context, info) => {
      try {
        return crawler(service, lastName, zipCode, state, city, pagesToCrawl)
      } catch (e) {
        throw new ApolloError(e)
      }
    }
  }
}