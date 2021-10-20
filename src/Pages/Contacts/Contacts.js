import React from 'react';
import { Button } from 'react-bootstrap';

const Contacts = () => {
    return (
        <div className="container contact-container">
            <div className='contract-form'>
                <h1>CONTACT US</h1>



                <div className='input-section'>
                    <input type="text" name="" id="" placeholder='Enter Your Name' />
                    <input type="email" name="" id="" placeholder='Enter Your Email' />
                    <textarea name="" id="" cols="10" rows="3" placeholder='Enter Your Message'></textarea>
                </div>

                <Button className='mt-5' variant="primary">Send</Button>







            </div>
        </div>
    );
};

export default Contacts;