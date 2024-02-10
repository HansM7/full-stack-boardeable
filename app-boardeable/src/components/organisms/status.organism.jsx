import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../constants/api.constant";
import ActionCardMolecule from "../molecules/action-card.molecule";
import CardMolecule from "../molecules/card.molecule";

function StatusOrganism({ status, id }) {
  const [openHeader, setOpenHeader] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);

  const [title, setTitle] = useState("");

  const [cards, setCards] = useState([]);

  function handleEditHeader() {}

  function handleDeleteHeader() {}

  async function fetchCards() {
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };
      const response = await axios.get(
        `${baseUrl}/boards/${id}/status/${status.id}`,
        {
          headers,
        }
      );
      setCards(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCards();
  }, []);

  async function handleSubmit() {
    try {
      if (!title.length) alert("Please enter a title");
      else {
        const headers = {
          Authorization: window.localStorage.getItem("auth-session"),
        };
        const data = {
          title,
          board_status_id: status.id,
        };
        await axios.post(`${baseUrl}/boards/${id}/cards`, data, {
          headers,
        });
        setCards([...cards, data]);
        setTitle("");
        setOpenCreate(!openCreate);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-72 flex flex-col rounded-md shadow-md p-4 bg-slate-100 gap-2">
      <header className="relative w-full ">
        <div className="flex justify-between">
          <h2 className="font-semibold">{status.description}</h2>
          <span role="button" onClick={() => setOpenHeader(!openHeader)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="#525252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                stroke="#525252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                stroke="#525252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {openHeader ? (
          <ActionCardMolecule
            handleEdit={handleEditHeader}
            handleDelete={handleDeleteHeader}
          ></ActionCardMolecule>
        ) : (
          ""
        )}
      </header>

      {/* elementos a contener */}
      <div className="flex flex-col gap-2">
        {/* iteracion de cards------------------------------------------------ */}
        {cards.map((card, index) => (
          <CardMolecule key={index} card={card}></CardMolecule>
        ))}
      </div>

      {/* seccion add card */}
      <div>
        {openCreate ? (
          <div className="flex flex-col gap-2 p-2 rounded-md shadow-md bg-white">
            <h3 className="font-semibold">Card title</h3>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="px-3 py-2 outline-none border rounded-md"
              type="text"
            />
            <div className="flex flex-row gap-2">
              <button
                className="bg-violet-700 text-white px-3 py-2 rounded-md w-fit"
                onClick={handleSubmit}
              >
                Add card
              </button>
              <button
                onClick={() => setOpenCreate(!openCreate)}
                className="bg-gray-200 text-black  px-3 py-2 rounded-md w-fit"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <span
            onClick={() => setOpenCreate(!openCreate)}
            role="button"
            className="text-gray-700 font-semibold"
          >
            + Add card
          </span>
        )}
      </div>
    </div>
  );
}

export default StatusOrganism;
