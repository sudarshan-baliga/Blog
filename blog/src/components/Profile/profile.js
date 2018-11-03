import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './profile.css'
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import PostWrapper from '../DisplayPost/Wrapper/Wrapper';
import { getProfile } from '../../actions/profileActions';
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, profileData: [], owner: false };
    }

    componentWillMount() {
        var profileName = this.props.location.pathname.split('/').pop();
        console.log("mounting", profileName)
        if (profileName == 'profile' || profileName == '')
            profileName = this.props.userData.user_name;

        if (profileName == this.props.userData.user_name) {
            this.setState(this.setState({ profileData: this.props.userData, loading: false, owner: true }))
        }
        else {
            console.log("getting new profile")
            let data = { profileName: profileName, jwt: this.props.jwt };
            this.props.getProfile(data);
        }
    }


    componentWillReceiveProps(nextProps) {
        console.log("next props in profile", nextProps);
        let profileName= this.props.location.pathname.split('/').pop();
        if ( profileName != 'profile' || profileName != ''  )
            this.setState({ loading: false, profileData: nextProps.currentProfile });
        else
            this.setState({ loading: false, profileData: nextProps.userData });
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <CircularProgress size={200} />
                </div>
            );
        }
        return (
            <React.Fragment>
                <Navbar />
                <div className="topImageProfile">
                </div>
                <Paper className='profileContainer'>
                    <div className="profilePic">
                        <img src={require('../../images/superman2.jpg')} width="200px" alt="profilepic" />
                    </div>
                    <div className="name">
                        <Typography variant="title" component="h1">{this.state.profileData.fname + " " + this.state.profileData.lname}</Typography>
                        <Typography variant="subheading">{this.state.profileData.details}</Typography>
                    </div>
                </Paper>
                {/* <Typography variant="title" component="h1" className = "title descriptionHelper"  >
                               Posts by the user
                </Typography> */}
                
                <div>
                    <PostWrapper type="user" name={this.state.profileData.user_name} owner={this.state.owner} />
                </div>
            </React.Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProfile }, dispatch);
}


function mapStateToProps(store) {
    return { userData: store.userData.userData, currentProfile: store.currentProfile, jwt: store.userData.jwt };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);