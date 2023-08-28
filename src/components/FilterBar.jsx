/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { GrPowerReset } from "react-icons/gr"

function FilterBar({ setUrl }) {
    const [filters, setFilters] = useState({
        status: "",
        genre: ""
    });
    const [sort, setSort] = useState("");

    const reset = () => {
        setFilters({
            status: "",
            genre: ""
        })
        setSort("");
        setUrl("manhwa/all")
    }

    useEffect(() => {
        if (filters.status || filters.genre || sort) {
            setUrl(`manhwa/all?status=${filters.status}&genre=${filters.genre}&sortBy=${sort}`)
        }
    }, [filters.status, filters.genre, sort]);

    return (
        <div className='flex justify-between row-span-1 p-4 border-2 col-span-full'>
            <select className='p-2 h-9 lg:w-1/4' onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))} value={filters.status} name="status-filter" id="status-filter">
                <option value="">Status</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Dropped">Dropped</option>
                <option value="Coming Soon">Coming Soon</option>
            </select>
            <select className='p-2 h-9 lg:w-1/4' onChange={(e) => setFilters((prev) => ({ ...prev, genre: e.target.value }))} value={filters.genre} name="genre" id="genre">
                <option value="">Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Magic">Magic</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
            </select>
            <select className='p-2 h-9 lg:w-1/4' onChange={(e) => setSort(e.target.value)} value={sort} name="sort" id="sort">
                <option value="">Sort By</option>
                <option value="title">A-Z</option>
                <option value="rating">Popularity</option>
                <option value="createdAt">Date</option>
            </select>
            <button className='p-2 no-style-btn' onClick={reset}>
                <GrPowerReset color='#ffffff' size={25} />
            </button>
        </div>
    )
}

export default FilterBar;
