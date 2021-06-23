import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';
import { AdminContext } from '../../Dashboard/Dashboard/Dashboard';
import NotFound from '../../Shared/NotFound/NotFound';

const PrivateRoute = ({ isOnlyAdmin, children, ...rest }) => {
    const { loggedInUser } = useContext(UserContext);

    const isAdmin = useContext(AdminContext);
    return (
        <>
            {
                isOnlyAdmin ?
                    <Route
                        {...rest}
                        render={({ location }) =>
                            isAdmin
                                ?
                                children
                                :
                                <NotFound code={403} msg={"Unauthorized Access!"} />
                        }
                    />
                    :
                    <Route
                        {...rest}
                        render={({ location }) =>
                            loggedInUser.name
                                ?
                                children
                                :
                                <Redirect
                                    to={{
                                        pathname: '/login',
                                        state: { from: location }
                                    }}
                                />
                        }
                    />
            }
        </>

    );
};

export default PrivateRoute;