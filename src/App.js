import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import { useState } from 'react';

function App() {

  // Hook: Set light theme or dark theme
  const[theme, setTheme] = useState('');

  return (
    <div className={`justify-center`}>
      <Card setTheme={setTheme} theme={theme}></Card>
    </div>
  );
}

export default App;
