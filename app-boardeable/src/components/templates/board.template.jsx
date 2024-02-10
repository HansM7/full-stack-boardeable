import HeaderOrganism from "../organisms/header.organism";
import BoardHeaderOrganism from "../organisms/board-header.organism";
import BoardListOrganism from "../organisms/board-list.organism";
import axios from "axios";
import { baseUrl } from "../../constants/api.constant";
import { useEffect, useState } from "react";

function BoardTemplate({ id }) {
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  async function fetchBaord() {
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };
      const response = await axios.get(baseUrl + "/boards/" + id, { headers });
      setColor(response.data.data.color);
      setTitle(response.data.data.title);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBaord();
  }, []);

  return (
    <div className="">
      <HeaderOrganism></HeaderOrganism>
      <div className={`flex justify-center w-full px-32 ${color} h-svh pb-20`}>
        <div className="w-full mt-16 ">
          <BoardHeaderOrganism
            title={title}
            id={id}
            setTitle={setTitle}
          ></BoardHeaderOrganism>
          <BoardListOrganism id={id}></BoardListOrganism>
        </div>
      </div>
    </div>
  );
}

export default BoardTemplate;
