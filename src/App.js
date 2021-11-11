import React from 'react'
import { Route, Routes } from 'react-router'
import './App.scss'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Products from './pages/Products'

const App = () => {
    return (
        <div>
           <Routes>
               <Route path="/"  element={<Home/>}/>
               <Route path="/about"  element={<About/>}/>
               <Route path="/blog"  element={<Blog/>}/>
               <Route path="/contact"  element={<Contact/>}/>
               <Route path="/products"  element={<Products/>}/>
             
           </Routes>
        </div>
    )
}

export default App
