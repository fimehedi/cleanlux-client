import React from 'react';
import './ServiceCard.css';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

const ServiceCard = ({ service: { _id, imgUrl, title, description, serviceCost } }) => {

    const history = useHistory();

    return (
        <div className="col-md-4 text-center">
            <div className="border border-radius shadow service-card mb-3">
                <div className="imgContainer">
                    <img src={imgUrl} className="" alt="" />
                </div>

                <div className="px-4 pb-4">
                    <h3 className="py-4 text-primary">{title}</h3>
                    <p className="text-secondary-alt">{description}</p>
                    <h6 className="text-primary">Service Cost: ${serviceCost}</h6>
                    <button onClick={() => history.push('/dashboard/book/' + _id)} className="btn btn-primary my-2"><span className="mr-2">Book Now</span> <FontAwesomeIcon icon={faCalendarCheck} /></button>
                </div>

            </div>
        </div >
    );
};

export default ServiceCard;