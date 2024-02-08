import React from "react";

function FormAccountOrganism() {
  return (
    <form className="mt-16 w-80 flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Username</label>
        <input
          className="px-3 py-2 outline-none border rounded-md"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Name</label>
        <input
          className="px-3 py-2 outline-none border rounded-md"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Email</label>
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
      <div className="flex flex-col gap-4">
        <button className="bg-violet-700 text-white px-8 py-2 rounded-md w-full">
          Update
        </button>
        <button className="bg-red-200  px-8 py-2 rounded-md w-full border border-red-500">
          Delete account
        </button>
      </div>
    </form>
  );
}

export default FormAccountOrganism;
