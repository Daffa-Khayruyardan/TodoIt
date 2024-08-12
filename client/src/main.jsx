// import some packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes } from 'react-router-dom'

// import main react component
import App from './App.jsx'

// import some style
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
