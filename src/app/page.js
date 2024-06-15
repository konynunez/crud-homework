import React from 'react';

export default function HomePage() {
  const showList = [
    { 
      name: "Love You Seven times", 
      year: "2023", 
      genre: "Wuxia/Xanxia", 
      cast: "Ding Yu Xi, Yang Chao Yue", 
      episodes: 39, 
      pictureLink: "/images/7times.jpg", 
      videoLink: "https://youtu.be/j9ESQeCTEOM?feature=shared" 
    },
    { 
      name: "Journey of Chong Zi", 
      year: "2023", 
      genre: "Wuxia/Xanxia", 
      cast: "Jeremy Tsui, Yang Chao Yue", 
      episodes: 49, 
      pictureLink: "/images/journey.webp", 
      videoLink: "https://youtu.be/Ng9WA54YGJU?feature=shared" 
    },
    { 
      name: "Lost You Forever", 
      year: "2023", 
      genre: "Wuxia/Xanxia", 
      cast: "Zhang Wa Yi", 
      episodes: 40, 
      pictureLink: "/images/lost.webp", 
      videoLink: "https://youtu.be/HCAcq5CCivo?feature=shared" 
    },
    { 
      name: "Love and Redemption", 
      year: "2020", 
      genre: "Wuxia/Xanxia", 
      cast: "Cheng Yi, Yuan BinYian", 
      episodes: 44, 
      pictureLink: "/images/love.jpg", 
      videoLink: "https://youtu.be/Kl8pzQzkqQ0?feature=shared" 
    },
    { 
      name: "Joy of Life", 
      year: "2019", 
      genre: "Wuxia/Xanxia", 
      cast: "Chan Ruo, yun, Li Qin", 
      episodes: 50, 
      pictureLink: "/images/yoy.webp", 
      videoLink: "https://youtu.be/8D5AyJAXqiE?feature=shared" 
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center text-brown-700 mb-8">Shows Watched Lately</h1>
      <div>
        {showList.map((show, index) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}

