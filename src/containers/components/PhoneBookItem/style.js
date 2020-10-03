import styled from "styled-components";

export const PhoneBookItemWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #f095ff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    background: rgba(210, 143, 233, 0.95);
  }
  &.isActive {
    width: 100%;
    height: 50px;
    padding: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid #f095ff;
    background: linear-gradient(
      180deg,
      rgba(210, 143, 233, 0.95) 0%,
      rgba(214, 165, 231, 0) 100%
    );
  }
  .name {
    font-size: 27px;
    font-weight: 400;
  }
`;
