import React, { Component } from 'react';
import { throttle } from 'lodash';

import TableContainer from './TableContainer.jsx';
import Loading from '../components/Loading.jsx';

import {
  getDatasetId,
  getVehicleIds,
  getVehicleInfo,
  getAllInfo,
  postAnswer,
} from '../utils/helper.js';

/**
 * @description
 * The application can be more optimal if a HashMap was utilized to look up the necessary values.
 */
export default class MainContainer extends Component {
  constructor() {
    super();

    this.state = {
      datasetId: '',
      prevDatasetId: '',
      answer: { dealers: [] },
      vIdsArray: [],
      dIdsObj: {},
      disableBtn: true,
      loading: false,
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
   * @description
   * await function can be found through utils/helper
   */
  gatherDatasetId = async e => {
    e.stopPropagation();

    try {
      const result = await getDatasetId();

      this.setState({
        datasetId: result.data.datasetId,
        prevDatasetId: '',
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
   * @description
   * await functions can be found through utils/helper
   */
  gatherInfo = async e => {
    e.stopPropagation();

    this.setState({ loading: true });

    const { datasetId, prevDatasetId, answer, vIdsArray, dIdsObj } = this.state;
    const newAnswer =
      prevDatasetId === datasetId
        ? JSON.parse(JSON.stringify(answer))
        : { dealers: [] };
    const newDIdsObj = { ...dIdsObj };

    const allVehicleIds = await getVehicleIds(datasetId);
    const allVehicleInfo = await getVehicleInfo(
      datasetId,
      vIdsArray,
      allVehicleIds
    );

    await getAllInfo(datasetId, allVehicleInfo, newDIdsObj, newAnswer);

    this.setState({
      prevDatasetId: datasetId,
      answer: newAnswer,
      disableBtn: false,
      dIdsObj: newDIdsObj,
      loading: false,
    });
  };

  /**
   * @param {event} e
   * Do a post request to submit the answer
   * An alert box will display whether or not it has been successful
   * It will also display the amount of time it took to gather the info
   * @description
   * await functions can be found through utils/helper
   */
  submitAnswer = async e => {
    e.stopPropagation();

    const { answer, datasetId } = this.state;
    try {
      const response = await postAnswer(answer, datasetId);
      this.setState({ disableBtn: true }, () => {
        alert(
          `${response.message} ${(response.totalMilliseconds / 1000).toFixed(
            2
          )} seconds.`
        );
      });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { datasetId, answer, disableBtn, loading } = this.state;

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
            {loading ? 'LOADING' : 'GATHER INFO'}
          </button>
        </div>
        <div className="gatherInfo-group column">
          <div className="gatherInfo-box">
            <TableContainer answer={answer} loading={loading} />
            {loading ? <Loading /> : null}
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
