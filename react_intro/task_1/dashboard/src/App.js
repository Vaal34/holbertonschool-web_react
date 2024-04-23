import './App.css';
import { getFullYear, getFooterCopy } from "../../../task_1/dashboard/src/utils"

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
      </div>
      <div className="App-footer">
        <p>Copyright {currentYear} - {footerText}</p>
      </div>
    </div>
  );
}

export default App;
