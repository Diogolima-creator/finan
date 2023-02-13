import styled from "styled-components";

export const CreateGroup = styled.div`
    width:60vw;
    height:70vh;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const CreateGroupInfo = styled.div`
    height:40%;
`;

export const CreateGroupLi = styled.li`
    list-style-type: decimal;
    margin:0px;
    padding:0px;
`;

export const CreateGroupUl = styled.ul`
   
`;

export const CreateGroupTitle = styled.h1`
  margin:0px;
  padding:0px;
  padding-left:5px;
`;

export const CreateGroupForms = styled.form`
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height: 40%;
    align-items:center;

    #filled-basic{
      width:200px;
    }
`;

export const CreateGroupDisplay = styled.div`
  display:Flex;
  width:100%;
  align-items:center;
  justify-content:space-evenly;
`;

export const CreateGroupButton = styled.div`
    display:flex;
    justify-content:end;
    padding-right:10px;
    height:10%;
`;