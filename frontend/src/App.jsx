import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!</h1>
      <Sidebar />
    </>
  )
}

export default App
