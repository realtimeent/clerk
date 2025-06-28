import mongoose from 'mongoose'

const connectDb = async (req, res) => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('db connected')
    })
    await mongoose.connect(process.env.MONGO_URI)
  } catch (error) {
    console.log(error.message)
  }
}

export default connectDb
