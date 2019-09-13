import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {

  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Divider variant="middle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary=<Skeleton width="100%" height={10} />
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              </Typography>
              <Skeleton width="80%" height={10}/>
            </React.Fragment>
          }
        />
		                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DoubleArrowIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}