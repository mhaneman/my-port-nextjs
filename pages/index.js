import Footer from "../components/Footer"

import Image from 'next/image'
import Selfie from '../public/selfie.jpg'

import Header from "../components/Header"

export default function Home() {
  return (
    <>
     <Hero />
     <Preview />
     <AboutMe />
     <Footer />
    </>
  )
}

const Hero = () => {
  return (
    <div style={{backgroundImage: `url(hero-bg.jpg)`}}
      className="
      overflow-hidden h-screen bg-no-repeat bg-cover bg-center bg-fixed">
        
        <Header />
   
      <div className="
      absolute top-1/4
      text-white font-bold 
      text-4xl md:text-6xl 
      w-1/2 h-1/2">

        <div className="ml-32 w-full">
          <div className="text-green-300 lg:ml-12">Hello! I am</div>
          <div className="mt-3">Michael Haneman</div>
        </div>

        <div className="text-white font-bold mt-10 ml-32
        text-2xl md:text-3xl 
        grid
        relative w-full h-full">
          <div className="absolute underline decoration-slate-400">front-end</div>
          <div className="absolute lg:left-1/4 top-1/4 underline decoration-slate-400">mobile games</div>
          <div className="absolute lg:left-1/2 top-1/2 underline decoration-slate-400">researcher</div>
        </div>
      </div>
    </div>
  )
}

const AboutMe = () => {
  return (
    <div className="
    w-screen h-[75vh]
    flex flex-col justify-center align-middle items-center
    bg-slate-600 text-center">
      <ProfileCard />
      <div className="max-w-lg mt-10 text-white">
        <h5>California Polytechnic State University</h5>
        <h5>Physics BS</h5>

        <div className="mt-10 text-white">
          <h4>Welcome to my Website. ... Have a good visit!</h4>
        </div>
      </div>
      
    </div>
  )
}



const  ProfileCard = () => {
  return (
    <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-white">
      <div className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"><Image src={Selfie} /> </div>
      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">Michael Haneman</h2>
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center">
          
        </div>
      </div>
    </div>
  )
}

const preview = [
  {
    title: "Infinite Runner",
    content: "made using c# and the Godot Engine",
    img: "https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-885x432/public/news/research/news/crop_178.jpg?itok=JwCQEISd",
    url: ""
  }, 
  {
    title: "Freelance",
    content: "create a portfolio website for a client",
    img: "https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-885x432/public/news/research/news/crop_178.jpg?itok=JwCQEISd",
    url: ""
  },
  {
    title: "Digital Twin Forge",
    content: "description of section",
    img: "https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-885x432/public/news/research/news/crop_178.jpg?itok=JwCQEISd",
    url: ""
  },
  {
    title: "This Website",
    content: "description of section",
    img: "https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-885x432/public/news/research/news/crop_178.jpg?itok=JwCQEISd",
    url: ""
  },
]

const Preview = () => (
  <div className="">
    <div className="h-[25vh]  bg-slate-900">
      <div className="text-6xl text-center text-white">Checkout my recent projects</div>
    </div>


    {
      preview.map((item) => (
        <div
        className="h-auto text-white
        flex justify-evenly odd:flex-row-reverse
        odd:bg-slate-900 even:bg-slate-800">

          <div className="flex flex-col w-full h-full">
            <div className="text-6xl">{item.title}</div>
            <div className="text-base pt-5 pl-5">{item.content}</div>
          </div>

          <div style={{backgroundImage: `url(hero-bg.jpg)`}}
          className="overflow-hidden bg-fill bg-no-repeat
          w-full h-full">
            <div className="w-64 h-64">
              <img src={item.img}/>
            </div>
          </div>

        </div>
    ))}
  </div>
)


