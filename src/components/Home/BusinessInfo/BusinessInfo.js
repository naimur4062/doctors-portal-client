import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary',
    },
    {
        title: 'Visit our location',
        description: 'Brooklyn, NY 10000, USA',
        icon: faMapMarker,
        background: 'dark',
    },
    {
        title: 'Call us now',
        description: '+156789045',
        icon: faPhone,
        background: 'primary',
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div  className="row w-75">
                {
                    infosData.map(info => <InfoCard info={info} />)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;