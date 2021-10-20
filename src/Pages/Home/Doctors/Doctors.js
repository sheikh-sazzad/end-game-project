import React, { useEffect, useState } from 'react';
import './Doctor.css';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);




    return (
        <div className='doctors-container'>
            <h1>Our Doctors</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4'>

                {
                    doctors.map((doctor) => (
                        <div className='col doctor-div'>
                            <div className='doctors-img'>
                                <img src={doctor.img} alt="" />
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">{doctor.name}</h5>
                                <p class="card-text">{doctor.description}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};



export default Doctors;