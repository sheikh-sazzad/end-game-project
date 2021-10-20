import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import './SomeService.css';

const SomeServices = () => {
  const [services] = useServices();

  return (
    <div className='someService-section'>
      <h1>Our Services</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {services.map((service) => (
          <div className="col">
            <div class="card some-service">
              <img src={service.img} alt="" />
              <div class="card-body">
                <h5 class="card-title">{service.name}</h5>
                <p class="card-text">{service.description}</p>
              </div>
              <div>
                <Link to={`/booking/${service.id}`}>
                  <button className="btn btn-warning">
                    Book {service.name.toLowerCase()}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SomeServices;
