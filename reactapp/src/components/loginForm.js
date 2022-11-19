import React from "react";
import "./loginForm.css"

const LoginForm = () => {
    return (
         <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>

            <div className="login-btn">Login</div>
            
         </div>
    )
}

export default LoginForm
