import React from "react";
import PageHeader from "../components/PageHeader";
import { NavLink } from "react-router-dom";

function AdminPage() {

  const links = [
    {
      name: "Ajouter des œuvres",
      path: `/admin/addworks`,
    },
    {
      name: "Modifier des œuvres",
      path: `/admin/editworks`,
    },
    {
      name: "Supprimer une œuvre",
      path: `/admin/deleteworks`,
    },
    {
      name: "Ajouter des scans",
      path: `/admin/addscans`,
    },
    {
      name: "Modifier des scans",
      path: `/admin/editscans`,
    },
    {
      name: "Supprimer des scans",
      path: `/admin/deletescans`,
    },
    {
      name: "Œuvre favorite",
      path: `/admin/deletescans`,
    },
  ];

  return (
    <div className="bg-dark-primary">
      <PageHeader />
      <div className="h-screen main">
        <h1 className="py-2 text-2xl font-bold text-center text-white ">
          Gestion du site
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
