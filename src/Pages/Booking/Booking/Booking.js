import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);


    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data));

    }, []);


    const exactService = service.filter(item => item.id === id);



    return (
        <div className='service-details'>


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={exactService[0]?.img} />
                <Card.Body>
                    <Card.Title>{exactService[0]?.name}</Card.Title>
                    <Card.Text>
                        {exactService[0]?.description.slice(0, 200)}
                    </Card.Text>
                    <Card.Title>${exactService[0]?.price}</Card.Title>
                    <div className='details-button'>
                        <Button variant="secondary" ><Link className='go-service' to='/services'>Go Services</Link></Button>
                        <Button variant="primary">Primary</Button>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Booking;