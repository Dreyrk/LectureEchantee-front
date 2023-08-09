import React, { useState } from "react";

import PageHeader from "../components/PageHeader";
import Login from "../components/Login";
import Register from "../components/Register";

function Auth() {
  const [registered, setRegistered] = useState(false)
  return (
    <div className="bg-dark-primary">
      <PageHeader />
      {registered ? <Login setRegistered={setRegistered} /> : <Register setRegistered={setRegistered} />}
    </div>
  );
}

export default Auth;
