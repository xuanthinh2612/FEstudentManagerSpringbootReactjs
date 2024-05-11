import {
    CREATE_STUDENT,
    GET_LIST_STUDENT,
    UPDATE_STUDENT,
    DELETE_STUDENT,
    DETAIL_STUDENTS,
    LOADING,
    FETCH_DATA_FAILURE,
} from './types';
import * as studentService from '../service/studentService';

export const createStudentAction = (studentPayload) => async (dispatch) => {
    dispatch(setLoadingStatusAction());
    try {
        const res = await studentService.createStudent(studentPayload);
        dispatch({
            type: CREATE_STUDENT,
            payload: res,
        });
    } catch (error) {
        dispatch(fetchDataFailureAction(error));
    }
};

export const updateStudentAction = (studentPayload) => async (dispatch) => {
    dispatch(setLoadingStatusAction());
    try {
        const res = await studentService.updateStudent(studentPayload);
        dispatch({
            type: UPDATE_STUDENT,
            payload: res,
        });
    } catch (error) {
        dispatch(fetchDataFailureAction(error));
    }
};

// return list student
export const getListStudentAction = () => async (dispatch) => {
    dispatch(setLoadingStatusAction());
    try {
        const res = await studentService.getListStudent();
        dispatch({
            type: GET_LIST_STUDENT,
            payload: res,
        });
    } catch (error) {
        dispatch(fetchDataFailureAction(error));
    }
};

// return student object
export const getDetailStudentAction = (id) => async (dispatch) => {
    dispatch(setLoadingStatusAction());
    try {
        const res = await studentService.getStudentById(id);

        dispatch({
            type: DETAIL_STUDENTS,
            payload: res,
        });
    } catch (error) {
        dispatch(fetchDataFailureAction(error));
    }
};

export const deleteStudentByIdAction = (id) => async (dispatch) => {
    dispatch(setLoadingStatusAction());
    try {
        await studentService.deleteStudentById(id);

        dispatch({
            type: DELETE_STUDENT,
            payload: id,
        });
    } catch (error) {
        dispatch(fetchDataFailureAction(error));
    }
};

export const setLoadingStatusAction = () => async (dispatch) => {
    dispatch({
        type: LOADING,
        payload: true,
    });
};
export const fetchDataFailureAction = (error) => async (dispatch) => {
    dispatch({
        type: FETCH_DATA_FAILURE,
        payload: error,
    });
};
