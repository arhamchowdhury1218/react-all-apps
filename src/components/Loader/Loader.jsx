import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-purple-100" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#632EE3] animate-spin" />
      </div>
      <p className="mt-4 text-sm font-medium text-[#632EE3] tracking-widest uppercase animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
