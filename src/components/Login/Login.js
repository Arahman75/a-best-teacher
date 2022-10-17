import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
   

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle] = useSignInWithGoogle(auth);


    const handleEmailBlur = event =>{
       setEmail(event.target.value)
    } 
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    } 

if(user){
// navigate('/home');
navigate(from, {replace: true});
}

    const handleFormSubmit =(event)=>{
event.preventDefault();
signInWithEmailAndPassword(email, password);
// console.log(email, password);
    }
const handleGoogleSignIn=()=>{
    signInWithGoogle()
}


    return (

        <div className="form-container">
            <div>
                <h2 className='form-title'>Please Login</h2>
                <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
      </Form.Group>
      <p>Are you new user? <Link to="/register">Please Register</Link></p>
      {
        loading && <p>Loading....</p>
      }
      <p style={{color:'red'}}>{error?.message}</p>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
            
            </div>

            <Button className='mt-5' onClick={handleGoogleSignIn} variant='info'>Google Sign In</Button>

        </div>


    );
};

export default Login;