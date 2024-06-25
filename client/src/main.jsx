// import some packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../app/store';

// import main react component
import App from './App.jsx'

// import some style
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  </Provider>
)
