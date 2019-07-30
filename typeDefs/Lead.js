import { gql } from 'apollo-server-express'

export default gql`
    type Lead {
      adName: String
      adLink: String
    }

    extend type Query {
      findLeads(
        service: String
        lastName: String
        zipCode: Int
        state: String
        city: String
        pagesToCrawl: Int
      ): [Lead]
    }
  `