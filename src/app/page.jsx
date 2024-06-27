"use client";
import { useState, useEffect } from "react";
import { Show, List } from "../utils/list";
import { getAllDocuments } from "../utils/firebaseUtils";
import { db } from "../../firebase.config";
import ShowComponent from "../components/Show";

export default function HomePage() {
  const [list, setList] = useState(
    new List("Kony's Latest seen Shows", [])
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const documents = await getAllDocuments(db, "shows");

        const showInstances = documents.map((doc) => {
          return new Show (
            doc.name, 
            doc.year,
            doc.genre, 
            doc.cast, 
            doc.episodes
          );
      });

        setList(new List(list.id, showInstances));
      } catch (error) {
        console.log("error fetching docs", error);
      }
    }

    fetchData();

    return () => {
      console.log("HomePage side effect cleanup");
    };
  }, []);

  return (
    <main style={{ minHeight: "85vh" }}>
      <h1 className="p-12 text-6xl text-center bg-blue-500">
        Panoramix Design
      </h1>
      <h2 className="py-3 text-3xl text-center bg-blue-300">
        Wuxia/Xanxia Content!
      </h2>
      <div>
        <h3 className="m-5 text-xl">
          Show List
        </h3>
        <hr className="m-5" />
        <div className="flex flex-wrap">
          {list.shows.map((show) => {
            return (
            <div key={show.genre} className="w-1/4">
              <ShowComponent
                name={show.name}
                year={show.year}
                genre={show.genre}
                cast={show.cast}
                episodes={show.episodes}
              />
            </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
