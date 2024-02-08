import React from "react";

function ToastErrorMolecule({ message = "Error in aplication" }) {
  return (
    <div
      id="toast-warning"
      className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow max-h-16 absolute bottom-[-2rem] right-0 mr-10"
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white bg-red-500 rounded-lg ">
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
        </svg>
        <span className="sr-only">Warning icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
    </div>
  );
}

export default ToastErrorMolecule;
