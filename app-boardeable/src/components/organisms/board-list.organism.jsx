import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../constants/api.constant";
import StatusOrganism from "./status.organism";

function BoardListOrganism({ id }) {
  const [dataStatus, setDataStatus] = useState([]);

  const [newTitle, setNewTitle] = useState("");

  async function handleCreateList() {
    try {
      if (newTitle === "") {
        alert("Please enter title");
      } else {
        const headers = {
          Authorization: window.localStorage.getItem("auth-session"),
        };

        await axios.post(
          baseUrl + "/boards/" + id + "/status",
          { description: newTitle },
          { headers }
        );
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStatus() {
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };
      const response = await axios.get(`${baseUrl}/boards/${id}/status`, {
        headers,
      });

      setDataStatus(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <main className="flex flex-wrap mt-8 gap-4">
      {/* first column ---------------------------------------------------------------- */}

      {dataStatus.map((status, index) => (
        <StatusOrganism key={index} status={status} id={id} />
      ))}

      {/* end first column ---------------------------------------------------------------- */}

      <div className="w-72 flex flex-col rounded-md shadow-md p-4 bg-slate-100 gap-2">
        <h3>List title</h3>
        <input
          className="px-3 py-2 outline-none border rounded-md"
          type="text"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button
          onClick={handleCreateList}
          className="bg-violet-700 text-white px-3 py-2 rounded-md w-fit"
        >
          Create new list
        </button>
      </div>
    </main>
  );
}

export default BoardListOrganism;
