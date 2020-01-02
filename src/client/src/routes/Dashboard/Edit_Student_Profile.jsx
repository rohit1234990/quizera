import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

export default class RecipeReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "rohit@gmail.com",
      name: "Rohit Goyal",
      gender: "Male",
      batch: "Spartans",
      section: "SQL",
      phoneNumber: "9876543210"
    };
  }

  render() {
    const { email, name, gender, batch, section, phoneNumber } = this.state;
    return (
      <Grid container spacing={2}>
        <Grid item md={3} />
        <Grid item md={6} style={{ marginTop: "15px" }}>
          <Card>
            <CardHeader
              avatar={<Avatar alt={name} src="/static/images/avatar/1.jpg" />}
              title={name}
              subheader={batch}
            />

            <Link to="/dash/editProfile">
              <Button
                style={{ margin: "15px" }}
                variant="contained"
                color="primary"
              >
                Change Picture
              </Button>
            </Link>

            <CardContent>
              <Typography
                style={{ margin: "15px" }}
                color="textSecondary"
                component="h4"
              >
                Section: {section}
              </Typography>

              <Typography
                style={{ margin: "15px" }}
                color="textSecondary"
                component="h4"
              >
                Gender: {gender}
              </Typography>

              <Typography style={{ margin: "15px" }}>
                <TextField
                  required
                  id="standard-required"
                  label="Phone Number"
                  defaultValue={phoneNumber}
                />
              </Typography>

              <Typography style={{ margin: "15px" }}>
                <TextField
                  required
                  id="standard-required"
                  label="Email"
                  defaultValue={email}
                />
              </Typography>

              <Link to="/dash/editProfile">
                <Button
                  style={{ margin: "15px" }}
                  variant="contained"
                  color="primary"
                >
                  Update
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
