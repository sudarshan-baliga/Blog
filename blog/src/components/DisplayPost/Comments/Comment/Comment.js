import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './Comment.css';


const styles = theme => ({
    avatar: {
        backgroundColor: "#2196f3",
    },
});

function Comment(props) {
    var data = props.content;
    const { classes } = props;
    return (
        <div className="comment boxShadow">
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        {data.user_name[0]}
                    </Avatar>
                }
                title={data.user_name}
                subheader={data.time}
                className="cardHeader"
            />
            <CardContent>
                <Typography component="p">
                    {data.content}
                </Typography>
            </CardContent>
        </div>
    )
}

export default withStyles(styles)(Comment);
