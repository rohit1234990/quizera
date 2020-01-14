import React from "react";
import Card from "@material-ui/core/Card";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {email,password} = this.state
    const data = {
      email,
      password
    };
  }

  render() {
    return (
      <div className="row justify-content-center">
        <Card className="m-5 p-5">
          <CardHeader
            style={{ backgroundColor: "#313F9F" }}
            className="p-2 pl-5 pr-5 text-white rounded-pill text-center"
            title="Login"
          />
          <br />
          <CardContent>
            <Form>
              <TextField
                name="email"
                onChange={e => this.handleChange(e)}
                type="email"
                label="Enter Email"
              />
              <br />
              <TextField
                className="mt-3"
                name="password"
                onChange={e => this.handleChange(e)}
                type="email"
                label="Enter Password"
              />
              <br />

              <Button
                className="mt-5"
                variant="contained"
                color="primary"
                type="submit"
                onClick={this.handleSubmit}
              >
                Login
              </Button>
            </Form>
          </CardContent>
        </Card>
      </div>
    );
  }
}
