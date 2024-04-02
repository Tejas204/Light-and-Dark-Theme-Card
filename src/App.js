import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import { useState } from 'react';

function App() {

  // Hook: Set light theme or dark theme
  const[theme, setTheme] = useState('light');

  return (
    <div className={`justify-center transition ease-in-out duration-500 ${theme == 'light' ? 'parent-light' : 'parent-dark'}`}>
      <Card setTheme={setTheme} theme={theme}></Card>
    </div>
  );
}

export default App;
