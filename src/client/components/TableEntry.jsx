import React from 'react';
import PropTypes from 'prop-types';

const TableEntry = ({ vehicleId, year, make, model, dealerId, name }) => (
  <tr className="table-rows">
    <td>{vehicleId}</td>
    <td>{year}</td>
    <td>{make}</td>
    <td>{model}</td>
    <td>{dealerId}</td>
    <td>{name}</td>
  </tr>
);

TableEntry.propTypes = {
  vehicleId: PropTypes.number,
  year: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  dealerId: PropTypes.number,
  name: PropTypes.string,
};

export default TableEntry;
