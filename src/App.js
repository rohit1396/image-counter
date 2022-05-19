import React, { useState } from "react";
import "./App.css";

function App() {
  const [pixel, setPixel] = useState(300);

  const increaseCount = () => {
    setPixel(pixel + 2);
  };
  return (
    <div className="App">
      <img
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="random_img"
        onClick={increaseCount}
        style={{
          height: `${pixel}px`,
          width: `${pixel}px`,
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default App;
