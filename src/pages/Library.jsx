import React from "react";

import PageHeader from "../components/PageHeader";
import useThemeContext from "../hooks/useThemeContext";

function Library() {
  const { theme } = useThemeContext();

  return (
    <div>
      <PageHeader className={`page-${theme}`} />
      <h1>Library Page</h1>
    </div>
  );
}

export default Library;
