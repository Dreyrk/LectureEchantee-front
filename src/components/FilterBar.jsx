/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

function FilterBar({ updateData }) {
    const [filters, setFilters] = useState({
        status: "",
        genre: ""
    });
    const [sort, setSort] = useState("");

    useEffect(() => {
        if (filters.status || filters.genre || sort) {
            updateData(`manhwa/all?status=${filters.status}&genre=${filters.genre}&sort=${sort}`)
        } else {
            return
        }
    }, [filters.status, filters.genre, sort]);

    return (
        <div className='flex justify-between row-span-1 p-4 border-2 col-span-full'>
            <select className='p-2 h-9 lg:w-1/4' onChange={(e) => setFilters({ ...filters, status: e.target.value })} value={filters.status} name="status-filter" id="status-filter">
                <option value="">Status</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Dropped">Dropped</option>
                <option value="Coming Soon">Coming Soon</option>
            </select>
            <select className='p-2 h-9 lg:w-1/4' onChange={(e) => setFilters({ ...filters, status: e.target.value })} value={filters.genre} name="genre" id="genre">
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
        </div>
    )
}

export default FilterBar;
