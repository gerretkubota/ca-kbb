import React from 'react';
import PropTypes from 'prop-types';

import TableEntry from '../components/TableEntry.jsx';

const TableContainer = ({ answer }) => (
  <table className="table-info">
    <thead>
      <tr className="table-rows table-header">
        <th>Vehicle ID</th>
        <th>Year</th>
        <th>Make</th>
        <th>Model</th>
        <th>Dealer ID</th>
        <th>Dealer Name</th>
      </tr>
    </thead>
    <tbody>
      {answer.dealers.length
        ? answer.dealers.map(dealer =>
            dealer.vehicles.map(v => (
              <TableEntry
                key={`${v.vehicleId}${v.dealerId}`}
                vehicleId={v.vehicleId}
                year={v.year}
                make={v.make}
                model={v.model}
                dealerId={v.dealerId}
                name={dealer.name}
              />
            ))
          )
        : null}
    </tbody>
  </table>
);

TableContainer.propTypes = {
  answer: PropTypes.object,
};

export default TableContainer;
