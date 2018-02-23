import React, {PropTypes} from "react";
import Link from 'react-router';

const SignUpForm=({
	onSubmit,
	onChange,
	errors, 
	user,
})=>(
	<div class='container'>
		<form action='/' onSubmit={onSubmit}>
			<h2 class='card-heading'>Sign Up</h2>
				{errors.summary && <p class='error-message'>{errors.summary}</p>} 
			<div class='field-line'>
				<TextField
					floatingLabelText= 'Name'
					name= 'name'
					errorText= {errors.name}
					onChange={onChange}
					value={user.name}
				/>
			</div>

			<div class='field-line'>
				<TextField
					floatingLabelText= 'Password'
					type= 'password'
					name= 'password'
					errorText= {errors.password}
					onChange={onChange}
					value={user.password}
				/>
			</div>
			<div class='button-line'>
				<button type='submit' label='Create New Account'></button>
			</div>
			<p>Already have an account? <Link to={'/login'}>Log In</Link></p>
		</form>
	</div>
);

SignUpForm.protoTypes= {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
};

export default SignUpForm;
