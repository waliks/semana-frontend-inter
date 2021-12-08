import express from 'express'
import routes from './routes'

const app = express()
const PORT = 3333

app.use(routes)

app.listen(3333, () => {
  console.log(`[server] Server is running at http://localhost:${PORT}`)
})
