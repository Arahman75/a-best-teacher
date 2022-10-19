import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>Your service information : {serviceId}</h2>
            <Link to='/checkout'> <button className='btn btn-primary'>check booking info</button></Link>
        </div>
    );
};

export default ServiceDetail;