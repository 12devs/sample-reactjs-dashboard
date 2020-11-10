const defaultState = {
    current: null,
    prev: null,
};

const activeWorkspaceId = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_ACTIVE_WS':
            return {
                current: action.id,
                prev: state.current,
            };
        default:
            return state;
    }
};

export default activeWorkspaceId;
