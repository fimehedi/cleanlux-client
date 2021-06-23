import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import itemImg from './item.png'

const Testimonial = () => {

    const [loading, setLoading] = useState(true);
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('https://cleanlux.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setTestimonial(data);
                setLoading(false);
            })
    }, [])

    return (
        <section className="container" id="testimonial">
            <div className="text-center my-5 pt-5">
                <img src={itemImg} alt="" />
                <h2 className="font-weight-bold text-primary text-uppercase my-4">What’s Client’s Say <br /> About Us</h2>
            </div>
            <div className="row my-5 py-3">
                {
                    testimonial.length ?
                        testimonial.map(testimonial => <TestimonialCard key={testimonial._id} testimonial={testimonial} />)
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
                                    <p className="text-muted text-center w-100">No testimonial yet.</p>
                            }
                        </>
                }
            </div >
        </section >
    );
};

export default Testimonial;