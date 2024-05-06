import { CREATE_CLASS, DELETE_CLASS, GET_LIST_CLASS, DETAIL_CLASS, UPDATE_CLASS } from '../actions/types';

const initClassStatate = { list: [], item: {}, isLoading: false };

function classReducer(classState = initClassStatate, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_CLASS:
            classState.list.push(payload);
            return { ...classState, item: payload };
        case UPDATE_CLASS:
            let updatedList;

            const index = classState.list.findIndex((item) => item.id === payload.id);

            // If the item is found, update it in the list
            if (index !== -1) {
                updatedList = [...classState.list];
                updatedList[index] = payload;
            }

            return {
                ...classState,
                list: updatedList,
                item: payload,
            };

        case GET_LIST_CLASS:
            return { ...classState, list: payload };
        case DETAIL_CLASS:
            return { ...classState, item: payload };
        case DELETE_CLASS:
            const updatedClassList = classState.list.filter((e) => e.id !== payload);
            return { ...classState, list: updatedClassList, item: null };

        default:
            return classState;
    }
}

export default classReducer;
