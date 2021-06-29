import React, { useEffect, useState } from 'react';
import { useLocation } from "wouter";
import { Layout } from '../../Layout/index';
import { Box } from '../../../components/Box/index';
import { Button } from '../../../components/Button/index';
import { Input } from '../../../components/Input/index';
import { useSelector, useDispatch } from 'react-redux';
import { users, setToken } from '../../../services/user';
import { updateUser, deleteUser } from '../../../actions/userActions';
import './style.css';

export const EditUser = ({ params }) => {
    const [user, setUser] = useState({});
    const [, setLocation] = useLocation();
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        setToken(auth.token);
        if (Object.keys(auth).length > 0) {
            users.get(params.id).then(user => {
                setUser(user || {});
            });
        }

    }, [auth]);

    const updateUserData = () => {
        dispatch(updateUser(params.id, user))
            .then((response) => {
                alert('user updated');
            })
            .catch(error => {
                console.log(error);
                setError(error);
            });
    }

    const deleteUserData = () => {
        dispatch(deleteUser(params.id))
            .then((response) => {
                setLocation("/users");
            })
            .catch(error => {
                console.log(error);
                setError(error);
            });
    }

    const handleChange = (e) => {
        let updatedUser = { ...user, [e.target.name]: e.target.value };
        setUser(updatedUser);
    }

    if (Object.keys(user).length === 0) return 'Loading...';

    return (
        <Layout title="Edit User">
            <div className="EditUserContainer">
                <Box>
                    <div className="UserInfoContainer">
                        <div><strong>Username:</strong> <span>{user.username}</span></div>
                        <div><strong>Email:</strong> <span>{user.email}</span></div>
                    </div>

                    <form>
                        {error && (
                            <div className="errors">
                                <p className="ErrorMessage">{error}</p>
                            </div>
                        )}

                        <Input type="text" placeholder="Name" name="name" value={user.name || ''} onChange={handleChange} />
                        <Input type="text" placeholder="LastName" name="lastname" value={user.lastname || ''} onChange={handleChange} />
                        <Input type="text" placeholder="Age" name="age" value={user.age || ''} onChange={handleChange} />

                        <div className="ButtonsContainer">
                            <Button onClick={updateUserData} text="Update User" color="purple" />
                            <Button onClick={deleteUserData} text="Delete User" />
                        </div>
                    </form>
                </Box>
            </div>
        </Layout>
    )
}