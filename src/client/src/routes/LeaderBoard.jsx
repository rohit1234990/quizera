import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { CardHeader, CardContent } from "@material-ui/core";

const studentData = [
  {
    name: "rishabh",
    marks: 40
  },
  {
    name: "rohit",
    marks: 40
  },
  {
    name: "amit",
    marks: 30
  }
];

export default class LeaderBoard extends Component {
  constructor() {
    super();
    this.state = {
      rankedStudents: [
        { name: "rohit", rank: 1, marks: 35 },
        { name: "mohit", rank: 2, marks: 30 }
      ]
    };
  }

  // componentDidMount() {}

  render() {
    const { rankedStudents } = this.state;
    console.log(studentData);
    return (
      <Grid container justify="center">
        <Grid item sm={6}>
          <Card>
            <CardHeader
              style={{ backgroundColor: "#313F9F", color: "white" }}
              color="white"
              align="left"
              title="LeaderBoard"
            />
            <CardContent>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      <b>Rank</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Name</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rankedStudents.map(({ name, rank }) => (
                    <TableRow key={name}>
                      <TableCell align="left">{rank}</TableCell>
                      <TableCell align="left">{name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
