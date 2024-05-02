import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-type': 'application/json',
    },
});

export const get = async (path, options = {}) => {
    const responeData = await request.get(path, options);
    return responeData.data;
};
export const post = async (path, payload = {}) => {
    const responeData = await request.post(path, payload);
    return responeData.data;
};
export const updateRequest = async (path, payload = {}) => {
    const responeData = await request.put(path, payload);
    return responeData.data;
};
export const deleteRequest = async (path, payload = {}) => {
    const responeData = await request.delete(path, payload);
    return responeData.data;
};

export default request;
