import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

export default class TestDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} style={{ margin: 3, border: 2 }}>
            <Box
              border={2}
              style={{ borderColor: "#42a5f5", borderRadius: 10 }}
            >
              <Paper
                style={{
                  spacing: 2,
                  textAlign: "left",
                  height: 700,
                  border: 1
                }}
              >
                <Typography variant="h6" align="center">
                  <b>Total Marks Scored : </b>
                </Typography>
                <Typography variant="h6" align="center">
                  <b>Rank : </b>
                </Typography>
                <Typography variant="h6">
                  <b>Test Name : </b>
                </Typography>
                <Typography variant="h6">
                  <b>Date of Test : </b>
                </Typography>
                <Typography variant="h6">
                  <b>Start Time of Test : </b>
                </Typography>
                <Typography variant="h6">
                  <b>Total Number of Questions : </b>
                </Typography>
                <Typography variant="h6">
                  <b>Total Marks of Test : </b>
                </Typography>
                <Typography variant="h6" gutterBottom>
                  <b>Name of Student : </b>
                </Typography>
                <Typography variant="h6" gutterBottom>
                  <b>List of Questions : </b>
                </Typography>
                <Box border={1} style={{ margin: 1, border: 2 }}>
                  <Paper
                    style={{
                      spacing: 2,
                      textAlign: "left",
                      height: 250,
                      width: 620,
                      border: 2
                    }}
                  />
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box border={1} style={{ borderColor: "black", borderRadius: 10 }}>
              <Paper
                style={{
                  backgroundColor: "#cbcbb7",
                  spacing: 2,
                  textAlign: "left",
                  height: 500,
                  border: 1
                }}
              >
                <Typography variant="h5" align="center">
                  No. of Students attended the test:
                </Typography>
                <TableContainer>
                  <Table
                    style={{ minWidth: 100 }}
                    aria-label="customized table"
                  >
                    <TableHead style={{ width: 200 }}>
                      <TableRow>
                        <StyledTableCell align="center">No.</StyledTableCell>
                        <StyledTableCell align="center">
                          Student Name
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell align="center">1</StyledTableCell>
                        <StyledTableCell align="center">ABC</StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}
