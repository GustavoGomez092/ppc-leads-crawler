import '@babel/polyfill'
import express from 'express'
import { ApolloServer, ApolloError } from 'apollo-server-express'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import mongoose from 'mongoose'
import 'dotenv/config'
import json2xls from 'json2xls'
import leadModel from './schema/lead'

(async () => {
  const server = new ApolloServer({ typeDefs, resolvers })

  const { DB_USER, DB_PASS, DB_URI } = process.env

  const app = express()
  server.applyMiddleware({ app })
  await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}${DB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  app.use(json2xls.middleware)

  app.get('/download', async (req, res) => {
    try {
      const data = await leadModel.find({}, { __v: 0, _id: 0, updatedAt: 0 })
      res.xls('data.xlsx', data.map(u => u.toObject()))
    } catch (e) {
      throw new ApolloError(e)
    }
  })

  app.listen({ port: process.env.PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  )
})()
