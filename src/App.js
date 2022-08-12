import Login from "./components/Login/Login.js"
import Menu from "./components/Menu"

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className="App">
      {code ? <Menu code={code} /> : <Login />}
    </div>
  );
}

export default App;
