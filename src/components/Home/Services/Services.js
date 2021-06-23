import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import itemImg from './images/item.png';
import './Services.css'

const Services = () => {

    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://cleanlux.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [])

    return (
        <section className="py-5 service-container">
            <div className="container" id="services">
                <div className="text-center mb-5">
                    <img src={itemImg} alt="" />
                    <h2 className="font-weight-bold text-primary text-uppercase my-4">Cleaning Services</h2>
                    <p className="text-secondary">Perspiciatis unde omnis iste natus error sit voluptatem accusantium dol oremque laudantium, totam remeaque ipsa</p>
                </div>

                <div className="row my-5 py-3">
                    {
                        services.length ?
                            services.map(service => <ServiceCard key={service._id} service={service} />)
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
                                        <p className="text-muted text-center w-100">No services yet.</p>
                                }
                            </>
                    }
                </div>
            </div>

        </section >
    );
};

export default Services;