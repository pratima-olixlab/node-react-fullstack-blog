const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const MONGODB_URI = env === 'production' ? process.env.PROD_MONGODB_URI : process.env.DEV_MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connection succeeded');
})
.catch((err) => {
  console.error('Error in DB connection:', err);
});

require('./models/user.model');

module.exports = mongoose;
