import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
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

function createData(id, name, questions, correct, marks) {
  return { id, name, questions, correct, marks };
}

const rows = [
  createData(1, "Test 1", 20, 6, 24),
  createData(2, "Test 2", 15, 9, 36),
  createData(3, "Test 3", 20, 16, 64),
  createData(4, "Test 4", 15, 9, 36),
  createData(5, "Test 5", 25, 15, 60)
];

function chartData(id, country, area) {
  return { id, country, area };
}

const dataChart = [
  chartData(1, 100, "Total"),
  chartData(2, 50, "1st"),
  chartData(3, 51, "2nd"),
  chartData(4, 52, "3rd"),
  chartData(5, 45, "4th"),
  chartData(6, 76, "6th"),
  chartData(7, 25, "7th"),
  chartData(1, 100, "Total1"),
  chartData(2, 50, "1st1"),
  chartData(3, 51, "2nd1"),
  chartData(4, 52, "3rd1"),
  chartData(5, 45, "4th1"),
  chartData(6, 76, "6th1"),
  chartData(7, 25, "7th1")
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function CustomizedTables() {
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
                <StyledTableCell align="center">Correct</StyledTableCell>
                <StyledTableCell align="center">Marks</StyledTableCell>
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
                  <StyledTableCell align="center">
                    {row.correct}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.marks}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div style={{ margin: "50px" }}>
          <Paper>
            <Chart data={dataChart}>
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries valueField="country" argumentField="area" />
              <Title text="Test Performances" />
              <Animation />
            </Chart>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}
