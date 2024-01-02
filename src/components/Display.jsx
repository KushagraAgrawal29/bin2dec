import React from "react";

const Display = ({ inputBin, decNum }) => {
  return (
    <div className="my-8 text-2xl font-bold">
      {!inputBin.binary ? (
        <p className="text-xs text-gray-500">
          <span role="img" aria-label="Shrug">
            🤷
          </span>
        </p>
      ) : (
        <p>{decNum}</p>
      )}
    </div>
  );
};

export default Display;
