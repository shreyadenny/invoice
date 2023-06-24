import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/dashboard">
        Dashboard
      </a>
      <a className="menu-item" href="/transactions">
        Transactions
      </a>
      <a className="menu-item" href="/expenses">
        Expenses
      </a>
      <a className="menu-item" href="/invoicing">
        Invoicing
      </a>
      <a className="menu-item" href="/projects">
        Projects
      </a>
      <a className="menu-item" href="/payroll">
        Payroll
      </a>
      <a className="menu-item" href="/reports">
        Reports
      </a>
      <a className="menu-item" href="/taxes">
        Taxes
      </a>
      <a className="menu-item" href="/timetracking">
        Time Tracking
      </a>
      <a className="menu-item" href="/clients">
        Clients
      </a>
    </Menu>
  );
};