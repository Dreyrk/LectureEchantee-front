import React from "react";

import PageHeader from "../components/PageHeader";
import useThemeContext from "../hooks/useThemeContext";
import useFetch from "../hooks/useFetch";
import ManhwaBox from "../components/ManhwaBox";

function Browse() {
  const { theme } = useThemeContext();

  const { data, isLoading, isError } = useFetch(`manhwa/all`);

  return (
    <div className={`page-${theme}`}>
      <PageHeader />
      <div className="main">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:auto-rows-auto">
          <div className={`border-b-2 col-span-full border-${theme}-secondary`}>
            <h2 className="text-lg font-bold">Browse Scans</h2>
          </div>
          {data?.map((manhwa, i) =>
            i % 2 === 0 ? (
              <div key={i} className="col-start-2">
                <ManhwaBox
                  manhwa={manhwa}
                  isLoading={isLoading}
                  isError={isError}
                />
              </div>
            ) : (
              <div key={i} className="col-start-1">
                <ManhwaBox manhwa={manhwa} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Browse;
