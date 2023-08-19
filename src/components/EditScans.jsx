import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import useFetch from "../hooks/useFetch"; // Import your custom useFetch hook

function EditScans() {
  const [manhwaList, setManhwaList] = useState([]);
  const [selectedManhwa, setSelectedManhwa] = useState("");
  const [selectedChapters, setSelectedChapters] = useState([]);

  const {
    data: fetchedManhwaList,
    isLoading,
    isError,
  } = useFetch("https://lectureenchantee-api.onrender.com/api/manhwa/all");

  useEffect(() => {
    if (fetchedManhwaList) {
      setManhwaList(fetchedManhwaList.data);
    }
  }, [fetchedManhwaList]);

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
        const response = await useFetch(
          `${process.env.REACT_APP_PROD_URL}/api/manhwa/${selectedManhwa}/edit-chapters`,
          {
            method: "PUT",
            body: JSON.stringify({ chapters: selectedChapters }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response && response.message === "Chapters edited") {
          console.log("Chapters edited successfully!");
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
      <div className="main h-screen bg-dark-primary flex flex-col items-center ">
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
                Sélectionnez les nouveaux chapitres (séparés par des virgules):
                <input
                  type="text"
                  name="selectedChapters"
                  value={selectedChapters.join(", ")}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </label>
              <button
                type="submit"
                className="mt-4 p-2 py-2 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
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
