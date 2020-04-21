import React, { useState } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import GridCard from "./grid-table";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 50,
    marginRight: 35,
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
  menu: {
    paddingTop: theme.spacing(3),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "22.89ch",
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
}

export default function ProductGrid() {
  const classes = useStyles();
  const [type, setType] = useState("Shoes");
  const [brand, setBrand] = useState("All");
  const [size, setSize] = useState("7");
  const [color, setColor] = useState("All");
  const [range, setRange] = useState("All");
  const [sort, setSort] = useState("Favourite");

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const handleChangeRange = (event) => {
    setRange(event.target.value);
  };

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

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
            <Link
              color="primary"
              // href="/getting-started/installation/"
              onClick={handleClick}
            >
              Products Grid
            </Link>
          </Breadcrumbs>
          <div className={classes.icons}>
            <ChatBubbleOutlineIcon />
            <AddShoppingCartIcon />
            <StarBorderIcon />
          </div>
        </Grid>
      </Paper>
      <div className={classes.menu}>
        <TextField
          id="type"
          select
          label="Type"
          value={type}
          onChange={handleChangeType}
          variant="outlined"
        >
          {["Shoes", "Boots", "Trainers"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="brand"
          select
          label="Brand"
          value={brand}
          onChange={handleChangeBrand}
          variant="outlined"
        >
          {["All", "Nike", "Puma"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="size"
          select
          label="Size"
          value={size}
          onChange={handleChangeSize}
          variant="outlined"
        >
          {["7", "8", "9", "10", "11", "12", "12.5", "13"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="color"
          select
          label="Color"
          value={color}
          onChange={handleChangeColor}
          variant="outlined"
        >
          {["All", "Black", "White"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="range"
          select
          label="Range"
          value={range}
          onChange={handleChangeRange}
          variant="outlined"
        >
          {["All", "-", "None"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="sort"
          select
          label="Sort"
          value={sort}
          onChange={handleChangeSort}
          variant="outlined"
        >
          {["Favourite", "Price", "Popular"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <GridCard />
    </div>
  );
}
