import React from "react";

export const Loading = () => {
  return (
    <>
      <div className="w-full h-screen bg-white absolute inset-0 z-50">
        <div className="flex flex-row gap-2 border-2 h-full justify-center items-center">
          <div className="w-4 h-4 rounded-full bg-primary animate-bounce" />
          <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]" />
          <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]" />
        </div>
      </div>
    </>
  );
};
