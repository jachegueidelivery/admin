import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './ListItems';
import ItensPedido from '../../components/ListItems';
import BarraNavegacao from './BarraNavegacao';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'. Built with '}
			<Link color="inherit" href="https://material-ui.com/">
				Material-UI.
			</Link>
		</Typography>
	);
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		padding: theme.spacing(2),
		margin: 0,
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
		margin: 0,
	},
	fixedHeight: {
		[theme.breakpoints.up('xs')]: {
			height: 640,
		},
		[theme.breakpoints.up('sm')]: {
			height: 600,
		},
	},
}));

export default function Dashboard() {
	
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
					>
						<MenuIcon />
					</IconButton>
					<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
						Painel do Estabelecimento
					</Typography>
					<Typography component="h1" variant="h6" color="inherit">
						<Link color="inherit" href="../">
							Sair
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>{mainListItems}</List>
				<Divider />
				<List>{secondaryListItems}</List>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />

				<Container maxWidth="xl" className={classes.container} style={{ border: '0px solid lime' }}>
					<Grid container spacing={4} style={{ padding: 4 }}>
						<Grid item xs={12} sm={6} md={3} lg={3} style={{ padding: 0, margin: 0 }}>
							<Paper className={fixedHeightPaper} style={{ padding: 0 }}>
								<BarraNavegacao title="PEDIDOS NOVOS" backColor="#999"></BarraNavegacao>
								<div style={{ padding: 20, maxHeight: '100%' }}>
									{Array.from({ length: 10 }, index => index).map((item, index) => {
										return <ItensPedido key={index} />;
									})}
								</div>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6} md={3} lg={3} style={{ padding: 0, margin: 0 }}>
							<Paper className={fixedHeightPaper} style={{ padding: 0 }}>
								<BarraNavegacao title="ENTREGUE" backColor="#f1c232" />
								<div style={{ padding: 20, maxHeight: '100%' }}>
								{Array.from({ length: 10 }, index => index).map((item, index) => {
										return <ItensPedido key={index} />;
									})}
								</div>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6} md={3} lg={3} style={{ padding: 0, margin: 0 }}>
							<Paper className={fixedHeightPaper} style={{ padding: 0 }}>
								<BarraNavegacao title="EM ANDAMENTO" backColor="#6aa84f"></BarraNavegacao>
								<div style={{ padding: 20, maxHeight: '100%' }}>
								{Array.from({ length: 10 }, index => index).map((item, index) => {
										return <ItensPedido key={index} />;
									})}
								</div>
							</Paper>
						</Grid>{' '}
						<Grid item xs={12} sm={6} md={3} lg={3} style={{ padding: 0, margin: 0 }}>
							<Paper className={fixedHeightPaper} style={{ padding: 0 }}>
								<BarraNavegacao title="CANCELADO" backColor="#990000"></BarraNavegacao>
								<div style={{ padding: 20, maxHeight: '100%' }}>
								{Array.from({ length: 10 }, index => index).map((item, index) => {
										return <ItensPedido key={index} />;
									})}
								</div>
							</Paper>
						</Grid>
						{/*
            <Grid item xs={12} sm={6} md={3} lg={3} style={{padding:0}}>
              <Paper className={fixedHeightPaper}>
				 		<BarraNavegacao title="ENTREGUE" backColor="#f1c232"/>
              </Paper>
            </Grid>
			
            <Grid item xs={12} sm={6} md={3} lg={3} style={{padding:0}}>
              <Paper className={fixedHeightPaper}>
				<BarraNavegacao title="EM ANDAMENTO" backColor="#6aa84f"/>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} style={{padding:0}}>
              <Paper className={fixedHeightPaper}>
					<BarraNavegacao title="CANCELADO"/>
              </Paper>
            </Grid>
			*/}
					</Grid>
				</Container>
				<br />
				<Copyright />
			</main>
		</div>
	);
}
