import { LockOutlined } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import InputField from "../../../../components/form-controls/InputField";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },

  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: "center",
  },

  submit: {
      margin: theme.spacing(3, 0, 2, 0),
  },
}));

RegisterForm.propTypes = {};

function RegisterForm(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>

      <form action="">
        <InputField name="fullName" label="fullName" />
        <InputField name="email" label="email" />
        <InputField name="password" label="password" />
        <InputField name="retypePassword" label="retypePassword" />

        <Button className={classes.submit} variant="contained" color="primary" fullWidth>
          Create An Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
