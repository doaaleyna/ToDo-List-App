import logo from './logo.svg';
import './App.css';
import LoginForm from './components/loginForm';
import ToDoList from './components/todolistPage';

function App() {
  return (
    <div className="page">
        {/* <LoginForm/> */}
        <ToDoList/>
    </div>
  );
}

export default App;
