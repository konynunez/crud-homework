import { useState } from "react";
import { login } from "../utils/authUtils"; 


const LoginForm = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        // login logic here
        console.log("Email:", email);
        console.log("Password:", password);
        await login(email, password); 
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-indigo-50">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
                <h2 className="text-2xl font-bold text-center text-indigo-600">
                    Login
                </h2>
                <form 
                    id="login-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div>
                        <label 
                            htmlFor="email"
                            className="block text-sm font-medium text-indigo-700"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}     
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-indigo-700"
                        >
                            Password 
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
