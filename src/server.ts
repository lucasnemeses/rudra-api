import fastify from 'fastify'
import { db } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await db('transactions').select('*')
  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
