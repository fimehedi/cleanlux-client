import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { UserContext } from "../../../App";

const Book = () => {

    const { loggedInUser } = useContext(UserContext);

    const { id } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch('https://cleanlux.herokuapp.com/service/' + id)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [id])

    const [billing_details, setBilling_details] = useState({
        name: loggedInUser.name,
        email: loggedInUser.email,
        phone: '',
    })


    const [error, setError] = useState({});

    const handleOnChange = e => {
        const newBooking = { ...billing_details };
        newBooking[e.target.name] = e.target.value;
        setBilling_details(newBooking);
        setError({});
    }


    const stripePromise = loadStripe("pk_test_51J3NveL8JUeJQiEEy9jomHblccG2RDT38O6dwyV5ppUF8lY1z4wV6zzFL7XDbh3hVjzIU9lA5HvmRe38m4Sa4WvP00YPNYehSB");

    return (
        <div className="dashboard-body">
            <div className="dashboard-title">
                <h4 className="text-primary p-3 m-0">Book A New Service</h4>
            </div>

            <div className="dashboard-content border-radius">

                <div class="form-group">
                    <input onChange={handleOnChange} value={billing_details.name} name="name" type="text" class="form-control" placeholder="Full Name" />
                </div>

                <div class="form-group">
                    <input onChange={handleOnChange} value={billing_details.email} name="email" type="email" class="form-control" placeholder="Email Address" />
                </div>

                <div class="form-group">
                    <input onChange={handleOnChange} value={billing_details.phone} name="phone" type="phone" class="form-control" placeholder="Phone Number" />
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Service Name" defaultValue={service.title} disabled />
                </div>


                <Elements stripe={stripePromise}>
                    <CheckoutForm service={service} billing_details={billing_details} error={error} setError={setError} />
                </Elements>
            </div>
        </div>
    );
};

export default Book;