import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
// import done2 from '../../Images/done2.gif';

const MyOrder = () => {
    const { user } = useAuth();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [modalShow, setModalShow] = useState(false);

    const [myOrder, setMyOrder] = useState([]);
    const [orderId, setOrdersId] = useState('');
    const handleShow = (_uid) => {
        setShow(true);
        setOrdersId(_uid);
    };

    useEffect(() => {
        fetch('https://spooky-spider-27611.herokuapp.com//AllOrder')
            .then((res) => res.json())
            .then((data) => setMyOrder(data));
    }, []);






    //Delete User 
    const handleDeleteOrder = id => {
        const url = `https://spooky-spider-27611.herokuapp.com/${orderId}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setModalShow(true)
                }

            })
        handleClose();

    }

    const UserOrder = myOrder.filter(order => order.userEmail === user.email)

    const handleUpdateData = () => {
        const remainingOrder = myOrder.filter(order => order._id !== orderId);
        setMyOrder(remainingOrder);
    }














    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Deleted Successfully
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-auto'>
                    <img src="" alt="" srcset="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Done</Button>
                </Modal.Footer>
            </Modal>
        );
    }







    return (
        <div className='container services-container'>
            <h1>My Orders: {UserOrder.length}</h1>

            {
                UserOrder.map(orderList => (
                    <div className='all-order-div'>
                        <div className='all-order-img'>
                            <img src={orderList.img} alt="" />
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">{orderList.name}</h5>
                            <p class="card-text">{orderList.details.slice(0, 120)}</p>
                            <h6>{orderList.userEmail}</h6>
                            <h6>{orderList.number}</h6>




                            <Button variant="danger" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { handleShow(orderList._id) }}>Delete Order
                            </Button>








                            <Modal show={show} onHide={handleClose} >
                                <Modal.Header closeButton>
                                    <Modal.Title>Confirm Delete ?</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Do You really want to delete these records? This process cannot be undone. </Modal.Body>
                                <Modal.Footer>


                                    <Button variant="secondary" onClick={() => handleClose()} >
                                        Close
                                    </Button>
                                    <Button variant="danger" onClick={() => { handleDeleteOrder(); }} >
                                        Delete
                                    </Button>
                                </Modal.Footer>
                            </Modal>



                            <>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => { setModalShow(false); handleUpdateData() }}
                                />
                            </>





                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default MyOrder;