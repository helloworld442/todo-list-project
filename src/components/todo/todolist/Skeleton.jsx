import { keyframes, styled } from "styled-components";
import { StTodoItem, StTodoList, TodoItemIcon, TodoItemText } from "./style";

const MockTodoItem = () => {
  return (
    <SkeletonList>
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
  animation: ${blinkAnimation} 1.5s linear infinite; // 회전 애니메이션 적용
`;

const SkeletonText = styled(TodoItemText)`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  animation: ${blinkAnimation} 1.5s linear infinite; // 회전 애니메이션 적용
`;

export default MockTodoItem;
