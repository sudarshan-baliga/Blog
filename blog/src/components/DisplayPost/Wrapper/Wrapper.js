import React, { Component } from 'react';
import Post from '../Post/Post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUserPosts } from '../../../actions/postActions';
import { getRecentPosts } from '../../../actions/postActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Wrapper.css';

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, userPosts: [], recentPosts: [] };
    }

    componentWillMount() {
        if (this.props.type == "user") {
            let data = { profileName: this.props.name, jwt: this.props.jwt };
            this.props.getAllUserPosts(data);
        }
        else {
            let data = { jwt: this.props.jwt };
            this.props.getRecentPosts(data);
        }
    }


    componentWillReceiveProps(nextProps) {
        console.log("next props in wrapper", nextProps)
        this.setState({ loading: false, userPosts: nextProps.userPosts, recentPosts: nextProps.recentPosts });
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <CircularProgress size={200} />
                </div>
            );
        }
        if (this.props.type == "user") {
            //get all the posts components
            let posts = [];
            let owner = "";
            if (this.props.owner == true)
                owner = true;
            for (var i = 0; i < this.props.userPosts.length; i++) {

                posts.push(<Post content={this.props.userPosts[i]} pid={this.props.userPosts[i].pid} key={this.props.userPosts[i].pid} owner={owner} />);
            }

            return (
                <React.Fragment>
                    <div className="postsWrapper">
                        {posts}
                    </div>
                </React.Fragment>
            );
        }
        else {
            let posts = [];
            let owner = "false";
            for (var i = 0; i < this.props.recentPosts.length; i++) {
                if (!isNaN(this.props.filter)) {
                    if (this.props.filter == this.props.recentPosts[i].cid)
                        posts.push(<Post content={this.props.recentPosts[i]} pid={this.props.recentPosts[i].pid} key={this.props.recentPosts[i].pid} owner={owner} />);
                }
                else
                    posts.push(<Post content={this.props.recentPosts[i]} pid={this.props.recentPosts[i].pid} key={this.props.recentPosts[i].pid} owner={owner} />);

            }
            return (
                <React.Fragment>
                    <div className="postsWrapper">
                        {posts}
                    </div>
                </React.Fragment>
            )
        }
    }
}

function mapStateToProps(data) {
    return { jwt: data.userData.jwt, userPosts: data.posts.userPosts, recentPosts: data.recentPosts.userPosts };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getRecentPosts, getAllUserPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);