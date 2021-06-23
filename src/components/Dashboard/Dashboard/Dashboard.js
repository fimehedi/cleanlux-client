import React, { createContext, useContext, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../../../App';
import PrivateRoute from '../../Authentication/PrivateRoute/PrivateRoute';
import NotFound from '../../Shared/NotFound/NotFound';
import AddService from '../AddService/AddService';
import AllAdmins from '../AllAdmns/AllAdmins';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import Review from '../Review/Review';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

export const AdminContext = createContext();

const Dashboard = () => {

    const { loggedInUser } = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://cleanlux.herokuapp.com/check-admin/?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setIsAdmin(data.isAdmin))
    }, [loggedInUser.email]);

    return (
        <AdminContext.Provider value={isAdmin}>
            <section className="d-flex dashboard">
                <Sidebar />
                <Switch>

                    <Route exact path="/dashboard/book/:id">
                        <Book />
                    </Route>

                    <Route exact path="/dashboard/booking-list">
                        <BookingList />
                    </Route>

                    <Route exact path="/dashboard/review">
                        <Review />
                    </Route>

                    <PrivateRoute isOnlyAdmin={true} exact path="/dashboard/add-service">
                        <AddService />
                    </PrivateRoute>

                    <PrivateRoute isOnlyAdmin={true} exact path="/dashboard/make-admin">
                        <MakeAdmin />
                    </PrivateRoute>

                    <PrivateRoute isOnlyAdmin={true} exact path="/dashboard/all-admins">
                        <AllAdmins />
                    </PrivateRoute>

                    <PrivateRoute isOnlyAdmin={true} exact path="/dashboard/services">
                        <ManageServices />
                    </PrivateRoute>

                    <Route exact path="/dashboard/">
                        <BookingList />
                    </Route>

                    <Route path="/dashboard/*">
                        <NotFound code={404} msg={"Page Not Found!"} />
                    </Route>
                </Switch>
            </section>
        </AdminContext.Provider>
    );
};

export default Dashboard;