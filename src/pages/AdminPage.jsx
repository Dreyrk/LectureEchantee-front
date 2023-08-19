import React from "react";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

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
      <div className="main h-screen">
        <h1 className="py-2 text-2xl font-bold text-center  text-white ">
          Gestion du site
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {links.map((link, index) => (
            <button
              key={index}
              className="w-full bg-dark-tertiary font-bold text-white rounded-lg border border-dark-secondary p-4"
              onClick={() => navigate(link.path)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
