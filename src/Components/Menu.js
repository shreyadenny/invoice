import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card, Input, Button } from 'antd';
import './Menu.css'
import ClientForm from './newClient'
import InvoiceForm from './newInvoice';

function DropdownMenu() {
    return (
      <div className="dropdown-menu">
        {/* Dropdown menu content */}
        <ul className="dropdown-menu">
          <li><a className="menu-item" href="/newClient">
        New Client
          </a></li>
          <li><a className="menu-item" href="/newInvoice">
        New Invoice
          </a></li>
        </ul>
      </div>
    );
  }
  export default DropdownMenu;
