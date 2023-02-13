import styled from "styled-components";

export const CategoryTable = styled.div`
  display:Flex;
  flex-direction:column;
  height: 400px;
  width: 250px;
  background-color: rgb(25, 118, 210, .5);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const CategoryTableHeader = styled.div`
  display:flex;
  min-height: 35px;
  background-color: rgb(25, 118, 210);
  align-items:Center;
  justify-content:space-between;

`;

interface CategoryTableTitle {
  color:string,
  weight?: string
}

export const CategoryTableTitle = styled.p(({color, weight}:CategoryTableTitle) => `
  font-size:14px;
  margin:0px;
  padding:5px;
  color: ${color};
  font-weight: ${weight};
  width:100%;
`);

export const CategoryTableInputButton = styled.div`
  display:flex;
  align-items:center;
  padding: 0 6px;

  input{
    margin-right:5px;
    max-width:80px;
    outline:none;
    border: none;
    color:black;
    padding:2px 4px;
    font-size:13px;
    ::placeholder{
      color: rgb(0,0,0, .4);
    }
  }
`;

export const CategoryTableItems = styled.div`
  height:100%;
  overflow-y:scroll;
  
`;

export const CategoryTableItem = styled.div`
  display:Flex;
  height:25px;
  justify-content: space-between;
  align-items:center;
  border-bottom:1px solid white;
  padding-right: 5px;
  
`;