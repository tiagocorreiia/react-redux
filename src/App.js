import React from 'react'
import { Provider } from 'react-redux'
import store from './state/store'
import './App.css'
import UsersContainer from './components/UsersContainer'

// import Cake from './components/Cake'
// import IceCream from './components/IceCream'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersContainer />
      </div>
    </Provider>
  )
}

export default App
