import axios from 'axios';

const url = 'http://api.coxauto-interview.com/api';

/**
 *
 * @param {string} url
 * GET request to gather datasetId from api
 */
const getDatasetId = async () => {
  try {
    const response = await axios.get(`${url}/datasetid`);
    const data = response;
    return data;
  } catch (err) {
    return err;
  }
};
/**
 *
 * @param {string} url
 * @param {number} datasetId
 * GET request to gather all vehicleIds for this datasetId
 */
const getVehicleIds = async datasetId => {
  try {
    const response = await axios.get(`${url}/${datasetId}/vehicles`);
    const { vehicleIds } = response.data;

    return vehicleIds;
  } catch (err) {
    return err;
  }
};
/**
 *
 * @param {number} datasetId
 * @param {array} vIdsArray
 * @param {array} allVehicleIds
 * GET request to look up each vehicleid for their info and dealerId
 */
const getVehicleInfo = async (datasetId, vIdsArray, allVehicleIds) => {
  try {
    return Promise.all(
      allVehicleIds.map(async vId => {
        try {
          if (vIdsArray.findIndex(num => num === vId) < 0) {
            const response = await axios.get(
              `${url}/${datasetId}/vehicles/${vId}`
            );
            const data = { ...response.data };
            return data;
          }
        } catch (err) {
          return err;
        }
      })
    );
  } catch (err) {
    return err;
  }
};
/**
 *
 * @param {number} datasetId
 * @param {array} allVehicleInfo
 * @param {object} newDIdsObj
 * @param {object} newAnswer
 * Array of objects from response (promise all)
 * Traverse through the vehicleinfo to utilize dealerId to obtain dealer name through a GET call
 * Form answer object
 */
const getAllInfo = async (datasetId, allVehicleInfo, newDIdsObj, newAnswer) => {
  try {
    return Promise.all(
      allVehicleInfo.map(async info => {
        try {
          const response = await axios.get(
            `${url}/${datasetId}/dealers/${info.dealerId}`
          );

          if (!newDIdsObj.hasOwnProperty(info.dealerId)) {
            newDIdsObj[info.dealerId] = response.data.name;
            const newDealer = {
              dealerId: info.dealerId,
              name: response.data.name,
              vehicles: [],
            };
            newAnswer.dealers.push(newDealer);
          }

          const foundIndex = newAnswer.dealers.findIndex(
            curr => curr.dealerId === info.dealerId
          );

          if (
            newAnswer.dealers[foundIndex].vehicles.findIndex(
              curr => curr.vehicleId === info.vehicleId
            ) < 0
          ) {
            newAnswer.dealers[foundIndex].vehicles.push(info);
          }
        } catch (err) {
          return err;
        }
      })
    );
  } catch (err) {
    return err;
  }
};
/**
 *
 * @param {object} answer
 * @param {number} datasetId
 * POST request to submit the answer that has been formed
 * Will receive a response if the submitted answer was successful or not
 */
const postAnswer = async (answer, datasetId) => {
  try {
    const response = await axios.post(`${url}/${datasetId}/answer`, answer);
    return response.data;
  } catch (err) {
    return err;
  }
};

export { getDatasetId, getVehicleIds, getVehicleInfo, getAllInfo, postAnswer };
