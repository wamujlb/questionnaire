import { combineReducers } from 'redux';
import questions from './questions';
import user from './user';
import submitAnswer from './submitAnswer';
import answersTable from './answersTable';

export default combineReducers({
    questions,
    user,
    submitAnswer,
    answersTable
})