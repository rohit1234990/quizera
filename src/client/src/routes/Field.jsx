import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
      marginLeft: theme.spacing(5)
    }
  }
}));

const Field = props => {
  const classes = useStyles();
  const { type } = props;
  // console.log(type);
  return (
    <div>
      <div className={classes.root} noValidate autoComplete="off">
        {type === "1" ? (
          <>
            <TextField id="standard-basic" label="Option A" variant="filled" />
            <TextField id="standard-basic" label="Option B" variant="filled" />
            <TextField id="filled-basic" label="Option C" variant="filled" />
            <TextField id="filled-basic" label="Option D" variant="filled" />
          </>
        ) : (
          <>
            <TextField id="standard-basic" label="True" variant="filled" />
            <TextField id="standard-basic" label="False" variant="filled" />
          </>
        )}
      </div>
    </div>
  );
};
Field.propTypes = {
  type: PropTypes.string.isRequired
};
export default Field;
