import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div
      className="rounded-md bg-violet-400 w-20 h-20"
      ref={setNodeRef}
      style={style}
    >
      {props.children}
    </div>
  );
}

export default Droppable;
