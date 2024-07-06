import Image from 'next/image';
import seriesImage from '/public/images/series.png';

export default function About() {
  return (
    <div className="flex flex-col items-center mb-8">
      <header className="w-full">
        <Image 
          src={seriesImage} 
          alt="Header Image" 
          layout="responsive" 
          width={1200} 
          height={100} 
          className="w-full h-auto" 
        />
      </header>
      <h1 className="text-4xl text-indigo-500 text-center mt-4">About Us</h1>
      <p className="font-bold mt-10 text-center">Welcome to our List Management App. This is the About page. In this app you can add, 
        edit, erase shows.</p>
    </div>
  );
}
