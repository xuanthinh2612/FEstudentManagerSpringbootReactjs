import * as httpRequest from '../utils/httpRequest';

export const login = async (usernameOrEmail, password) => {
    cleanUpSessionAndStorageData();
    try {
        const res = await httpRequest.post('/api/auth/login', { usernameOrEmail, password });
        return res;
    } catch (error) {
        console.log('login errors!');
    }
};

export const registerAPICall = async (registerParamObj) => {
    cleanUpSessionAndStorageData();
    try {
        const res = await httpRequest.post('/api/auth/register', registerParamObj);
        return res;
    } catch (error) {
        console.log('register errors!');
    }
};

export const storeToken = (token) => localStorage.setItem('token', token);

export const getToken = () => localStorage.getItem('token');

export const saveLoggedInUser = (username) => sessionStorage.setItem('authenticatedUser', username);

export const isUserLoggedIn = () => {
    const username = sessionStorage.getItem('authenticatedUser');

    if (username == null) {
        return false;
    } else {
        return true;
    }
};

export const getLoggedInUser = () => {
    const username = sessionStorage.getItem('authenticatedUser');
    return username;
};

export const cleanUpSessionAndStorageData = () => {
    localStorage.clear();
    sessionStorage.clear();
};
