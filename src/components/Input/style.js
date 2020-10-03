import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: 7px;
  align-items: center;
  i {
    color: #797272;
    font-size: 16px;
    margin-right: 10px;
  }
  .label {
    color: #797272;
    font-size: 16px;
    width: 70px;
    font-weight: 600;
    margin-right: 15px;
  }

  input {
    display: inline-block;
    flex-grow: 1;
    border: 1px solid #b7b7b7;
    padding: 4px 10px;
    color: #514b4b;
    font-size: 16px;
    margin-right: 20px;
    &:focus {
      outline: none;
    }
  }
`;
