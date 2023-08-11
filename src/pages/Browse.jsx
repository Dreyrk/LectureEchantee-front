import React from 'react'

import PageHeader from '../components/PageHeader';
import useThemeContext from '../hooks/useThemeContext';


function Browse() {
    const { theme } = useThemeContext()
    return (
        <div className={`page-${theme}`}>
            <PageHeader />
            <div>

            </div>
        </div>
    )
}

export default Browse;
