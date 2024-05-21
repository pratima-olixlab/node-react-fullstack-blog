// require('./db');
// require('./config/config');

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const bodyParser = require("body-parser");
// const path = require("path"); // Add this line for handling file paths

// app.use(bodyParser.json());

// const corsOrigin = {
//     origin: 'http://localhost:3000', // or whatever port your frontend is using
//     credentials: true,
//     optionSuccessStatus: 200
// }
// app.use(cors(corsOrigin));

// // Serve static files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.get("/", (req, resp) => {
//     resp.json({
//         message: "a simple api"
//     })
// })

// const rtsIndex = require('./routes/app.routes');
// app.use('/users', rtsIndex);

// app.listen(5000, () => {
//     console.log('app is running on 5000 port');
// })


// require('./db');
// require('./config/config.js');

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');

// app.use(bodyParser.json());

// const corsOrigin = {
//     origin: 'http://localhost:3000',
//     credentials: true,
//     optionSuccessStatus: 200
// };
// app.use(cors(corsOrigin));

// app.use(express.static(path.join(__dirname, 'react-app-main', 'build')));

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// const rtsIndex = require('./routes/app.routes');
// app.use('/users', rtsIndex);

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'react-app-main', 'build', 'index.html'));
// });

// app.listen(5000, () => {
//     console.log('app is running on port 5000');
// });

require('./db');
require('./config/config.js');

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
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

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const rtsIndex = require('./routes/app.routes');
app.use('/users', rtsIndex);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'react-app-main', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
