import React, { useState } from 'react'
import useThemeContext from '../hooks/useThemeContext';
import PageHeader from './PageHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReturnBtn from './ReturnBtn';
import useFetch from '../hooks/useFetch';
import getAPIUrl from '../utils/getAPIUrl';
import useCurrentUserContext from '../hooks/useCurrentUserContext';

const BASE_URL = getAPIUrl();

function PromoteUser() {
    const { theme } = useThemeContext();
    const { token } = useCurrentUserContext()
    const [selectedUser, setSelectedUser] = useState("");
    const { data } = useFetch(
        `users/all`
    );

    const handleUserChange = (event) => {
        setSelectedUser(event.target.value);
    };

    const handlePromote = async () => {
        if (selectedUser) {
            const opts = {
                method: "PUT",
                headers: { Authorization: `Bearer ${token}`, }
            }
            try {
                console.log(opts)
                const response = await fetch(`${BASE_URL}/users/${selectedUser}/admin`, opts);
                if (response.ok) {
                    toast.success("User promote successfully !");
                } else {
                    toast.warn("Failed to promote User.");
                }
            } catch (error) {
                toast.error("An error occurred:", error);
            }
        } else {
            return
        }
    };
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                theme={theme}
            />
            <PageHeader />
            <div className="flex flex-col items-center h-screen main bg-dark-primary">
                <ReturnBtn />
                <h1 className="py-2 text-2xl font-bold text-center text-white">
                    Promote User
                </h1>
                <div className="w-full max-w-sm p-6">
                    <label className="block">
                        Select User to promote:
                        <select
                            name="user"
                            value={selectedUser}
                            onChange={handleUserChange}
                            className="w-full p-2 mt-1 border rounded"
                        >
                            <option value={null}>{">---------- Select ----------<"}</option>
                            {data &&
                                data.map((user) => (
                                    <option key={user._id} value={user._id}>
                                        {user.pseudo}
                                    </option>
                                ))}
                        </select>
                    </label>
                    <button
                        onClick={handlePromote}
                        className="p-2 py-2 mt-4 font-bold text-white transition duration-300 rounded-md bg-dark-secondary hover:bg-red"
                    >
                        Promote User
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PromoteUser;
