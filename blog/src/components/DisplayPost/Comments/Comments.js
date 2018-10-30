import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { writeComment, getAllComments } from '../../../actions/commentActions';
import {changeStatus} from '../../../actions/index';
import compose from 'recompose/compose';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Comments.css';
import Comment from './Comment/Comment';

const styles = theme => ({
    button: {
        backgroundColor: "#2196f3",
        color: "#fff",
        padding: "18px 36px",
        margin: '0 auto'
    },
});

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: true, comment: '', previousComments: [] };
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleCommentPost = this.handleCommentPost.bind(this);
    }

    componentWillMount() {
        let data = { jwt: this.props.jwt, pid: this.props.currentPost.userPosts.pid };
        this.props.getAllComments(data);
        this.setState({ currentComments: this.props.currentComments });
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.currentComments )
        this.setState({ loading: false, previousComments: nextProps.currentComments });
    }

    handleCommentChange(e) {
        this.setState({ comment: e.target.value });
    }

    handleCommentPost() {
        let data = { jwt: this.props.jwt, content: this.state.comment, pid: this.props.currentPost.userPosts.pid };
        this.props.writeComment(data);
    }

    render() {
        const { classes } = this.props;
        //create the comments
        var comments = [];
        for (var i = 0; i < this.state.previousComments.length; i++) {
            comments.push(<Comment content={this.state.previousComments[i]} key={this.state.previousComments[i].cid} />);
        }
        var loading = this.state.loading;
        if (loading)
            return (
                <div>
                    <CircularProgress className={classes.progress} size={200} />
                </div>
            )
        else
            return (
                <div className="postComments">
                    <div className="comments">
                        {comments}
                    </div>
                    <div className="writeComment">
                        <TextField
                            id="outlined-full-width"
                            className="commentEditor"
                            label="Write Comment"
                            fullWidth
                            margin="normal"
                            variant="standard"
                            multiline
                            rows="2"
                            onChange={this.handleCommentChange}
                        />
                        <Button className={classes.button} onClick={this.handleCommentPost}>Comment</Button>
                    </div>
                </div>
            );
    }


}

function mapStateToProps(data) {
    return {
        userData: data.userData.userData,
        jwt: data.userData.jwt,
        currentPost: data.currentPost,
        currentComments: data.currentComments.userPosts,
        writeCommentResult:data.writeComment,
        status: data.status
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ writeComment, getAllComments,changeStatus }, dispatch);
}


export default compose(
    withStyles(styles, { name: 'Cart' }),
    connect(mapStateToProps, mapDispatchToProps)
)(Comments);
