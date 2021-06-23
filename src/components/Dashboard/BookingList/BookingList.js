import React, { useContext } from 'react';
import AdminBookingList from '../AdminBookingList/AdminBookingList';
import { AdminContext } from '../Dashboard/Dashboard';
import UserBookingList from '../UserBookingList/UserBookingList';
import './BookingList.css'

const BookingList = () => {

    const isAdmin = useContext(AdminContext);

    return (
        <div className="dashboard-body">
            <div className="dashboard-title">
                <h4 className="text-primary p-3 m-0">Booking List</h4>
            </div>

            <div className="dashboard-content border-radius">
                {
                    isAdmin ? <AdminBookingList /> : <UserBookingList />
                }
            </div>
        </div>
    );
};

export default BookingList;