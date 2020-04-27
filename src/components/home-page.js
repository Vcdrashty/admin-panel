import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, Tab, Tabs } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SupportTracker from "./support-tracker";
import Revenue from "./revenue";
import Performance from "./performance";
import Overview from "./overview";
import DailyLineChart from "./daily-chart";
import Cards from "./cards";
import Orders from "./orders";
import Footer from "./footer";
import SettingsIcon from "@material-ui/icons/Settings";
import Settings from "./settings";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 60,
    marginLeft: 40,
  },
  paper: {
    display: "flex",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    justifyContent: "space-between",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
  },
  menu: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  card1: {
    display: "flex",
    marginLeft: 50,
    marginRight: 50,
    justifyContent: "space-between",
    margin: theme.spacing(4),
  },
  card2: {
    marginLeft: 50,
    marginRight: 5,
    margin: theme.spacing(4),
  },
  button2: {
    marginTop: 20,
    marginLeft: 1230,
    float: "right",
    position: "fixed",
    backgroundColor: "#536DFE",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Button
          color="primary"
          variant="contained"
          className={classes.button2}
          onClick={() => <Settings />}
        >
          <SettingsIcon />
        </Button>
        <Paper className={classes.paper}>
          <Typography align="left" variant="h5">
            Dashboard
          </Typography>
          <div>
            <Tabs
              value={value}
              indicatorColor="secondary"
              onChange={handleChange}
            >
              <Tab label="Today"></Tab>
              <Tab label="This week"></Tab>
              <Tab label="This month"></Tab>
              <Tab label="This year"></Tab>
            </Tabs>
          </div>
          <div className={classes.menu}>
            <CalendarTodayIcon />
            <Typography variant="h6">01 Jan 2000, Sunday</Typography>
            <Button variant="contained" color="secondary">
              Latest Reports
            </Button>
          </div>
        </Paper>
        <div className={classes.card1}>
          <SupportTracker />
          <Revenue />
          <Performance />
          <Overview />
        </div>
        <div className={classes.card2}>
          <DailyLineChart />
        </div>
        <Cards />
        <Orders />
        <Footer />
      </main>
    </div>
  );
}
