import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import { InputAdornment } from "@material-ui/core";

function createData(Id, image, title, subtitle, price, rating, actions) {
  return {
    Id,
    image,
    title,
    subtitle,
    price,
    rating,
    actions,
  };
}

const rows = [
  createData(1, "-", "Trainers", "Trainers in white", "$76", "4.6"),
  createData(2, "-", "Boots", "Trainers in blue", "$45", "4.6"),
  createData(3, "-", "Flat Sandals", "Trainers in white", "$55", "4.6"),
  createData(4, "-", "Trainers", "Trainers in white", "$76", "4.6"),
  createData(5, "-", "Trainers", "Trainers in white", "$76", "4.6"),
  createData(6, "-", "Flat Sandals", "Trainers in white", "$55", "4.6"),
  createData(7, "-", "Trainers", "Trainers in white", "$76", "4.6"),
  createData(8, "-", "Boots", "Trainers in blue", "$45", "4.6"),
  createData(9, "-", "Flat Sandals", "Trainers in white", "$55", "4.6"),
  createData(10, "-", "Trainers", "Trainers in white", "$76", "4.6"),
  createData(11, "-", "Boots", "Trainers in blue", "$45", "4.6"),
  createData(12, "-", "Flat Sandals", "Trainers in white", "$55", "4.6"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "Id",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  { id: "image", numeric: true, disablePadding: false, label: "Image" },
  { id: "title", numeric: true, disablePadding: false, label: "Title" },
  { id: "subtitle", numeric: true, disablePadding: false, label: "Subtitle" },
  { id: "price", numeric: true, disablePadding: false, label: "Price" },
  {
    id: "rating",
    numeric: true,
    disablePadding: false,
    label: "Rating",
  },
  { id: "actions", numeric: true, disablePadding: false, label: "Actions" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all items" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    display: "flex",
  },
  table: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(2),
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.table}>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="h6">Products</Typography>
            <Typography variant="caption">12 total</Typography>
            <TextField
              variant="outlined"
              id="search-bar"
              label="Search"
              type="text"
              InputProps={{
                shrink: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={4}>
            <Button variant="contained" style={{ backgroundColor: "#1de9b6" }}>
              Create Product
            </Button>
          </Grid>

          <Grid item xs={4}>
            <div className={classes.title}>
              {numSelected > 0 ? (
                <Typography
                  className={classes.title}
                  color="inherit"
                  variant="subtitle1"
                >
                  {numSelected} selected
                </Typography>
              ) : (
                <Typography className={classes} variant="h6" id="tableTitle">
                  Products{" "}
                </Typography>
              )}

              {numSelected > 0 ? (
                <Tooltip title="Delete">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Filter list">
                  <IconButton aria-label="filter list">
                    <FilterListIcon />
                  </IconButton>
                </Tooltip>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 0,
    marginRight: 0,
    margin: theme.spacing(4),
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginTop: 5,
  },
}));

export default function ManageTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.Id}
                      </TableCell>
                      <TableCell align="right">
                        <Avatar
                          variant="square"
                          src="https://flatlogic-node-backend.herokuapp.com/assets/products/img2.jpg"
                          alt="boots"
                        ></Avatar>
                      </TableCell>
                      <TableCell align="right" style={{ fontColor: "#536DFE" }}>
                        {row.title}
                      </TableCell>
                      <TableCell align="right">{row.subtitle}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">
                        {row.rating}
                        <StarIcon />
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#1de9b6",
                            marginRight: "10",
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "#ff4081" }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
