import React, { useEffect, useRef, useState } from "react";
import ActionCardMolecule from "../molecules/action-card.molecule";
import LogoOptionAtom from "../atoms/logo-option.atom";
import axios from "axios";
import { baseUrl } from "../../constants/api.constant";
import { useNavigate } from "react-router-dom";

function BoardHeaderOrganism({ title, id, setTitle }) {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const inputRef = useRef(null);

  function handleClick() {
    setIsVisible(!isVisible);
    if (!isEdit) setIsEdit(!isEdit);
  }

  async function handleDelete() {
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };
      await axios.delete(baseUrl + "/boards/" + id, { headers });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit() {
    setIsEdit(!isEdit);
    inputRef.current.focus();
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    if (!isEdit) inputRef.current.focus();
  }, [isEdit]);

  async function handleChangeTitle(e) {
    e.preventDefault();
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };

      await axios.patch(
        baseUrl + "/boards/" + id,
        { title },
        {
          headers,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative w-fit">
      <form className="flex gap-2" onSubmit={handleChangeTitle}>
        <input
          ref={inputRef}
          className="outline-none border-none bg-transparent w-40 text-xl font-bold"
          type="text"
          disabled={isEdit}
          onChange={(e) => setTitle(e.target.value)}
          defaultValue={title}
        />
        <span role="button" onClick={handleClick}>
          <LogoOptionAtom></LogoOptionAtom>
        </span>
      </form>

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
