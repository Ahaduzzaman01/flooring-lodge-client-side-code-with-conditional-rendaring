import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://infinite-waters-92433.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <section className='text-center py-5' style={{ backgroundColor: '#2278560d' }}>
            <div className='py-3'>
                <h2 style={{ color: 'dimGrey' }}>Our Awesome <span style={{ color: '#1a9664' }}>Services</span></h2>
            </div>

            <div className="row w-75 m-auto my-3">
                {
                    services.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
            </div>
        </section>
    );
};

export default Services;