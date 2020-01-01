import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { ListItem, Typography } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import NavBar from "./NavBar";
import ListItems from "./ListItem";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5)
    // marginLeft: theme.spacing(5),
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <NavBar />
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {[
              "All Students",
              "All Teachers",
              "Batches",
              "Check Performance",
              "Settings"
            ].map(text => (
              <ListItem button key={text}>
                <AccountBoxIcon />
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <Typography paragraph>List Of All The Quizes</Typography>
          <ListItems />
        </main>
      </div>
    </>
  );
}
