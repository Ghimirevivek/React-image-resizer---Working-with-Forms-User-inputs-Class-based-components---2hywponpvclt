import React, { useState } from 'react'
import '../styles/App.css'
import image from '../image.jpeg'

const App = () => {
  const [height, setHeight] = useState(320)
  const [width, setWidth] = useState(320)
  const handleHeightChange = (e) => {
    setHeight(e.target.value)
  }
  const handleWidthChange = (e) => {
    setWidth(e.target.value)
  }
  return (
    <div id="main">
      <img src={image} height={height} width={width} id="resizable-img" />
      <div>
        <label for="height-slider">Height</label>
        <input
          type="range"
          min="100"
          max="800"
          id="height-slider"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <div>
        <label for="width-slider">width</label>
        <input
          type="range"
          min="100"
          max="800"
          id="width-slider"
          value={width}
          onChange={handleWidthChange}
        />
      </div>
    </div>
  )
}

export default App
