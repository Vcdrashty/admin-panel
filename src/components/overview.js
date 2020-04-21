import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import AssessmentIcon from "@material-ui/icons/Assessment";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const options = ["Edit", "Copy", "Delete", "Print"];
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  data: {
    margin: theme.spacing(1)
  },
  container: {
    flexDirection: "column",
  },
}));

export default function Overview() {
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
        title="Server Overview"
      />
      <CardContent className={classes.data}>
        <Typography variant="h6">60%/ 37C/ 3.3Ghz</Typography>
        {/* <AssessmentIcon /> */}
        <Typography variant="h6">54%/ 31C/ 3.3Ghz</Typography>
        {/* <AssessmentIcon /> */}
        <Typography variant="h6">57%/ 21C/ 3.3Ghz</Typography>
        {/* <AssessmentIcon /> */}
      </CardContent>
    </Card>
  );
}
