import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserComponent from './components/UserComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>React, Vite, and Redux</h1>
      <UserComponent />
    </div>
  );
}

export default App
