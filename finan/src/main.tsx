import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login, Home } from './pages'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { Group } from './pages/Group'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="*" element={<Login/>} />
            <Route path="home" element={<Home/>} />
            <Route path="/group/:id" element={<Group/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)