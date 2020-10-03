import styled from "styled-components";

export const NormalButtonWrapper = styled.button`
  display: inline-block;
  border: none;
  font-weight: bold;
  font-size: 16px;
  color: #50248f;
  padding: 12px 14px;
  border-radius: 4px;
  cursor: pointer;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(0deg, rgba(216, 189, 255, 0.5), rgba(216, 189, 255, 0.5));

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.6;
  }

  .icon {
    color: #f530ca;
    margin-right: 5px;
  }
`;
