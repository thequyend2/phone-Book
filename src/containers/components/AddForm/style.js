import styled from "styled-components";

export const AddFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    width: 500px;
    height: 500px;
    background: white;
    .header-form {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      .title-header {
        font-size: 18px;
        font-weight: 600;
      }
    }
    .body-form {
      width: 100%;
      height: 420px;
      padding: 15px 30px;
      display: flex;
      flex-direction: column;
      .avatar-info {
        width: 100%;
        height: 40%;
        padding: 10px 0;
        display: flex;
        .avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          position: relative;
          margin-top: 10px;
          margin-right: 30px;
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
            top: 45px;
            left: 45px;
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
            /* border: 1px solid; */
            overflow: hidden;
            cursor: pointer;
          }
        }
        .form-info {
          flex-grow: 1;
          height: 100%;
          padding: 5px 30px 5px 0px;
        }
      }
      .telephone {
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 20px;
        padding-left: 0px;
        margin-bottom: 20px;
      }
      .note {
        width: 100%;
        height: 40%;
        border-top: 1px solid;
        display: flex;
        padding: 30px 0 30px 15px;
        .note-title {
          color: #797272;
          font-weight: 600;
          font-size: 18px;
          margin-right: 25px;
        }
        .note-content {
          border: 1px solid #b7b7b7;
          padding: 10px;
          &:focus {
            outline: none;
          }
        }
      }
    }
    .footer-form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 20px;
      border-top: 1px solid;
    }
  }
`;
