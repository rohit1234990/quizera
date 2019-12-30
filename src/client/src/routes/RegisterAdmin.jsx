import React from "react";
import Card from "@material-ui/core/Card";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

export default class RegisterAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin_email: "",
      admin_password: "",
      admin_name: "",
      admin_phone_number: ""
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
    // axios.post('http://localhost:5000/signupAdmin',{
    //     admin_email: this.state.email,
    //     admin_password: this.state.password,
    //     admin_name: this.state.name,
    //     admin_phone_number: this.state.phone_number
    // })
    // .then(a => {
    //     console.log(a)
    //     if(a.data["Status"] === false){
    //         alert("Email already present. Please login")
    //         this.props.history.push("/login")

    //     }
    //     else{
    //         console.log(a.data)
    //         localStorage.setItem('data', JSON.stringify(a.data))
    //         this.props.history.push("/login")
    //     }
    // })
    // .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row justify-content-center">
        <Card className="m-5 p-5">
          <CardHeader
            style={{ backgroundColor: "#313F9F" }}
            className="p-2 pl-5 pr-5 text-white rounded-pill text-center"
            title="Register as an Admin"
          />
          <br />
          <CardContent>
            <Form>
              <TextField
                name="admin_name"
                onChange={e => this.handleChange(e)}
                type="text"
                label="Enter Your Full Name"
              />
              <br />
              <TextField
                className="mt-2"
                name="admin_email"
                onChange={e => this.handleChange(e)}
                type="email"
                label="Enter Email"
              />
              <br />
              <TextField
                className="mt-2"
                name="admin_password"
                onChange={e => this.handleChange(e)}
                type="password"
                label="Enter Password"
              />
              <br />
              <TextField
                className="mt-2"
                name="admin_phone_number"
                onChange={e => this.handleChange(e)}
                type="number"
                label="Enter Phone Number"
              />
              <br />
              <Button
                className="mt-4"
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </CardContent>
        </Card>
      </div>
    );
  }
}
