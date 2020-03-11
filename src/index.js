import '@babel/polyfill'
import express from 'express'
import { ApolloServer, ApolloError } from 'apollo-server-express'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import mongoose from 'mongoose'
import 'dotenv/config'
import json2xls from 'json2xls'
import leadModel from './schema/lead'
import fs from 'fs'
import moment from 'moment'

(async () => {
  const server = new ApolloServer({ typeDefs, resolvers })

  const { DB_USER, DB_PASS, DB_URI } = process.env

  const app = express()
  server.applyMiddleware({ app })
  await mongoose.connect(`mongodb://${DB_USER}${DB_PASS}${DB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  app.use(json2xls.middleware)

  app.get('/download', async (req, res) => {
    try {
      const data = await leadModel.find({ createdAt: moment().startOf('day').toDate() }, { __v: 0, _id: 0, updatedAt: 0 })
      const parsed = data.map(u => u.toObject())
      console.log(parsed)
      res.xls('data.xlsx', parsed)
      fs.writeFileSync(
        'data.xlsx',
        json2xls(data, { fields: ['adPhones', 'adEmails', 'adLink', 'adName', 'keyword', 'crawledBy', 'createdAd'] }), 'binary')
    } catch (e) {
      throw new ApolloError(e)
    }
  })

  app.listen({ port: process.env.PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  )
})()
