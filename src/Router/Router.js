import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Login } from '../pages/login/Login'
import { Signup } from '../pages/signup/Signup'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />}/>
                
                <Route path="/home" element={<Home />}/>

                <Route path="signup" element={<Signup />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;