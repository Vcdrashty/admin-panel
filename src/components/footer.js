import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginLeft: 50,
    marginRight: 35,
  },
  card1: {
    textAlign: "left",
    flexGrow: 1,
  },
  card2: {
    textAlign: "right",
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <div className={classes.card1}>
          <Button color="primary">FlatLogic</Button>
          <Button color="primary">About US</Button>
          <Button color="primary">Blog</Button>
        </div>
        <div className={classes.card2}>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </div>
      </Grid>
    </div>
  );
}
