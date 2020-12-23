import React from "react";
import { Button } from "react-bootstrap";

// const downloadFunction = (img) => {
//   console.log(img);
//   //   var outputImage = new Image();
//   //   outputImage.onload = () => {};
//   //   outputImage.src = img.src;
//   //   fileDownload(outputImage, "image.png");
// };

function downloadFunction(src) {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    // create Canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    // create a tag
    const a = document.createElement("a");
    a.download = "download.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  };
}

const OutputImage = ({ img }) => {
  return (
    <div>
      <img src={img} width="50%" height="25%" id="outputImg" alt="Encoded" />{" "}
      <br />
      <Button varient="success" onClick={() => downloadFunction(img)}>
        Download
      </Button>
    </div>
  );
};

export default OutputImage;
