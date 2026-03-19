import React from "react";
import { Commet, Riple } from "react-loading-indicators";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <Riple color="#901bd3" size="medium" text="" textColor="" /> */}
      <Commet color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
    </div>
  );
};

export default Loader;
