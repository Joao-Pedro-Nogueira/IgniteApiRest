import fastify from 'fastify'

const app = fastify()

app.get('/hello-world', () => {
  return 'Hello World'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running!')
  })
