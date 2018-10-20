import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import NavBar from '../Navbar/Navbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './WritePost.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SendPost } from '../../actions'

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
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.state = {
      editorState: '..',
      category: 'travel',
      title: 'title',
      description: "description"
    }
  }


  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };


  onTitleChange(e) {
    this.setState({ 'title': e.target.value });
  }

  onDescriptionChange(e) {
    this.setState({ 'description': e.target.value });
  }

  handlePostClick() {
    let postTitle = this.state.title;
    let postDescription = this.state.description;
    let postContent = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    this.props.SendPost(
      { username: this.props.userData.user_name, 
         jwt: this.props.jwt,
         content: postContent, 
         title: postTitle, 
         description: postDescription }
    );
  }

  render() {
    return (
      <div>
        <NavBar />
        <h3 className="writePostTitle">Write Post</h3>
        <TextField
          required
          className="postTitle"
          id="outlined-required"
          label="Title"
          defaultValue="Title"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={this.onTitleChange}
        />
        <br />
        <TextField
          id="outlined-full-width"
          className="postDescription"
          label="Description"
          defaultValue="write something about the post"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows="2"
          onChange={this.onDescriptionChange}
        />
        <div className="editorWrapper boxShadow">
          <Editor
            wrapperClassName="editor"
            editorClassName="post-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        <Button style={btnStyle} onClick={this.handlePostClick}>Post</Button>
        <section id="content"></section>
      </div>
    );
  }
}

function mapStateToProps(data) {
  return { userData: data.userData.userData, jwt: data.userData.jwt };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ SendPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WritePost);