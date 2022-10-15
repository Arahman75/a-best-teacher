import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {img, price, name, description} = service;
    return (
       <div className='service'>
         <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>${price}</h5>
            <p>{description}</p>
        </div>
        <button>Service Details</button>
       </div>
    );
};

export default Service;