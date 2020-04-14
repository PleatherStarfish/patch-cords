import React, { useEffect } from "react";
import uniqid from "uniqid";
import Box from "./Box";

const Canvas = () => {
  // const [nodes, setNodes] = useState([]);
  // const [lines, setLines] = useState([]);
  // const [clicked, setClicked] = useState([]);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => console.log(e.clientX, e.clientY));
  });

  const handleClicked = (event) => {
    console.log(event)
  };

  return (
    <>
      {/* <Box title="Box One" id={uniqid()} /> */}
      {/* <Box title="Box Two" id={uniqid()} /> */}
      <Box title="Box Three" id={uniqid()} handleClicked={handleClicked} />
    </>
  );
};

export default Canvas;