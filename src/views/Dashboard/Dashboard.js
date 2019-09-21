import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import ItensPedido from "../../components/ListItems";
import BarraNavegacao from "./BarraNavegacao";
import { mainListItems, secondaryListItems } from "./ListItems";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { loadLists } from "../../services/api";
import produce from "immer";

const data = loadLists();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

function Search(props) {
  const { classes, placeholder, onChange } = props;

  return (
    <Paper className={classes.papelSearch}>
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        fullWidth
        className={classes.input}
        placeholder={placeholder}
        inputProps={{ type: "text" }}
        onChange={ev => onChange(ev.target.value)}
      />
    </Paper>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  papelSearch: {
    padding: "2px 0px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    padding: theme.spacing(2),
    margin: 0
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    margin: 0,
    borderBottom: "0 !important",
    boxShadow: "0 !important",
    border: "0 !important"
  },
  fixedHeight: {
    [theme.breakpoints.up("xs")]: {
      height: 640
    },
    [theme.breakpoints.up("sm")]: {
      height: 600
    },
    [theme.breakpoints.up("lg")]: {
      height: 800
    }
  }
}));

export default function Dashboard() {
  const [lists, setLists] = useState(data);

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [emNovoPedido, setNovoPedido] = useState("");
  const [emEntregue, setEmEntregue] = useState("");
  const [emAndamento, setEmAndamento] = useState("");
  const [emCancelado, setEmCancelado] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(lists);
  });

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
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
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
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

        <Container
          maxWidth="xl"
          className={classes.container}
          style={{ border: "0px solid lime" }}
        >
          <Grid container spacing={4} style={{ padding: 4 }}>
            {/* CAMPO DE BUSCA */}
          </Grid>
          <br />
          <br />
          <Grid container spacing={2} style={{ padding: 0 }}>
            <Grid item xs={12} sm={6} md={6} lg={3} style={{ margin: 0 }}>
              <div style={{ padding: 0 }}>
                <BarraNavegacao title="PEDIDOS NOVOS" backColor="#999" />
                <Search
                  classes={classes}
                  onChange={ev => setNovoPedido(ev)}
                  placeholder="Pesquisar em novos pedidos"
                />
                <div
                  style={{
                    paddingLeft: 20,
                    paddingRight: 20,
                    maxHeight: "100%"
                  }}
                >
                  {emNovoPedido}
                </div>

                <div  className={fixedHeightPaper} style={{ padding: 20, maxHeight: "100%" }}>
                  {Array.from({ length: 10 }, index => index).map(
                    (item, index) => {
                      return <ItensPedido key={index} />;
                    }
                  )}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} style={{ margin: 0 }}>
              <div style={{ padding: 0 }}>
                <BarraNavegacao title="ENTREGUE" backColor="#f1c232" />
                <Search
                  classes={classes}
                  onChange={ev => setEmEntregue(ev)}
                  placeholder="Pesquisar em pedidos entregues"
                />
                {emEntregue}
                <div className={fixedHeightPaper} style={{ padding: 20, maxHeight: "100%" }}>
                  {Array.from({ length: 10 }, index => index).map(
                    (item, index) => {
                      return <ItensPedido key={index} />;
                    }
                  )}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} style={{ margin: 0 }}>
              <div style={{ padding: 0 }}>
                <BarraNavegacao title="EM ANDAMENTO" backColor="#6aa84f" />
                <Search
                  classes={classes}
                  onChange={ev => setEmAndamento(ev)}
                  placeholder="Pesquisar em pedidos em andamento"
                />
                {emAndamento}
                <div className={fixedHeightPaper} style={{ padding: 20, maxHeight: "100%" }}>
                   {Array.from({ length: 10 }, index => index).map(
                    (item, index) => {
                      return <ItensPedido key={index} />;
                    }
                  )}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} style={{ margin: 0 }}>
              <div style={{ padding: 0 }}>
                <BarraNavegacao title="CANCELADO" backColor="#990000" />
                <Search
                  classes={classes}
                  onChange={ev => setEmCancelado(ev)}
                  placeholder="Pesquisar em pedidos cancelados"
                />
                {emCancelado}
                <div  className={fixedHeightPaper} style={{ padding: 20, maxHeight: "100%" }}>
                  {Array.from({ length: 10 }, index => index).map(
                    (item, index) => {
                      return <ItensPedido key={index} />;
                    }
                  )}
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <br />
        <Copyright />
      </main>
    </div>
  );
}
