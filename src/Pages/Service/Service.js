import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { _id, name, img, details } = service;

    return (



        <div className="col service">
            <div className="card ">
                <img src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-title">{details.slice(0, 180)}</p>
                </div>
                <div>
                    <Link to={`/placeorder/${_id}`}>
                        <button className='btn btn-warning'>Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>






    );
};


export default Service;