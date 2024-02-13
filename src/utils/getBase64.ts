export const getBase64 = (file: Blob) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    let encoded = reader.result?.toString().replace(/^data:(.*,)?/, "");
    if (encoded && encoded.length % 4 > 0) {
      encoded += "=".repeat(4 - (encoded.length % 4));
    }
    return encoded;
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
};
