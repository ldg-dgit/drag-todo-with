import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

interface IBoardProps {
  todos: string[];
  boardId: string;
}

function Board({ todos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
          {todos.map((todo, index) => (
            <DraggableCard key={todo} index={index} todo={todo} />
          ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

export default Board;
