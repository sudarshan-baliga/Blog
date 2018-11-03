import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import './Signin.css';
import signin from '../../actions';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Redirect,
} from 'react-router-dom';

/* for some  reasons not able to apply style for btn from  css file*/
var btnStyle = {
    backgroundColor: "#2196f3",
    color: "#fff",
    padding: "18px 36px",
    margin: "20px 0px"
};



class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = { 'userName': '', 'password': '' };
        this.userNameChange = this.userNameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.requestSigin = this.requestSigin.bind(this);
    }

    userNameChange(e) {
        this.setState({ 'userName': e.target.value });
    }

    passwordChange(e) {
        this.setState({ 'password': e.target.value });
    }

    requestSigin() {
        console.log(this.props)
        this.props.signin(this.state);
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        if (this.props.auth == 'True') {
            return <Redirect to={from} />;
        }
        return (
            <React.Fragment>
                <Paper className='inputContainer'>

                    <form >
                        <Avatar id="lockIcon">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline" className="header">Sign in</Typography>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="usrName">User Name</InputLabel>
                            <Input id="usrName" name="usrName" autoFocus onChange={this.userNameChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password" >Password</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.passwordChange}
                            />
                        </FormControl>

                        <Button
                            fullWidth
                            variant="raised"
                            style={btnStyle}
                            className="signInBtn"
                            onClick={this.requestSigin}
                        >
                            Sign in
                         </Button>
                        <Typography className="info">Dont have an account?</Typography>
                        <Link to="/signup">
                            <Button
                                fullWidth
                                variant="raised"
                                style={btnStyle}
                                className="signInBtn"
                            >
                                Sign Up
                        </Button>
                        </Link>
                    </form>
                </Paper>
            </React.Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signin }, dispatch);
}

function mapStateToProps(data) {
    return { auth: data.userData.auth };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);