import useSWR from "swr";

import getAPIUrl from "../utils/getAPIUrl.js";

const BASE_URL = getAPIUrl();

async function fetcher(url) {
  try {
    const res = await fetch(`${BASE_URL}/${url}`);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  } catch (e) {
    throw new Error(`failed to fetch api: ${e.message}`);
  }
}

function useFetch(url) {
  const { data, error } = useSWR(url, fetcher);

  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useFetch;
