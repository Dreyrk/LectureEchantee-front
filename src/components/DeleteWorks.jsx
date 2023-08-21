import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import useFetch from "../hooks/useFetch"; // Import your custom useFetch hook

function DeleteWorks() {
  const [selectedManhwa, setSelectedManhwa] = useState("");
  const { data, isLoading, isError } = useFetch(
    `manhwa/all`
  );

  const handleManhwaChange = (event) => {
    setSelectedManhwa(event.target.value);
  };

  const handleDelete = async () => {
    if (selectedManhwa) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_PROD_URL}/api/manhwa/${selectedManhwa}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          // Handle success (e.g., show a success message)
          console.log("Manhwa deleted successfully!");
        } else {
          // Handle error (e.g., show an error message)
          console.error("Failed to delete manhwa.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  return (
    <div>
      <PageHeader />
      <div className="flex flex-col items-center h-screen main bg-dark-primary">
        <h1 className="py-2 text-2xl font-bold text-center text-white">
          Supprimer des œuvres
        </h1>
        <div className="w-full max-w-sm p-6">
          <label className="block">
            Sélectionnez une œuvre à supprimer:
            <select
              name="manhwa"
              value={selectedManhwa}
              onChange={handleManhwaChange}
              className="w-full p-2 mt-1 border rounded"
            >
              <option value="">-- Sélectionnez --</option>
              {data &&
                data.map((manhwa) => (
                  <option key={manhwa._id} value={manhwa._id}>
                    {manhwa.title}
                  </option>
                ))}
            </select>
          </label>
          <button
            onClick={handleDelete}
            className="p-2 py-2 mt-4 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
          >
            Supprimer Manhwa
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteWorks;
