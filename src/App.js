import './App.css';
import Login from "./Login"
import Menu from "./Menu"

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className="App">
      {code ? <Menu code={code} /> : <Login />}
    </div>
  );
}

export default App;
