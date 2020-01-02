import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";

function ListItems() {
  return (
    <div>
      <List>
        {["Quiz 1", "Quiz 2", "Quiz 3"].map(item => {
          return (
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
          );
        })}
      </List>
      <TablePagination
        component="nav"
        page={0}
        rowsPerPage={10}
        count={100}
        onChangePage={() => {}}
      />
    </div>
  );
}

export default ListItems;
