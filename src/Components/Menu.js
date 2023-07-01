import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card, Input, Button } from 'antd';
import './Menu.css'
function DropdownMenu() {
    return (
      <div className="dropdown-menu">
        {/* Dropdown menu content */}
        <ul className="dropdown-menu">
          <li>New Client</li>
          <li>New Invoice</li>
        </ul>
      </div>
    );
  }
  export default DropdownMenu;
