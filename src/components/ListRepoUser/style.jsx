import styled from "styled-components";

export const ContainerRepoUser = styled.div`
  display: flex;
  width: 100%;
  ul {
    margin: 0px;
    padding: 0px;
    width: 100%;
    li {
      background-color: #fff;
      padding: 10px 15px;
      width: auto;
      border-radius: 10px;
      box-shadow: 0px 0px 4px #cdcdcd;
      margin: 0px 5% 15px 5%;
      display: flex;
      flex-direction: column;
      div.BoxInforStart {
        display: flex;
        flex-direction: row;
        div.BoxImgPerfil {
          width: 70px;
          height: 70px;
          margin-right: 15px;
          justify: center;
          align-items: center;
          img {
            width: 70px;
            height: 70px;
          }
        }
        div.BoxNome {
          display: flex;
          justify-content: center;
          flex-direction: column;
          h3 {
            font-size: 22px;
            line-height: 40px;
            color: #000;
          }
          svg {
            margin-left: 30px;
            height: 15px;
          }
          p {
            color: black;
            font-size: 16px;
            margin-bottom: 10px;
          }
          span.boxBtnBlue {
            display: flex;

            label {
              display: none;
            }
            label.True {
              display: block;
              margin-right: 15px;
            }
          }
        }
        div.BoxDelete {
          display: flex;
          flex: 1;
          justify-content: end;
          padding: 5px;
          span {
            background: #c5c5c5;
            display: flex;
            height: 35px;
            width: 35px;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            cursor: pointer;
          }
          svg {
            height: 20px;
            width: 20px;
          }
        }
      }
      //--------------------
      div.BoxInforEnd {
        display: flex;
        margin-top: 10px;
        flex-direction: row;
        div {
          display: flex;
          margin-right: 20px;
          flex-direction: row;
          align-items: center;
          svg {
            width: 16px;
            margin-right: 10px;
          }
          p {
            font-size: 15px;
            color: #7e7e7e;
          }
        }
      }
    }
  }
`;
