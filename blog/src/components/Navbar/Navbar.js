import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountIcon from '@material-ui/icons/AccountCircle';
import PostIcon from '@material-ui/icons/LocalPostOffice';
import HomeIcon from '@material-ui/icons/Home';
import SignOutIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import {SignOut} from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import "./Nav.css";

const toolBarStyle = {
    display:"inline-block"
};

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.SignOut();
    }
    render() {
        return (
            <div>
                <AppBar position="static" >
                    <Toolbar className="navTool" style = {toolBarStyle}>
                        <Typography className = "navTitle" variant="title" color="inherit" noWrap>
                            Blog
                         </Typography>
                        <div className = "navControls">
                        <Link to="/home">
                                <IconButton >
                                    <HomeIcon className ="navIcons" />
                                </IconButton>
                            </Link>
                            <Link to="/writepost">
                                <IconButton >
                                    <PostIcon className ="navIcons" />
                                </IconButton>
                            </Link>
                            <Link to="/profile">
                                <IconButton >
                                    <AccountIcon className ="navIcons" />
                                </IconButton>
                            </Link>
                            <IconButton  onClick={this.handleLogout}>
                                <SignOutIcon className ="navIcons" />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ SignOut }, dispatch);
}


export default connect(null, mapDispatchToProps)(NavBar);
