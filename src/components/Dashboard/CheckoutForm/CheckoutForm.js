import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CheckoutForm.css'
import { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const CheckoutForm = ({ service, billing_details, error, setError }) => {
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const { loggedInUser } = useContext(UserContext);

    const { serviceCost } = service;
    const [booking, setBooking] = useState({
        service: {},
        status: 'pending',
        paid: false,
        userEmail: '',
        billingDetails: {},
        cardBrand: '',
        paymentId: '',
    });

    const [process, setProcess] = useState(false);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        if (billing_details.name && billing_details.email && billing_details.phone) {
            setProcess(true);
            const cardElement = elements.getElement(CardElement);
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details

            });

            if (error) {
                setError(error)
                setProcess(false);
            } else {
                const newBooking = { ...booking };
                booking.service = service;
                booking.userEmail = loggedInUser.email;
                booking.paid = true;
                booking.billingDetails = paymentMethod.billing_details;
                booking.cardBrand = paymentMethod.card.brand;
                booking.paymentId = paymentMethod.id;
                setBooking(newBooking);

                fetch('https://cleanlux.herokuapp.com/add-booking', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(booking)
                })
                    .then(res => res.json())
                    .then(data => {
                        setProcess(false);
                        if (data.isAdded) {
                            history.push('/dashboard/booking-list');
                        }
                        else {
                            setError('Something went wrong!')
                        }
                    })
            }
        }
        else {
            setError({ message: 'Billing address are not complete!' })
        }
    };

    const handleChange = () => {
        setError({})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="card-border">
                    <CardElement onChange={handleChange} />
                </div>

                {error && <small id="passwordHelpBlock" class="form-text text-danger">
                    {error.message}
                </small>}
            </div>

            <button className="btn btn-primary" type="submit" disabled={!stripe}>
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                <span className="ml-2">{process ? 'Processing...' : `Pay $${serviceCost}`}</span>
            </button>
        </form>
    );
};

export default CheckoutForm;