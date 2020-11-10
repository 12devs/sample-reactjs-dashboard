import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Header.css';
import WorkspacesList from './WorkspacesList';
import CreateButton from './CreateButton';

const Header = ({createWorkspace, changeWorkspace}) => {
    return (
        <div className="header">
            <WorkspacesList changeWorkspace={changeWorkspace}/>
            <CreateButton action={createWorkspace}/>
        </div>
    )
};

Header.propTypes = {
    workspaces: PropTypes.array,
    changeWorkspace: PropTypes.func,
};

Header.defaultProps = {
    workspaces: [],
};

export default Header;
