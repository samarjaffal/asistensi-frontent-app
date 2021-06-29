import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from "wouter";
import { Auth } from '../services/auth';
import { logged } from '../actions/authActions';

export const useAuth = () => {
    const [, setLocation] = useLocation();
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState({});
    /* const state = useSelector(state => state.auth); */
    const dispatch = useDispatch();

    useEffect(() => {
        isUserAuth();
        if (user) {
            dispatch(logged(user));
        }
        return () => { }
    }, [isAuth])

    const login = (username, password) => {
        return Auth.login(username, password)
            .then((user) => {
                console.log(user);
                if (user.status_code === "error") {
                    return Promise.reject(user);
                }
                window.localStorage.setItem('loggedUser', JSON.stringify(user));
                isUserAuth();
                dispatch(logged(user));
                setLocation("/users");
            })
            .catch(error => error);
    }

    const logout = () => {
        window.localStorage.removeItem('loggedUser');
        isUserAuth();
        setLocation('/login');
    }

    const isUserAuth = () => {
        let hasToken = false;
        const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
        if (loggedUser !== null) {
            hasToken = Boolean(loggedUser.hasOwnProperty('token'));
            setUser(loggedUser);
        }
        setIsAuth(Boolean(loggedUser) && hasToken);
        //console.log({ loggedUser });
        //return dispatch(logged(loggedUser));
    }

    return { login, logout, isAuth, isUserAuth };
}