import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { id, name, img, price } = service;




  return (

    <div className="col service">
      <div className="card ">
        <img src={img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-title">${price}</h5>
        </div>
        <div>
          <Link to={`/booking/${id}`}>
            <button className='btn btn-warning'>Book surgery</button>
          </Link>
        </div>
      </div>
    </div>



  );
};

export default Service;