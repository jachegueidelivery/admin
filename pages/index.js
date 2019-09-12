import React from 'react';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="#">
				Delivery
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		margin: theme.spacing(0),
		padding: theme.spacing(0),
		border: '0px solid lime',
	},
	image: {
		backgroundImage: 'url(../static/background-login.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		[theme.breakpoints.up('xs')]: {
			margin: theme.spacing(2),
			padding: theme.spacing(0),
			border: '0px solid red',
		},
		[theme.breakpoints.up('sm')]: {
			margin: theme.spacing(2),
			padding: theme.spacing(0, 2),
		},
		[theme.breakpoints.up('md')]: {},
		[theme.breakpoints.up('lg')]: {
			margin: theme.spacing(4, 4),
			padding: theme.spacing(0, 15, 0, 15),
		},
		display: 'flex',
		flexDirection: 'column',
	},
	portalDoServidor:{
		[theme.breakpoints.up('xs')]: {
			textAlign:"center"
		},
[theme.breakpoints.up('sm')]: {
			textAlign:"left"
		},
	},
	subTitulo:{
		[theme.breakpoints.up('xs')]: {
			textAlign:"center"
		},
[theme.breakpoints.up('sm')]: {
			textAlign:"left"
		},
	},
	login: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(0),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		padding: theme.spacing(2, 0, 2),
		background: '#ea1d2c',
	},
}));

export default function SignInSide() {
	const classes = useStyles();

	const [values, setValues] = React.useState({
		amount: '',
		password: '',
		weight: '',
		weightRange: '',
		showPassword: false,
	});

	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};
	
function handleSubmit(event) {
    window.location.href="/admin"
  }

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={6} className={classes.image} />
			<Grid item xs={12} sm={8} md={6} component={Paper} >
				<div className={classes.paper}>
					<Grid className={classes.login}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography variant="h2" color="primary">
							Sign in
						</Typography>
					</Grid>
					<br /><br /><br /><br/>
					<Typography variant="h4" className={classes.portalDoServidor}>
						<strong>Portal do Parceiro</strong>
					</Typography>
					<br />
					<Typography component="span" variant="body1" className={classes.subTitulo}>
						Gerencie seu estabelecimento de forma fácil e rápida
					</Typography>
					<br />
					<br />
					<form className={classes.form} onSubmit={handleSubmit} action="admin" autoComplete="on" method="POST">
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email"
							name="email"
							autoFocus
						/>
						<br/><br/>
						<TextField
							fullWidth
							required
							id="password"
							className={clsx(classes.margin, classes.textField)}
							variant="outlined"
							type={values.showPassword ? 'text' : 'password'}
							label="Senha"
							value={values.password}
							onChange={handleChange('password')}
							autoComplete="off"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											edge="end"
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>

						<Grid container>
							<Grid container item md={6}>
								<FormControlLabel
									control={<Checkbox value="remember" color="primary" />}
									label="Lembrar senha"
								/>
							</Grid>
							<Grid
								container
								item
								md={6}
								alignItems="center"
								justify="flex-end"
								style={{ border: '0px solid red' }}
							>
								<Link href="#" variant="body2" underline="always">
									<strong>{'Recuperar Senha'}</strong>
								</Link>
							</Grid>
						</Grid>
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Entrar
						</Button>
						<br />
						<Grid container>
							<Grid item container alignItems="center" justify="center">
								Ainda não possui cadastro?&#160;&#160;
								<Link href="#" variant="h6" underline="always">
									{'Cadastre-se aqui'}
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
