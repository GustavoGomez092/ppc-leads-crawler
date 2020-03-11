import { ApolloError } from 'apollo-server-express'
import crawler from '../utils/crawler'
import leadModel from '../schema/lead'

export default {
  Query: {
    findLeads: async (root, { service, lastName, zipCode, state, city, pagesToCrawl = 10 }, context, info) => {
      try {
        const leads = await crawler(service, lastName, zipCode, state, city, pagesToCrawl)

        for (const lead of leads) {
		  try {
			await leadModel.create(lead)
		  } catch(e) {
			console.log('found a duplicate')
		  }
        }

        const count = await leadModel.estimatedDocumentCount()
        return count
      } catch (e) {
		console.log(e)
        throw new ApolloError(e)
      }
    }
  }
}
