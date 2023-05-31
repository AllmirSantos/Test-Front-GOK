import styled from "styled-components";


export const ContainerPerfil = styled.div`
  color: #fff;
  background: #ededed;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  section.ContentPerfil {
    background-color: #ebebeb;
    box-shadow: 0px 0px 5px #b3b3b3;
    color: #fff;
    display: flex;
    position: relative;
    flex-direction: row;
    overflow: hidden;
    width: calc(100% - 10%);
    padding: 0px 5%;
    height: 100%;
    .BoxScrollList {
      height: 100%;
      padding-top: 20px;
      overflow-y: scroll;
      display: flex;
      flex: 1;
      flex-direction: column;
      .BottomMargin {
        width: 100%;
        margin-bottom: 30px;
        display: block;
      }
    }
    header {
      width: 90%;
      margin: 0px 5% 15px 5%;
      height: 60px;
      display: flex;
      justify-content: space-between;
    }
  }
  div.BoxModalAddTags {
    input.InputModal {
      display: none;
    }
    input:checked + div.BoxModal {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    div.BoxModal {
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      display: none;
      align-items: center;
      justify-content: center;
      background: #00000096;
      position: fixed;
    }
  }
  div.BoxModalEditTags {
    input.InputModal {
      display: none;
    }
    input:checked + div.BoxModal {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    div.BoxModal {
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      display: none;
      align-items: center;
      justify-content: center;
      background: #00000096;
      position: fixed;
    }
  }
`;