import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import useFetch from "../hooks/useFetch"; // Import your custom useFetch hook

function AddScans() {
  const [manhwaList, setManhwaList] = useState([]);
  const [selectedManhwa, setSelectedManhwa] = useState("");
  const [newChapters, setNewChapters] = useState("");

  const {
    data: fetchedManhwaList,
    isLoading,
    isError,
  } = useFetch(`${process.env.REACT_APP_PROD_URL}/manhwa/all`);

  useEffect(() => {
    if (fetchedManhwaList) {
      setManhwaList(fetchedManhwaList.data);
    }
  }, [fetchedManhwaList]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "selectedManhwa") {
      setSelectedManhwa(value);
    } else if (name === "newChapters") {
      setNewChapters(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <PageHeader />
      <div className="main h-screen bg-dark-primary flex flex-col items-center ">
        <h1 className="py-2 text-2xl font-bold text-center text-white">
          Ajouter des chapitres
        </h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm p-6">
          <label className="block">
            Sélectionnez un Manhwa:
            <select
              name="selectedManhwa"
              value={selectedManhwa}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            >
              <option value="">-- Sélectionnez --</option>
              {manhwaList.map((manhwa) => (
                <option key={manhwa._id} value={manhwa._id}>
                  {manhwa.title}
                </option>
              ))}
            </select>
          </label>
          {selectedManhwa && (
            <>
              <label className="block">
                Nouveaux chapitres:
                <textarea
                  name="newChapters"
                  value={newChapters}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full flex-1 resize-none"
                />
              </label>
              <button
                type="submit"
                className="mt-4 p-2 py-2 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
              >
                Ajouter des chapitres
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default AddScans;
