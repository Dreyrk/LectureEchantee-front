import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import getAPIUrl from "../utils/getAPIUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useThemeContext from "../hooks/useThemeContext";
import ReturnBtn from "./ReturnBtn";

const BASE_URL = getAPIUrl()

function AddWorks() {
  const { theme } = useThemeContext()
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'genre') {
      setNewManhwa((prevState) => ({
        ...prevState,
        genre: value.split(',').map((genre) => genre.trim()), // Split and trim genres
      }));
    } else if (name === 'chapters') {
      setNewManhwa((prevState) => ({
        ...prevState,
        chapters: value.split(',').map((chapter) => chapter.trim()), // Split and trim chapters
      }));
    } else {
      setNewManhwa((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newManhwa),
    };
    const res = await fetch(`${BASE_URL}/manhwa/create`, opts);
    if (res.status === 201) {
      toast.success("Manhwa created !")
    } else {
      const error = await res.json();
      toast.error(`Failed to create Manhwa: ${error.error}`)
    }
  };

  return (
    <div>
      <PageHeader />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme={theme}
      />
      <div className="flex flex-col items-center h-screen main bg-dark-primary ">
        <ReturnBtn />
        <h1 className="py-2 text-2xl font-bold text-center text-white ">
          Ajouter des œuvres
        </h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 ">
          <label className="block">
            Title:
            <input
              type="text"
              name="title"
              value={newManhwa.title}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </label>
          <label className="block">
            Synopsis:
            <input
              type="text"
              name="synopsis"
              value={newManhwa.synopsis}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </label>
          <label className="block">
            Author:
            <input
              type="text"
              name="author"
              value={newManhwa.author}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </label>
          <label className="block">
            Genre:
            <input
              type="text"
              name="genre"
              value={newManhwa.genre.join(', ')} // Join genres for display
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </label>
          <label className="block">
            Cover:
            <input
              type="text"
              name="cover"
              value={newManhwa.cover}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </label>
          <label className="block">
            Chapters:
            <textarea
              type="text"
              name="chapters"
              value={newManhwa.chapters.join(', ')} // Join chapters for display
              onChange={handleInputChange}
              className="flex-1 w-full p-2 mt-1 border rounded resize-none"
            />
          </label>
          <label className="block">
            Rating:
            <input
              type="number"
              name="rating"
              value={newManhwa.rating}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </label>
          <label className="block">
            Status:
            <select
              name="status"
              value={newManhwa.status}
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
            Add Manhwa
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddWorks;
