import { faEnvelope, faListAlt, faListUl, faPlus, faSignOutAlt, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { AdminContext } from '../Dashboard/Dashboard';
import './Sidebar.css'

const Sidebar = () => {
    const isAdmin = useContext(AdminContext);
    const { setLoggedInUser } = useContext(UserContext);
    return (
        <aside className="sidebar">

            <Link to="/">
                <h2 className="font-weight-bold pt-5 pl-5">
                    <span className="text-primary">CLEAN</span>
                    <span className="text-secondary">LUX</span>
                </h2>
            </Link>


            <ul className="sidebar-nav pt-5">
                <li>
                    <Link to="/dashboard/booking-list" ><FontAwesomeIcon icon={faListAlt} className="sidebar-icon" /><span>Booking List</span></Link>
                </li>

                {
                    isAdmin ?
                        <>
                            <li>
                                <Link to="/dashboard/add-service" ><FontAwesomeIcon icon={faPlus} className="sidebar-icon" /><span>Add Service</span></Link>
                            </li>

                            <li>
                                <Link to="/dashboard/make-admin" ><FontAwesomeIcon icon={faUserPlus} className="sidebar-icon" /><span>Make Admin</span></Link>
                            </li>

                            <li>
                                <Link to="/dashboard/all-admins" ><FontAwesomeIcon icon={faListUl} className="sidebar-icon" /><span>Admin List</span></Link>
                            </li>

                            <li>
                                <Link to="/dashboard/services" ><FontAwesomeIcon icon={faThLarge} className="sidebar-icon" /><span>Manage Services</span></Link>
                            </li>
                        </>
                        :
                        <li>
                            <Link to="/dashboard/review" ><FontAwesomeIcon icon={faEnvelope} className="sidebar-icon" /><span>Review</span></Link>
                        </li>
                }
                <li>
                    <Link to="/" onClick={() => setLoggedInUser({})}><FontAwesomeIcon icon={faSignOutAlt} className="sidebar-icon" /><span>Log Out</span></Link>
                </li>
            </ul>



        </aside>
    );
};

export default Sidebar;