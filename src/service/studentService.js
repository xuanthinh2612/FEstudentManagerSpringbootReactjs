import * as httpRequest from '../utils/httpRequest';

export const getListStudent = async () => {
    try {
        const res = await httpRequest.get('/student/list', {});
        return res;
    } catch (error) {
        // xu ly neu xay ra loi sau
        console.log(error);
    }
};

export const createStudent = async (studentPayload) => {
    try {
        const res = await httpRequest.post('/student/create', studentPayload);
        return res;
    } catch (error) {
        // xu ly neu xay ra loi sau
        console.log(error);
    }
};

export const updateStudent = async (studentPayload) => {
    try {
        const res = await httpRequest.updateRequest('/student/create', studentPayload);
        return res;
    } catch (error) {
        // xu ly neu xay ra loi sau
        console.log(error);
    }
};

export const getStudentById = async (id) => {
    try {
        const res = await httpRequest.get(`/student/getStudent/${id}`);
        return res;
    } catch (error) {
        // xu ly neu xay ra loi sau
        console.log(error);
    }
};

export const deleteStudentById = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`/student/delete/${id}`);
        return res;
    } catch (error) {
        // xu ly neu xay ra loi sau
        console.log(error);
    }
};
