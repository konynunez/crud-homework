import React from 'react';
import ManagementPage from './management/page';

export default function HomePage() {
  const showList = [
    { name: "Love You Seven times", year: "2023", genre: "Wuxia/Xanxia", cast: "Ding Yu Xi, Yang Chao Yue", episodes: 39 },
    { name: "Journey of Chong Zi", year: "2023", genre: "Wuxia/Xanxia", cast: "Jeremy Tsui, Yang Chao Yue", episodes: 49 },
    { name: "Lost You Forever", year: "2023", genre: "Wuxia/Xanxia", cast: "Zhang Wa Yi", episodes: 40 },
    { name: "Love and Redemption", year: "2020", genre: "Wuxia/Xanxia", cast: "Cheng Yi, Yuan BinYian", episodes: 44 },
    { name: "Joy of Life", year: "2019", genre: "Wuxia/Xanxia", cast: "Chan Ruo, yun, Li Qin", episodes: 50 }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center mb-8">Shows Watched Lately</h1>
      <div>
        {showList.map((show, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded mb-4">
            <h2 className="text-xl font-bold">{show.name}</h2>
            <p><strong>Year:</strong> {show.year}</p>
            <p><strong>Genre:</strong> {show.genre}</p>
            <p><strong>Cast:</strong> {show.cast}</p>
            <p><strong>Episodes:</strong> {show.episodes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
