const dataController = require('../controllers/dataController.js');

module.exports = app => {
  app.get('/api/datasetid', dataController.datasetid);
  app.get('/api/vehicleids', dataController.vehicleids);
};
