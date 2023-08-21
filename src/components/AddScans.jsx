import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import useFetch from "../hooks/useFetch"; // Import your custom useFetch hook

function AddScans() {
  const [selectedManhwa, setSelectedManhwa] = useState("");
  const [newChapters, setNewChapters] = useState("");

  const {
    data: fetchedManhwaList,
    isLoading,
    isError,
  } = useFetch(`manhwa/all`);

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
      <div className="flex flex-col items-center h-screen main bg-dark-primary ">
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
              className="w-full p-2 mt-1 border rounded"
            >
              <option value="">-- Sélectionnez --</option>
              {fetchedManhwaList?.map((manhwa) => (
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
                  className="flex-1 w-full p-2 mt-1 border rounded resize-none"
                />
              </label>
              <button
                type="submit"
                className="p-2 py-2 mt-4 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
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
