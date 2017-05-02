export function answerSelect(userAnswer) {
    return {
        type: 'SELECT_ANSWER',
        payload: userAnswer
    }
}

export function inputValue(userEmail) {
    return {
        type: 'USER_EMAIL',
        payload: userEmail
    }
}

export function answerId(userId) {
    return {
        type: 'USER_ID',
        payload: userId
    }
}

export function addRow(newRow) {
    return {
        type: 'NEW_ROW',
        payload: newRow
    }
}
