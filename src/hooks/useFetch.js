import useSWR from "swr";
import getAPIUrl from "../utils/getAPIUrl.js";

const BASE_URL = getAPIUrl();

async function fetcher(url, token) {
  try {
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      : {
          "Content-Type": "application/json",
        };

    const res = await fetch(`${BASE_URL}/${url}`, { headers });

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

function useFetch(url, token = null) {
  const { data, error, mutate } = useSWR(url, () => fetcher(url, token));

  const updateData = (newData) => {
    mutate(url, { data: newData }, false); // Mise à jour sans revalidation immédiate
  };

  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
    updateData,
  };
}

export default useFetch;
