import { keyframes, styled } from "styled-components";
import {
  StTodoItem,
  StTodoList,
  TodoItemCheckBox,
  TodoItemIcon,
  TodoItemText,
} from "./todolist.style";

const MockTodoItem = () => {
  return (
    <SkeletonList>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </SkeletonList>
  );
};

const Skeleton = () => {
  return (
    <SkeletonItem>
      <SkeletonIcon />
      <SkeletonText />
      <SkeletonCheckBox />
    </SkeletonItem>
  );
};

const blinkAnimation = keyframes`
    0% {
        background-color: rgba(165, 165, 165, 0.1);
    };

    50% {
        background-color: rgba(165, 165, 165, 0.2);
    };

    100% {
        background-color: rgba(165, 165, 165, 0.1);
    };
`;

const SkeletonList = styled(StTodoList)``;

const SkeletonItem = styled(StTodoItem)``;

const SkeletonIcon = styled(TodoItemIcon)`
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const SkeletonText = styled(TodoItemText)`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const SkeletonCheckBox = styled(TodoItemCheckBox)`
  width: 24px;
  height: 24px;
  border: none;
  animation: ${blinkAnimation} 1.5s linear infinite;
  &:checked {
    background: none;
  }
`;

export default MockTodoItem;
