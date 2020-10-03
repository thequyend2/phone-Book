import styled from "styled-components";

export const PhoneBookWrapper = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 14px;
  color: #1a1a1a;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const PhoneBookHeader = styled.div`
  width: 100%;
  height: auto;
  padding: 22px 25px;
  display: flex;
  align-items: center;
  .logo-header {
    width: 15%;
    height: auto;
    i {
      color: #50248f;
      font-size: 25px;
    }
    .title {
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      margin-left: 15px;
      color: #483e3e;
    }
  }
  .search {
    width: 31%;
    display: flex;
    align-items: center;
    margin-left: 25px;
    position: relative;
    i {
      position: absolute;
      top: 5px;
      left: 10px;
      color: #5b6e81;
      font-size: 20px;
      padding-right: 30px;
    }
  }
  .edit {
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding-left: 25px;
  }
`;

export const PhoneBookBody = styled.div`
  width: 100%;
  flex-grow: 1;
  height: auto;
  display: flex;
`;

export const AddContact = styled.div`
  width: 18%;
  height: 100%;
  border: 1px solid #31373d;
  background: #f3eaff;
  text-align: center;
  padding-top: 50px;
`;

export const ContactList = styled.div`
  width: 30%;
  height: 100%;
  background: #fefbff;
  .pagination {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ShowContact = styled.div`
  flex-grow: 1;
  height: 100%;
  border: 1px solid #31373d;
  background: #fff;
`;
