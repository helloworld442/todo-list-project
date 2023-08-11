import { styled } from "styled-components";

export const TodoDateLabelText = styled.span`
  padding-bottom: 16px;
  display: block;
  font-size: 0.925rem;
  font-weight: bold;
  color: #aaa;
`;

export const TodoDateValueText = styled.span`
  display: block;
  font-size: 1.05rem;
  font-weight: bold;
  color: #333;
`;

export const TodoDateIcomText = styled.span`
  position: absolute;
  bottom: -28px;
  left: 5.5px;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background: ${(props) => props.theme.baseColor};
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadein 1s;
  -moz-animation: fadein 1s; /* Firefox */
  -webkit-animation: fadein 1s;
`;
