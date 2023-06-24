import React from 'react';
import Sidebar from './Sidebar';
import './Transactions.css'

const Transactions = () => {
  return (
    <div>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div className="container">
      <h2>Transactions</h2>
    </div>
    </div>
  );
};

export default Transactions;