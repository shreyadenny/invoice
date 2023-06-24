import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Card, Input, Button } from 'antd';
import {Modal} from 'antd';
import './Details.css'

const { Meta } = Card;

function GetDetails() {
  const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Perform registration logic here
      };
  return (
    <div className="container">
    <Card className="card">
        <Meta title="Details" /><br></br>
        {/* <h3>New Account</h3> */}
        <form onSubmit={onFinish}>
          <label htmlFor="First Name">First Name</label>
          <Input className="input" placeholder="First Name" />

          <label htmlFor="Last Name">Last Name</label>
          <Input className="input" placeholder="Last Name" />

          <label htmlFor="Address">Address</label>
          <Input className="input" placeholder="Address" />

          <label htmlFor="Postal Code">Postal Code</label>
          <Input className="input" placeholder="Postal Code" />

          <label htmlFor="City">City</label>
          <Input className="input" placeholder="City" />

          <Button onClick={()=>navigate("/dashboard")} className="button" type="primary" htmlType="submit">
            Sign Up
          </Button>
        </form>
      </Card>
      </div>
  );
}

export default GetDetails;