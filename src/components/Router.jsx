import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Library from '../pages/Library'
import Browse from '../pages/Browse'
import Auth from '../pages/Auth'
import Details from '../pages/Details'
import AdminPage from '../pages/AdminPage'

const allRoutes = [
    {
        path: "/",
        component: <Home />
    },
    {
        path: "/profile/:userId/library",
        component: <Library />
    },
    {
        path: "/browse",
        component: <Browse />
    },
    {
        path: "/manhwa/:id",
        component: <Details />
    },
    {
        path: "/authenticate",
        component: <Auth />
    },
    {
        path: "/admin",
        component: <AdminPage />
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
