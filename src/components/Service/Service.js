import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {img, price, name, description} = service;
    return (
       <div className='service'>
         <div>
            <img src={img} alt="" />
           <div className='service-info'>
           <h4>{name}</h4>
            <h5>${price}</h5>
            <p>{description}</p>
           </div>
        </div>
      <Button className='info-btn' variant='info'><Link to='/checkout'>Service Details</Link></Button>
       </div>
    );
};

export default Service;