import React, { useState, useEffect } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

import useThemeContext from "../hooks/useThemeContext";
import useCurrentUserContext from "../hooks/useCurrentUserContext";
import isFav from "../utils/isFav.js";
import getAPIUrl from "../utils/getAPIUrl";

const BASE_URL = getAPIUrl()

function BookmarkBtn({ data }) {
  const { user, setUser, token } = useCurrentUserContext();
  const [bookmark, setBookmark] = useState(false);
  const { theme } = useThemeContext();

  const fetchOpts = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: data && JSON.stringify(data),
  };

  const addToFav = async () => {
    setBookmark(true);
    setUser((prev) => ({ ...prev, library: { manhwa: [...prev.library.manhwa, data] } }));
    await fetch(`${BASE_URL}/users/${user._id}/bookmark`, fetchOpts);
  };
  const removeFav = async () => {
    setBookmark(false);
    setUser((prevUser) => ({
      ...prevUser,
      library: {
        ...prevUser.library,
        manhwa: prevUser.library.manhwa.filter(item => item.title !== data.title),
      },
    }));
    await fetch(`${BASE_URL}/users/${user._id}/bookmark`, fetchOpts);
  };

  useEffect(() => {
    if (user.library.manhwa && token) {
      setBookmark(isFav(user, data));
    }
  }, [user, token, data]);

  return (
    <button
      onClick={bookmark ? removeFav : addToFav}
      type="button"
      className={`bg-${theme}-secondary w-3/4 py-3 rounded-md flex justify-around items-center`}
    >
      {bookmark ? "Remove from favorites" : "Add to favorites"}
      {bookmark ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
    </button>
  );
}

export default BookmarkBtn;
