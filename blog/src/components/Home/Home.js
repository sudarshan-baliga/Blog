import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SendPost } from '../../actions'
import PostWrapper from '../DisplayPost/Wrapper';

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PostWrapper type="user"  type = "home" />
            </React.Fragment>
        )
    }
}

function mapStateToProps(data) {
    return { userData: data.userData.userData, jwt: data.userData.jwt };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ SendPost }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
