import { fastify } from 'fastify'
// import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

// const database = new DatabaseMemory()
const database = new DatabasePostgres()
server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body
    await database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send()
})
server.get('/videos', async (request) => {
    const search = request.query.search
    const videos = await database.list(search)
    return videos
})

server.put('/videos/:id', async (request, reply) => {
    const updateVideo = await database.update(request.params.id, request.body)
    return reply.status(204).send(updateVideo)  
})

server.delete('/videos/:id', async (request, reply) => {
    await database.delete(request.params.id)
    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
}).then(() => {
    console.log(`HTTP server running! Port: ${process.env.PORT ?? 3333}`)
})  
