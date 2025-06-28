import expresss from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './configs/db.js'
import { clerkMiddleware } from '@clerk/express'
import clerkwebHooks from './controllers/clerkWebHooks.js'

const app = expresss()
connectDb()

app.use(cors())
app.use(expresss.json())
app.use(clerkMiddleware())
app.use('/api/clerk', clerkwebHooks)
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
