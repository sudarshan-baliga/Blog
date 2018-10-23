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
import DeleleteIcon from '@material-ui/icons/Delete';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import './Post.css';
import { Link } from 'react-router-dom'

const styles = theme => ({
    card: {
        maxWidth: "75%",
        margin: '0 auto'
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
        backgroundColor: "#2196f3",
    },
    delete: {
        color: red[500],
    }
});

function Posts(props) {
    const { classes } = props;
    //to display delete buttom only if it is the owner
    let deleteBtn;
    if (props.owner == "true")
        deleteBtn =
            < IconButton>
                <DeleleteIcon className={classes.delete} />
            </IconButton >;
    return (
        <div className="post">
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            {props.content.user_name[0]}
                        </Avatar>
                    }
                    action={deleteBtn}
                    title={props.content.user_name}
                    subheader={props.content.time}
                    className="cardHeader"
                />

                <CardActionArea>
                    <Link to={"/displayPost/" + props.pid}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            className={classes.media}
                            height="140"
                            image={require("../../images/programming.jpg")}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="title" component="h1">
                                {props.content.title}
                            </Typography>
                            <Typography component="h3" variant="headline">
                                {props.content.description}
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </div>
    );
}

Posts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Posts);
