import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Grid from "@material-ui/core/Grid";
import ManageTable from "./manage-table";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 50,
    marginRight: 40,
  },
  grid: {
    flexGrow: 1,
    textAlign: "left",
    padding: theme.spacing(2),
  },
  icons: {
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
}));

function handleClick(event) {
  event.preventDefault();
}

export default function ProductManage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container>
          <Breadcrumbs
            className={classes.grid}
            separator={<NavigateNextIcon />}
          >
            <Link
              color="inherit"
              // href="/"
              onClick={handleClick}
            >
              E-commerce
            </Link>
            <Link color="primary" onClick={handleClick}>
              Product Manage
            </Link>
          </Breadcrumbs>
          <div className={classes.icons}>
            <ChatBubbleOutlineIcon />
            <AddShoppingCartIcon />
            <StarBorderIcon />
          </div>
        </Grid>
      </Paper>
      <div>
        <ManageTable />
      </div>
    </div>
  );
}
