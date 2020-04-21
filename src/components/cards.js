import React from "react";
import { Card, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "250",
    marginRight: 50,
  },
  title: {
    display: "flex",
    justifyContent: "space-around",
  },
  container: {
    flexDirection: "column",
  },
  card: {
    marginLeft: 50,
    marginRight: 50,
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  grid: {
    // padding: theme.spacing(2),
    flexGrow: 1,
  },
}));

export default function Cards() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          title="Light Blue"
          action={
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              variant="outlined"
            >
              Daily <ArrowDropDownIcon />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Daily</MenuItem>
                <MenuItem onClick={handleClose}>Weekly</MenuItem>
                <MenuItem onClick={handleClose}>Monthly</MenuItem>
              </Menu>
            </Button>
          }
        />
        <CardContent>
          <Typography
            variant="h4"
            style={{
              fontWeight: 500,
              fontSize: "calc(2rem)",
              textTransform: "none",
              marginRight: "8px",
            }}
          >
            199
          </Typography>
          <Typography variant="subtitle2">-3.7%</Typography>
          <div>
            <Grid container spacing={5}>
              <Grid item xs={4} className={classes.grid}>
                <Typography>
                  33 <CallMadeIcon />
                </Typography>
                <Typography>Registrations</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>
                  3.25% <CallMadeIcon />
                </Typography>
                <Typography>Bounce Rate</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>
                  330
                  <CallMadeIcon />
                </Typography>
                <Typography>Views</Typography>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          action={
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              variant="outlined"
            >
              Daily <ArrowDropDownIcon />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Daily</MenuItem>
                <MenuItem onClick={handleClose}>Weekly</MenuItem>
                <MenuItem onClick={handleClose}>Monthly</MenuItem>
              </Menu>
            </Button>
          }
          title="Sing App"
        />
        <CardContent>
          <Typography
            variant="h4"
            style={{
              fontWeight: 500,
              fontSize: "calc(2rem)",
              textTransform: "none",
              marginRight: "8px",
            }}
          >
            27
          </Typography>
          <Typography variant="subtitle2">+2.5%</Typography>
          <div>
            <Grid container spacing={5}>
              <Grid item xs={4} className={classes.grid}>
                <Typography>
                  2 <CallMadeIcon />
                </Typography>
                <Typography>Registrations</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>
                  4.5% <CallMadeIcon />
                </Typography>
                <Typography>Bounce Rate</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>
                  20
                  <CallReceivedIcon />
                </Typography>
                <Typography>Views</Typography>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          action={
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              variant="outlined"
            >
              Daily <ArrowDropDownIcon />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Daily</MenuItem>
                <MenuItem onClick={handleClose}>Weekly</MenuItem>
                <MenuItem onClick={handleClose}>Monthly</MenuItem>
              </Menu>
            </Button>
          }
          title="RNS"
        />
        <CardContent>
          <Typography
            variant="h4"
            style={{
              fontWeight: 500,
              fontSize: "calc(2rem)",
              textTransform: "none",
              marginRight: "8px",
            }}
          >
            44
          </Typography>
          <Typography variant="subtitle2">+3.1%</Typography>
          <div>
            <Grid container spacing={6}>
              <Grid item xs={4} className={classes.grid}>
                <Typography>
                  15 <CallMadeIcon />
                </Typography>
                <Typography>Registrations</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>
                  10.1% <CallMadeIcon />
                </Typography>
                <Typography>Bounce Rate</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>
                  150
                  <CallReceivedIcon />
                </Typography>
                <Typography>Views</Typography>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
