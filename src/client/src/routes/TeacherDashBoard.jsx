import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);
const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);
function createData(id, name, questions, time, maxMarks) {
  return { id, name, questions, time, maxMarks };
}
const rows = [
  createData(1, "Test 1", 20, 60, 100),
  createData(2, "Test 2", 15, 9, 100),
  createData(3, "Test 3", 20, 16, 100),
  createData(4, "Test 4", 15, 9, 100),
  createData(5, "Test 5", 25, 15, 100)
];
const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});
export default function TeacherDashboard() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item md={2} />
      <Grid item md={8} style={{ marginTop: "15px" }}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Test Name</StyledTableCell>
                <StyledTableCell align="center">
                  Total Questions
                </StyledTableCell>
                <StyledTableCell align="center">
                  Time (In Minutes)
                </StyledTableCell>
                <StyledTableCell align="center">Maximum Marks</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.questions}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.time}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.max_marks}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <p>Publish</p>
                    <p>Add</p>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
