import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Layout } from '../../pages/Layout/index';
import { Box } from '../Box/index';
import { Input } from '../Input/index';
import { Button } from '../Button/index';

export const LoginForm = () => {
    const [username, setUsername] = useState("@someuser");
    const [password, setPassword] = useState("123456");
    const [error, setError] = useState('');

    const { login } = useAuth();

    useEffect(() => {
        return () => { }
    }, [])

    const handleLogin = () => {
        setError('');
        login(username, password)
            .then((response) => {
                if (response.status_code === "error") {
                    setError(response.status_msg);
                }
            })
            .catch((error) => setError(error));
    }

    return (
        <Layout title="Login">
            <Box>
                <form>
                    {error && (
                        <div className="errors">
                            <p className="ErrorMessage">{error}</p>
                        </div>
                    )}
                    <div>
                        <Input type="text" placeholder="@username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <Input type="password" name="password" placeholder="123456" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button text="Sign in" color="purple" onClick={handleLogin} />
                </form>
            </Box>
        </Layout>
    )
}
