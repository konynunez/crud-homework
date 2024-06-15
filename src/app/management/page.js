"use client";

import React, { useState } from 'react';

class Show {
  constructor(name, year, genre, cast, episodes) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.episodes = episodes;
  }
}

class ShowList {
  constructor(name, shows) {
    this.name = name;
    this.shows = shows;
  }

  addShow(show) {
    this.shows.push(show);
  }

  updateShow(index, updatedShow) {
    this.shows[index] = updatedShow;
  }

  deleteShow(index) {
    this.shows.splice(index, 1);
  }
}

export default function ManagementPage() {
  const [showList, setShowList] = useState(new ShowList("Kony's Wuxia/Xanxia latest shows", [
    new Show("Love You Seven times", "2023", "Wuxia/Xanxia", "Ding Yu Xi, Yang Chao Yue", 39),
    new Show("Journey of Chong Zi", "2023", "Wuxia/Xanxia", "Jeremy Tsui, Yang Chao Yue", 49),
    new Show("Lost You Forever", "2023", "Wuxia/Xanxia", "Zhang Wa Yi", 40),
    new Show("Love and Redemption", "2020", "Wuxia/Xanxia", "Cheng Yi, Yuan BinYian", 44),
    new Show("Joy of Life", "2019", "Wuxia/Xanxia", "Chan Ruo, yun Li Qin", 50),
  ]));
  const [currentShow, setCurrentShow] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  function handleAddShow(e) {
    e.preventDefault(); // Prevents the default form submission behavior

    const newShow = new Show(
      e.target.title.value,
      e.target.year.value,
      e.target.genre.value,
      e.target.cast.value,
      parseInt(e.target.episodes.value)
    );

    const newShowList = new ShowList(showList.name, [...showList.shows]);
    newShowList.addShow(newShow);

    setShowList(newShowList);
    e.target.reset(); // Reset the form fields
  }

  function handleEditShow(index) {
    setCurrentShow(showList.shows[index]);
    setCurrentIndex(index);
  }

  function handleUpdateShow(e) {
    e.preventDefault(); // Prevents the default form submission behavior

    const updatedShow = new Show(
      e.target.title.value,
      e.target.year.value,
      e.target.genre.value,
      e.target.cast.value,
      parseInt(e.target.episodes.value)
    );

    const newShowList = new ShowList(showList.name, [...showList.shows]);
    newShowList.updateShow(currentIndex, updatedShow);

    setShowList(newShowList);
    setCurrentShow(null);
    setCurrentIndex(null);
    e.target.reset(); // Reset the form fields
  }

  function handleDeleteShow(index) {
    const newShowList = new ShowList(showList.name, [...showList.shows]);
    newShowList.deleteShow(index);

    setShowList(newShowList);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center mb-8">Management Page</h1>

      <form onSubmit={currentShow ? handleUpdateShow : handleAddShow} className="mb-8">
        <input type="text" name="title" placeholder="Title" defaultValue={currentShow ? currentShow.name : ''} required className="w-full p-2 border border-gray-300 rounded mb-2"/>
        <input type="text" name="year" placeholder="Year" defaultValue={currentShow ? currentShow.year : ''} required className="w-full p-2 border border-gray-300 rounded mb-2"/>
        <input type="text" name="genre" placeholder="Genre" defaultValue={currentShow ? currentShow.genre : ''} required className="w-full p-2 border border-gray-300 rounded mb-2"/>
        <input type="text" name="cast" placeholder="Cast" defaultValue={currentShow ? currentShow.cast : ''} required className="w-full p-2 border border-gray-300 rounded mb-2"/>
        <input type="number" name="episodes" placeholder="Number of Episodes" defaultValue={currentShow ? currentShow.episodes : ''} required className="w-full p-2 border border-gray-300 rounded mb-4"/>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
          {currentShow ? 'Update' : 'Add'} Show
        </button>
      </form>

      {showList.shows.map((show, index) => (
        <div key={index} className="p-4 border border-gray-300 rounded mb-4">
          <h2 className="text-xl font-bold">{show.name}</h2>
          <p><strong>Year:</strong> {show.year}</p>
          <p><strong>Genre:</strong> {show.genre}</p>
          <p><strong>Cast:</strong> {show.cast}</p>
          <p><strong>Episodes:</strong> {show.episodes}</p>
          <div className="space-x-4 mt-4">
            <button onClick={() => handleEditShow(index)} className="px-4 py-2 text-white bg-yellow-500 rounded">Edit</button>
            <button onClick={() => handleDeleteShow(index)} className="px-4 py-2 text-white bg-red-500 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
