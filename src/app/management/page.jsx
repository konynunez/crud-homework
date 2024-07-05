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
import { db, auth } from "../../../firebase.config";

import AddShowForm from "../../components/AddShowForm";
import RegisterForm from "../../components/RegisterForm";
import LoginForm from "../../components/LoginForm";
import LogoutButton from "../../components/LogoutButton";

export default function ManagementPage() {
  const [list, setList] = useState(new List("The best series!", []));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
  }, [list.name]);

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

  async function deleteShow(genre, docID) {
    await deleteDocument(db, "shows", docID);
    // const newList = new List(list.name, list.shows);
    // newList.removeShow(genre);


    setList(newList);
  }

  const scrollToLoginForm = () => {
    document
      .getElementById("login-form")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="py-12 text-6xl text-center bg-indigo-500">
        Management Page
      </h1>
      <h2 className="py-3 text-3xl text-center bg-indigo-100">
        Best Content Around!
      </h2>

      {!user ? (
        <>
          <RegisterForm />
          <p className="text-center bg-indigo-50">
            Already Registered?
            <button
              onClick={scrollToLoginForm}
              className="text-indigo-500 hover:text-indigo-600"
            >
              &nbsp;Login here
            </button>
          </p>
          <LoginForm />
        </>
      ) : (
        <>
          <div className="my-2 text-center">
            <LogoutButton />
          </div>

          <AddShowForm handleAddShow={handleAddShow} />
          {list.shows.map((show, index) => {
            return (
              <ShowComponent
                id={show.id}
                key={index}
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
        </>
      )}
    </div>
  );
}
