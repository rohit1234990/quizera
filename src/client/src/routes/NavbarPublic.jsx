/* eslint-disable react/prop-types */
import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid black",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  buttonPadding: {
    margin: "10px"
  }
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const NavBar = props => {
  const {
    location: { pathname }
  } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  if (pathname.startsWith("/dash")) return null;
  const handleLogin = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStudentClicked = () => {
    setOpen(false);
    props.history.push("/login");
  };

  const handleTeacherClicked = () => {
    setOpen(false);
    props.history.push("/loginTeacher");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            QuizEra
          </Typography>

          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="contained" color="primary">
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Modal open={open} onClose={handleClose}>
        <Box>
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Login as:</h2>
            <Button
              variant="contained"
              className={classes.buttonPadding}
              color="primary"
              onClick={handleStudentClicked}
            >
              Student
            </Button>
            <Button
              variant="contained"
              className={classes.buttonPadding}
              color="primary"
              onClick={handleTeacherClicked}
            >
              Teacher
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default NavBar;
