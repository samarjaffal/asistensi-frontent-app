import { configuration } from '../conf/index';


const baseUrl = `${configuration.backUrl}/api/users`;

let token = "";

export const setToken = (_token) => token = _token;

const fetchConf = (token) => ({
    method: 'get',
    withCredentials: true,
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
})

export const users = {


    getAll: () => {

        const conf = {
            method: 'get',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }

        return fetch(baseUrl, conf)
            .then((response) => response.json())
            .then((data) => data)
            .catch(error => console.error(error));
    },


    get: (id) => {
        if (typeof id === 'undefined' || id === null) return Promise.reject('Not id provided');

        const url = `${baseUrl}/${id}`
        const conf = {
            method: 'get',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }

        return fetch(url, conf)
            .then((response) => response.json())
            .then((data) => data)
            .catch(error => console.error(error));
    },

    create: (user) => {

        if (typeof user === 'undefined' || user === null) return Promise.reject('Error creating a user');

        const conf = {
            ...fetchConf(token),
            method: 'post',
            body: JSON.stringify(user)
        }

        return fetch(baseUrl, conf)
            .then((response) => response.json())
            .then((data) => data)
            .catch(error => console.error(error));

    },

    update: (id, user) => {
        if (typeof id === 'undefined' || id === null) return Promise.reject('Not id provided');

        const url = `${baseUrl}/${id}`;

        const conf = {
            ...fetchConf(token),
            method: 'put',
            body: JSON.stringify(user)
        }

        return fetch(url, conf)
            .then((response) => response.json())
            .then((data) => data)
            .catch(error => console.error(error));
    },

    delete: (id) => {
        if (typeof id === 'undefined' || id === null) return Promise.reject('Not id provided');

        const url = `${baseUrl}/${id}`;

        const conf = {
            ...fetchConf(token),
            method: 'delete',
        }

        return fetch(url, conf)
            .then((response) => response)
            .catch(error => console.error(error));
    }


}
