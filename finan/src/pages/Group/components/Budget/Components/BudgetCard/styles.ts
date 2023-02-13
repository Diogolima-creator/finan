import styled from 'styled-components'

export const BudgetCard = styled.div(({color}) => `
  border:2px solid ${color};
  border-radius:4px;
  height:80px;
  width:170px;
  margin-right:40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color:rgb(128,128,128,.1);
`);

export const BudgetCardHeader = styled.div`
    height:20px;
    width:100%;
    padding:5px;
    text-align:center;
`;

export const BudgetCardTitle = styled.p`
  margin:0px;
  font-weight:bold;
`;

export const BudgetCardBody = styled.div`
  display:flex;
  align-items:top;
  justify-content:center;
  height:55px;
  width:100%;
`;

export const BudgetCardValue = styled.p`
  margin:0px;
  font-weight:bold;
  font-size:22px;
`;