import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../constants/api.constant";

function FormAccountOrganism() {
  const [data, setData] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  });
  async function handleMe() {
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };

      const response = await axios.get(baseUrl + "/auth/me", { headers });
      const info = response.data.data;
      setData({
        ...data,
        username: info.username,
        email: info.email,
        name: info.name,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };

      const response = await axios.patch(baseUrl + "/auth/me", data, {
        headers,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleMe();
  }, []);

  return (
    <form className="mt-16 w-80 flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Username</label>
        <input
          defaultValue={data.username}
          className="px-3 py-2 outline-none border rounded-md"
          type="text"
          onChange={(e) => setData({ ...data, username: e.target.value })}
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Name</label>
        <input
          className="px-3 py-2 outline-none border rounded-md"
          type="text"
          defaultValue={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Email</label>
        <input
          className="px-3 py-2 outline-none border rounded-md"
          type="text"
          defaultValue={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Password</label>
        <input
          className="px-3 py-2 outline-none border rounded-md"
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
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
