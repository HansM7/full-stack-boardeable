import React, { useEffect, useState } from "react";
import { initalStatus } from "../../hooks/home-list.hook";
import axios from "axios";
import { baseUrl } from "../../constants/api.constant";
import { Link } from "react-router-dom";

function HomeListOrganism() {
  const { optionsColors, color, handleClick, handleSelect, paletVisible } =
    initalStatus();

  const [title, setTitle] = useState("");

  const [boards, setBoards] = useState([]);

  async function handleCreate() {
    if (title.length) {
      const format = {
        color,
        title,
      };
      setBoards([...boards, format]);
      await createBoard(format);
    } else {
      alert("Please enter title");
    }
  }

  async function fetchBooards() {
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };
      const response = await axios.get(baseUrl + "/boards", { headers });
      setBoards([...boards, ...response.data.data]);
    } catch (error) {
      console.log(error);
    }
  }

  async function createBoard(board) {
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };
      await axios.post(baseUrl + "/boards", board, { headers });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBooards();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      <div className="relative ">
        {/* card */}

        <div className="rounded-md bg-slate-200 p-4 min-w-[18rem]">
          <h2>Board title</h2>
          <input
            className="w-full px-3 border py-2 outline-none  rounded-md mt-2"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex items-center gap-2">
              <span>Color</span>
              <div
                onClick={handleClick}
                role="button"
                className={`rounded-full border border-black w-6 h-6 ${color}`}
              ></div>
            </div>
            <button
              className="bg-violet-700 text-white px-8 py-2 rounded-md"
              onClick={handleCreate}
            >
              Create
            </button>
          </div>
        </div>

        {/* paleta de colores */}

        {paletVisible ? (
          <div className="shadow-md rounded-md bg-white w-32  absolute left-4 top-36 flex flex-wrap justify-around py-2 px-2 gap-1">
            {optionsColors.map((item, index) => (
              <div
                onClick={() => handleSelect(item)}
                key={index}
                role="button"
                className={`rounded-full border border-black w-6 h-6 ${item}`}
              ></div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      {/* iterar */}

      {boards.map((board, index) => (
        <Link key={index} to={"/boards/" + board.id}>
          <div
            className={`rounded-md min-h-40 ${board.color} p-4 min-w-[18rem]  flex items-center justify-center`}
          >
            <h1 className="font-bold text-xl">{board.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomeListOrganism;
