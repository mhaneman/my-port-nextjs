import React from 'react'
import DarkModeToggle from '../components/elements/DarkModeToggle';

import ProjectList from '../components/elements/ProjectList'

export default function GameDev() {
  const posts = [
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
      <h1> Mobile Games </h1>
      <ProjectList posts={posts}/>
      <h1> Web Games with Rust </h1>
      <ProjectList posts={posts}/>
    </div>
  )
}