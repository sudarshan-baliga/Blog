import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import NavBar from '../Navbar/Navbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import compose from 'recompose/compose';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './WritePost.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SendPost } from '../../actions'

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  title:{
    textTransform: 'capitalize',
  }
});


var btnStyle = {
  backgroundColor: "#2196f3",
  color: "#fff",
  padding: "18px 36px",
  marginBottom: "30px",
  marginLeft:"50px"
};



class WritePost extends Component {
  constructor(props) {
    super(props);
    this.handlePostClick = this.handlePostClick.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.state = {
      editorState: '..',
      category: 'Programming',
      title: 'title',
      description: "description",
      categoryId: '201'
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

  onCategoryChange(e) {
    this.setState({ categoryId: e.target.value });
  }
  handlePostClick() {
    let postTitle = this.state.title;
    let postDescription = this.state.description;
    let postContent = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    let cid = this.state.categoryId;
    this.props.SendPost(
      {
        username: this.props.userData.user_name,
        jwt: this.props.jwt,
        cid: cid,
        content: postContent,
        title: postTitle,
        description: postDescription
      }
    );
  }


  render() {
    const { classes } = this.props;
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
        <div className="writePostController">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category-helper">category</InputLabel>
            <Select
              className={classes.selectEmpty}
              displayEmpty
              value={this.state.category}
              onChange={this.onCategoryChange}
              input={<Input name="category" id="category-helper" />}
            >
              <MenuItem value={201}>Programming</MenuItem>
              <MenuItem value={202}>Cooking</MenuItem>
              <MenuItem value={203}>Travel</MenuItem>
            </Select>
            <FormHelperText>Please select the category of the post </FormHelperText>
          </FormControl>
          <Button style={btnStyle} onClick={this.handlePostClick}>Post</Button>
        </div>
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


export default compose(
  withStyles(styles, { }),
  connect(mapStateToProps, mapDispatchToProps)
)(WritePost);
