import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import './Signup.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Redirect,
} from 'react-router-dom';
import axios from 'axios';
const SERVER_URL = 'http://localhost:3001';

/* for some  reasons not able to apply style for btn from  css file*/
var btnStyle = {
    backgroundColor: "#2196f3",
    color: "#fff",
    padding: "18px 36px",
    margin: "20px 0px"
};



class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = { success: false, 'userName': '', 'password': '', "fname": '', 'lname': '', 'about': '' };
        this.userNameChange = this.userNameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.requestSignUp = this.requestSignUp.bind(this);
        this.fnameChange = this.fnameChange.bind(this);
        this.lnameChange = this.lnameChange.bind(this);
        this.aboutYouChange = this.aboutYouChange.bind(this);
        this.routeToSignin = this.routeToSignin.bind(this);
    }

    userNameChange(e) {
        this.setState({ 'userName': e.target.value });
    }

    passwordChange(e) {
        this.setState({ 'password': e.target.value });
    }

    fnameChange(e) {
        this.setState({ 'fname': e.target.value });
    }
    lnameChange(e) {
        this.setState({ 'lname': e.target.value });
    }

    aboutYouChange(e) {
        this.setState({ 'about': e.target.value });
    }

    requestSignUp() {
        let data = this.state;
        var outer = this;
        axios({
            method: 'post',
            url: SERVER_URL + '/handleuser/signup',
            data: data,
            config: {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        })
            .then(function (response) {

                if (response.status == 201) {
                    outer.setState({ success: true });
                }
            })
            .catch(function (response) {
                console.log(response, 'err');
            });
    }
    routeToSignin() {
        this.props.history.push("/signin");
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        if (this.props.auth == 'True') {
            return <Redirect to={from} />;
        }
        return (
            <React.Fragment>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={4000}
                    open={this.state.success}
                    onClose={this.routeToSignin}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Sign up success Please login Click anywhere to continue</span>}
                />
                <Paper className='inputContainer'>

                    <form >
                        <Avatar id="lockIcon">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline" className="header">Sign Up</Typography>
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
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="fname" >First name</InputLabel>
                            <Input
                                name="fname"
                                type="text"
                                id="fname"
                                onChange={this.fnameChange}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="lname" >Last name</InputLabel>
                            <Input
                                name="lname"
                                type="text"
                                id="lname"
                                onChange={this.lnameChange}
                            />
                        </FormControl>
                        <TextField
                            id="outlined-full-width"
                            className="commentEditor"
                            label="About you"
                            fullWidth
                            margin="normal"
                            variant="standard"
                            multiline
                            rows="10"
                            onChange={this.aboutYouChange}
                        />
                        <Button
                            fullWidth
                            variant="raised"
                            style={btnStyle}
                            className="signInBtn"
                            onClick={this.requestSignUp}
                        >
                            Sign Up
                        </Button>
                        <Typography className="info">Already have an account?</Typography>

                        <Link to="/signin">
                            <Button
                                fullWidth
                                variant="raised"
                                style={btnStyle}
                                className="signInBtn"
                            >
                                Sign in
                        </Button>
                        </Link>
                    </form>

                </Paper>
            </React.Fragment>
        )
    }
}

function mapStateToProps(data) {
    return { auth: data.userData.auth };
}

export default connect(mapStateToProps)(Signup);