import { configuration } from '../conf/index';
const baseUrl = `${configuration.backUrl}/api/login`;


export const Auth = {

    login: (username, password) => {

        if (!username || !password) return Promise.reject('Please fill all the fields');

        const body = JSON.stringify({ username, password });

        const conf = {
            method: "post",
            body: body,
            headers: {
                'Content-Type': 'application/json'
            },
        }

        return fetch(baseUrl, conf)
            .then((response) => response.json())
            .then((data) => data)
            .catch(error => error);
    }

}
