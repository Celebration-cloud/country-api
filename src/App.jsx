import './App.css'
import Navbar from './Navbar/Navbar'
import TheBody from './The-body/TheBody'
import { useState } from 'react'

function App() {
  const [turn, setTurn] = useState(true)
  const handleSwitch = (toggle) => {
    setTurn(toggle.check)
  }
  return (
    <div style={turn === false ? {backgroundColor: "hsl(207, 26%, 17%)"}: {}}>
      <Navbar turn={turn} handleSwitch={handleSwitch} />
      <TheBody turn={turn} />
    </div>
  );
}

export default App
