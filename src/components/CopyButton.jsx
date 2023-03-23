import React from "react";
import { useCopyToClipboard } from "../custom hook/useCopyToClipboard";
import "./CopyButton.css"

const CopyButton = ({ textToCopy }) => {
  const [isCopied, handleCopy] = useCopyToClipboard(2000);

  return (
  <div className="kontejnerCopy" >
    <button className="dugme-kopiranje" disabled={isCopied} onClick={() => handleCopy(textToCopy)}>
      {isCopied ? "KOPIRANO" : "KOPIRAJ"}
    </button>
    </div>
  );
};

export default CopyButton;