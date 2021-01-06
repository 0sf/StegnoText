import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalContext } from "../context/GlobalState";
import Dad from "../DAD/Dad";

const CryptoJS = require("crypto-js");

function Decode() {
  const { decodeImage } = useContext(GlobalContext);
  const [message, setmessage] = useState(null);
  const [decryptMessage, setDecryptMessage] = useState("");

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

  const decrypt = (message) => {
    var words = CryptoJS.enc.Base64.parse(message);
    var textString = CryptoJS.enc.Utf8.stringify(words);
    setDecryptMessage(textString);
  };

  return (
    <div>
      <Card border="primary" style={{ width: "100%" }}>
        <Card.Header>Decode</Card.Header>
        <Card.Body>
          <h6>Select the image to decode</h6>
          <Dad imgType="dec" />
          <p>{message}</p>
          <p>{decryptMessage}</p>
          <input
            type="checkbox"
            id="encrypt"
            onClick={() => {
              //setDecryptMessage(decrypt(message));
              decrypt(message);
            }}
          />
          <label>Base64 Decode</label>{" "}
          <div className="text-right">
            <Button variant="success" onClick={decodeFun}>
              Decode
            </Button>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Decode;
