import React from 'react';
import PropTypes from 'prop-types';

const IFrameWidget = ({url, title}) => (
    <iframe src={url} title={title}/>
);

IFrameWidget.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
};

IFrameWidget.defaultProps = {
    url: '',
    title: 'default',
};

export default IFrameWidget;
