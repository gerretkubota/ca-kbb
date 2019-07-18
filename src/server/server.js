const DealersAndVehicles = require('dealers_and_vehicles');

// console.log('hi', DealersAndVehicles);

const api = new DealersAndVehicles.DataSetApi();

// const datasetId = 'datasetId_example'; // {String}
// const datasetId = '422cYXUK1wg';
const datasetId = 'DyxRRiYL1wg';

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(`API called successfully. Returned data: ${data}`);
    console.log(data);
  }
};
api.dataSetGetCheat(datasetId, callback);
