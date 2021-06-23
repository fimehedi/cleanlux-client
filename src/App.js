import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Authentication from './components/Authentication/Authentication/Authentication';
import PrivateRoute from './components/Authentication/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';
import NotFound from './components/Shared/NotFound/NotFound';

export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Authentication />
                    </Route>
                    <PrivateRoute path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <Navbar />
                        <div className="pt-5 mt-5">
                            <NotFound code={404} msg={"Page Not Found!"} />
                        </div>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
