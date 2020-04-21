import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const options = ["Edit", "Copy", "Delete", "Print"];
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  content: {
  },
  data: {
    textAlign: "right",
    flexDirection: "column",
  },
}));

export default function Revenue() {
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
        title="Revenue Breakdown"
      />
      <CardContent>
        <div className={classes.content}>
          <div className={classes.data}>
            <Typography variant="body1" color="textSecondary">
              Group A<Typography variant="body1">400</Typography>
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Group B<Typography variant="body1">300</Typography>
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Group C<Typography variant="body1">300</Typography>
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Group D<Typography variant="body1">200</Typography>
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
