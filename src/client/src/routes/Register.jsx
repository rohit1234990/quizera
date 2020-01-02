import React from "react";
import Card from "@material-ui/core/Card";
import { FormGroup, Button } from "@material-ui/core/";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default class RegisterAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      position: ""
    };
  }

  handleChange(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item md={5} />

        <Grid item md={3}>
          <Card>
            <CardHeader
              style={{ backgroundColor: "#313F9F", color: "white" }}
              color="white"
              align="center"
              title="Register Now"
            />
            <br />
            <CardContent>
              <FormGroup onSubmit={e => this.handleSubmit(e)}>
                <TextField
                  name="name"
                  onChange={e => this.handleChange(e)}
                  type="text"
                  label="Enter Your Full Name"
                />
                <br />
                <TextField
                  name="email"
                  onChange={e => this.handleChange(e)}
                  type="email"
                  label="Enter Email"
                />
                <br />
                <TextField
                  name="password"
                  onChange={e => this.handleChange(e)}
                  type="password"
                  label="Enter Password"
                />
                <br />
                <FormControl>
                  <InputLabel id="demo-simple-select-helper-label">
                    Register As
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    name="position"
                  >
                    <MenuItem value="Teacher">Teacher</MenuItem>
                    <MenuItem value="Student">Student</MenuItem>
                  </Select>
                  <FormHelperText>
                    Please Select the Applicable Option
                  </FormHelperText>
                </FormControl>
                <br />
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </FormGroup>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
