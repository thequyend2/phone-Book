import styled from 'styled-components';

export const InfoItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  font-family: "Segoe UI";
  .avatar-name {
    display: flex;
    width: 100%;
    height: 20%;
    align-items: center;
    padding-left: 20px;
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
        /* border: 1px solid; */
        overflow: hidden;
        cursor: pointer;
      }
    }
    .name {
      font-size: 35px;
      font-weight: 600;
      margin-left: 20px;
    }
  }
  .telephone-numbers {
    width: 100%;
    height: 30%;
    border-bottom: 2px solid #86817f;
    padding-left: 30px;
    display: flex;
    padding-top: 30px;
    .type-telephone {
      display: flex;
      flex-direction: column;
      .type {
        font-size: 18px;
        font-weight: 600;
        color: #797272;
        margin-bottom: 5px;
      }
    }
    .numbers {
      display: flex;
      flex-direction: column;
      .number {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
        margin-left: 20px;
        color: #514b4b;
      }
    }
  }
  .note {
    width: 100%;
    height: 50%;
    padding: 30px 0 0 30px;
    .title-note {
      font-size: 18px;
      font-weight: 600;
      color: #797272;
    }
    .content-note {
      font-size: 18px;
      font-weight: 600;
      margin-left: 50px;
      color: #514b4b;
    }
  }
`;