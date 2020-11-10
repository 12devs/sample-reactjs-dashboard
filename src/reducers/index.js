import { combineReducers } from 'redux';
import layout from './layout';
import workspaces from './workspaces';
import activeWorkspaceId from './activeWorkspaceId';

const reducers = combineReducers({
    layout,
    workspaces,
    activeWorkspaceId,
});

export default reducers;
