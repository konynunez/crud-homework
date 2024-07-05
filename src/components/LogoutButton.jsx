import { logout } from "../utils/authUtils";

const LogoutButton = () => {
    const handleLogout = async () => {
        await logout();
    }

    return (
        <button
        onClick={handleLogout}
        className="px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500"
        >
            Logout
        </button>

    );
};

export default LogoutButton;