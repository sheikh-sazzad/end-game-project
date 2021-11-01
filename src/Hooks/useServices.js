import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://spooky-spider-27611.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return [services];
};


export default useServices;
