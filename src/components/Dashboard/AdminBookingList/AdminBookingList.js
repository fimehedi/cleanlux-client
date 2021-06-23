import React, { useEffect, useState } from 'react';
import AdminBookingListRow from '../AdminBookingListRow/AdminBookingListRow';

const AdminBookingList = () => {

    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://cleanlux.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                setLoading(false);
            })
    }, [])

    return (
        <>
            {
                bookings.length ?
                    <table class="table table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">Name</th>
                                <th scope="col" className="text-center">Email</th>
                                <th scope="col" className="text-center">Service</th>
                                <th scope="col" className="text-center">Card</th>
                                <th scope="col" className="text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <AdminBookingListRow key={booking._id} booking={booking} />)
                            }
                        </tbody>
                    </table>
                    :
                    <>
                        {
                            loading ?
                                <div className="text-center w-100">
                                    <div className="spinner-border text-primary" role="status" >
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                                :
                                <p className="text-muted text-center w-100">No Bookings yet.</p>
                        }
                    </>
            }
        </>
    );
};

export default AdminBookingList;