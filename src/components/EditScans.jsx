import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import useFetch from "../hooks/useFetch.js"; // Import your custom useFetch hook
import getAPIUrl from "../utils/getAPIUrl.js";

function EditScans() {
  const [selectedManhwa, setSelectedManhwa] = useState("");
  const [selectedChapters, setSelectedChapters] = useState([]);

  const {
    data: fetchedManhwaList
  } = useFetch("manhwa/all");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "selectedManhwa") {
      setSelectedManhwa(value);
      setSelectedChapters([]);
    } else if (name === "selectedChapters") {
      setSelectedChapters(value.split(",").map((chap) => chap.trim()));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedManhwa && selectedChapters.length > 0) {
      try {
        const BASE_URL = getAPIUrl()
        const response = await fetch(`${BASE_URL}/manhwa/${selectedManhwa}/edit-chapters`, {
          method: "PUT",
          body: JSON.stringify({ chapters: selectedChapters }),
          headers: {
            "Content-Type": "application/json",
          }
        })

        if (response.ok) {
          console.log("Scans edited successfully!");
        } else {
          console.error("Failed to edit chapters.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  return (
    <div>
      <PageHeader />
      <div className="flex flex-col items-center h-screen main bg-dark-primary ">
        <h1 className="py-2 text-2xl font-bold text-center text-white">
          Modifier des chapitres
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
              <option value="">-- Select --</option>
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
                Sélectionnez les nouveaux chapitres (séparés par des virgules):
                <input
                  type="text"
                  name="selectedChapters"
                  value={selectedChapters.join(", ")}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                />
              </label>
              <button
                type="submit"
                className="p-2 py-2 mt-4 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
              >
                Modifier des chapitres
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default EditScans;
