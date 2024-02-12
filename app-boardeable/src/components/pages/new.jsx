// import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
// import { CSS } from "@dnd-kit/utilities";

// import React, { useState } from "react";

// function NewComponent() {
//   const [parent, setParent] = useState(null);
//   const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       {!parent ? draggable : null}
//       <Droppable id="droppable">
//         {parent === "droppable" ? draggable : "Drop here"}
//       </Droppable>
//     </DndContext>
//   );

//   function handleDragEnd({ over }) {
//     setParent(over ? over.id : null);
//   }
// }

// function Draggable(props) {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: props.id,
//   });
//   const style = {
//     // Outputs `translate3d(x, y, 0)`
//     transform: CSS.Translate.toString(transform),
//   };

//   console.log(style);

//   return (
//     <button
//       className="bg-red-400"
//       ref={setNodeRef}
//       style={style}
//       {...listeners}
//       {...attributes}
//     >
//       {props.children}
//     </button>
//   );
// }

// export function Droppable(props) {
//   const { isOver, setNodeRef } = useDroppable({
//     id: props.id,
//   });
//   const style = {
//     opacity: isOver ? 1 : 0.5,
//   };

//   return (
//     <div
//       className="rounded-md bg-violet-400 w-20 h-20"
//       ref={setNodeRef}
//       style={style}
//     >
//       {props.children}
//     </div>
//   );
// }

// export default NewComponent;

import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialData = [
  {
    id: 1,
    title: "to-do",
    data: [
      {
        id: 1,
        title: "First task",
      },
    ],
  },
  {
    id: 2,
    title: "doing",
    data: [],
  },
  {
    id: 3,
    title: "done",
    data: [],
  },
];

function App() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    // Reorganiza los datos según las nuevas posiciones
    const sourceList = data[source.droppableId];
    const destList = data[destination.droppableId];
    const [removed] = sourceList.data.splice(source.index, 1);
    destList.data.splice(destination.index, 0, removed);

    setData([...data]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.map((list) => (
        <Droppable droppableId={String(list.id)} key={list.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {list.data.map((item, index) => (
                <Draggable
                  draggableId={String(item.id)}
                  index={index}
                  key={item.id}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
}

export default App;
