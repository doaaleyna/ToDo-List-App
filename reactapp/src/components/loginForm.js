import React,{useState} from "react";
import "./loginForm.css"

function LoginForm({Login,error}) {

    const [details,setDetails] = useState({email:"",password:""});

    const submitHandler = (e) => {
        e.preventDefault();
        Login(details);
    }

    return (
         <form className="cover" onSubmit={submitHandler}>
            <h1>Login</h1>
            {(error != "") ? (<div className="error">{error}</div>): ""}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={e => setDetails({...details,email:e.target.value})} value={details.email}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={e => setDetails({...details,password:e.target.value})} value={details.password}/>
            <button className="login-btn" type="submit">Login</button>
         </form>
    )
}

export default LoginForm;