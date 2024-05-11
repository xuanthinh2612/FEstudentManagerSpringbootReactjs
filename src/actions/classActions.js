import * as classService from '../service/classService';
import { CREATE_CLASS, DELETE_CLASS, GET_LIST_CLASS, DETAIL_CLASS, UPDATE_CLASS, LOADING } from '../actions/types';

export const createClassAction = (classPayload) => async (dispatch) => {
    const res = await classService.createClass(classPayload);

    dispatch({
        type: CREATE_CLASS,
        payload: res,
    });
};

export const updateClassAction = (classPayload) => async (dispatch) => {
    const res = await classService.updateClass(classPayload);

    dispatch({
        type: UPDATE_CLASS,
        payload: res,
    });
};

export const getDetailClassAction = (classPayload) => async (dispatch) => {
    const res = await classService.getClassById(classPayload);

    dispatch({
        type: DETAIL_CLASS,
        payload: res,
    });
};

export const getListClassAction = () => async (dispatch) => {
    const res = await classService.getClassList();
    dispatch({
        type: GET_LIST_CLASS,
        payload: res,
    });
};

export const deleteClassAction = (classId) => async (dispatch) => {
    await classService.deleteClassById(classId);

    dispatch({
        type: DELETE_CLASS,
        payload: classId,
    });
};
export const setLoadingStatusAction = (status) => async (dispatch) => {
    dispatch({
        type: LOADING,
        payload: status,
    });
};
