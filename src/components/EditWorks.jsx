import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import useFetch from "../hooks/useFetch"; // Import your custom useFetch hook

function EditWorks() {
  const [manhwaList, setManhwaList] = useState([]);
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
  } = useFetch(`${process.env.REACT_APP_PROD_URL}/api/manhwa/all`);

  useEffect(() => {
    if (fetchedManhwaList) {
      setManhwaList(fetchedManhwaList.data);
    }
  }, [fetchedManhwaList]);

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
      <div className="main h-screen bg-dark-primary flex flex-col items-center py-8">
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
                  const selected = manhwaList.find(
                    (manhwa) => manhwa._id === selectedId
                  );
                  handleSelectManhwa(selected);
                }}
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <button
                  type="submit"
                  className="mt-4 p-2 py-2 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
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
