import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const HTMLWidget = ({snippet}) => (
    <div>
        <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(snippet)}}/>
    </div>
);

HTMLWidget.propTypes = {
    snippet: PropTypes.string,
};

HTMLWidget.defaultProps = {
    snippet: '<p>Nothing to show</p>',
};

export default HTMLWidget;
