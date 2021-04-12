import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center mt-5">
                <h5 style={{ color: '#13c9db' }}>OUR SERVICES</h5>
                <h2 style={{ color: '#3e4659' }}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75  mt-5 pt-5">
                    {
                        servicesData.map(service => <ServiceDetails service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;