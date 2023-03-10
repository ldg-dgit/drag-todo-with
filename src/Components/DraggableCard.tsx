import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  margin: 5px 5px;
  border-radius: 5px;
  padding: 10px 10px;
  background-color: ${(props) => (props.isDragging ? "#54ff9b" : props.theme.cardColor)};
  box-shadow: ${(props) => (props.isDragging ? "0px 2px 10px rgba(0,0,0,0.75)" : "none")};
`;

interface IDraggableCardProps {
  todoId: number;
  todoText: string;
  index: number;
}

function DraggableCard({ todoId, todoText, index }: IDraggableCardProps) {
  return (
    <Draggable draggableId={todoId + ""} index={index}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
