import React from "react";

import "./App.css";

const App: React.FC<{}> = function App() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;
  const gl = canvas?.getContext("webgl");
  function initGL() {
    if (canvas && gl) {
      gl?.viewport(0, 0, canvas.width, canvas.height);
      gl?.clearColor(1, 0, 0, 1);
    }
  }
  function draw() {
    if (gl) {
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
  }
  initGL();
  draw();
  return <canvas ref={canvasRef} id="canvas" width="600" height="600" />;
};

export default App;
