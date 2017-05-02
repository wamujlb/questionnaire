import { NEW_ROW } from '../constants/submitConst';

const initialState = {
    rows: []
};

export default function answersTable(state = initialState, action) {

    switch (action.type) {
        case NEW_ROW:
            return { ...state, rows: state.rows.concat(action.payload) };
        default:
            return state;
    }

}