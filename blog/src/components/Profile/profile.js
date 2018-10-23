import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './profile.css'
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import PostWrapper from '../DisplayPost/Wrapper';
class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                {/* <div className="topImageProfile">
                </div>
                <Paper className='profileContainer'>
                    <div className="profilePic">
                        <img src="http://www.mediamanint.com/profiles/superman2.jpg" width="200px" alt="profilepic" />
                    </div>
                    <div className="name">
                        <Typography variant="display1">{this.props.userData.fname + " " + this.props.userData.lname}</Typography>
                        <Typography variant="title">{this.props.userData.details}</Typography>
                    </div>
                </Paper> */}
                <div>
                    <PostWrapper type = "user" name = {this.props.userData.user_name} owner = "true"/>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(store) {
    return { userData: store.userData.userData };
}



export default connect(mapStateToProps)(Profile);