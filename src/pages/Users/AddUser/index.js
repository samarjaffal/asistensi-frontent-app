import React, { useState, useEffect } from 'react';
import { useLocation } from "wouter";
import { Layout } from '../../Layout/index';
import { Box } from '../../../components/Box/index';
import { Button } from '../../../components/Button/index';
import { Input } from '../../../components/Input/index';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../../services/user';
import { createUser } from '../../../actions/userActions';

export const AddUser = () => {
    const [, setLocation] = useLocation();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [error, setError] = useState('');

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        setToken(auth.token);
        return () => { }
    }, [auth]);


    const addUser = () => {
        dispatch(createUser({ username, password, email }))
            .then((response) => {
                console.log({ response });
                setError('');
                setLocation('/users');
            })
            .catch(error => {
                console.error(error);
                setError(error);
            });
    }


    return (
        <Layout title="Add User">
            <div className="AddUserContainerr">
                <Box>
                    <form>
                        {error && (
                            <div className="errors">
                                <p className="ErrorMessage">{error}</p>
                            </div>
                        )}
                        <Input type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button onClick={addUser} color="purple" text="Add User" />
                    </form>
                </Box>
            </div>

        </Layout>

    )
}