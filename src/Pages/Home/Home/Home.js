import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import SomeServices from '../SomeService/SomeServices';


const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <SomeServices></SomeServices>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;