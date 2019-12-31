import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";

export default class CreateTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test_name: "",
      branch: "",
      section: "",
      jumbled: "",
      question_type: "",
      startHrs: null,
      startMins: null
    };
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });

    console.log(this.state);
  }

  render() {
    console.log(this.state);
    const hrs = [];
    const mins = [];

    for (let i = 0; i < 24; i + 1) {
      if (i.toString().length === 1) {
        const x = `0${i}`;
        hrs.push(x);
      } else hrs.push(i);
    }

    for (let i = 0; i < 60; i + 1) {
      if (i.toString().length === 1) {
        const x = `0${i}`;
        mins.push(x);
      } else mins.push(i);
    }
    return (
      <div style={{ marginLeft: "180px", marginRight: "200px" }}>
        <div className="m-5 justify-content-center">
          <Card className="m-5 p-5">
            <CardHeader
              style={{ backgroundColor: "#313F9F" }}
              className="p-2 pl-5 pr-5 mb-5 text-white rounded-pill text-center"
              title="Create Test"
            />
            <TextField
              id="outlined-full-width"
              label="Title"
              style={{ margin: 4, marginBottom: 25 }}
              placeholder="Test Title"
              fullWidth
              margin="normal"
              name="test_name"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              onChange={e => this.handleChange(e)}
            />
            <div className="row mb-5">
              <div className="col">
                <FormControl fullWidth>
                  <InputLabel htmlFor="age-native-simple">Hours</InputLabel>
                  <Select name="startHrs" onChange={e => this.handleChange(e)}>
                    <option>Select...</option>
                    {hrs.map(ele => (
                      <option value={ele}>{ele}</option>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="col" md={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="age-native-simple">Mins</InputLabel>
                  <Select name="startMins" onChange={e => this.handleChange(e)}>
                    <option>Select...</option>
                    {mins.map(ele => (
                      <option value={ele}>{ele}</option>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <FormControl component="fieldset">
              <FormLabel component="legend">Jumbled Question:</FormLabel>
              <RadioGroup>
                <div className="row">
                  <FormControlLabel
                    value="Yes"
                    name="jumbled"
                    control={<Radio color="primary" />}
                    label="Yes"
                    labelPlacement="start"
                    onChange={e => this.handleChange(e)}
                  />
                  <FormControlLabel
                    value="No"
                    name="jumbled"
                    control={<Radio color="primary" />}
                    label="No"
                    labelPlacement="start"
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </RadioGroup>
            </FormControl>
            <br />

            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Branch</InputLabel>
              <Select
                native
                onChange={e => this.handleChange(e)}
                name="branch"
                id="age-native-simple"
                style={{ marginBottom: 25 }}
              >
                <option value="">Select...</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Section</InputLabel>
              <Select
                native
                onChange={e => this.handleChange(e)}
                name="section"
                id="age-native-simple"
                style={{ marginBottom: 25 }}
              >
                <option value="">Select...</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Question Type</InputLabel>
              <Select
                native
                onChange={e => this.handleChange(e)}
                name="question_type"
                id="age-native-simple"
                style={{ marginBottom: 25 }}
              >
                <option value="">Select...</option>
                <option value={10}>Objective</option>
                <option value={20}>subjective</option>
              </Select>
            </FormControl>
            <div className="text-center">
              <Button
                className="mt-5 text-white"
                variant="contained"
                type="submit"
                style={{ backgroundColor: "#313F9F" }}
              >
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
