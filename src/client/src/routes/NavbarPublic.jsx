/* eslint-disable react/prop-types */
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      location: { pathname }
    } = this.props;
    const classes = useStyles();

    if (pathname.startsWith("/dash")) return null;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              QuizEra
            </Typography>

            <Button variant="contained" color="primary">
              Login
            </Button>
            <Button variant="contained" color="primary">
              Register
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
