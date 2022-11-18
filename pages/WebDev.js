import React from 'react'
import DarkModeToggle from '../components/elements/DarkModeToggle';

import ProjectList from '../components/elements/CardList'

function WebDev() {
  const internships = [
    {
        title: "Some Kind of Project",
        img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
        content: "some long winded description of a project to fill space, this project features whatever and dumb stuff"
    },
];

const freelance = [
  {
      title: "Some Kind of Project",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content: "some long winded description of a project to fill space, this project features whatever and dumb stuff"
  },
  {
      title: "Some Kind of Project",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content: "some long winded description of a project to fill space, this project features whatever and dumb stuff"
  },
  {
      title: "Some Kind of Project",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content: "some long winded description of a project to fill space, this project features whatever and dumb stuff"
  },
];

const projects = [
  {
      title: "Some Kind of Project",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content: "some long winded description of a project to fill space, this project features whatever and dumb stuff"
  },
  {
      title: "Some Kind of Project",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content: "some long winded description of a project to fill space, this project features whatever and dumb stuff"
  },
  {
      title: "Some Kind of Project",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content: "some long winded description of a project to fill space, this project features whatever and dumb stuff"
  },
];

  return (
    <div>
      <DarkModeToggle />
      <h1> Internships </h1>
      <ProjectList posts={internships}/>
      <h1> Freelance </h1>
      <ProjectList posts={freelance}/>
      <h1> Personal Projects </h1>
      <ProjectList posts={projects}/>
    </div>
  )
}

export default WebDev