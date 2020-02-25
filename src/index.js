import "@babel/polyfill";
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import mongoose from "mongoose";
import 'dotenv/config'

(async () => {  
  const server = new ApolloServer({ typeDefs, resolvers });

  const { DB_USER, DB_PASS, DB_URI } = process.env

  const app = express();
  server.applyMiddleware({ app });

  await mongoose.createConnection(`mongodb+srv://${DB_USER}:${DB_PASS}${DB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  app.listen({ port: process.env.PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:3003${server.graphqlPath}`)
  );
})()