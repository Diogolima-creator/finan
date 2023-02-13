import styled from 'styled-components'

export const DashBoardContainer = styled.div`
    background-color:white;
    height:91.5%;
`;

export const DashBoardHeader = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding:5px;
  padding-top:15px;
`

export const DashBoardTitle = styled.h1`
  font-size:16px;
`;

export const DashBoardP = styled.p`
  font-size:18px;
`;

export const DashBoardMonth = styled.div`
  display:flex;
`;

export const DashBoardCards = styled.div`
  display:flex;
  justify-content:space-evenly;
`;

export const DashBoardCardItemsTVB = styled.div`
display:Flex;
flex-direction:column;
`;

export const DashBoardCardItem = styled.div`
  height: 180px;
  width: 22%;
  background-color:	#FFFAFA;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  border-radius:5px;
  margin-top:15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  p{
    margin:0px;
    padding:8px;
  }

`;

export const DashBoardCardItemTitle = styled.p`
    text-align:center;
    font-size:18px;
`;

export const DashBoardCardItemValue = styled.p`
    text-align:center;
    font-weight:bold;
    font-size:48px;

`;

export const DashBoardCardItemBudget = styled.p`
    text-align:end;
    font-size:11px;
    color:grey;
`;

export const DashBoardCardItemLinear = styled.div`
    display:flex;
    width:100%;
    position:relative;
    align-items:center;
    justify-content:center;
    padding-bottom:5px;
    p{
      font-size:12px;
      color: #0d0d0d;
      font-weight:Bold;
      position:absolute;
    }
`;

export const DashBoardCategoryAndGraph = styled.div`
    
    display:flex;
    height:100%;
    margin-top:50px;
`;

export const DashBoardExpensesCategory = styled.div`
    width:50%;
    background-color:white;
`;

export const DashBoardExpensesCategoryHeader = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 0 10px;
    height:45px;
    align-items:center;
    background-color: white;
    p{ margin: 0px; }
    font-size:14px;
`;

export const DashBoardExpensesCategoryTable = styled.div`
    display:grid;
    grid-template-columns: auto auto;
`;

export const DashBoardExpensesCategoryCard = styled.div``;

export const DashBoardGraph = styled.div`
    width:50%;
`;

export const DashBoardPayAndPayout = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
`;

export const DashBoardPayAndPayoutCard = styled.div(({color}) => (`
    width:46%;
    height:50px;
    border-left: 3px solid ${color};
    padding: 5px 8px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`));

export const DashBoardPayAndPayoutTitle = styled.p`
    margin:0px;
    font-size:14px;
    color: grey;
`;

export const DashBoardPayAndPayoutValue = styled.p`
    margin:0px;
    font-size:18px;
    font-weight:bold;
`;

export const DashBoardGraphIncomeAndExpenses = styled.div`
   padding:10px 0;
`;

