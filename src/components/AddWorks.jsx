import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import useFetch from "../hooks/useFetch"; // Import your custom useFetch hook

function AddWorks() {
  const [newManhwa, setNewManhwa] = useState({
    title: "",
    synopsis: "",
    author: "",
    genre: [],
    cover: "",
    chapters: [],
    rating: 0,
    status: "",
  });

  const { data, isLoading, isError } = useFetch(
    `${process.env.REACT_APP_PROD_URL}manhwa/all`
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewManhwa((prevState) => ({
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
      <div className="main h-screen bg-dark-primary flex flex-col items-center ">
        <h1 className="py-2 text-2xl font-bold text-center  text-white ">
          Ajouter des œuvres
        </h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm p-6   ">
          <label className="block">
            Title:
            <input
              type="text"
              name="title"
              value={newManhwa.title}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </label>
          <label className="block">
            Synopsis:
            <input
              type="text"
              name="synopsis"
              value={newManhwa.synopsis}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </label>
          <label className="block">
            Author:
            <input
              type="text"
              name="author"
              value={newManhwa.author}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </label>
          <label className="block">
            Genre:
            <input
              type="text"
              name="genre"
              value={newManhwa.genre}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </label>
          <label className="block">
            Cover:
            <input
              type="text"
              name="cover"
              value={newManhwa.cover}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </label>
          <label className="block">
            Chapters:
            <textarea
              type="text"
              name="chapters"
              value={newManhwa.chapters}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full flex-1 resize-none"
            />
          </label>
          <label className="block">
            Rating:
            <input
              type="number"
              name="rating"
              value={newManhwa.rating}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </label>
          <label className="block">
            Status:
            <select
              name="status"
              value={newManhwa.status}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            >
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
              <option value="Dropped">Dropped</option>
              <option value="Coming Soon">Coming Soon</option>
            </select>
          </label>
          <button
            type="submit"
            className=" mt-4 p-2 py-2 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
          >
            Add Manhwa
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddWorks;
