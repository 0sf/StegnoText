import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  encodeImage: null,
  decodeImage: null,
};

// create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action
  function setEncodeImage(img) {
    dispatch({
      type: "SET_ENCODE_IMAGE",
      payload: img,
    });
  }

  function setDecodeImage(img) {
    dispatch({
      type: "SET_DECODE_IMAGE",
      payload: img,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        encodeImage: state.encodeImage,
        decodeImage: state.decodeImage,
        setEncodeImage,
        setDecodeImage,
        // deleteTransaction,
        // addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
