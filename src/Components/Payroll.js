import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Dashboard.css'

const Payroll = () => {
  return (
    <div>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className="container">
        <h2>Payroll</h2>
        </div>
    </div>
  );
};

export default Payroll;