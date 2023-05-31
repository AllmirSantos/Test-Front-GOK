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
