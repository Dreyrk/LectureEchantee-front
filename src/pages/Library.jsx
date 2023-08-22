import React from "react";

import PageHeader from "../components/PageHeader";
import useThemeContext from "../hooks/useThemeContext";
import useCurrentUserContext from "../hooks/useCurrentUserContext";
import ManhwaBox from "../components/ManhwaBox";

function Library() {
  const { theme } = useThemeContext();
  const { user } = useCurrentUserContext()

  return (
    <div>
      <PageHeader className={`page-${theme}`} />
      <div className="main">
        <h1 className="py-4 text-3xl font-bold border-b-2 border-secondary-plus">{user.pseudo}'s Library</h1>
        <div className="grid grid-cols-2 mt-4 place-items-center">
          {user.library.manhwa.map((manhwa) => (<ManhwaBox manhwa={manhwa} />))}
        </div>
      </div>
    </div>
  );
}

export default Library;
