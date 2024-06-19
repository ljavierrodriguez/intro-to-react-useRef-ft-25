import React, { useState } from 'react'

const MediaPlayer = () => {

    const [url] = useState("https://playground.4geeks.com")

    const [songs] = useState([
        {
          "id": 1,
          "name": "Mario Castle",
          "url": "/sound/files/mario/songs/castle.mp3",
          "category": "category"
        },
        {
          "id": 2,
          "name": "Mario Star",
          "url": "/sound/files/mario/songs/hurry-starman.mp3",
          "category": "category"
        },
        {
          "id": 3,
          "name": "Mario Overworld",
          "url": "/sound/files/mario/songs/overworld.mp3",
          "category": "category"
        },
        {
          "id": 4,
          "name": "Mario Stage 1",
          "url": "/sound/files/mario/songs/stage1.mp3",
          "category": "category"
        },
        {
          "id": 5,
          "name": "Mario Stage 2",
          "url": "/sound/files/mario/songs/stage2.mp3",
          "category": "category"
        },
        {
          "id": 6,
          "name": "Mario Star",
          "url": "/sound/files/mario/songs/starman.mp3",
          "category": "category"
        },
        {
          "id": 7,
          "name": "Mario Underworld",
          "url": "/sound/files/mario/songs/underworld.mp3",
          "category": "category"
        },
        {
          "id": 8,
          "name": "Mario Underwater",
          "url": "/sound/files/mario/songs/underwater.mp3",
          "category": "category"
        },
        {
          "id": 9,
          "name": "Zelda Castle",
          "url": "/sound/files/videogame/songs/zelda_castle.mp3",
          "category": "category"
        },
        {
          "id": 10,
          "name": "Zelda Outworld",
          "url": "/sound/files/videogame/songs/zelda_outworld.mp3",
          "category": "category"
        },
        {
          "id": 11,
          "name": "Zelda Titles",
          "url": "/sound/files/videogame/songs/zelda_title.mp3",
          "category": "category"
        },
        {
          "id": 12,
          "name": "Sonic Brain Zone",
          "url": "/sound/files/videogame/songs/sonic_brain-zone.mp3",
          "category": "category"
        },
        {
          "id": 13,
          "name": "Zelda Link To Past",
          "url": "/sound/files/videogame/songs/zelda_link-to-past.mp3",
          "category": "category"
        },
        {
          "id": 14,
          "name": "Flintstones",
          "url": "/sound/files/cartoons/songs/flintstones.mp3",
          "category": "cartoon"
        },
        {
          "id": 15,
          "name": "power-rangers",
          "url": "/sound/files/cartoons/songs/power-rangers.mp3",
          "category": "cartoon"
        },
        {
          "id": 16,
          "name": "simpsons",
          "url": "/sound/files/cartoons/songs/simpsons.mp3",
          "category": "cartoon"
        },
        {
          "id": 17,
          "name": "south-park",
          "url": "/sound/files/cartoons/songs/south-park.mp3",
          "category": "cartoon"
        },
        {
          "id": 18,
          "name": "thundercats",
          "url": "/sound/files/cartoons/songs/thundercats.mp3",
          "category": "cartoon"
        },
        {
          "id": 19,
          "name": "x-men",
          "url": "/sound/files/cartoons/songs/x-men.mp3",
          "category": "cartoon"
        }
      ])

  return (
    <div>
        <h3>MediaPlayer</h3>
        <audio controls src={`${"https://playground.4geeks.com"}${"/sound/files/mario/songs/underworld.mp3"}`}></audio>
    </div>
  )
}

export default MediaPlayer