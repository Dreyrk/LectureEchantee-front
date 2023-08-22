import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5"

function ReturnBtn() {
    const navigate = useNavigate();
    return (
        <button className='w-full p-1' onClick={() => navigate(-1)} type='button'>
            <IoArrowBack size={40} />
        </button>
    )
}

export default ReturnBtn
