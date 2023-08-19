import React from "react";
import PageHeader from "../components/PageHeader";

function EditScans() {
  return (
    <div>
      <PageHeader />
      <div className="main h-screen bg-dark-primary">
        <h1 className="py-2 text-2xl font-bold text-center  text-white ">
          Modifier des scans
        </h1>
      </div>
    </div>
  );
}

export default EditScans;
