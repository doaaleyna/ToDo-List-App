import React,{ useState } from 'react';
import './App.css';
import LoginForm from './components/loginForm';
import ToDoList from './components/todolistPage';


function App() {

  const adminUser = {
    email: "admin@admin.com",
    password:"admin123"
  }

  const [user,setUser] = useState({email:""});
  const [error,setError] = useState(""); //Hataları yakalamak için

  const Login = details => {
     console.log(details);

     if(details.email == adminUser.email && details.password == adminUser.password){
        console.log("Logged in");
        setUser({
          email:details.email
        })
     }else{
      setError("Details do not match!");
     }
  }

  const Logout = () => {
     setUser({email:""})
  }
   
  return (
    <div className="page">
        {(user.email != "") ? (
          <div className='welcome'>
            <ToDoList/>
            {/* <h2>Welcome,<span>{user.email}</span></h2> */}
            {/* <button onClick={Logout}>Logout</button> */}
          </div>
        ):(
          <LoginForm Login={Login} error={error}/>
        )}
    </div>
  );
}

export default App;
