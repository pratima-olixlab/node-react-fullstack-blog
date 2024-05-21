require('./db');
require('./config/config.js');

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const PORT = env === 'production' ? process.env.PROD_PORT : process.env.DEV_PORT;

app.use(bodyParser.json());

const corsOrigin = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
};
app.use(cors(corsOrigin));

app.use(express.static(path.join(__dirname, 'react-app-main', 'build')));

const rtsIndex = require('./routes/app.routes');
app.use('/users', rtsIndex);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'react-app-main', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
