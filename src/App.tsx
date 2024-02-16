import { useState } from 'react'
import './App.css'
import Gotcha from './Gotcha'

function App() {

  const [ showGotcha, setShowGotcha ] = useState<boolean>(false);

  function toggleGotcha() {
    setShowGotcha(value => !value)
  }

  return (
    <>
      <button onClick={toggleGotcha}>Toggle gotcha</button>
      {showGotcha && <Gotcha />}
    </>
  )
}

export default App
