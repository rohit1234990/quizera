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
  },
  {
    name: "madhu",
    marks: 41
  }
];

export default class LeaderBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rankedStudents: []
    };
  }

  componentDidMount = () => {
    // initially sort students on marks
    const data = studentData.sort((a, b) => b.marks - a.marks);
    const rankedStudents = this.rank(data);

    this.setState({
      rankedStudents
    });
  };

  rank = data => {
    // rank will start from 1
    let rank = 1;
    const rankedStudents = []; // holds final student names with their ranks and marks
    let runningMarks = data[0].marks;

    let counter = 0;
    for (let i = 0; i < data.length; i += 1) {
      if (runningMarks === data[i].marks) {
        counter += 1;
      } else {
        runningMarks = data[i].marks;
        rank += counter;
        counter = 1; // reset counter
      }
      rankedStudents.push({ rank, name: data[i].name, marks: data[i].marks });
    }

    return rankedStudents;
  };

  render() {
    const { rankedStudents } = this.state;
    return (
      <Grid container justify="center">
        <Grid item sm={6}>
          <Card>
            <CardHeader
              style={{ backgroundColor: "#313F9F", color: "white" }}
              color="white"
              align="left"
              title="Leaderboard"
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
                    <TableCell align="left">
                      <b>Marks</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rankedStudents.map(({ name, rank, marks }) => (
                    <TableRow key={name}>
                      <TableCell align="left">{rank}</TableCell>
                      <TableCell align="left">{name}</TableCell>
                      <TableCell align="left">{marks}</TableCell>
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
