import { SELECT_ANSWER, USER_EMAIL, USER_ID } from '../constants/submitConst';

const initialState = {
    userId: 1,
    userEmail: '',
    userAnswer: ''
};

export default function submitAnswer(state = initialState, action) {

    switch (action.type) {
        case SELECT_ANSWER:
            return { ...state, userAnswer: action.payload };
        case USER_EMAIL:
            return { ...state, userEmail: action.payload};
        case USER_ID:
            return { ...state, userId: action.payload };
        default:
            return state;
    }

}