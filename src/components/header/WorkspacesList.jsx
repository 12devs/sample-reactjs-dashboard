import React from 'react';
import {connect} from 'react-redux';
import WorkspaceButton from './WorkspaceButton';

const WorkspacesList = ({workspaces, changeWorkspace}) => (
    <div>
        {workspaces.length > 0 &&
        workspaces.map(
            (ws) =>
                (<WorkspaceButton key={ws.id} id={ws.id} title={ws.title} isActive={ws.is_active}
                                  onClick={changeWorkspace}/>)
        )}
    </div>
);

const mapStateToProps = (state) => ({workspaces: state.workspaces});

export default connect(mapStateToProps)(WorkspacesList);
