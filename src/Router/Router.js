import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Feed } from '../pages/feed/Feed'
import { Login } from '../pages/login/Login'
import { Signup } from '../pages/signup/Signup'
import { Comments } from '../pages/comments/Comments'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />}/>
                
                <Route path="/feed" element={<Feed />}/>

                <Route path="signup" element={<Signup />}/>

                <Route path="/comments/:postId" element={<Comments/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;