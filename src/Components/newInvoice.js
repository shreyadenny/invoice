// ClientForm.js

import React from 'react';
import { useFormik } from 'formik';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card, Input, Button } from 'antd';
import './newInvoice.css'
const { Meta } = Card;

const InvoiceForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      contact: '',
    },
    onSubmit: values => {
      // Handle form submission, e.g., send data to API or store locally
      console.log(values);
      // Redirect to invoice creation page or any other desired page
      // history.push('/invoice-creation');
    },
  });

  return (
    <div className='container'>
      <Button className="save" name='new'><b>Save</b></Button>
    <div className="subsection">
      <h3>Invoice</h3>
      <form onSubmit={formik.handleSubmit}>
      <label className = 'label' htmlFor="description">Description:</label>
      <input
        className='address'
        id="name"
        name="name"
        type="text"
        placeholder='Add Description'
        onChange={formik.handleChange}
        value={formik.values.name}
      /><br></br>
      <div className='line'>
      <label className = 'label' htmlFor="name">Invoice No.:</label>
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Invoice No.'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
       <label className = 'label' htmlFor="name">Language:</label>
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Language'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
       <label className = 'label' htmlFor="name">Currency:</label>
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Currency'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      </div>
      <div className="form-grid">
      <div className="grid-item1">
      <label className = 'label' htmlFor="name">From:</label>
      </div>
      <div className='grid-item2'>
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='From'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      </div>
      <div className="grid-item3">
      <label className = 'label' htmlFor="name">Date:</label>
      </div>
      <div className="grid-item4">
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Date'
        onChange={formik.handleChange}
        value={formik.values.name}
      />   
      </div>
      <div className="grid-item1">
      <label className = 'label' htmlFor="name">To:</label></div>
      <div className="grid-item2">
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='To:'
        onChange={formik.handleChange}
        value={formik.values.name}
      /> 
      </div>
      <div className="grid-item3">
      <label className = 'label' htmlFor="name">Invoice Due:</label></div>
      <div className="grid-item4">
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Invoice Due'
        onChange={formik.handleChange}
        value={formik.values.name}
      /> 
      </div>
      {/* <div className="grid-item1">
      <label className = 'label' htmlFor="name">Currency</label></div>
      <div className="grid-item2">
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Currency'
        onChange={formik.handleChange}
        value={formik.values.name}
      /> 
      </div> */}
      <div className="grid-item3">
      <label className = 'label' htmlFor="name">Purchase Order:</label></div>
      <div className="grid-item4">
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Purchase Order'
        onChange={formik.handleChange}
        value={formik.values.name}
      /> 
      </div>
      </div>
      <h3>Description</h3><br></br>
      <input
        className='address'
        id="name"
        name="name"
        type="text"
        placeholder='Item Name & Description'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <div className='line'>
    <label className = 'label' htmlFor="name">Quantity:</label>
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Quantity'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
       <label className = 'label' htmlFor="name">Rate</label>
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Rate'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
       <label className = 'label' htmlFor="name">Amount:</label>
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Amount'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      </div>
    </form>
    </div>
    </div>
  );
};

export default InvoiceForm;
