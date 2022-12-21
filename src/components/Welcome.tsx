import { useState } from 'react';
import Prize from "../img/prize.jpeg";
import "../css/main.css";
import { Button } from "@material-ui/core";
import ModalDialog from './ModalDialog';

export default function Welcome() {
	// declare a new state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

	return (
		<>
			<div className="wrapper">
				<h1>Quero Prêmio</h1>
				<p>O nosso objetivo é te encher de prêmios!</p>
				<img src={Prize} alt="Shark Image" width={200} height={200} />
			</div>
			<div className="App">
				<Button variant="contained" color="primary" onClick={handleOpen}>
					Signup
				</Button>
				<ModalDialog open={open} handleClose={handleClose} />
			</div>
		</>
	);
}