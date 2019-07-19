const axios = require('axios');

module.exports = {
  // get datasetid
  datasetid: (req, res, next) => {
    const baseUrl = 'http://api.coxauto-interview.com/api/datasetId';
    axios
      .get(baseUrl)
      .then(data => res.status(200).send(data.data))
      .catch(err => console.error(err));
  },
  // get an array of vehicle ids
  vehicleids: (req, res, next) => {
    const baseUrl = 'http://api.coxauto-interview.com/api/DyxRRiYL1wg/vehicles';
    axios
      .get(baseUrl)
      .then(data => res.status(200).send(data.data))
      .catch(err => console.error(err));
  },
  vehicleinfo: (req, res, next) => {},
};
