"use client";
import React, { useState, useEffect } from "react";
import { Show, List } from "../../utils/list";
import ShowComponent from "../../components/Show";
import {
  getAllDocuments,
  addDocument,
  updateDocument,
  deleteDocument,
} from "../../utils/firebaseUtils";
import { db } from "../../../firebase.config";

export default function ManagementPage() {
  const [list, setList] = useState(new List("Wuxia/Xanxia Content", []));

  useEffect(() => {
    async function fetchData() {
      try {
        const documents = await getAllDocuments(db, "shows");
        const showInstances = documents.map((doc) => {
          const show = new Show(
            doc.name,
            doc.year,
            doc.genre,
            doc.cast,
            doc.episodes
          );
          show.id = doc.id;
          return show;
        });
        console.log(showInstances);
        setList(new List(list.id, showInstances));
      } catch (error) {
        console.log("Failed fetching data", error);
      }
    }

    fetchData();
    return () => {
      console.log("get all docs cleanup");
    };
  }, [list.id]);

  function handleAddShow(e) {
    e.preventDefault();

    const newShow = new Show(
      e.target.name.value,
      e.target.year.value,
      e.target.genre.value,
      e.target.cast.value,
      parseInt(e.target.episodes.value)
    );

    addDocument(db, "shows", {
      name: newShow.name,
      year: newShow.year,
      genre: newShow.genre,
      cast: newShow.cast,
      episodes: parseInt(e.target.episodes.value),
    });

    const newList = new List(list.id, list.shows);
    newList.addShow(newShow);

    setList(newList);
  }

  async function updateShow(showToUpdate) {
    console.log("UPDATED SHOW FROM LIST", showToUpdate);

    const showObj = {
      name: showToUpdate.name,
      year: showToUpdate.year,
      genre: showToUpdate.genre,
      cast: showToUpdate.cast,
      episodes: showToUpdate.episodes,
    };

    await updateDocument(db, "shows", showToUpdate.id, showObj);

    const newShows = list.shows.map((show) => {
      return show.genre === showToUpdate.genre ? showToUpdate : show;
    });

    const newList = new List("Kony's Latest seen Shows", newShows);

    setList(newList);
  }

  async function deleteShow(genre, docID) {
    const newList = new List(list.id, list.shows);
    newList.removeShow(genre);
    await deleteDocument(db, "shows", docID);
    setList(newList);
  }

  return (
    <div>
      <h1 className="py-12 text-6xl text-center bg-blue-500">
        Management Page
      </h1>
      <h2 className="py-3 text-3xl text-center bg-blue-300">
        The best movies site
      </h2>
      <form
        onSubmit={handleAddShow}
        className="p-5 m-5 border border-blue-800"
      >
        <div>
          <input
            className="w-1/4 p-1 border rounded border-blue-600"
            placeholder="name"
            type="text"
            name="name"
            id="name-input"
            required
          />
          <input
            className="w-1/4 p-1 border rounded border-blue-600"
            placeholder="Year"
            type="text"
            name="year"
            id="year-input"
            required
          />
          <input
            className="w-1/4 p-1 border rounded border-blue-600"
            placeholder="Genre"
            type="text"
            name="genre"
            id="genre-input"
            required
          />
          <input
            className="w-1/4 p-1 border rounded border-blue-600"
            placeholder="Cast"
            type="text"
            name="cast"
            id="cast-input"
            required
          />
          <input
            className="w-1/4 p-1 border rounded border-blue-600"
            placeholder="Episodes"
            type="number"
            name="episodes"
            id="episodes-input"
            min={0}
            required
          />
          <button
            className="p-2 my-4 border rounded border-blue-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {list.shows.map((show, index) => {
        return (
          <ShowComponent
            id={show.id}
            key={index}
            name={show.name}
            year={show.year}
            cast={show.cast}
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
