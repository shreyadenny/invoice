// ClientForm.js

import React from 'react';
import { useFormik } from 'formik';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card, Input, Button } from 'antd';
import './newClient.css'

const ClientForm = () => {
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
      <h3>Basic Information</h3>
      <form onSubmit={formik.handleSubmit}>
      <div className="form-grid">
      <div className="grid-item1">
      <label className = 'label' htmlFor="name">First Name:</label>
      </div>
      <div className='grid-item2'>
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='First Name'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      </div>
      <div className="grid-item3">
      <label className = 'label' htmlFor="name">Last Name:</label>
      </div>
      <div className="grid-item4">
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Last Name'
        onChange={formik.handleChange}
        value={formik.values.name}
      />   
      </div>
      <div className="grid-item1">
      <label className = 'label' htmlFor="name">Email:</label></div>
      <div className="grid-item2">
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Email'
        onChange={formik.handleChange}
        value={formik.values.name}
      /> 
      </div>
      <div className="grid-item3">
      <label className = 'label' htmlFor="name">Website URL:</label></div>
      <div className="grid-item4">
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Website URL'
        onChange={formik.handleChange}
        value={formik.values.name}
      /> 
      </div>
      <div className="grid-item1">
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
      </div>
      <div className="grid-item3">
      <label className = 'label' htmlFor="name">Language:</label></div>
      <div className="grid-item4">
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Language'
        onChange={formik.handleChange}
        value={formik.values.name}
      /> 
      </div>
      </div>
    </form>
    </div>
    <div className="subsection">
      <h3>Address</h3>
      <form onSubmit={formik.handleSubmit}>
      <input
        className='address'
        id="name"
        name="name"
        type="text"
        placeholder='Address Line 1'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <input
        className='address'
        id="name"
        name="name"
        type="text"
        placeholder='Address Line 2'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <div className="form-grid">
      <div className="grid-item1">
      <label className = 'label' htmlFor="name">Postal Code:</label>
      </div>
      <div className='grid-item2'>
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Postal Code'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      </div>
      <div className="grid-item3">
      <label className = 'label' htmlFor="name">City:</label>
      </div>
      <div className="grid-item4">
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='City'
        onChange={formik.handleChange}
        value={formik.values.name}
      />   
      </div>
      <div className="grid-item1">
      <label className = 'label' htmlFor="name">State:</label></div>
      <div className="grid-item2">
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='State'
        onChange={formik.handleChange}
        value={formik.values.name}
      /> 
      </div>
      <div className="grid-item3">
      <label className = 'label' htmlFor="name">Country:</label></div>
      <div className="grid-item4">
      <input
        className='input'
        id="name"
        name="name"
        type="text"
        placeholder='Country'
        onChange={formik.handleChange}
        value={formik.values.name}
      /> 
      </div>
      </div>
    </form>
    </div>
    </div>
  );
};

export default ClientForm;
