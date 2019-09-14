import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import DialogFormDetalhePedido from "../DialogFormDetalhePedido";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function Itemlist() {

  const classes = useStyles();

  return (
    <>
      <DialogFormDetalhePedido />
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
                ></Typography>
                <Skeleton width="80%" height={10} />
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
    </>
  );
}
