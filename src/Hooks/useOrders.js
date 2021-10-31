import React from 'react';
import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://limitless-escarpment-09124.herokuapp.com/AllOrder')
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    return [orders, setOrders];
};

export default useOrders;