import { action, observable } from 'mobx';
import SignupModel from '../model/signup';
 
export default class SignupStore {
    @observable
    signup: SignupModel = {};

    private signupAPI = 'https://localhost:44308/api/signup';

    @action.bound
    async init() {
			let response = await fetch(this.signupAPI);
			let newSignup: SignupModel = await response.json();
			this.addSignupToStore(newSignup);
    }

		@action.bound
		addSignupToStore(signup: SignupModel) {
			this.signup = signup;
		}

		@action.bound
		getSignup() {
			return this.signup;
		}

		@action.bound
		async addSignup(firstName: string, lastName: string, email: string, password: string) {
			let response = await fetch(this.signupAPI, {
				method: 'Post',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ firstName, lastName, email, password }),
			});
			let createdUser = await response.json();
			this.addSignupToStore(createdUser);
		}
}
