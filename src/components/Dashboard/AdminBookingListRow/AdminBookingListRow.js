import React, { useState } from 'react';

const AdminBookingListRow = ({ booking: { service, billingDetails, cardBrand, status, _id } }) => {

    const [serviceStatus, setServiceStatus] = useState(status);

    const handleChangeStatus = (id, status) => {
        fetch('https://cleanlux.herokuapp.com/change-booking-status/' + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.isUpdated) {
                    setServiceStatus(status)
                }
            })

    }

    return (
        <tr>
            <td>{billingDetails?.name}</td>
            <td className="text-center">{billingDetails?.email}</td>
            <td className="text-center">{service?.title}</td>
            <td className="text-center">{cardBrand}</td>
            <td className="text-right">
                <div className="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" className={`btn btn-sm dropdown-toggle text-capitalize
                            ${serviceStatus === 'pending' && 'btn-danger'}
                            ${serviceStatus === 'onGoing' && 'btn-info'}
                            ${serviceStatus === 'done' && 'btn-success'}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {serviceStatus.replace(/([A-Z])/g, " $1")}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">

                        <button onClick={() => handleChangeStatus(_id, 'pending')} className="dropdown-item btn btn-secondary">Pending</button>
                        <button onClick={() => handleChangeStatus(_id, 'onGoing')} className="dropdown-item btn btn-secondary">On Going</button>
                        <button onClick={() => handleChangeStatus(_id, 'done')} className="dropdown-item btn btn-secondary">Done</button>

                    </div>
                </div>
            </td>
        </tr>
    );
};

export default AdminBookingListRow;