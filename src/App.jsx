import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [showText, setShowText] = useState(false)

  return (
    <div className="app-container">
      {showText && (
        <h1 className="hello-world">hello world</h1>
      )}
    </div>
  )
}

export default App
