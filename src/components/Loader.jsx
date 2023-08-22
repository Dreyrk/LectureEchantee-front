import React from 'react'

function Loader() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-12 h-12 border-t-4 border-opacity-75 rounded-full border-secondary-plus animate-spin"></div>
        </div>
    )
}

export default Loader;
