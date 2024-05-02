import { CREATE_STUDENT, GET_LIST_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, DETAIL_STUDENTS } from './types';
import * as studentService from '../service/studentService';

export const createStudentAction = (studentPayload) => async (dispatch) => {
    const res = await studentService.createStudent(studentPayload);
    dispatch({
        type: CREATE_STUDENT,
        payload: res,
    });
};

// return list student
export const getListStudentAction = () => async (dispatch) => {
    const res = await studentService.getListStudent();
    dispatch({
        type: GET_LIST_STUDENT,
        payload: res,
    });
};

// return student object
export const getDetailStudentAction = (id) => async (dispatch) => {
    const res = await studentService.getStudentById(id);

    dispatch({
        type: DETAIL_STUDENTS,
        payload: res,
    });
};
