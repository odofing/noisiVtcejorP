const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //  useCreateIndex: false
    })
    console.log('Remote DB connected')

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
module.exports = connectDB

 
