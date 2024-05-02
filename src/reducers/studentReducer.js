import { CREATE_STUDENT, DETAIL_STUDENTS, UPDATE_STUDENT, DELETE_STUDENT, GET_LIST_STUDENT } from '../actions/types';

const initStudentStatate = { list: [], item: {}, isLoading: false };

function studentReducer(studentState = initStudentStatate, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_STUDENT:
            let updatedList;

            const index = studentState.list.findIndex((item) => item.id === payload.id);

            // If the item is found, update it in the list
            if (index !== -1) {
                updatedList = [...studentState.list];
                updatedList[index] = payload;
            }

            return {
                ...studentState,
                list: updatedList,
                item: payload,
            };
        //
        case GET_LIST_STUDENT:
            return { ...studentState, list: payload };
        case DETAIL_STUDENTS:
            return {
                ...studentState,
                item: payload,
            };
        //
        default:
            return studentState;
    }
}

export default studentReducer;