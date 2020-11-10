import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/WorkspaceButton.css';

let workspaceCounter = 1;

const WorkspaceButton = ({id, title, isActive, onClick}) => (
    <button className={isActive ? 'activeBtn' : 'btn'} disabled={isActive} onClick={() => onClick(id)}>{title}</button>
)

WorkspaceButton.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
};

WorkspaceButton.defaultProps = {
    id: 0,
    title: `Workspace ${workspaceCounter++}`,
    isActive: false,
    onClick: () => console.log('No onClick function provided'),
};

export default WorkspaceButton;
