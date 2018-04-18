let defaultModalState = false;

export default (state = defaultModalState, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return !state;
        default:
            return state;
    };
};