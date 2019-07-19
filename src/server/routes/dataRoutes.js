const dataController = require('../controllers/dataController.js');

module.exports = app => {
  app.get('/api/datasetid', dataController.dataSetId);
  app.get('/api/vehicleids', dataController.vehicleIds);
  app.get('/api/vehicleinfo', dataController.vehicleInfo);
  app.get('/api/dealerInfo', dataController.dealerInfo);
  app.post('/api/answer', dataController.answer);
};
