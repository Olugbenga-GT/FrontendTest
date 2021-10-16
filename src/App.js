import logo from './logo.svg';
import gastt from './asset/gastt.jpg'
import icon from './asset/icon.svg'
import hot from './asset/hot.svg'
import community from './asset/community.svg'
import bag from './asset/bag.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={gastt} className="App-logo" alt="logo" />
        <img src={bag} className="App-logo" alt="logo" />
        <img src={icon} className="App-logo" alt="logo" />
        <img src={community} className="App-logo" alt="logo" />
        <img src={hot} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
