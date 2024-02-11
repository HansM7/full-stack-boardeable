import HeaderOrganism from "../organisms/header.organism";
import BoardHeaderOrganism from "../organisms/board-header.organism";
import BoardListOrganism from "../organisms/board-list.organism";
import axios from "axios";
import { baseUrl } from "../../constants/api.constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BoardTemplate({ id }) {
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [errorBoard, setErrorBoard] = useState(false);
  async function fetchBaord() {
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };
      const response = await axios.get(baseUrl + "/boards/" + id, { headers });
      setColor(response.data.data.color);
      setTitle(response.data.data.title);
    } catch (error) {
      setErrorBoard(!errorBoard);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBaord();
  }, []);

  return (
    <div className="">
      <HeaderOrganism></HeaderOrganism>
      {errorBoard ? (
        <div className="flex justify-center w-full px-32 h-svh pb-20">
          <section className="bg-white ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">
                  404
                </h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
                  Board not found 😔
                </p>
                <p className="mb-4 text-lg font-light text-gray-500 ">
                  Lo sentimos la pizarra no fue encontrada, vuelva al inicio
                </p>
                <Link
                  to={"/"}
                  className="inline-flex bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
                >
                  Volver al inicio
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div
          className={`flex justify-center w-full px-32 ${color} min-h-svh pb-20`}
        >
          <div className="w-full mt-16 ">
            <BoardHeaderOrganism
              title={title}
              id={id}
              setTitle={setTitle}
            ></BoardHeaderOrganism>
            <BoardListOrganism id={id}></BoardListOrganism>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoardTemplate;
