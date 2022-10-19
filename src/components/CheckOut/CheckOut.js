import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CheckOut.css';

const CheckOut = () => {
    return (
        <div className="container">
           <div className='field'>
           <div className='checkout-info'>
            <h2>Please CheckOut Your Service.</h2>
           <Form>
      <Form.Group className="mb-3">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="address" required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" required/>
      </Form.Group>
      <Button variant="primary" type="submit">
       Submit
      </Button>
      {/* <p>Are you new user? <Link to="/register">Please Register</Link></p>
      {
        loading && <p>Loading....</p>
      }
      <p style={{color:'red'}}>{error?.message}</p>
      <Button variant="primary" type="submit">
        Login
      </Button> */}
    </Form>
    
        </div>

           </div>
          
        </div>
    );
};

export default CheckOut;