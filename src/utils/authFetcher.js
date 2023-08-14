import getAPIUrl from "./getAPIUrl";

const BASE_URL = getAPIUrl();

//fetcher that manage user authentication

async function authFetcher(currentUser, authMethod) {
  try {
    const opts = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser),
    };
    if (authMethod === "register") {
      let res = await fetch(`${BASE_URL}/users/register`, opts);

      if (!res.ok) {
        console.error("failed to login user");
        return { success: false };
      } else {
        res = await res.json();
        return res;
      }
    } else if (authMethod === "login") {
      let res = await fetch(`${BASE_URL}/users/login`, opts);

      if (!res.ok) {
        console.error("failed to login user");
      } else {
        res = await res.json();
        return res;
      }
    } else {
      throw new Error(`please specify the auth method`);
    }
  } catch (e) {
    console.error(`failed to authenticate: ${e.message}`);
  }
}

export default authFetcher;
