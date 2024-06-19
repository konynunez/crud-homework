"use client";

import React, { useState } from 'react';

class Show {
  constructor(name, year, genre, cast, episodes, pictureLink, videoLink) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.episodes = episodes;
    this.pictureLink = pictureLink;
    this.videoLink = videoLink;
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
    new Show("Love You Seven Times", "2023", "Wuxia/Xanxia", "Ding Yu Xi, Yang Chao Yue", 39, "/images/7times.jpg", "https://youtu.be/j9ESQeCTEOM?feature=shared"),
    new Show("Journey of Chong Zi", "2023", "Wuxia/Xanxia", "Jeremy Tsui, Yang Chao Yue", 49, "/images/chongzi.webp", "https://youtu.be/Ng9WA54YGJU?feature=shared"),
    new Show("Lost You Forever", "2023", "Wuxia/Xanxia", "Zhang Wa Yi", 40, "/images/lostyou.webp", "https://youtu.be/HCAcq5CCivo?feature=shared"),
    new Show("Love and Redemption", "2020", "Wuxia/Xanxia", "Cheng Yi, Yuan BinYian", 44, "/images/love.jpg", "https://youtu.be/Kl8pzQzkqQ0?feature=shared"),
    new Show("Joy of Life", "2019", "Wuxia/Xanxia", "Chan Ruo, yun, Li Qin", 50, "/images/yoy.webp", "https://youtu.be/8D5AyJAXqiE?feature=shared"),
  ]));
  const [currentShow, setCurrentShow] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  function handleAddShow(e) {
    e.preventDefault();

    const newShow = new Show(
      e.target.title.value,
      e.target.year.value,
      e.target.genre.value,
      e.target.cast.value,
      parseInt(e.target.episodes.value),
      e.target.pictureLink.value,
      e.target.videoLink.value
    );

    const newShowList = new ShowList(showList.name, [...showList.shows]);
    newShowList.addShow(newShow);

    setShowList(newShowList);
    e.target.reset();
  }

  function handleEditShow(index) {
    setCurrentShow(showList.shows[index]);
    setCurrentIndex(index);
  }

  function handleUpdateShow(e) {
    e.preventDefault();

    const updatedShow = new Show(
      e.target.title.value,
      e.target.year.value,
      e.target.genre.value,
      e.target.cast.value,
      parseInt(e.target.episodes.value),
      e.target.pictureLink.value,
      e.target.videoLink.value
    );

    const newShowList = new ShowList(showList.name, [...showList.shows]);
    newShowList.updateShow(currentIndex, updatedShow);

    setShowList(newShowList);
    setCurrentShow(null);
    setCurrentIndex(null);
    e.target.reset();
  }

  function handleDeleteShow(index) {
    const newShowList = new ShowList(showList.name, [...showList.shows]);
    newShowList.deleteShow(index);

    setShowList(newShowList);
  }

  return (
    <div className="p-4 border border-gray-300 rounded mb-4">
      <h1 className="text-4xl text-center text-brown-700 mb-8">Management Page</h1>

      <div className="flex justify-center">
        <form onSubmit={currentShow ? handleUpdateShow : handleAddShow} className="w-full max-w-md p-4 border border-gray-300 rounded" key={currentShow ? currentShow.name : 'add'}>
          <input type="text" name="title" placeholder="Title" defaultValue={currentShow ? currentShow.name : ''} required className="w-full p-2 border border-gray-300 rounded mb-2"/>
          <input type="text" name="year" placeholder="Year" defaultValue={currentShow ? currentShow.year : ''} required className="w-full p-2 border border-gray-300 rounded mb-2"/>
          <input type="text" name="genre" placeholder="Genre" defaultValue={currentShow ? currentShow.genre : ''} required className="w-full p-2 border border-gray-300 rounded mb-2"/>
          <input type="text" name="cast" placeholder="Cast" defaultValue={currentShow ? currentShow.cast : ''} required className="w-full p-2 border border-gray-300 rounded mb-2"/>
          <input type="number" name="episodes" placeholder="Number of Episodes" defaultValue={currentShow ? currentShow.episodes : ''} required className="w-full p-2 border border-gray-300 rounded mb-2"/>
          <input type="text" name="pictureLink" placeholder="Picture Link" defaultValue={currentShow ? currentShow.pictureLink : ''} required className="w-full p-2 border border-gray-300 rounded mb-2"/>
          <input type="text" name="videoLink" placeholder="Video Link" defaultValue={currentShow ? currentShow.videoLink : ''} required className="w-full p-2 border border-gray-300 rounded mb-4"/>
          <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
            {currentShow ? 'Update' : 'Add'} Show
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {showList.shows.map((show, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded mb-4">
            <h2 className="text-xl font-bold">{show.name}</h2>
            <p><strong>Year:</strong> {show.year}</p>
            <p><strong>Genre:</strong> {show.genre}</p>
            <p><strong>Cast:</strong> {show.cast}</p>
            <p><strong>Episodes:</strong> {show.episodes}</p>
            <p>
              <a href={show.pictureLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Picture</a> | 
              <a href={show.videoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">Video</a>
            </p>
            <div className="space-x-4 mt-4">
              <button onClick={() => handleEditShow(index)} className="px-4 py-2 text-white bg-yellow-500 rounded">Edit</button>
              <button onClick={() => handleDeleteShow(index)} className="px-4 py-2 text-white bg-red-500 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
