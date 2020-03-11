import { ApolloError } from 'apollo-server-express'
import crawler from '../utils/crawler'
import leadModel from '../schema/lead'
import moment from 'moment'

export default {
  Query: {
    findLeads: async (root, { crawledBy = '', service = '', lastName = '', zipCode = '', state = '', city = '', pagesToCrawl = 10 }, context, info) => {
      try {
        const leads = await crawler(service, lastName, zipCode, state, city, pagesToCrawl)

        for (const lead of leads) {
          try {
            await leadModel.create({
              ...lead,
              keyword: `${service} ${lastName} ${zipCode} ${state} ${city}`,
              crawledBy
            })
          } catch (e) {
			console.log(e)
            console.log('found a duplicate')
          }
        }

        const count = await leadModel.countDocuments({ createdAt: { $gte: moment().startOf('day').toDate() } })
        return count
      } catch (e) {
        console.log(e)
        throw new ApolloError(e)
      }
    }
  }
}
