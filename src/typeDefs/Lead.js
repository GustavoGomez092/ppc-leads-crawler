import { gql } from 'apollo-server-express'

export default gql`
    type Lead {
      adName: String
      adLink: String
      adPhones: [String]
      adEmails: [String]
    }

    extend type Query {
      findLeads(
        crawledBy: String
        service: String
        lastName: String
        zipCode: Int
        state: String
        city: String
        pagesToCrawl: Int
        keyword: String
      ): Int
    }
  `
