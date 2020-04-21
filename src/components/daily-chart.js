import React from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    marginRight: 50,
  },
  title: {
    display: "flex",
  },
  device: {
    display: "flex",
    marginRight: 400,
    paddingTop: 20,
    justifyContent: "space-between",
  },
  chart: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function DailyLineChart() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          action={
            <div className={classes.title}>
              <div className={classes.device}>
                <Typography>Tablet</Typography>
                <Typography>Mobile</Typography>
                <Typography>Desktop</Typography>
              </div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                variant="outlined"
              >
                Monthly <ArrowDropDownIcon />
              </Button>
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
            </div>
          }
          title="Daily Line Chart"
        />
        <CardContent>
          <Typography variant="h4">Chart</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
