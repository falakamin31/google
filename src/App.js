import React, { useState } from 'react'
import NavBar from './components/NavBar'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
      <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>      
      </div>
    </div>
  )
}

export default App
