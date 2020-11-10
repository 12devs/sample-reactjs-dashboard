import React from 'react';
import '../../styles/ToolsPanel.css';
import {Tooltip} from 'react-lightweight-tooltip';
import {tooltipStyle} from '../../configs/constants';


const ToolsPanel = () => (
    <div className="toolsPanel">
        <Tooltip
            content="Components"
            styles={tooltipStyle}
        >
            <button className="iconButton">
                <i className="material-icons md-light">build</i>
            </button>
        </Tooltip>

        <Tooltip
            content="Components"
            styles={tooltipStyle}
        >
            <button className="iconButton">
                <i className="material-icons md-light">notifications</i>
            </button>
        </Tooltip>
        <Tooltip
            content="Components"
            styles={tooltipStyle}
        >
            <button className="iconButton">
                <i className="material-icons md-light">star</i>
            </button>
        </Tooltip>
        <hr className="stretch"/>
        <Tooltip
            content="Components"
            styles={tooltipStyle}
        >
            <button className="iconButton">
                <i className="material-icons md-light">person</i>
            </button>
        </Tooltip>
        <Tooltip
            content="Components"
            styles={tooltipStyle}
        >
            <button className="iconButton">
                <i className="material-icons md-light">cached</i>
            </button>
        </Tooltip>
        <Tooltip
            content="Components"
            styles={tooltipStyle}
        >
            <button className="iconButton">
                <i className="material-icons md-light">help_outline</i>
            </button>
        </Tooltip>
        <hr className="stretch"/>
    </div>
);

export default ToolsPanel;
