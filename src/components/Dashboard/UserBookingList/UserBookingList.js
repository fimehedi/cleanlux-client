import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import UserBookingListCard from '../UserBookingListCard/UserBookingListCard';

const UserBookingList = () => {

    const { loggedInUser } = useContext(UserContext);

    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://cleanlux.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                setLoading(false);
            })
    }, [loggedInUser.email])

    return (
        <div className="row">
            {
                bookings.length ?
                    bookings.map(booking => <UserBookingListCard key={booking._id} booking={booking} />)
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
        </div>
    );
};

export default UserBookingList;