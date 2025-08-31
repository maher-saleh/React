
import logo from '../logo.svg';
import { NavLink, Route, Routes } from 'react-router-dom';
import UseEffectHook from '../hooks/useEffect';
import UseStateHook from '../hooks/useState';
import UseRefHook from '../hooks/useRef';
import UseMemoHook from '../hooks/useMemo';
import UseCallbackHook from '../hooks/useCallback';
import UseContextHook from '../hooks/useContext';
import UseReducerHook from '../hooks/useReducer';
import UseLayoutEffect from '../hooks/useLayoutEffect';
import CustomHook from '../hooks/customHook';

export default function Header() {
    console.log('Header rendered');
    
    return (
        <>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Hooks in Action</h2>
            <nav>
            <ul>
                <li>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/hooks/useState">useState</NavLink>
                </li>
                <li>
                <NavLink className={({isActive})=>(isActive ? 'active' : '')} to="/hooks/useEffect">useEffect</NavLink>
                </li>
                <li>
                <NavLink className={({isActive})=>(isActive ? 'active' : '')} to="/hooks/useRef">useRef</NavLink>
                </li>
                <li>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/hooks/useMemo">useMemo</NavLink>
                </li>
                <li>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/hooks/useCallback">useCallback</NavLink>
                </li>
                <li>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/hooks/useContext">useContext</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/hooks/useReducer">useReducer</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/hooks/useLayoutEffect">useLayoutEffect</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/hooks/customHook">customHook</NavLink>
                </li>
            </ul>
            </nav>
        </header>

        <main>
            <Routes>
            <Route path="/hooks/useState" element={<UseStateHook />} />
            <Route path="/hooks/useEffect" element={<UseEffectHook />} />
            <Route path="/hooks/useRef" element={<UseRefHook />} />
            <Route path="/hooks/useMemo" element={<UseMemoHook />} />
            <Route path="/hooks/useCallback" element={<UseCallbackHook />} />
            <Route path="/hooks/useContext" element={<UseContextHook />} />
            <Route path="/hooks/useReducer" element={<UseReducerHook />} />
            <Route path="/hooks/useLayoutEffect" element={<UseLayoutEffect />} />
            <Route path="/hooks/customHook" element={<CustomHook />} />
            </Routes>
        </main>
      </>
    );
}
