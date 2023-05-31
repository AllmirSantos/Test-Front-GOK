import styled from "styled-components";

export const ContainerUsers = styled.div`
  color: #fff;
  background: #fdfdfd;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  section.ContentUsers {
    background-color: #fdfdfd;
    box-shadow: 0px 0px 5px #b3b3b3;
    color: #fff;
    display: flex;
    position: relative;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .BoxScrollList {
      height: 100%;
      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;
      overflow-y: scroll;
    }
    .LinkPages {
      text-decoration: none;
    }
  }
`;
