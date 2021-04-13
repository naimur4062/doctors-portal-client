import React from 'react';
import img from '../../../images/doctor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({doctor}) => {
    return (
        <div className="col-xl-3 col-md-4 col-sm-6 col-12 text-center">
            { doctor.image ? <img className="img-fluid mb-3" style={{ height: '200px'}} src={`data:image/png;base64,${doctor.image.img}`} />
            :
                <img className="img-fluid mb-3" style={{ height: '200px'}} src={`http://localhost:5000/${doctor.img}`} alt=""/>
            }
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;