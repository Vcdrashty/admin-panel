import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChatIcon from "@material-ui/icons/Chat";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ForumIcon from "@material-ui/icons/Forum";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import DescriptionIcon from "@material-ui/icons/Description";
import AppsIcon from "@material-ui/icons/Apps";
import TableChartIcon from "@material-ui/icons/TableChart";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MapIcon from "@material-ui/icons/Map";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#536DFE",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 200,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 30,
  },
  hide: {
    display: "none",
  },
  drawer: {
    maxwidth: 300,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(10),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  features: {
    marginTop: 20,
    marginLeft: 720,
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            React Admin Dashboard{" "}
          </Typography>
          <div className={classes.features}>
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <SearchIcon />
              </Grid>
              <Grid item xs={3}>
                <Badge badgeContent={4} color="primary">
                  <NotificationsNoneIcon />
                </Badge>
              </Grid>
              <Grid item xs={3}>
                <Badge badgeContent={4} color="secondary">
                  <MailOutlineIcon />
                </Badge>
              </Grid>
              <Grid item xs={3}>
                <div style={{ display: "flex" }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Typography variant="subtitle2">Hi, Robert Cotton</Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Typography variant="inherit">Dashboard</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <Badge badgeContent={"NodeJS"} color="primary">
              <Typography variant="inherit">E-commerce</Typography>
            </Badge>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
            <Badge badgeContent={"New"} color="secondary">
              <Typography variant="inherit">User</Typography>
            </Badge>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <Typography variant="inherit">Documentation</Typography>
          </MenuItem>
        </MenuList>
        <Divider />

        <MenuList>
          <Typography>TEMPLATE</Typography>
          <MenuItem>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <Typography variant="inherit">Core</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <TableChartIcon />
            </ListItemIcon>
            <Typography variant="inherit">Tables</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <Typography variant="inherit">UI Elements</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <Typography variant="inherit">Forms</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <EqualizerIcon />
            </ListItemIcon>
            <Typography variant="inherit">Charts</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <Typography variant="inherit">Maps</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <StarBorderIcon />
            </ListItemIcon>
            <Typography variant="inherit">Extra</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <FolderOpenIcon />
            </ListItemIcon>
            <Typography variant="inherit">Menu Levels</Typography>
          </MenuItem>
        </MenuList>
        <Divider />

        <MenuList>
          <Typography>HELP</Typography>
          <MenuItem>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <Typography variant="inherit">Library</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <Typography variant="inherit">Support</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <Typography variant="inherit">FAQ</Typography>
          </MenuItem>
        </MenuList>
        <Divider />

        <MenuList>
          <Typography>PROJECTS</Typography>
          <MenuItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <Typography variant="inherit">My Recent</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <Typography variant="inherit">Starred</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <Typography variant="inherit">Background</Typography>
          </MenuItem>
        </MenuList>
        <Divider />

        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <Typography variant="inherit">Add Section</Typography>
          </MenuItem>

        </MenuList>
        <Divider />

        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <Typography variant="inherit">Chat</Typography>
          </MenuItem>
        </MenuList>
      </Drawer>
    </div>
  );
}
