
import React, { useEffect, useState } from 'react';
import ManageServiceItem from '../ManageServiceItem/ManageServiceItem';

const ManageServices = () => {

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

    const handleDelete = id => {
        fetch('https://cleanlux.herokuapp.com/delete-service/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.isDeleted) {
                    const restServices = services.filter(service => service._id !== id);
                    setServices(restServices);
                }
                else {
                    alert('Something went wrong!');
                }
            })

    }

    return (
        <div className="dashboard-body">
            <div className="dashboard-title">
                <h4 className="text-primary p-3 m-0">Manage Services</h4>
            </div>

            <div className="dashboard-content border-radius">
                {
                    services.length ?
                        <table class="table table-hover">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="col">Service Title</th>
                                    <th scope="col" className="text-center">Service Cost</th>
                                    <th scope="col" className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service => <ManageServiceItem key={services._id} service={service} handleDelete={handleDelete} />)
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
                                    <p className="text-muted text-center w-100">No services yet.</p>
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default ManageServices;