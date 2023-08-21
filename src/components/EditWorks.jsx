import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import useFetch from "../hooks/useFetch"; // Import your custom useFetch hook

function EditWorks() {
  const [selectedManhwa, setSelectedManhwa] = useState(null);
  const [editedManhwa, setEditedManhwa] = useState({
    title: "",
    synopsis: "",
    author: "",
    genre: [],
    cover: "",
    rating: 0,
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <PageHeader />
      <div className="flex flex-col items-center h-screen py-8 main bg-dark-primary">
        <h1 className="py-2 text-2xl font-bold text-center text-white">
          Modifier des œuvres
        </h1>

        <div className="w-full max-w-md p-6 ">
          <div className="space-y-4">
            <label className="block">
              Sélectionnez un Manhwa:
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
                <option value="">-- Sélectionnez --</option>
                {fetchedManhwaList?.map((manhwa) => (
                  <option key={manhwa._id} value={manhwa._id}>
                    {manhwa.title}
                  </option>
                ))}
              </select>
            </label>
            {selectedManhwa && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <button
                  type="submit"
                  className="p-2 py-2 mt-4 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
                >
                  Modifier Manhwa
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
