"use client";
import { useState, useEffect } from "react";
import ShowComponent from "../components/Show";
import { Show, List } from "../utils/list";
import { getAllDocuments } from "../utils/firebaseUtils";
import { db } from "../../firebase.config";

export default function Home() {
  const [list, setList] = useState(
    new List("historic costume Wuxia Drama", []));

  useEffect(() => {
    async function fetchData() {
      try {
        const documents = await getAllDocuments(db, "shows");
        const showInstances = documents.map((doc        
        ) => {
          return new Show(doc.title, doc.year, doc.genre, doc.episodes);
        });
        setList(new List(list.name, showInstances));
      } catch (error) {
        console.error("Error fetching docs", error);
      }
    }

    fetchData();
    return () => {
      console.log("cleaning up...")
    }
  }, []);

  return (
    <main style={{ minHeight: "85vh" }}>
      <h1 className="py-12 text-6xl text-center bg-indigo-400">Panoramix</h1>
      <h2 className="py-3 text-3xl text-center bg-indigo-200">
        Welcome to the best content!
      </h2>    
        <div>
          <h3 className="m-5 text-xl">Show list</h3>
          <hr className="mx-5" />
          <div className="flex flex-wrap">
            {list.shows.map((show) => (
              <div key={show.genre} className="w-1/4">
                <ShowComponent
                  title={show.title}
                  year={show.year}
                  genre={show.genre}
                  episodes={show.episodes}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
  );
}