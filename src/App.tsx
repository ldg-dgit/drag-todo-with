import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId='one'>
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              <Draggable draggableId='first' index={0}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps}>
                    {" "}
                    <span {...provided.dragHandleProps}>❄️</span>
                    One
                  </li>
                )}
              </Draggable>
              <Draggable draggableId='Second' index={1}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <span>❄️</span>
                    Two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
