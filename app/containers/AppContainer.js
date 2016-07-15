/**
 * Created by cong on 16/6/29.
 * @flow
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import App from './../page/App'
class AppContainer extends Component {
    render() {
        return (
            <App {...this.props}/>
        );
    }
}
function mapStateToProps(state) {
    const {loginR} = state;

    return {
        loginR
    }
}
export default connect(mapStateToProps)(AppContainer);