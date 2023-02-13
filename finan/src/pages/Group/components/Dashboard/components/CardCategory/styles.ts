import styled from 'styled-components'


export const DashBoardCard = styled.div`
  background-color:white;
  display:flex;
  border-left:3px solid #fa8072;
  width:90%;
  height:65px;
  margin:5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const DashBoardCardInfo = styled.div`
    width:80%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`;

export const DashBoardCardTitleValue = styled.div`
  display:flex;
  justify-content:space-between;
  padding:0 5px;
`;

interface CardTitle {
  color: string,
  fs: string
}

export const DashBoardCardTitle = styled.p(({color, fs}:CardTitle) => (`
  margin:0px;
  color: ${color};
  font-size:${fs}px;

`));

export const DashBoardCardValue = styled.p`
  margin:0px;
`;

export const DashBoardCardTitleBudget = styled.div`
  display:flex;
  justify-content:space-between;
  padding:0 5px;
`;


export const DashBoardCardPercent = styled.div`
    height:100%;
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fa8072;
    font-size:14px;
    font-weight:bold;
`;
