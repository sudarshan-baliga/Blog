import React, { Component } from 'react';
import NavBar from '../../Navbar/Navbar';
import Comments from '../Comments/Comments';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPost } from '../../../actions/postActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Content.css';
import compose from 'recompose/compose';
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    progress: {
        margin: theme.spacing.unit * 2,
        margin: '10%',
        color: '#2196f3',
    },
    avatar: {
        backgroundColor: "#2196f3",
    },
});


class DisplayPostContent extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, title: '', content: '', author: '' }
    }
    //get the required post when componenet is mounting
    componentWillMount() {
        let pid = this.props.location.pathname.split("/").pop();
        this.props.getPost({ pid: pid, jwt: this.props.jwt });
    }

    componentWillReceiveProps(nextProps) {
        let currentPost = nextProps.currentPost.userPosts;
        let currentPid = currentPost.pid;
        let pid = this.props.location.pathname.split("/").pop();
        if (currentPid == pid) {
            this.setState({
                loading: false,
                title: currentPost.title,
                content: currentPost.content,
                author: currentPost.user_name,
                time: currentPost.time
            })
        }
        const blocksFromHtml = htmlToDraft(currentPost.content);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        const editorState = EditorState.createWithContent(contentState);
        this.setState({
            editorState
        });
    }

    render() {
        const { editorState } = this.state;
        const { classes } = this.props;
        var loading = this.state.loading;
        if (loading)
            return (
                <div>
                    <NavBar />
                    <CircularProgress className={classes.progress} size={200} />
                </div>
            )
        else
            return (
                <div>
                    <NavBar />
                    <div className="postContent boxShadow">
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe" className={classes.avatar}>
                                    {this.state.author[0]}
                                </Avatar>
                            }
                            title={this.state.author}
                            subheader={this.state.time}
                            className="cardHeader"
                        />

                        <h3 className="title">
                            {this.state.title}
                        </h3>
                        <Editor
                            toolbarHidden
                            readOnly
                            editorState={editorState}
                            wrapperClassName="editor"
                            editorClassName="post-editor"
                        />
                    </div>
                    <Comments/>
                </div>
            );
    }
}


function mapStateToProps(data) {
    return { userData: data.userData.userData, jwt: data.userData.jwt, currentPost: data.currentPost };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPost }, dispatch);
}


export default compose(
    withStyles(styles, { name: 'Cart' }),
    connect(mapStateToProps, mapDispatchToProps)
)(DisplayPostContent);
