import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHeader from "../components/PageHeader";
import useFetch from "../hooks/useFetch"; // Import your custom useFetch hook
import ReturnBtn from "./ReturnBtn.jsx"
import useThemeContext from "../hooks/useThemeContext";
import getAPIUrl from "../utils/getAPIUrl";

function AddScans() {
  const { theme } = useThemeContext()
  const [selectedManhwa, setSelectedManhwa] = useState("");
  const [newChapters, setNewChapters] = useState("");

  const {
    data: fetchedManhwaList
  } = useFetch(`manhwa/all`);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "selectedManhwa") {
      setSelectedManhwa(value);
    } else if (name === "newChapters") {
      setNewChapters(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedManhwa && newChapters.length > 0) {
      try {
        const BASE_URL = getAPIUrl();
        const response = await fetch(`${BASE_URL}/manhwa/${selectedManhwa}/edit-chapters`, {
          method: "PUT",
          body: JSON.stringify({ chapters: newChapters }),
          headers: {
            "Content-Type": "application/json",
          }
        })

        if (response.ok) {
          toast.success("Scan added")
        } else {
          toast.error("Failed to edit chapters.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme={theme}
      />
      <PageHeader />
      <div className="flex flex-col items-center h-screen main bg-dark-primary ">
        <ReturnBtn />
        <h1 className="py-2 text-2xl font-bold text-center text-white">
          Add Scans
        </h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm p-6">
          <label className="block">
            Select a Manhwa:
            <select
              name="selectedManhwa"
              value={selectedManhwa}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded"
            >
              <option value={null}>{">---------- Select ----------<"}</option>
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
                New scans:
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
                Add Scans
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  )
}

export default AddScans;
