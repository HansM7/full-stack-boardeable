import React, { useState } from "react";
import ActionCardMolecule from "./action-card.molecule";

function CardMolecule({ card }) {
  const [openCard, setOpenCard] = useState(false);

  function handleEdit() {}

  function handeDelete() {}

  return (
    <div className=" relative px-1 py-2 rounded-md shadow-md bg-white">
      <div className="flex justify-between">
        <h3>{card.title}</h3>
        <span role="button" onClick={() => setOpenCard(!openCard)}>
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

      {openCard ? (
        <ActionCardMolecule
          handleEdit={handleEdit}
          handleDelete={handeDelete}
        ></ActionCardMolecule>
      ) : (
        ""
      )}
    </div>
  );
}

export default CardMolecule;
