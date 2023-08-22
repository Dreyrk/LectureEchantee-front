import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import useFetch from "../hooks/useFetch"; // Import your custom useFetch hook
import getAPIUrl from "../utils/getAPIUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useThemeContext from "../hooks/useThemeContext";
import ReturnBtn from "./ReturnBtn";

const BASE_URL = getAPIUrl();

function DeleteWorks() {
  const { theme } = useThemeContext()
  const [selectedManhwa, setSelectedManhwa] = useState("");
  const { data, isLoading, isError } = useFetch(
    `manhwa/all`
  );

  const handleManhwaChange = (event) => {
    setSelectedManhwa(event.target.value);
  };

  const handleDelete = async () => {
    if (selectedManhwa) {
      const opts = {
        method: "DELETE",
      }
      try {
        const response = await fetch(`${BASE_URL}/manhwa/${selectedManhwa}/delete`, opts);
        if (response.ok) {
          // Handle success (e.g., show a success message)
          toast.success("Manhwa deleted successfully !");
        } else {
          // Handle error (e.g., show an error message)
          toast.warn("Failed to delete manhwa.");
        }
      } catch (error) {
        toast.error("An error occurred:", error);
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
      <div className="flex flex-col items-center h-screen main bg-dark-primary">
        <ReturnBtn />
        <h1 className="py-2 text-2xl font-bold text-center text-white">
          Delete Works
        </h1>
        <div className="w-full max-w-sm p-6">
          <label className="block">
            Select Manhwa to delete:
            <select
              name="manhwa"
              value={selectedManhwa}
              onChange={handleManhwaChange}
              className="w-full p-2 mt-1 border rounded"
            >
              <option value={null}>{">---------- Select ----------<"}</option>
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
            Delete Manhwa
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteWorks;
