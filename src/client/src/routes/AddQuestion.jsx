import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import Button from "@material-ui/core/Button";
// import MenuItem from '@material-ui/core/MenuItem';
import Field from "./Field";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 700,
      marginRight: theme.spacing(5)
    }
  }
}));

const AddQuestion = () => {
  const classes = useStyles();
  const [questionType, setQuestionType] = React.useState([]);
  const [type, setType] = React.useState("null");

  useEffect(() => {
    setQuestionType([
      {
        value: "1",
        QuestionType: "MCQ"
      },
      {
        value: "2",
        QuestionType: "Boolean"
      },
      {
        value: "3",
        QuestionType: "One Word"
      }
    ]);
  }, []);
  return (
    <div>
      <div
        style={{
          marginLeft: "180px",
          marginRight: "200px",
          marginTop: "30px",
          padding: "20px"
        }}
      >
        <div style={{ margin: 5, textAlign: "center" }}>
          <Card style={{ margin: 5, padding: "20px" }}>
            <CardHeader
              style={{
                backgroundColor: "#313F9F",
                padding: 5,
                color: "white",
                marginBottom: 50
              }}
              className="rounded-pill text-center"
              title="Add Question"
            />
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Question Type</InputLabel>
              <Select
                onChange={event => setType(event.target.value)}
                name=""
                id="age-native-simple"
                style={{ marginBottom: 25 }}
              >
                {questionType.map(({ value, QuestionType }) => {
                  return <option value={value}>{QuestionType}</option>;
                })}
              </Select>
            </FormControl>
            {type !== "null" ? (
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Add Questions"
                  variant="filled"
                />
                {type !== "3" ? <Field type={type} /> : null}
                <TextField
                  id="standard-basic"
                  label="Add Answer"
                  variant="filled"
                />
                <TextField
                  id="filled-basic"
                  label="Add Marks"
                  variant="filled"
                />
              </form>
            ) : (
              <h1>Please Select Question Type</h1>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
