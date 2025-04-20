import React, { useState } from 'react';
import './Style.scss';
import { useScreen } from '../NTARouting';
import { currentUser } from '../sampleData';

const Login = (props) => {
    const [username, setUsername] = useState(currentUser.rollNumber);
    const [password, setPassword] = useState(currentUser.password);

    const handleSubmit = (e) => {
        e.preventDefault();
        let isLoginSuccessful = false;
        console.log('Username:', username);
        console.log('Password:', password);
        if(username === currentUser.rollNumber && password === currentUser.password){
            isLoginSuccessful = true;
          }
          
        if(isLoginSuccessful){
         props.nextScreen(useScreen.Welcome);
        }
    };

    return (
        <div className="login-page">
            <header className="login-header">
                <img src="/logo.png" alt="Logo" className="logo" />
                <h1 className="header-title">Student Login</h1>
            </header>

            <div className="login-container">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="username">Username</label>
                  
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;
