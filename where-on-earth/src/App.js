import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <form>
          <div>
            <input type="text" placeholder="Where On Earth?"/>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
