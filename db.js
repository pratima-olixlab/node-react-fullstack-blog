// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://olixlab22:OlixLab1@cluster0.w9ceppl.mongodb.net/mern-stack-react')
//   .then(() => {
//     console.log('MongoDB connection succeeded');
//   })
//   .catch((err) => {
//     console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
//   });

// require('./models/user.model'); //This line imports the Mongoose model for the 'User' schema.

// module.exports = mongoose;

const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
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

require('./models/user.model'); // Import the Mongoose model for the 'User' schema

module.exports = mongoose;
