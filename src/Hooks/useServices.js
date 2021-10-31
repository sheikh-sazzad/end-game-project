import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://limitless-escarpment-09124.herokuapp.com/deliveryItems')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return [services];
};


export default useServices;
