import React from 'react'
import CardList from '../components/CardList'
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Programming() {
  const mobile_posts = [
    {
        title: "Bird Run",
        img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
        content: "Classic Infinite Runner"
    },
    {
        title: "Portal Run",
        img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
        content: "Never before seen inifite runner"
    },
    {
        title: "Soccer Save",
        img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
        content: "mix of pixel art and 3d physics"
    },
  ];

  const web_posts = [
    {
        title: "Stat Jack",
        img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
        content: "Its not gambling if you know statistics"
    },
  ];

  return (
    <>
      <Header />
      <TableOfContents />
      <div style={{backgroundImage: `url(hero-bg.jpg)`}} 
      className='flex flex-col items-center
      py-20'>
        <div className="mb-32">
          <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-white"> Mobile Games </h1>
          <CardList posts={mobile_posts} />
        </div>

        <div className="">
          <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-white"> Web Games </h1>
          <CardList posts={web_posts}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

const TableOfContents = () => (
  <div className="h-64 bg-slate-900 text-white py-10">
    <div className="text-8xl text-center">
      Game Development
    </div>
  </div>
)