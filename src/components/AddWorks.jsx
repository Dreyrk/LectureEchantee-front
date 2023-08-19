import React from "react";
import PageHeader from "../components/PageHeader";

function AddWorks() {
  return (
    <div>
      <PageHeader />
      <div className="main h-screen bg-dark-primary">
        <h1 className="py-2 text-2xl font-bold text-center  text-white ">
          Ajouter des œuvres
        </h1>
      </div>
    </div>
  );
}

export default AddWorks;
