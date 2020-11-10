export const changeLayout = layout => {
    return {
        type: 'CHANGE_LAYOUT',
        layout,
    };
};

export const changeWorkspaces = workspaces => {
    return {
        type: 'CHANGE_WORKSPACES',
        workspaces,
    };
};

export const addWorkspace = workspace => {
    return {
        type: 'ADD_WORKSPACE',
        workspace,
    };
};

export const changeActiveWS = id => {
    return {
        type: 'CHANGE_ACTIVE_WS',
        id,
    };
};
