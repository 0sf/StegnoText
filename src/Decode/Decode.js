import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalContext } from "../context/GlobalState";
import Dad from "../DAD/Dad";

function Decode() {
  const { decodeImage } = useContext(GlobalContext);
  const [message, setmessage] = useState(null);
  const decodeFun = () => {
    if (decodeImage != null) {
      var image = new Image();
      image.onload = () => {
        setmessage(window.steg.decode(image));
      };
      image.src = decodeImage;
    } else {
      alert("Select an image to continue");
    }
  };

  return (
    <div>
      <Card border="primary" style={{ width: "100%" }}>
        <Card.Header>Decode</Card.Header>
        <Card.Body>
          <h6>Select the image to decode</h6>
          <Dad imgType="dec" />
          <div className="text-right">
            <Button variant="success" onClick={decodeFun}>
              Decode
            </Button>{" "}
            <p>{message}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Decode;
