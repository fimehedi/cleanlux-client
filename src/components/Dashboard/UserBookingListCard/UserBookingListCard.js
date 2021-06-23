import React from 'react';

const UserBookingListCard = ({ booking: { service, status } }) => {


    return (
        <div className="col-md-4">
            <div className="bg-white p-3 border-radius-alt shadow booking-card">
                <h5 className="text-primary">{service.title}</h5>
                <p className="text-secondary-alt my-3">{service.description}</p>
                <p className={`status ${status}`}>{status.replace( /([A-Z])/g, " $1")}</p>
            </div>
        </div>
    );
};

export default UserBookingListCard;