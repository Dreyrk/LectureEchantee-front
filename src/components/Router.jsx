import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Library from "../pages/Library";
import Browse from "../pages/Browse";
import Auth from "../pages/Auth";
import Details from "../pages/Details";
import AdminPage from "../pages/AdminPage";
import Profile from "../pages/Profile";
import AddWorks from "./AddWorks";
import EditWorks from "./EditWorks";
import DeleteWorks from "./DeleteWorks";
import AddScans from "./AddScans";
import EditScans from "./EditScans";
import DeleteScans from "./DeleteScans";

const allRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
  {
    path: "/profile/library",
    component: <Library />,
  },
  {
    path: "/browse",
    component: <Browse />,
  },
  {
    path: "/manhwa/:id",
    component: <Details />,
  },
  {
    path: "/authenticate",
    component: <Auth />,
  },
  {
    path: "/admin",
    component: <AdminPage />,
  },
  {
    path: "/admin/addworks",
    component: <AddWorks />,
  },
  {
    path: "/admin/editworks",
    component: <EditWorks />,
  },
  {
    path: "/admin/deleteworks",
    component: <DeleteWorks />,
  },
  {
    path: "/admin/addscans",
    component: <AddScans />,
  },
  {
    path: "/admin/editscans",
    component: <EditScans />,
  },
  {
    path: "/admin/deletescans",
    component: <DeleteScans />,
  },
];

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
