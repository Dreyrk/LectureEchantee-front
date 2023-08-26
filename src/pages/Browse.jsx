import React from "react";

import PageHeader from "../components/PageHeader";
import useThemeContext from "../hooks/useThemeContext";
import useFetch from "../hooks/useFetch";
import ManhwaBox from "../components/ManhwaBox";
import FilterBar from "../components/FilterBar";

function Browse() {
  const { theme } = useThemeContext();

  const { data, isLoading, isError, updateData } = useFetch(`manhwa/all`);

  return (
    <div className={`page-${theme}`}>
      <PageHeader />
      <div className="main">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className={`border-b-2 col-span-full border-${theme}-secondary`}>
            <h2 className="text-lg font-bold">Browse Scans</h2>
          </div>
          <FilterBar updateData={updateData} />
          {data?.map((manhwa, i) => (
            <div key={i} className={`col-span-2 place-self-center lg:col-span-1`}>
              <ManhwaBox
                manhwa={manhwa}
                isLoading={isLoading}
                isError={isError}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Browse;
