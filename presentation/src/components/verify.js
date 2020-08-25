import React, {useState} from 'react';
// import {BrowserRouter }

const Verify = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailTaken, setEmailTaken] = useState(false);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [signup, setSignup] = useState(true);
    const [remember, setRemember] = useState(true);

    const [emailLI, setEmailLI] = useState('');
    const [passwordLI, setPasswordLI] = useState('');
    const [emailPasswordValid, setEmailPasswordLI] = useState(true);

    const handleClick = () => {

    }

    return (
        <div className='signup'> {signup ?
            (<form>
                <h2>Sign up</h2>
                <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Name' value={name} onChange={({target}) => setName(target.value)} required/>
                </div>
                <div className='form-group'>
                    <input type='email' className='form-control' placeholder='Email' value={email} onChange={({target}) => setEmail(target.value)} required/>
                    {emailTaken ? <small className='bright-red'>Email already in use</small> : <></>}
                </div>
                <div className='form-group'>
                    <input type='password' className='form-control' placeholder='Password' value={password1} onChange={({target}) => setPassword1(target.value)} required />
                </div>
                <div className='form-group'>
                    <input type='password' className='form-control' placeholder='Confirm password' value={password2} onChange={({target}) => setPassword2(target.value)} required />
                    {passwordsMatch ? <></> : <small className='bright-red'>Passwords do not match</small>}
                </div>
                <div className='form-check'>
                    <input type='checkbox' className='form-check-input' checked={remember} onChange={({target}) => setRemember(!target.value)} /> {' Keep me signed in'}
                </div>
                <button className='btn btn-primary' onClick={handleClick}>Register</button>
                <p onClick={() => setSignup(false)}>Already have an account?</p>
            </form>) :
            (<form>
                <h2>Log in</h2>
                <div className='form-group'>
                    <input type='email' className='form-control' placeholder='Email' value={emailLI} onChange={({target}) => setEmailLI(target.value)} required/>
                </div>
                <div className='form-group'>
                    <input type='password' className='form-control' placeholder='Password' value={passwordLI} onChange={({target}) => setPasswordLI(target.value)} required />
                    {emailPasswordValid ? <></> : <small className='bright-red'>Email and password not valid</small>}
                </div>
                <div className='form-check'>
                    <input type='checkbox' className='form-check-input' checked={remember} onChange={({target}) => setRemember(!target.value)} /> {' Keep me signed in'}
                </div>
                <button className='btn btn-primary' onClick={handleClick}>Log in</button>
                <p onClick={() => setSignup(true)}>Sign up here</p>
            </form>)
            }
        </div>
    )
}

export default Verify;