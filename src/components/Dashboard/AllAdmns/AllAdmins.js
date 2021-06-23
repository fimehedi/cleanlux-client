import React, { useEffect, useState } from 'react';

const AllAdmins = () => {

    const [loading, setLoading] = useState(true);
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        fetch('https://cleanlux.herokuapp.com/all-admins')
            .then(res => res.json())
            .then(data => {
                setAdmins(data);
                setLoading(false);
            })
    }, [])

    console.log(admins)

    return (
        <div className="dashboard-body">
            <div className="dashboard-title">
                <h4 className="text-primary p-3 m-0">List of Admin</h4>
            </div>

            <div className="dashboard-content border-radius">
                <ul class="list-group">
                    {
                        admins.length ?

                            admins.map(admin => <li class="list-group-item">{admin.email}</li>)
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
                                        <p className="text-muted text-center w-100">No Admin yet.</p>
                                }
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default AllAdmins;