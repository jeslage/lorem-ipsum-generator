import React from "react";
import { useDrop } from "react-dnd-cjs";

import StyledDropzone from "./Dropzone.style";

const Dropzone = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "preset",
    drop: () => ({ name: "Dropzone" }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;

  return (
    <StyledDropzone ref={drop} canDrop={canDrop}>
      <span>{isActive ? "Drop to update settings" : "Drag a preset here"}</span>
    </StyledDropzone>
  );
};

export default Dropzone;
