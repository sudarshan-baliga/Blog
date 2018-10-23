import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUserPosts } from '../../actions/postActions';
import './Wrapper.css';

class Wrapper extends Component {
    constructor(props) {
        super(props);
        let data = { userName: this.props.name, jwt: this.props.jwt };
        this.props.getAllUserPosts(data);
    }

    render() {
        if (this.props.type == "user") {
            //get all the posts components
            let posts = [];
            let owner = "";
            if(this.props.owner == "true")
                owner = "true";
            for (var i = 0; i < this.props.userPosts.length; i++) {
                posts.push(<Post content={this.props.userPosts[i]} pid={this.props.userPosts[i].pid} key={this.props.userPosts[i].pid} owner = {owner} />);
            }
            return (
                <React.Fragment>
                    <div className="postsWrapper">
                        {posts}
                    </div>
                </React.Fragment>
            );
        }
        else
            return (
                <React.Component>
                    ff
                </React.Component>
            )
    }
}

function mapStateToProps(data) {
    return { jwt: data.userData.jwt, userPosts: data.posts.userPosts };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllUserPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);