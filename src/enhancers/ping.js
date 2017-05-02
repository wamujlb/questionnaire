export const ping = store => next => action => {
    console.log('Action type: ' + action.type + ' - Action Payload: ' + action.payload);
    return next(action);
};