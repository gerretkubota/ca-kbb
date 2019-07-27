import axios from 'axios';

/**
 *
 * @param {string} url
 * GET request to gather datasetId from api
 */
const getDatasetId = async url => {
  try {
    const response = await axios.get(`${url}/datasetid`);
    const data = response;
    return data;
  } catch (err) {
    return err;
  }
};

export { getDatasetId };
