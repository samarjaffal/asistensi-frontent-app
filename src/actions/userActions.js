import { users as userService } from '../services/user';
import { validateEmail } from '../utils/validateEmail';

export const listUsers = () => {
    return async (dispatch) => {
        try {
            const users = await userService.getAll();
            dispatch({
                type: '@users/list',
                payload: users
            })
        } catch (err) {
            console.log(err);
        }
    }
}


export const createUser = (user) => {
    return async (dispatch) => {
        try {

            if (!user.username || !user.email || !user.password) return Promise.reject('Please fill all the fields');
            if (!validateEmail(user.email)) return Promise.reject('Email is not valid');

            const newUser = await userService.create(user);
            dispatch({
                type: '@users/created',
                payload: newUser
            })
            return Promise.resolve(newUser);
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
}


export const updateUser = (id, user) => {
    return async (dispatch) => {
        try {
            const updatedUser = await userService.update(id, user);
            dispatch({
                type: '@users/updated',
                payload: updatedUser
            })
            return Promise.resolve(updatedUser);
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            await userService.delete(id);
            dispatch({
                type: '@users/deleted',
                payload: id
            })
        } catch (err) {
            console.log(err);
        }
    }
}