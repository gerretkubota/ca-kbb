import React, { Component } from 'react';
import axios from 'axios';
import { throttle } from 'lodash';

import TableContainer from './TableContainer.jsx';

import { getDatasetId } from '../utils/helper.js';

/**
 * @description
 * The application can be more optimal if a HashMap was utilized to look up the necessary values.
 */
export default class MainContainer extends Component {
  constructor() {
    super();

    this.state = {
      url: 'http://api.coxauto-interview.com/api',
      datasetId: '',
      prevDatasetId: '',
      allVehicleInfo: [],
      answer: { dealers: [] },
      vIdsArray: [],
      dIdsObj: {},
      disableBtn: true,
    };
    // only allow the users to be able to gatherInfo every 25 seconds
    this.debounceBtn = throttle(this.gatherInfo, 25000, {
      leading: true,
      trailing: false,
    });
  }

  /**
   * @param {event} e
   * Get the most updated values from user input
   */
  handleChange = e => {
    const datasetId = e.target.value;

    this.setState({ datasetId, disableBtn: true });
  };

  /**
   * @param {event} e
   * Call a get request to get a random datasetid and store
   * the value to the datasetId state
   * Reset all values within state except for datasetId
   */
  gatherDatasetId = async e => {
    e.stopPropagation();
    const { url } = this.state;

    try {
      const result = await getDatasetId(url);

      this.setState({
        datasetId: result.data.datasetId,
        prevDatasetId: '',
        allVehicleInfo: [],
        answer: { dealers: [] },
        vIdsArray: [],
        dIdsObj: {},
        disableBtn: true,
      });
    } catch (err) {
      this.setState({ dataSetId: 'ERROR' });
    }
  };

  /**
   * @param {event} e
   * Gather all info for the specific datasetId's vehicles (all info)
   * and the dealerId that it belongs to
   * When all necessary info is gathered, construct the object structure for answer
   */
  gatherInfo = e => {
    e.stopPropagation();

    const {
      datasetId,
      prevDatasetId,
      answer,
      allVehicleInfo,
      vIdsArray,
      dIdsObj,
      url,
    } = this.state;

    const newAnswer =
      prevDatasetId === datasetId
        ? JSON.parse(JSON.stringify(answer))
        : { dealers: [] };
    const newAllVehicleInfo = allVehicleInfo.slice(0);
    const newDIdsObj = { ...dIdsObj };

    let tempArrOfVIds;
    // gets array of vehicle ids
    axios
      .get(`${url}/${datasetId}/vehicles`)
      .then(res => {
        const { vehicleIds } = res.data;
        tempArrOfVIds = vehicleIds;
        return vehicleIds; // returns array of vehicle ids
      })
      .then(resVehicleIds =>
        // look up each vehicleid for their info and dealerid
        Promise.all(
          resVehicleIds.map(async vId => {
            try {
              if (vIdsArray.findIndex(num => num === vId) < 0) {
                const response = await axios.get(
                  `${url}/${datasetId}/vehicles/${vId}`
                );
                const data = { ...response.data };
                return data;
              }
            } catch (err) {
              alert(err);
            }
          })
        )
      )
      .then(resVehicleInfo =>
        // array of objects from response (promise all)
        // traverse through the vehicleinfo to obtain dealerid and then doing a get call
        // array of objects

        // vehicoleInfo => array of objects
        Promise.all(
          resVehicleInfo.map(async info => {
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
              // check if that dealerid has that vehicle or not
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
              alert(err);
            }
          })
        )
      )
      .then(success => {
        this.setState({
          prevDatasetId: datasetId,
          answer: newAnswer,
          disableBtn: false,
          dIdsObj: newDIdsObj,
          allVehicleInfo: newAllVehicleInfo,
        });
      })
      .catch(err => this.setState({ datasetId: 'ERROR' }));
  };

  /**
   * @param {event} e
   * Do a post request to submit the answer
   * An alert box will display whether or not it has been successful
   * It will also display the amount of time it took to gather the info
   */
  submitAnswer = e => {
    e.stopPropagation();

    const { answer, datasetId, url } = this.state;

    axios
      .post(`${url}/${datasetId}/answer`, answer)
      .then(res =>
        this.setState({ disableBtn: true }, () => {
          alert(
            `${res.data.message} ${(res.data.totalMilliseconds / 1000).toFixed(
              2
            )} seconds`
          );
        })
      )
      .catch(err => alert(err));
  };

  render() {
    const { datasetId, answer, disableBtn } = this.state;

    return (
      <div className="main-container column row">
        <div className="generate-group row">
          <button type="button" onClick={this.gatherDatasetId}>
            GENERATE
          </button>
          <input
            className="text-field"
            type="text"
            onChange={this.handleChange}
            value={datasetId}
          />
          <button type="button" onClick={this.debounceBtn}>
            GATHER INFO
          </button>
        </div>
        <div className="gatherInfo-group column">
          <div className="gatherInfo-box">
            <TableContainer answer={answer} />
          </div>
        </div>
        <div className="submit-group">
          <button
            type="button"
            onClick={this.submitAnswer}
            className={disableBtn ? null : 'active'}
            disabled={disableBtn}
          >
            SUBMIT ANSWER
          </button>
        </div>
      </div>
    );
  }
}
