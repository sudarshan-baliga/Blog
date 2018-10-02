import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import NavBar from '../Navbar/Navbar';
import Button from '@material-ui/core/Button';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';
import draftToHtml from 'draftjs-to-html';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './WritePost.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { SendPost } from '../../actions'
var s = "fsdafdsfads fdasf**ad**sf sad";

var btnStyle = {
  backgroundColor: "#2196f3",
  color: "#fff",
  padding: "18px 36px",
  marginBottom: "30px"
};


class WritePost extends Component {
  constructor(props) {
    super(props);
    this.handlePostClick = this.handlePostClick.bind(this);
    this.state = {
      editorState: ''
    }
  }


  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  handlePostClick() {
    let postContent  = draftToMarkdown(convertToRaw(this.state.editorState.getCurrentContent()));
    this.props.SendPost({token:this.props.userData.hash, postContent: postContent});
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1 className="writePostTitle">Write Post</h1>
        <div className="editorWrapper boxShadow">
          <Editor
            wrapperClassName="editor"
            editorClassName="post-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        <Button style={btnStyle} onClick={this.handlePostClick}>Post</Button>
      </div>
    );
  }
}

function mapStateToProps(data) {
  return { userData: data.userData.data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ SendPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WritePost);