import './App.css';
import Login from './components/login/login';
import Signup from './components/signup/signup';

function App() {
  return (
    <>
      <h2>SignUp Section</h2>
      <Signup />
      <h2>Login Section</h2>
      <Login />
    </>
  );
}

export default App;
