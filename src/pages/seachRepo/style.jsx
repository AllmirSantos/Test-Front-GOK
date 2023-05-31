import styled from "styled-components";


export const ContainerInput = styled.div`
  background-color: #fff;
  height: 40px;
  width: 100%;
  position: relative;
  display: flex;
  img {
    position: absolute;
    width: 30px !important;
    height: 24px;
    left: 25px;
    fill: #fce57e;
  }
  input {
    background-color: #fff;
    height: 50px;
    width: calc(90% - 55px);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 15px 0px;
    padding: 0px 10px 0px 45px;
    border: solid 1px gray;
    border-radius: 5px;
    -webkit-animation: 0.5s;
    animation: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    font-size: 23px;
  }
`;

export const ContainerLogin = styled.div`
  display: flex;
  height: 100%;
  background: #ededed;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  section.ContentLogin {
    display: flex;
    height: 100%;
    background: #fff;
    width: 100%;
    box-shadow: 0px 0px 5px #cfcfcf;
  }
  div.BoxLoginImput {
    flex: 1;
    height: 100%;
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    p.TextTermos {
      font-size: 15px;
      padding: 10px;
      text-align: center;
      span {
        color: blue;
      }
    }
    div {
      display: flex;
      justify-items: center;
      justify-content: center;
      align-items: center;
      flex: 1;
      flex-direction: column;
      width: 350px;
      .LinkPages {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
      }
      p {
        display: flex;
        width: 90%;
        justify-items: start;
      }
      p.title {
        font-size: 23px;
        font-weight: bold;
        margin: 0px 0px 5px 0px;
      }
      p.infor {
        font-size: 15px;
        color: gray;
      }
      img {
        width: 200px;
      }
    }
  }
  div.BoxLoginArt {
    display: flex;
    height: 100%;
    flex: 1.4;
    background: black;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    div {
      height: 80%;
      display: flex;
      flex: 1;
      padding: 10px;
      img {
        width: 100%;
      }
    }
    text {
      padding: 10px 40px 30px 40px;
      color: #fff;
      text-align: center;
      width: 70%;
      font-size: 30px;
      span {
        font-weight: bold;
      }
    }
  }
`;
