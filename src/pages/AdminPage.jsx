import React from "react";
import PageHeader from "../components/PageHeader";
import { NavLink } from "react-router-dom";

function AdminPage() {

  const links = [
    {
      name: "Add Manhwa",
      path: `/admin/addworks`,
    },
    {
      name: "Edit Manhwa",
      path: `/admin/editworks`,
    },
    {
      name: "Delete Manhwa",
      path: `/admin/deleteworks`,
    },
    {
      name: "Add Scans",
      path: `/admin/addscans`,
    },
    {
      name: "Promote Manhwa",
      path: `/admin/promote`,
    },
    {
      name: "Upgrade user to Admin",
      path: `/admin/user/`,
    },
  ];

  return (
    <div className="bg-dark-primary">
      <PageHeader />
      <div className="h-screen main">
        <h1 className="py-2 text-2xl font-bold text-center text-white ">
          Manage Works and Scans
        </h1>
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link, index) => (
            <NavLink
              key={index}
              className="w-full p-4 font-bold text-white border rounded-lg bg-dark-tertiary border-dark-secondary"
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
