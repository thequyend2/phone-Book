import styled from "styled-components";

export const EditItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  font-family: "Segoe UI";
  .avatar-info {
    display: flex;
    width: 100%;
    height: 20%;
    align-items: center;
    padding-left: 20px;
    padding-right: 200px;
    .avatar {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      position: relative;
      img {
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid #c4c4c4;
        border-radius: 50%;
        background: #c4c4c4;
      }
      i {
        position: absolute;
        top: 60px;
        left: 65px;
        font-size: 10px;
        width: 25px;
        height: 25px;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        cursor: pointer;
      }
      input {
        position: absolute;
        top: 0px;
        left: 0px;
        opacity: 0;
        width: 80px;
        height: 80px;
        overflow: hidden;
        cursor: pointer;
      }
    }
    .info-personal {
      flex-grow: 2;
      display: flex;
      flex-direction: column;
      padding-right: 20px;
      padding-left: 20px;
    }
  }
  .telephone-numbers {
    width: 100%;
    height: 30%;
    border-bottom: 1px solid #86817f;
    display: flex;
    flex-direction: column;
    padding: 30px 200px 0 25px;
  }
  .note {
    width: 100%;
    height: 45%;
    /* border: 1px solid; */
    padding: 0px 20px 0 20px;
    display: flex;
    padding: 30px 0 0 50px;
    span {
      color: #797272;
      font-weight: 600;
      font-size: 18px;
      margin-right: 25px;
    }
    textarea {
      width: 275px;
      height: 50%;
      border: 1px solid #b7b7b7;
      padding: 10px;
      &:focus {
        outline: none;
      }
    }
  }
  .action {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid;
  }
`;
