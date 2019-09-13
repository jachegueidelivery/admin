import React from 'react';
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },  
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    margin:0
  },
}));


export default (props) =>{
const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
return(
            <Grid item>
			 <AppBar position="static" style={{backgroundColor:props.backColor}}>
        <Toolbar variant="dense">
          <Typography variant="h6">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
	  {props.children}
            </Grid>
);
}