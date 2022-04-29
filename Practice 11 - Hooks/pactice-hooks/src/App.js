import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock/clock';
import Example from './components/Example/example';
import LoginForm from './components/LoginForm/login-form';

function App() {
  return (
    <div className="App">
      <Clock></Clock>
      <Example></Example>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
