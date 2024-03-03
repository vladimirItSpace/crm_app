/* eslint-disable default-case */
import './login-app.scss';
import logo from '../../logo.png';
import { useState } from 'react';


const usersDb = [
    {
        name: 'vladimir',
        password: 'vlad12345'
    },
    {
        name: 'carolina',
        password: 'car12345'
    },
    {
        name: 'daria',
        password: 'dar12345'
    },
]





function LoginApp() {
    const [userDirty, setUserDirty] = useState(false),
        [passwordDirty, setPasswordDirty] = useState(false),
        [logMessage, setLogMessage] = useState(''),

        userError = 'Please input User Name',
        passowrdError = 'Please input Passowrd';





    const checkDataOut = function (e) {
        // Prevent Default event
        e.preventDefault();

        // Set by defult setDirty false, in case of input is filled
        setUserDirty(false);
        setPasswordDirty(false);

        // Create Variables.
        const user = e.target.user.value.trim().toLowerCase(),
            password = e.target.pass.value.trim();

        // Check input if filled and set hook as true. 
        if (user === '') {
            setUserDirty(true)
        }
        if (password === '') {
            setPasswordDirty(true)
        }

        //Function for delete Message
        function eraseMessageDelay() {
            setLogMessage("")
        }


        // Cehck data according to created object.
        for (let index = 0; index < usersDb.length; index++) {
            const element = usersDb[index];

            if (element.name === user && element.password === password) {
                setLogMessage("Login Successful")
                setTimeout(eraseMessageDelay, 1000);
                break;
            } else {
                setLogMessage("Login unSuccessful")
            }

        }

    }


    return (

        <div className='main-block'>
            {/* Logo */}
            <div className='main-block__logo-field'>
                <img className='' src={logo} alt='Logo' />
            </div>
            {/* Tittle */}
            <div className='main-block__text-field'>
                <h3>Welcome Back</h3>
                <p className='error'>Sign in to continue to CRM</p>
                {<div className='main-block__message-field'>{logMessage}</div>}
            </div>
            {/* Form contact */}
            <form className='main-block__form' onSubmit={checkDataOut}>
                <div className="main-block__form_field">
                    <label htmlFor="user">Username</label>
                    {(userDirty) && <div className='main-block__error-field'>{userError}</div>}
                    <input id='user' name="user" type="text" />
                </div>
                <div className="main-block__form_field">
                    <label htmlFor="password">Password</label>
                    {(passwordDirty) && <div className='main-block__error-field'>{passowrdError}</div>}
                    <input id='password' name='pass' type="password" />
                </div>
                <div className="main-block__form_check">
                    <div className="checkbox">
                        <input id='checkbox' type="checkbox" />
                        <label htmlFor="checkbox">Remember me</label>
                    </div>
                    <button>Log In</button>
                </div>
            </form>
        </div>
    );
}

export default LoginApp;
