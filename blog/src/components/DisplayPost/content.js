import React, { Component } from 'react';
import NavBar from '../Navbar/Navbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPost } from '../../actions/postActions'
import compose from 'recompose/compose';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

class DisplayPostContent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.pathname.split("/").pop());
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <NavBar />
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="headline" component="h3">
                        This is a sheet of paper.
                     </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                   </Typography>
                </Paper>
            </div>
        );
    }
}

DisplayPostContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(data) {
    return { userData: data.userData.userData, jwt: data.userData.jwt };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPost }, dispatch);
}


export default compose(
    withStyles(styles, { name: 'Cart' }),
    connect(mapStateToProps, mapDispatchToProps)
)(DisplayPostContent);
