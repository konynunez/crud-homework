"use client";
import React, { useState, useEffect } from "react";
import ShowComponent from "../../components/Show";
import { Show, List } from "../../utils/list";
import {
  getAllDocuments,
  addDocument,
  updateDocument,
  deleteDocument,
} from "../../utils/firebaseUtils";
import { db } from "../../../firebase.config";

export default function ManagementPage() {
  const [list, setList] = useState(new List("The best series!", []));

  useEffect(() => {
    async function fetchData() {
      try {
        const documents = await getAllDocuments(db, "shows");
        const showInstances = documents.map((doc) => {
          const show = new Show(
            doc.title,
            doc.year,
            doc.genre,
            doc.episodes,
          );
          show.id = doc.id;
          return show;
        });
        console.log(showInstances);
        setList(new List(list.name, showInstances));
      } catch (error) {
        console.error("Failed fetching data", error);
      }
    }

    fetchData();
    return () => {
      console.log("Cleanup");
    };
  }, [list.name]); // Add list.name as a dependency here

  function handleAddShow(e) {
    e.preventDefault();

    const newShow = new Show(
      e.target.title.value,
      e.target.year.value,
      e.target.genre.value,
      parseInt(e.target.episodes.value)
    );

    addDocument(db, "shows", {
      title: e.target.title.value,
      year: e.target.year.value,
      genre: e.target.genre.value,
      episodes: parseInt(e.target.episodes.value),
    });

    const newList = new List(list.name, list.shows);
    newList.addShow(newShow);  

    setList(newList);
  }

  /**
   * 
   * @param {show} showToUpdate an instance of show class
   */

  async function updateShow(showToUpdate) {
    console.log("UPDATED SHOW", showToUpdate);

    const showObj = {
      title: showToUpdate.title,
      year: showToUpdate.year,
      genre: showToUpdate.genre,
      episodes: showToUpdate.episodes,
    };
  
    await updateDocument(db, "shows", showToUpdate.id, showObj);

    location.reload();  
  }

  async function deleteShow(genre, docID) {
    await deleteDocument(db, "shows", docID);
    location.reload();    
  }

  return (
    <div>
      <h1 className="py-12 text-6xl text-center bg-indigo-500">
        Management Page
      </h1>
      <h2 className="py-3 text-3xl text-center bg-indigo-100">
        Historic Drama Series!
      </h2>
      <form
        onSubmit={handleAddShow}
        className="p-5 m-5 border border-indigo-400"
      >
        <h2 className="mb-2 text-2xl">Add a Show</h2>
        <div>
          <input
            className="w-1/4 p-1 border rounded border-indigo-400"
            placeholder="Title"
            type="text"
            name="title"
            required
          />
          <input
            className="w-1/4 p-1 border rounded border-indigo-400"
            placeholder="Year"
            type="text"
            name="year"
            required
          />
          <input
            className="w-1/4 p-1 border rounded border-indigo-400"
            placeholder="Genre"
            type="text"
            name="genre"
            required
          />
          <input
            className="w-1/4 p-1 border rounded border-indigo-400"
            placeholder="Episodes"
            type="number"
            name="episodes"
            min={0}
            required
          />
        </div>
        <button
          className="p-2 my-4 border rounded border-indigo-500 hover:bg-indigo-900"
          type="submit"
        >
          Submit
        </button>
      </form>

      {list.shows.map((show, index) => {
        return (
          <ShowComponent
            key={index}
            id={show.id}
            title={show.title}
            year={show.year}
            genre={show.genre}
            episodes={show.episodes}
            updateShow={updateShow}
            deleteShow={deleteShow}
            isManagementPage={true}
          />
        );
      })}
    </div>
  );
}
