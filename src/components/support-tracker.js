import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CircularProgress from "@material-ui/core/CircularProgress";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

const options = ["Edit", "Copy", "Delete", "Print"];
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  footer: {
    paddingTop: 50,
  },
}));

export default function SupportTracker() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <div>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        }
        title="Support Tracker"
      />
      <CardContent>
        <div className={classes.content}>
          <Typography variant="h4" component="p">
            543
            <Typography variant="caption">Tickets</Typography>
          </Typography>
          <CircularProgress variant="static" value={75} />
        </div>
        <div className={classes.footer}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Typography variant="body2" color="textSecondary" component="p">
                New Tickets
                <Typography variant="h4">45</Typography>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="textSecondary" component="p">
                Open
                <Typography variant="h4">147</Typography>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="textSecondary" component="p">
                Completed
                <Typography variant="h4">351</Typography>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
}
