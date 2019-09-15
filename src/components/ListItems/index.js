import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Skeleton from "@material-ui/lab/Skeleton";
import React, { useState } from "react";
import DialogFormDetalhePedido from "../DialogFormDetalhePedido";
import Box from "@material-ui/core/Box";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     maxWidth: "100%",
//     backgroundColor: theme.palette.background.paper,
//     border: "0px solid red",
//     padding: 0
//   },
//   inline: {
//     display: "inline"
//   }
// }));

export default function Itemlist() {
  /*
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = value => {
    setOpen(false);
  };*/

  return (
    <>
      {/* <DialogFormDetalhePedido onClose={handleClose} open={open} /> */}
      {/*Math.random()*/}
      <Grid container spacing={0} style={{paddingBottom:10}}>
          <Skeleton width="100%" height={10} />
          <Skeleton width="80%" height={10} />
      </Grid>
      {/* <List className={classes.root} onClick={handleClickOpen}>
        <Divider variant="middle" component="li" />
        <ListItem alignItems="flex-start">
          <Grid container>
            <Skeleton width="100%" height={20} />
          </Grid>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DoubleArrowIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List> */}
    </>
  );
}
