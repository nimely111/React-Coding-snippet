import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App_2 from '../Components/Classes/App_2.jsx'
import App_101 from '../react101/App_101.jsx'
import './index.css'
import TodoApp from './Pedro_Exercise/TodoApp.jsx'
import RouterApp from './Pedro_Exercise/Router_DOM/RouterApp.jsx'
import JokeGenerator from '../react101/JokeGenerator.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App_2 /> */}
    {/* <App_101 /> */}
    {/* <JokeGenerator /> */}
    {/* <TodoApp /> */}
    <RouterApp />
  </React.StrictMode>
)
