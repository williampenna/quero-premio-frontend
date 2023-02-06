import { Button, TextField, Theme, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { observer } from 'mobx-react';

const useStyles = makeStyles((theme?: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme?.spacing(2),
'& .MuiTextField-root': {
      margin: theme?.spacing(1),
      width: '300px',
    },
'& .MuiButtonBase-root': {
      margin: theme?.spacing(2),
    },
  },
}));

const Form = ({ handleClose }: { handleClose: any }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  onChange (event) {
    this.updateProperty(event.target.name, event.target.value)
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={this.onChange} />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)} />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)} />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)} />
      <div>
        <Button variant="contained">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
}

export default Form;