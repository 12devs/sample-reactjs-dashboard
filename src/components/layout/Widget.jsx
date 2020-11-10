import React from 'react';
import PropTypes from 'prop-types';
import IFrameWidget from "./IFrameWidget";
import HTMLWidget from "./HTMLWidget";

class Widget extends React.Component {
    render() {
        const {type, url, snippet, title} = this.props;
        if (type === 'iframe') {
            return <IFrameWidget url={url} title={title}/>
        }
        else if (type === 'html') {
            return <HTMLWidget snippet={snippet}/>
        }
    }
}

Widget.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    snippet: PropTypes.string,
};

Widget.defaultProps = {
    url: '',
    title: 'default',
    type: '',
    snippet: '',
};

export default Widget;
