import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='/logo.gif'></img>
      </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Messages </div>
      </nav>
      <div className='content'>Main content</div>
    </div>
  );
}

export default App;