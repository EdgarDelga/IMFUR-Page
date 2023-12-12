import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './App'
import Content1 from './content1'
import Carrusel from './content2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Content1/>
    <Carrusel/>
  </React.StrictMode>
)
