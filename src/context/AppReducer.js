export default (state, action) => {
  switch (action.type) {
    case "SET_ENCODE_IMAGE":
      return { encodeImage: action.payload };

    case "SET_DECODE_IMAGE":
      return { decodeImage: action.payload };

    default:
      return state;
  }
};
