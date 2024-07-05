import React from "react";

export default function AddShowForm({handleAddShow}) {
    return (
        <form
            onSubmit={handleAddShow}
            className="p-5 m-5 border border-indigo-800"
            >
            <h2 className="mb-2 text-2xl">Add Show</h2>
            <div>
        <input
            className="w-1/4 p-1 border rounded border-indigo-600"
            placeholder="Title"
            type="text"
            name="title"
            id="title-input"
            required
        />
        <input 
            className="w-1/4 p-1 border rounded border-indigo-600"
            placeholder="Year"
            type="text"
            name="year"
            id="year-input"
            required
        />
        <input 
            className="w-1/4 p-1 border rounded border-indigo-600"
            placeholder="Genre"
            type="text"
            name="genre"
            id="genre-input"
            aria-required
        />
        <input 
            className="w-1/4 p-1 border rounded border-indigo-600"
            placeholder="Episodes"
            type="number"
            name="episodes"
            id="episodes-input"
            min={0}
            required
        />
        </div>
        <button
        className="p-2 my-4 border rounded border-indigo-500 hover:bg-indigo-600"
        type="submit"
        >
            Submit
        </button>
        </form>
    )
}