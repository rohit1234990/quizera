import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="mt-5" style={{ 
       display: 'flex',
       marginTop:'100px',
       flexDirection: 'column',
       alignItems: 'center' }}>
        <Avatar className="m-1" style={{ backgroundColor: "#f44336", }}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className=" " style={{ width: '100%', // Fix IE 11 issue.
                      marginTop: '20px'}} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            onChange={e => this.handleChange(e)}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={e => this.handleChange(e)}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={this.handlSubmit}
            color="primary"
          
            className=" " style={{ margin: (3, 0, 2) }}>
            Login In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" className="mt-5">
                Forgot password?
              </Link>
            </Grid>
            <Grid item className="mt-5">
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
}