import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import ProfileManager from './components/ProfileManager';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My App</h1>
      <ProfileManager />
    </>
  )
}

export default App
