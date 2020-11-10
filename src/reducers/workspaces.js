const workspaces = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_WORKSPACES':
            return action.workspaces;
        case 'ADD_WORKSPACE':
            return [...state, action.workspace];
        default:
            return state;
    }
};

export default workspaces;
