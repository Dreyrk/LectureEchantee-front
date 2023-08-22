import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHeader from "../components/PageHeader";
import useFetch from "../hooks/useFetch"; // Import your custom useFetch hook
import getAPIUrl from "../utils/getAPIUrl";
import ReturnBtn from "./ReturnBtn";
import useThemeContext from "../hooks/useThemeContext";

const BASE_URL = getAPIUrl()

function EditWorks() {
  const { theme } = useThemeContext()
  const [selectedManhwa, setSelectedManhwa] = useState(null);
  const [editedManhwa, setEditedManhwa] = useState({
    status: "",
  });

  const {
    data: fetchedManhwaList,
    isLoading,
    isError,
  } = useFetch(`manhwa/all`);

  const handleSelectManhwa = (manhwa) => {
    setSelectedManhwa(manhwa);
    setEditedManhwa(manhwa);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedManhwa((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const opts = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedManhwa),
    };
    const res = await fetch(`${BASE_URL}/manhwa/${editedManhwa._id}/infos`, opts);
    if (res.status === 201) {
      toast.success("Manhwa Updated !")
    } else {
      const error = await res.json();
      toast.error(`Failed to update Manhwa: ${error.error}`)
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
      <div className="flex flex-col items-center h-screen py-8 main bg-dark-primary">
        <ReturnBtn />
        <h1 className="py-2 text-2xl font-bold text-center text-white">
          Edit Works
        </h1>

        <div className="w-full max-w-md p-6 ">
          <div className="space-y-4">
            <label className="block">
              Select a Manhwa:
              <select
                value={selectedManhwa ? selectedManhwa._id : ""}
                onChange={(event) => {
                  const selectedId = event.target.value;
                  const selected = fetchedManhwaList?.find(
                    (manhwa) => manhwa._id === selectedId
                  );
                  handleSelectManhwa(selected);
                }}
                className="w-full p-2 mt-1 border rounded"
              >
                <option value="">{">---------- Select ----------<"}</option>
                {fetchedManhwaList?.map((manhwa) => (
                  <option key={manhwa._id} value={manhwa._id}>
                    {manhwa.title}
                  </option>
                ))}
              </select>
            </label>
            {selectedManhwa && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label htmlFor="">Status :
                  <select
                    name="status"
                    value={editedManhwa.status}
                    onChange={handleInputChange}
                    className="w-full p-2 mt-1 border rounded"
                  >
                    <option className="text-center" value={null}>{">---------- Select a status ----------<"}</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                    <option value="Dropped">Dropped</option>
                    <option value="Coming Soon">Coming Soon</option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="p-2 py-2 mt-4 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
                >
                  Edit Manhwa
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditWorks;
