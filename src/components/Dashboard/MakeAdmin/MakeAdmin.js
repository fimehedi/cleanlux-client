import React, { useState } from 'react';

const MakeAdmin = () => {

    const [status, setStatus] = useState('');
    const [admin, setAdmin] = useState({
        email: ''
    });

    const handleOnChange = e => {
        setStatus('');
        const newAdmin = { ...admin };
        newAdmin.email = e.target.value;
        setAdmin(newAdmin);
    }

    const handleOnSubmit = e => {

        if (admin.email) {
            setStatus('Adding...');
            fetch('https://cleanlux.herokuapp.com/make-admin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(admin)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.isAdded) {
                        setAdmin({ email: '' });
                        alert('Admin Added Successfully!');
                        setStatus('Added')
                        e.target.reset();
                    }
                    else if (data.isAdmin) {
                        alert('User already in admin panel!');
                        setStatus('');
                    }
                    else {
                        alert('Something went wrong!');
                    }
                })
        }
        else {
            alert('All fields are required!');
        }

        e.preventDefault();
    }

    return (
        <div className="dashboard-body">
            <div className="dashboard-title">
                <h4 className="text-primary p-3 m-0">Make Admin</h4>
            </div>

            <div className="dashboard-content border-radius">
                <form className="d-flex" onSubmit={handleOnSubmit}>
                    <input onChange={handleOnChange} type="email" name="email" class="form-control w-50" placeholder="Email Address" />

                    <button type="submit" className="btn btn-primary">{status ? status : 'Add'}</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;