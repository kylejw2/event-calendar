import React, {useState} from 'react';
import bcrypt from 'bcryptjs';
import { setItem } from '../config/local';

// import {BrowserRouter }

const Verify = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailTaken, setEmailTaken] = useState(false);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [signup, setSignup] = useState(true);
    const [remember, setRemember] = useState(true);
    const [invalidInput, setInvalidInput] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    const [emailLI, setEmailLI] = useState('');
    const [passwordLI, setPasswordLI] = useState('');
    const [emailPasswordValid, setEmailPasswordLI] = useState(true);

    const salt = bcrypt.genSaltSync(10);

    const formValidation = () => {
        if (name === '' || email === '' || password1 === '') {
            setInvalidInput(true);
            return true;
        }
        if (!/@/.test(email)) {
            setInvalidEmail(true);
            return true;
        }
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        if (password1 !== password2) {
            setPasswordsMatch(false);
            return;
        }
        if (formValidation()) {
            return;
        }
        setInvalidInput(false);
        setPasswordsMatch(true);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name, 
                email: email, 
                password: bcrypt.hashSync(password1, salt),
                events: []
            })
        }
        const data = await fetch(`${process.env.REACT_APP_API_URL}/users/register`, options);
        if (data.status === 401) {
            setEmailTaken(true);
        } else {
            setEmailTaken(false);
            if (remember) {
                setItem('auth', data.headers.get('auth'));
            }
            props.handleSuccessfulAuth(data.headers.get('auth'));
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailLI,
                password: passwordLI
            })
        }
        const data = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, options);
        if (data.status === 401) {
            setEmailPasswordLI(false);
        } else {
            if (remember) {
                setItem('auth', data.headers.get('auth'));
            }
            props.handleSuccessfulAuth(data.headers.get('auth'));
        }
    }

    const handleRemember = () => {
        setRemember(!remember)
    }

    return (
        <div className='signup'> {signup ?
            (<form>
                <div>
                <h2 className="signup-login-title">Sign up</h2>
                </div>
                <hr />
                <div className='form-group' style={{marginTop: '35px'}}>
                    <input type='text' className='form-control' placeholder='Name' value={name} onChange={({target}) => setName(target.value)} required/>
                </div>
                <div className='form-group'>
                    <input type='email' className='form-control' placeholder='Email' value={email} onChange={({target}) => setEmail(target.value)} required/>
                    {emailTaken ? <small className='bright-red'>Email already in use</small> : <></>}
                    {invalidEmail ? <small className='bright-red'>Email invalid</small> : <></>}
                </div>
                <div className='form-group'>
                    <input type='password' className='form-control' placeholder='Password' value={password1} onChange={({target}) => setPassword1(target.value)} required />
                </div>
                <div className='form-group'>
                    <input type='password' className='form-control' placeholder='Confirm password' value={password2} onChange={({target}) => setPassword2(target.value)} required />
                    {passwordsMatch ? <></> : <small className='bright-red'>Passwords do not match</small>}
                    {invalidInput ? <small className='bright-red'>All fields are required</small> : <></>}
                </div>
                <div className='form-check'>
                    <input type='checkbox' className='form-check-input' checked={remember} onChange={handleRemember} /> {' Keep me signed in'}
                </div>
                <hr />
                <div className='signup-login-btn'>
                <button className='btn btn-primary' onClick={handleRegister}>Sign up</button>
                <p className="login-register" onClick={() => {
                    setName('');
                    setEmail('');
                    setPassword1('');
                    setPassword2('');
                    setPasswordsMatch(true);
                    setSignup(false);
                }}>Already have an account?</p>
                </div>
            </form>) :
            (<form>
                <div>
                <h2 className='signup-login-title'>Log in</h2>
                </div>
                <hr />
                <div className='form-group' style={{marginTop: '35px'}}>
                    <input type='email' className='form-control' placeholder='Email' value={emailLI} onChange={({target}) => setEmailLI(target.value)} required/>
                </div>
                <div className='form-group'>
                    <input type='password' className='form-control' placeholder='Password' value={passwordLI} onChange={({target}) => setPasswordLI(target.value)} required />
                    {emailPasswordValid ? <></> : <small className='bright-red'>Email and password not valid</small>}
                </div>
                <div className='form-check'>
                    <input type='checkbox' className='form-check-input' checked={remember} onChange={handleRemember} /> {' Keep me signed in'}
                </div>
                <hr />
                <div className='signup-login-btn'>
                <button className='btn btn-primary' onClick={handleLogin}>Log in</button>
                <p className='login-register' onClick={() => {
                    setEmailLI('');
                    setEmailPasswordLI(true);
                    setPasswordLI('');
                    setSignup(true);
                }}>Sign up here</p>
                </div>
            </form>)
            }
        </div>
    )
}

export default Verify;