import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Results from './components/Results'
import Routes from './components/Routes'
import Search from './components/Search'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
      <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>      
      <Search/>
      <Results/>
      </div>
      <Routes/>
    </div>
  )
}

export default App
