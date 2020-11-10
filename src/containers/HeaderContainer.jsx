import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from '../components/header/Header';
import {SERVER_URL} from '../configs/constants';
import {changeLayout, changeWorkspaces, addWorkspace, changeActiveWS} from '../actions';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.getWorkspaces()
            .then(()=> {
                this.props.changeActiveWS(this.props.workspaces.find((ws) => ws.is_active).id);
            });
    };

    getWorkspaces = () => {
        return fetch(`${SERVER_URL}/workspacesWithActiveLayout/${this.props.match.params.screen}`)
            .then(response => response.json())
            .then(data => {
                if (!data.workspaces) {
                    this.props.history.push('/');
                }
                else {
                    const workspaces = data.workspaces.sort((a, b) => a.id > b.id);
                    this.props.changeWorkspaces(workspaces);
                    this.props.changeLayout(data.layout);
                }
            });
    };

    changeWorkspace = (id) => {
        fetch(`${SERVER_URL}/changeWorkspace`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ws_id_to_activate: id,
            })
        })
            .then(response => response.json())
            .then((layout) => {
                this.props.changeLayout(layout);
                this.getWorkspaces();
                this.props.changeActiveWS(id);
            });
    };

    createWorkspace = () => {
        const screenPosition = this.props.match.params.screen;
        console.log('work');
        fetch(`${SERVER_URL}/addWorkspace`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'new',
                screen: screenPosition,
            }),
        })
            .then(response => response.json())
            .then((ws) => {
                this.props.addWorkspace(ws);
            });
    };

    render() {
        return <Header createWorkspace={this.createWorkspace} changeWorkspace={this.changeWorkspace}/>
    }
}

const mapStateToProps = (state) => {
    return {
        workspaces: state.workspaces,
    }
};

export default withRouter(
    connect(
        mapStateToProps,
        {
            changeLayout,
            changeWorkspaces,
            addWorkspace,
            changeActiveWS,
        }
    )(HeaderContainer));
