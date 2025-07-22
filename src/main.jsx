
import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <App />
  </Router>
)
