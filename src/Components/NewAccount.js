import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Card, Input, Button } from 'antd';
import {Modal} from 'antd';
import './newAccount.css';

const { Meta } = Card;

function RegisterUser() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Perform registration logic here
  };
  
  const handleClick = () => {
    navigate('/details'); 
  };

  return (
    <div className="container">
      <Card className="card">
        <Meta title="New Account" /><br></br>
        {/* <h3>New Account</h3> */}
        <form onSubmit={onFinish}>
          <label htmlFor="Email">Email</label>
          <Input className="input" placeholder="Email" />

          <label htmlFor="Password">Password</label>
          <Input className="input" type="password" placeholder="Password" />

          <label htmlFor="Confirm Password">Confirm Password</label>
          <Input className="input" type="password" placeholder="Confirm Password" />

          <label htmlFor="Country">Country</label>
          <Input className="input" placeholder="Country" />

          <Button onClick={()=>navigate("/details")}className="button" type="primary" htmlType="submit">
            Proceed
          </Button>
        </form>
      </Card>
    </div>

    
  );
}

export default RegisterUser;