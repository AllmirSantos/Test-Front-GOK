import styled from "styled-components";
export const ContainerModalAddTags = styled.section`
  background-color: #fff;
  color: #fff;
  width: 400px;
  height: auto;
  border-radius: 10px;
  display: flex;
  padding: 25px 30px;
  flex-direction: column;
  p {
    font-size: 25px;
    margin: 0px;
    padding: 0px;
    color: #000;
    font-weight: bold;
  }
  div.BoxInput {
    height: 80px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    div {
      width: 100% !important;
      input {
        border: solid 2px #c1c0c0;
        box-shadow: 0px 0px 0px #d5d5d5;
      }
    }
  }
  div.BoxTags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    box-shadow: 1px 1px 13px #cbcbcb;
    border-radius: 5px;
    padding: 8px;

    span {
      width: 90%;
      padding-bottom: 10px;
      padding-left: 10px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: start;
      color: #464a52;
      font-size: 20px;
    }
    div {
      background-color: #00000026;
      color: #000;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      height: 35px;
      border: none;
      border-radius: 40px;
      animation: 0.2s;
      transition: 0.2s;
      padding: 0px 10px;
      box-sizing: border-box;
      border: solid 2px Transparent;
      margin: 5px;
      img {
        width: 20px;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
  .BoxBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 0px 0px 0px;
    flex-direction: column;
    label {
      width: 100%;
      height: 40px;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      font-size: 17px;
      cursor: pointer;
    }
  }
`;
