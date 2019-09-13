import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TabelaItens from './TabelaItens.js'
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles(theme => ({
  root: {
	padding: theme.spacing(1),
  },
  inline: {
    display: 'inline',
  },
}));


const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
	    [theme.breakpoints.down('sm')]: {
			height:400,
	maxHeight:600,
	width:600
    },
    [theme.breakpoints.up('md')]: {
			height:600,
	maxHeight:600,
		width:868
    },
    [theme.breakpoints.up('lg')]: {
    },
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
	
  const [open, setOpen] = React.useState(false);
  
  const classes = useStyles();
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 const theme = useTheme();
 
 const fullScreen = useMediaQuery(theme.breakpoints.up('sm'));
  
  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Open dialog
      </Button>
	  
      <Dialog onClose={handleClose} maxWidth="xl" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          NOVO PEDIDO: #4565
        </DialogTitle>
<DialogContent dividers>

<Grid container>
{/*ROW 1*/}
<Grid item sm={4}>
<Typography gutterBottom>
<b>#4565:</b><br/>
19:32
          </Typography>
</Grid>

<Grid item sm={4} container style={{border:"0px solid lime"}} alignContent="flex-end" alignItems="flex-end" justify="center">

          <Typography gutterBottom>
         <b>CLIENTE:</b><br/>
			Fábio Ricardo
          </Typography>
</Grid>

<Grid item sm={4} container
  direction="row"
  justify="flex-end"
  alignItems="center" style={{border:"0px solid red"}}>
<Typography gutterBottom>
<b>STATUS:</b><br/>
           Em espera...
          </Typography>
</Grid>
          
       </Grid>  
	   
	   <br/>
{/*ROW 2*/}
	   <Grid container>
<Grid item sm={8}>
<Typography gutterBottom>

<b>ENDEREÇO:</b><br/>
Rua Pará, sn - Centro - Augustinópolis - TO
<br/>
          </Typography>
</Grid>

<Grid item sm={4} container
  direction="row"
  justify="flex-start"
  alignItems="center" style={{border:"0px solid red"}}>
<Typography gutterBottom>
<b>CONTATO:</b><br/>
           639994845622
          </Typography>
</Grid>
          
       </Grid> 
{/*ROW 3*/}
	   <Grid container>
	   <TabelaItens/>
	   </Grid>
	   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            CONFIRMAR
          </Button>
		  <Button onClick={handleClose} color="secondary" variant="outline">
            CANCELAR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
