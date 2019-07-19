const axios = require('axios');

const baseUrl = 'http://api.coxauto-interview.com/api';
module.exports = {
  // get datasetid
  dataSetId: (req, res, next) => {
    const url = `${baseUrl}/datasetid`;
    axios
      .get(url)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(500).send(err));
  },
  // get an array of vehicle ids
  vehicleIds: (req, res, next) => {
    // use template literals for datasetid
    const url = `${baseUrl}/DyxRRiYL1wg/vehicles`;
    axios
      .get(url)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(500).send(err));
  },
  vehicleInfo: (req, res, next) => {
    // get vehicle info; save id, year, make, model, DEALERID
    const url = `${baseUrl}/DyxRRiYL1wg/vehicles/1241376138`;
    axios
      .get(url)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(500).send(err));
  },
  dealerInfo: (req, res, next) => {
    // get dealer info; name, id
    const url = `${baseUrl}/DyxRRiYL1wg/dealers/55761517`;
    axios
      .get(url)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(500).send(err));
  },
  answer: (req, res, next) => {
    // post answer
    const url = `${baseUrl}/DyxRRiYL1wg/answer`;
    axios
      .post(url, req.body)
      .then(success => res.status(200).send(success.data))
      .catch(err => res.status(500).send(err));
  },
};
