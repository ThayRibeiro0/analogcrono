import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {TimersProvider} from  './context/analogcron';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimersProvider>
      <App />
    </TimersProvider>
  </React.StrictMode>,
)
