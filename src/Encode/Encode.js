import React, { useState, useContext } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dad from "../DAD/Dad";
import OutputImage from "./OutputImage";
import { GlobalContext } from "../context/GlobalState";

const CryptoJS = require("crypto-js");

const encrypt = (text) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};

function Encode() {
  const { encodeImage } = useContext(GlobalContext);

  const [enText, setEnText] = useState(null);
  const [isEnc, setisEnc] = useState(false);
  const [success, setSuccess] = useState(false);
  const [outImage, setOutImage] = useState(null);

  const displayEnc = () => {
    setEnText(document.getElementById("txtArea").value);
    if ((enText != null) & (encodeImage != null)) {
      if (isEnc) {
        var imageEnc = new Image();
        imageEnc.src = encodeImage;
        imageEnc.onload = () => {
          // document.querySelector("#outputImg").src = window.steg.encode(
          //   encrypt(enText),
          //   imageEnc
          // );
          setOutImage(window.steg.encode(encrypt(enText), imageEnc));
          setSuccess(!success);
        };
      } else {
        var imageDec = new Image();
        imageDec.src = encodeImage;
        imageDec.onload = () => {
          // document.querySelector("#outputImg").src = window.steg.encode(
          //   enText,
          //   imageDec
          // );
          setOutImage(window.steg.encode(enText, imageDec));
          setSuccess(!success);
        };
      }
    } else {
      alert("Image and Message cannot be empty");
    }
  };

  return (
    <div>
      <Card border="primary" style={{ width: "100%" }}>
        <Card.Header>Encode</Card.Header>
        <Card.Body>
          <h6>Select your image.</h6>
          <Dad imgType="enc" />
          <Form.Group>
            <Form.Control
              id="txtArea"
              as="textarea"
              placeholder="Type your message here..."
              maxLength="10494"
              rows={4}
              onChange={(e) => setEnText(e.target.value)}
            />
          </Form.Group>
          <div className="form-check">
            <div className="form-check-input">
              <input
                type="checkbox"
                id="encrypt"
                onClick={() => {
                  setisEnc(!isEnc);
                }}
              />
              <label className="form-check-label">Encrypt</label>{" "}
            </div>
          </div>
          {/* <input type="password" className="form-control w-25" /> */}
          <div className="text-right">
            <Button variant="success" onClick={displayEnc}>
              Encode
            </Button>{" "}
          </div>
          {success && <OutputImage img={outImage} />}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Encode;
