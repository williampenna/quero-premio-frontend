import Prize from "../img/prize.jpeg";
import "../css/main.css";
import { Button } from "@material-ui/core";
import ModalDialog from './ModalDialog';
import SignupStore from '../store/signup';

export default function Welcome() {
	private signupStore: SignupStore;

  constructor(props) {
    super(props);
    this.signupStore = new SignupStore();
  }

  componentDidMount() {
    this.signupStore.init();
  }

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