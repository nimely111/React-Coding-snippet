import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App_2 from '../Components/Classes/App_2.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App_2 />
  </React.StrictMode>,
)
