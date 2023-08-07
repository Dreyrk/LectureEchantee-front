import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Library from '../pages/Library'
import Browse from '../pages/Browse'
import Auth from '../pages/Auth'
import Details from '../pages/Details'

const allRoutes = [
    {
        path: "/",
        component: <Home />
    },
    {
        path: "/profile/:userId/Library",
        component: <Library />
    },
    {
        path: "/browse",
        component: <Browse />
    },
    {
        path: "/scans/:id",
        component: <Details />
    },
    {
        path: "/authenticate",
        component: <Auth />
    },
]

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {allRoutes.map((route, i) => (
                    <Route key={i} path={route.path} element={route.component} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
