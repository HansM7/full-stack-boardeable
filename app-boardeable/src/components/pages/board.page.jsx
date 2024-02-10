import { useParams } from "react-router-dom";
import BoardTemplate from "../templates/board.template";

function BoardPage() {
  const { id } = useParams();
  return (
    <div className="w-full">
      <BoardTemplate id={id}></BoardTemplate>
    </div>
  );
}

export default BoardPage;
