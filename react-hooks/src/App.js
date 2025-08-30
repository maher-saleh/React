import logo from './logo.svg';
import './App.css';
import UseState from './hooks/useStateHook';
import { Link, Route, Routes } from 'react-router-dom';
import UseEffectHook from './hooks/useEffectHook';
import UseStateHook from './hooks/useStateHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Hooks in Action</h2>
        <nav>
          <ul>
            <li>
              <Link to="/hooks/useStateHook">useState hook</Link>
              <Link to="/hooks/useEffectHook">useEffect hook</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/hooks/useStateHook" element={<UseStateHook />} />
          <Route path="/hooks/useEffectHook" element={<UseEffectHook />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
