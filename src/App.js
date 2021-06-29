import React, { useEffect } from 'react';
import { Route, Switch } from "wouter";
import { useSelector } from 'react-redux';
import { Home } from './pages/Home/index';
import { Users } from './pages/Users/index';
import { EditUser } from './pages/Users/EditUser/index';
import { AddUser } from './pages/Users/AddUser/index';
import { Login } from './pages/Login/index';
import { useAuth } from './hooks/useAuth';

function App() {
    const state = useSelector(state => state.auth);
    const { isAuth, isUserAuth } = useAuth();

    useEffect(() => {
        isUserAuth();
    }, [state, isAuth, isUserAuth]);


    return <div className="App">
        <div className="AppContainer">
            {
                isAuth ? (
                    <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/users" component={Users} />
                        <Route path="/add/users" component={AddUser} />
                        <Route path="/users/:id" component={EditUser} />
                        <Route>
                            {(params) => <div>404, Sorry the page {params.rest} does not exist!</div>}
                        </Route>
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route>
                            {(params) => <div>404, Sorry the page {params.rest} does not exist!</div>}
                        </Route>
                    </Switch>
                )
            }

        </div>
    </div>
}

export default App;
