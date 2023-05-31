import styled from "styled-components";
export const ContainerPerfil = styled.div`
  background: #ededed;
  width: 300px;
`;
export const BoxOnePerfil = styled.div`
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0px 4px #cdcdcd;
  padding-bottom: 12px;
  margin: 15px 15px 5px 15px;
  border-radius: 7px;
  span {
    width: 100%;
    height: 80px;
    background: black;
    display: flex;
  }
  div {
    background: transparent;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -42px;
    img {
      height: 80px;
      width: 80px;
      border-radius: 100%;
      border: solid 4px #fff;
    }
  }
  h1 {
    color: #000;
    font-size: 20px;
    padding-left: 30px;
    margin-top: 0px;
  }
  h4 {
    color: gray;
    font-weight: 400;
    font-size: 14px;
    padding-left: 30px;
    margin-top: 2px;
    margin-bottom: 12px;
  }
  section {
    display: flex;
    justify-content: space-between;
    color: #000;
    font-size: 17px;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 5px;
    h3 {
      font-size: 17px;
    }
  }
`;
export const BoxTwoPerfil = styled.div`
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0px 4px #cdcdcd;
  padding-bottom: 12px;
  margin: 15px 15px 5px 15px;
  border-radius: 7px;
  h1 {
    color: #000;
    font-size: 20px;
    padding-left: 30px;
    margin-top: 10px;
  }
  h5 {
    color: #000;
    font-size: 14px;
    padding-left: 30px;
    margin-top: 10px;
    margin-bottom: 12px;
    font-weight: 400;
  }
  section {
    color: #000;
    font-size: 14px;
    padding-left: 30px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    img {
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
    }
  }
`;
export const BoxTheePerfil = styled.div`
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0px 4px #cdcdcd;
  padding-bottom: 12px;
  margin: 15px 15px 5px 15px;
  border-radius: 7px;
  h1 {
    color: #000;
    font-size: 20px;
    padding-left: 30px;
    margin-top: 10px;
  }

  section {
    color: #000;
    font-size: 14px;
    padding-left: 30px;
    padding-right: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    img {
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
    }
  }
`;