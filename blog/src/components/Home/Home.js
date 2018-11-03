import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostWrapper from '../DisplayPost/Wrapper/Wrapper';
import Typography from '@material-ui/core/Typography';

import './Home.css';
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="categories boxShadow">
                    <Typography variant="title">Filter</Typography>

                    < Link to="/home/201">
                        <Chip label="Programming" className="categoryChips boxShadow" />
                    </ Link>
                    <Link to="/home/202">
                        <Chip label="Cooking" className="categoryChips boxShadow" />
                    </Link>
                    <Link to="/home/203">
                        <Chip label="Travel" className="categoryChips boxShadow" />
                    </Link>
                    < Link to="/home">
                        <Chip label="All" className="categoryChips boxShadow" />
                    </ Link>
                </div>
                <PostWrapper type="user" type="home" filter={this.props.location.pathname.split('/').pop()} />
            </React.Fragment>
        )
    }
}

function mapStateToProps(data) {
    return { userData: data.userData.userData, jwt: data.userData.jwt };
}

export default connect(mapStateToProps)(Home);
