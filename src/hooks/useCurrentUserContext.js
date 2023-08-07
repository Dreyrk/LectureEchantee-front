import { useContext } from "react";
import UserContext from "../context/userContext";

const useCurrentUserContext = () => useContext(UserContext);

export default useCurrentUserContext;
