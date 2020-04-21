import React from "react";
import { makeStyles, withStyles, lighten } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LinearProgress from "@material-ui/core/LinearProgress";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const options = ["Edit", "Copy", "Delete", "Print"];
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  data: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: theme.spacing(3)
  },
}));

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#0d47a1", 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ffa000",
  },
})(LinearProgress);

export default function Performance() {
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
                <MenuItem
                  key={option}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        }
        title="App Performance"
      />
      <CardContent>
        <div className={classes.data}>
          <Typography variant="body1">Integration</Typography>
          <Typography ariant="body1">SDK</Typography>
        </div>
        <Typography>Integration</Typography>
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={50}
        />
        <Typography>SDK</Typography>
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={50}
        />
      </CardContent>
    </Card>
  );
}
