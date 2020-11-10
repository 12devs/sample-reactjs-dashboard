import React from 'react';
import '../../styles/CreateButton.css';

const CreateButton = ({action}) => (
    <button className="createButton" onClick={action}>
        <i className="material-icons md-light">add_circle_outline</i>
    </button>
);

export default CreateButton;
