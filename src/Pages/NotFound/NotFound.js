import React from 'react';
import error from '../../Images/not-found.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found container'>
            <img src={error} alt="" srcset="" />
        </div>
    );
};

export default NotFound;