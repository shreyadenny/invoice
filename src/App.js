import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Card, Input, Button } from 'antd';
import {Modal} from 'antd';
import NewAccount from './Components/NewAccount';
import Details from './Components/Details';
import './App.css';
import Dashboard from './Components/Dashboard';
import Transactions from './Components/Transactions';
import Expenses from './Components/Expenses';
import Invoicing from './Components/Invoicing';
import Projects from './Components/Projects';
import Payroll from './Components/Payroll';
import Reports from './Components/Reports';
import Taxes from './Components/Taxes';
import Timetracking from './Components/Timetracking';
import Clients from './Components/Clients';
import ClientForm from './Components/newClient';
import InvoiceForm from './Components/newInvoice';

const { Meta } = Card;

function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
  };


  return (
    <div className="container">
      <Card className="card">
        <Meta title="Login" /><br></br>
        <form onSubmit={handleLogin}>
          <Input className="input" placeholder="Email" />
          <Input className="input" type="password" placeholder="Password" />
          <Button onClick={()=>navigate("/dashboard")} className="button" type="primary" htmlType="submit">
            Log In
          </Button>
          <Link to="/newAccount">Create Account</Link>
        </form>
      </Card>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/NewAccount" element={<NewAccount/>}/>
        <Route path="/Details" element={<Details/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Transactions" element={<Transactions/>}/>
        <Route path="/Invoicing" element={<Invoicing/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Payroll" element={<Payroll/>}/>
        <Route path="/Reports" element={<Reports/>}/>
        <Route path="/Taxes" element={<Taxes/>}/>
        <Route path="/Expenses" element={<Expenses/>}/>
        <Route path="/Timetracking" element={<Timetracking/>}/>
        <Route path="/Clients" element={<Clients/>}/>
        <Route path="/newClient" element={<ClientForm/>}/>
        <Route path="/newInvoice" element={<InvoiceForm/>}/>
        {/* Add additional routes and components for other pages */}
      </Routes>
    </Router>

  );
}

export default App;
