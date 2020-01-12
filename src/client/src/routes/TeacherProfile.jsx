import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

export default class TeacherProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "abc@gmail.com",
      name: "abc",
      gender: "abc",
      department: "Maths",
      location: "blr",
      phoneNumber: "9876543210"
    };
  }

  render() {
    const {
      email,
      name,
      gender,
      department,
      location,
      phoneNumber
    } = this.state;
    return (
      <Grid container spacing={4}>
        <Grid item md={3} />
        <Grid item md={6} style={{ marginTop: "50px", alignContent: "center" }}>
          <Card>
            <CardHeader
              avatar={<Avatar alt={name} src="/static/images/avatar/1.jpg" />}
              title={name}
              subheader={location}
            />
            <CardContent>
              <Typography
                style={{ margin: "15px" }}
                color="dark"
                component="h4"
              >
                Department: {department}
              </Typography>
              <Typography
                style={{ margin: "15px" }}
                color="dark"
                component="h4"
              >
                Gender: {gender}
              </Typography>
              <Typography
                style={{ margin: "15px" }}
                color="dark"
                component="h4"
              >
                Phone Number: {phoneNumber}
              </Typography>
              <Typography
                style={{ margin: "15px" }}
                color="dark"
                component="h4"
              >
                Email: {email}
              </Typography>
              <Link to="/editteacherprofile">
                <Button
                  style={{ margin: "15px" }}
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
