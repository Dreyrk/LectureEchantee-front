import React, { useState, useEffect } from 'react';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

import useThemeContext from '../hooks/useThemeContext';
import useCurrentUserContext from '../hooks/useCurrentUserContext';
import isFav from '../utils/isFav.js';

function BookmarkBtn({ data }) {

    const addToFav = () => {
        //update user
        setBookmark(true)
        console.log('added')
    }
    const removeFav = () => {
        //update user
        setBookmark(false)
        console.log('removed')
    }

    const { user, setUser, token } = useCurrentUserContext();
    const [bookmark, setBookmark] = useState(false);
    const { theme } = useThemeContext();

    useEffect(() => {
        if (user.library.manhwa && token) {
            setBookmark(isFav(user, data))
            console.log(bookmark, user)
        }
    }, [user, token])

    return (
        <button onClick={bookmark ? removeFav : addToFav} type='button' className={`bg-${theme}-secondary w-3/4 py-3 rounded-md flex justify-around items-center`}>
            Bookmark {bookmark ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
        </button>

    )
}

export default BookmarkBtn;