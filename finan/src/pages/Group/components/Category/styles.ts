import styled from 'styled-components'

export const Category = styled.div((qty:number) => (`
    background-color:white;
    display:flex;
    justify-content:center;
    flex-direction:Column;
`));

export const CategoryHeader = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:10%;
    margin-bottom:20px;
`;

export const CategoryTitle = styled.h1`
  font-size:16px;
  padding: 20px 5px;
  padding-bottom:10px;
  margin:0px;
`;

export const CategoryTables = styled.div`
  width: 100%;
  height: 100%;
  display:grid;
  grid-template-columns: auto auto auto auto auto;
  gap:1% 0%;
  margin: 0 8px;
  padding-bottom:50px;
`;

