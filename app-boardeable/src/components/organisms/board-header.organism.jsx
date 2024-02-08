import React, { useEffect, useRef, useState } from "react";
import ActionCardMolecule from "../molecules/action-card.molecule";
import LogoOptionAtom from "../atoms/logo-option.atom";

function BoardHeaderOrganism() {
  const [isEdit, setIsEdit] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const inputRef = useRef(null);

  function handleClick() {
    setIsVisible(!isVisible);
    if (!isEdit) setIsEdit(!isEdit);
  }

  function handleDelete() {}

  function handleEdit() {
    setIsEdit(!isEdit);
    inputRef.current.focus();
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    if (!isEdit) inputRef.current.focus();
  }, [isEdit]);

  return (
    <div className="relative w-fit">
      <div className="flex gap-2">
        <input
          ref={inputRef}
          className="outline-none border-none bg-violet-300 w-40 text-xl font-bold"
          type="text"
          disabled={isEdit}
          value={"Mi boardssssss"}
        />
        <span role="button" onClick={handleClick}>
          <LogoOptionAtom></LogoOptionAtom>
        </span>
      </div>

      {isVisible ? (
        <ActionCardMolecule
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        ></ActionCardMolecule>
      ) : (
        ""
      )}
    </div>
  );
}

export default BoardHeaderOrganism;
