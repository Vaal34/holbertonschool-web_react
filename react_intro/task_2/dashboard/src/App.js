import './App.css';
import { getFullYear, getFooterCopy } from "./utils"

function App() {

  const currentYear = getFullYear();
  const footerText = getFooterCopy();
  return (
    <div className="App">
      <div className="App-header">
        <img src={require("./holberton-logo.jpg")} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Enter your email :</label>
        <input type="email" id="email"></input>
        <label for="password">Enter your password :</label>
        <input type="password" id="password"></input>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {currentYear} - {footerText}</p>
      </div>
    </div>
  );
}

export default App;
