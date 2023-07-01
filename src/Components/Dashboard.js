import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card, Input, Button } from 'antd';
import Sidebar from './Sidebar';
import './Dashboard.css'
import DropdownMenu from './Menu';
const { Meta } = Card;
const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className="container">
        <h2>Dashboard</h2>
        <Button className="new" name='new'onClick={() => setIsDropdownOpen(!isDropdownOpen)}><b>+ New</b></Button>
        {isDropdownOpen && <DropdownMenu />}
        <div className="grid-container">
            <div className="grid-item1">
              <Card className="card2">
              <Meta title="Invoices" /><br></br>
              </Card>
            </div>
            <div className="grid-item2">
            <Card className="card2">
              <Meta title="Expenses" /><br></br>
              </Card>
            </div>
            <div class="grid-item-horizontal">
            <Card className="card1">
              <Meta title="Bank Accounts" /><br></br>
              </Card>
            </div>
            <div className="grid-item1">
            <Card className="card2">
              <Meta title="Profit & Loss" /><br></br>
              </Card>
            </div>
            <div className="grid-item2">
            <Card className="card2">
              <Meta title="Sales" /><br></br>
              </Card>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Dashboard;