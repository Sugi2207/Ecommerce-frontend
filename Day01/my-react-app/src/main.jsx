import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import './index.css'
import store from './Redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* To access the store globally */}
    <Provider store={store}>

    <App />
    </Provider>
  </React.StrictMode>,
)
