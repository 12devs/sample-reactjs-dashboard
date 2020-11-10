import React from 'react';
import {connect} from 'react-redux';
import Widget from '../components/layout/Widget';
import GoldenLayout from 'golden-layout';
import '../styles/LayoutContainer.css';
import {SERVER_URL} from '../configs/constants';

class LayoutContainer extends React.Component {

    constructor(props) {
        super(props);
        this.containerForGoldenLayout = null;
    };

    createLayout = (config, container, componentsNames) => {
        setTimeout(() => {
            this.layout = new GoldenLayout(config, container);
            componentsNames.forEach((componentName) => {
                this.layout.registerComponent(componentName, Widget)
            });
            this.layout.init();
            this.layout.on('stateChanged', () => {
                this.modifiedLA = this.layout.toConfig()
            })
        })
    };

    updateLayout = (layoutId) => {
        fetch(`${SERVER_URL}/updateLayout`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                activeWorkspaceId: layoutId,
                content: this.modifiedLA.content,
            }),
        });
    };

    getNames = (layoutContent) => {
        let componentsNames = [];
        let getAllComponentsNames = (content) => {
            for (let i = 0; i < content.length; i++) {
                if (content[i].hasOwnProperty('content')) {
                    getAllComponentsNames(content[i].content);
                }
                else if (content[i].hasOwnProperty('component')) {
                    componentsNames = [...componentsNames, content[i].component];
                }
            }
        };
        getAllComponentsNames(layoutContent.content);
        return componentsNames;
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.activeWorkspaceId.current !== this.props.activeWorkspaceId.current) {
            if (this.layout && this.layout.isInitialised) {
                if (nextProps.activeWorkspaceId.prev) {
                    this.updateLayout(nextProps.activeWorkspaceId.prev);
                }
                this.layout.destroy();
            }
            const componentsNames = this.getNames(nextProps.layout);
            this.createLayout(nextProps.layout, this.containerForGoldenLayout, componentsNames);
        }
    }

    render() {
        return (
            <div
                className="layoutContainer"
                ref={(ref) => {
                    this.containerForGoldenLayout = ref
                }}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        layout: state.layout,
        activeWorkspaceId: state.activeWorkspaceId,
    }
};

export default connect(mapStateToProps)(LayoutContainer);
