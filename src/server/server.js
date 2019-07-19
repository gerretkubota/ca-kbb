const express = require('express');
const bodyParser = require('body-parser').json();
// const axios = require('axios');

const app = express();
const dataRouter = require('./routes/dataRoutes');

app.use(bodyParser);
dataRouter(app);

const PORT = 5000;
app.listen(PORT, () => console.log(`Connected to PORT ${PORT}`));
