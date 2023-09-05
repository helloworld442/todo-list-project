import { keyframes, styled } from "styled-components";
import {
  TodoListItemCheckBox,
  TodoListItemIcon,
  TodoListItemStyle,
  TodoListItemText,
  TodoListMenuStyle,
} from "./TodoListStyle";

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

const SkeletonList = styled(TodoListMenuStyle)``;

const SkeletonItem = styled(TodoListItemStyle)``;

const SkeletonIcon = styled(TodoListItemIcon)`
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const SkeletonText = styled(TodoListItemText)`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  animation: ${blinkAnimation} 1.5s linear infinite;
`;

const SkeletonCheckBox = styled(TodoListItemCheckBox)`
  width: 24px;
  height: 24px;
  border: none;
  animation: ${blinkAnimation} 1.5s linear infinite;
  &:checked {
    background: none;
  }
`;

export default MockTodoItem;
