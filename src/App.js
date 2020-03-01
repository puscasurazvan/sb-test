import React, { useState, lazy, Suspense } from 'react'

import './App.scss'

const Todo = lazy(() => import('./components/Todo'))
const Avatar = lazy(() => import('./components/Avatar'))

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const setLoginState = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <div className="App">
      {loggedIn ? (
        <Suspense fallback={'Loading...'}>
          <div className="wrapper">
            <div className="left">
              <Avatar name="Razvan Puscasu" />
            </div>
            <div className="right">
              <Todo />
            </div>
          </div>
        </Suspense>
      ) : (
        <>
          <Suspense fallback={'Loading...'}>
            <Avatar name="Razvan Puscasu" />
            <button onClick={setLoginState}>Log in</button>
          </Suspense>
        </>
      )}
    </div>
  )
}

export default App
