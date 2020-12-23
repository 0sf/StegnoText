import React, { useContext, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { GlobalContext } from "../context/GlobalState";
import "./Dad.css";

function Dad({ imgType }) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = (e) => {
        if (imgType === "enc") {
          setEncodeImage(e.target.result);
        } else if (imgType === "dec") {
          setDecodeImage(e.target.result);
        } else {
          console.log("Error");
        }
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { setEncodeImage, setDecodeImage } = useContext(GlobalContext);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <section className="container-none">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop image file here, or click to file</p>
      </div>
      <aside>
        <p style={{ textAlign: "left", padding: "10px" }}>File</p>
        <p>{files}</p>
      </aside>
    </section>
  );
}

export default Dad;
