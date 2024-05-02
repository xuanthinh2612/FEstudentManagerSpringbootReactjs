import * as httpRequest from '../utils/httpRequest';

export const getClassList = async () => {
    try {
        const res = await httpRequest.get('/class/findAll');
        return res;
    } catch (error) {
        console.log('errors');
    }
};
