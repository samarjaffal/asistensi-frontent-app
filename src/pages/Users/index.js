import React, { useEffect } from 'react';
import { useLocation, Link } from "wouter";
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { setToken } from '../../services/user';
import { listUsers } from '../../actions/userActions';
import { Box } from '../../components/Box/index';
import { Button } from '../../components/Button/index';
import { Layout } from '../Layout/index';
import './style.css';

export const Users = () => {
    const [, setLocation] = useLocation();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const users = useSelector(state => state.users);
    const { logout } = useAuth();

    useEffect(() => {
        setToken(auth.token);
        if (Object.keys(auth).length > 0) {
            dispatch(listUsers());
        }
    }, [auth]);


    const goToCreateUser = () => {
        setLocation('/add/users')
    }

    return (

        <Layout title="List of users">
            <Box>
                <div className="UserList">
                    <div className="UserListHeaderColumns">
                        <div className="ColumnUsername"><strong>Username</strong></div>
                        <div className="ColumnEmail"><strong>Email</strong></div>
                    </div>
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                <Link href={`/users/${user.id}`}>
                                    <div className="row">
                                        <div className="ColumnUsername">{user.username}</div>
                                        <div className="ColumnEmail">{user.email}</div>
                                    </div>
                                </Link>

                            </li>
                        ))}

                    </ul>
                </div>
            </Box>
            <div className="UserListButtonsContainer">
                <Button onClick={goToCreateUser} color="purple" text="Add User" />
            </div>
        </Layout>
    )
}