import * as httpRequest from '../utils/httpRequest';

export const getClassList = async () => {
    try {
        const res = await httpRequest.get('/class/findAll');
        return res;
    } catch (error) {
        console.log('errors');
    }
};

export const createClass = async (classPayload) => {
    try {
        const res = await httpRequest.post('/class/create', classPayload);
        return res;
    } catch (error) {
        // xu ly neu xay ra loi sau
        console.log(error);
    }
};

export const updateClass = async (classPayload) => {
    try {
        const res = await httpRequest.post('/class/update', classPayload);
        return res;
    } catch (error) {
        // xu ly neu xay ra loi sau
        console.log(error);
    }
};

export const getClassById = async (id) => {
    try {
        const res = await httpRequest.get(`/class/getClass/${id}`);
        return res;
    } catch (error) {
        // xu ly neu xay ra loi sau
        console.log(error);
    }
};

export const deleteClassById = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`/class/delete/${id}`);
        return res;
    } catch (error) {
        // xu ly neu xay ra loi sau
        console.log(error);
    }
};
