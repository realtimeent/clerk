import mongoose from 'mongoose'

const userschema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'hotelOwner'],
      default: 'user',
    },
    recentSerachedCities: [{ type: String, required: true }],
  },
  { timestamps: true }
)

const User = mongoose.models.user || mongoose.model('User', userschema)

export default User
