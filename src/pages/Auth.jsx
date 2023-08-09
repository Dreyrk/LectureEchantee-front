import React from "react";

import PageHeader from "../components/PageHeader";
import Login from "../components/Login";
import Register from "../components/Register";

function Auth() {
  return (
    <div className="bg-primary">
      <PageHeader />
      <Login />
    </div>
  );
}

export default Auth;
