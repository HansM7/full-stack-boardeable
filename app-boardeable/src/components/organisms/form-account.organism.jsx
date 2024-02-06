import React from "react";

function FormAccountOrganism() {
  return (
    <form className="mt-20 w-80">
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Username</label>
        <input
          className="px-3 py-2 outline-none border rounded-md"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Password</label>
        <input
          className="px-3 py-2 outline-none border rounded-md"
          type="password"
        />
      </div>
      <div>
        <button className="bg-violet-700 text-white px-8 py-2 rounded-md w-full">
          Update
        </button>
      </div>
    </form>
  );
}

export default FormAccountOrganism;
