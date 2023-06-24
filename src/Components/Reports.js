import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Dashboard.css'

const Reports = () => {
  return (
    <div>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className="container">
        <h2>Reports</h2>
        </div>
    </div>
  );
};

export default Reports;