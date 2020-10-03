import styled from "styled-components";

export const StringButtonWrapper = styled.button`
  font-size: 20px;
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: 400;
  background: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &:focus {
    outline: none;
  }
  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
    color: #cacaca;
    opacity: 0.5;
  }
  span {
    margin-left: 10px;
  }
`;
