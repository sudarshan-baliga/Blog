import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
    chip: {
        margin: theme.spacing.unit,
        backgroundColor: "#2196f3",
    },
    avatar: {
        backgroundColor: red[500],
      },
});

function Posts(props) {
    const { classes } = props;
    console.log(props.content)
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        {props.content.user_name[0]}
            </Avatar>
                }
                title={props.content.user_name}
                subheader= {props.content.time}
            />
           
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    className={classes.media}
                    height="140"
                    image={require("../../images/programming.jpg")}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="title" component="h2">
                       {props.content.title}
          </Typography>
                    <Typography component="p">
                        {props.content.description}
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}

Posts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Posts);
