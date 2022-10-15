import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../image/banner1.jpg';
import banner2 from '../../image/banner2.webp';
import banner3 from '../../image/banner3.jpg';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import './Home.css';


const Home = () => {
const [services, setServices] = useState([]);

useEffect(()=>{
  fetch('services.json')
  .then(res => res.json())
  .then(data =>setServices(data));
},[])


    return (
     
      <div>
       <div  className='banner'>
       <Carousel>
      <Carousel.Item>
        <img style={{height:'600px'}}
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'600px'}}
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'600px'}}
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </div>
    
   <div className='services'>
   {
      services.map(service =><Service 
      key={service.id}
      service={service}
      ></Service>)
    }
   </div>
     <Footer></Footer>
      </div>
    );
};

export default Home;