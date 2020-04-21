// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Dialog from "@material-ui/core/Dialog";
// import Typography from "@material-ui/core/Typography";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";

// const useStyles = makeStyles({
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600],
//   },
// });

// export default function Settings(props) {
//   const classes = useStyles();

//   const { setSelectedValue } = props;
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectValue] = React.useState(1);
//   const [value, setValue] = React.useState("blue");

//   const handleListItemClick = (value) => {
//     onClose(value);
//   };

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value) => {
//     setOpen(false);
//     // setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Dialog
//         onClose={handleClose}
//         aria-labelledby="simple-dialog-title"
//         open={open}
//       >
//         <Typography variant="subtitle1">Color Theme</Typography>
//         <br />
//         <FormControl component="fieldset">
//           <RadioGroup
//             aria-label="gender"
//             name="color"
//             value={value}
//             onChange={handleChange}
//           >
//             <FormControlLabel value="blue" control={<Radio />} />
//             <FormControlLabel value="pink" control={<Radio />} />
//             <FormControlLabel value="green" control={<Radio />} />
//           </RadioGroup>
//         </FormControl>
//       </Dialog>
//     </div>
//   );
// }
