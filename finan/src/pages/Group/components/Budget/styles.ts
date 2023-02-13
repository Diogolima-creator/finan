import styled from 'styled-components'

export const Budget = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  align-items:start;
  justify-content:start;

  label{
     position:absolute;
     font-weight:bold;
  }

  input{
    width:70%;
    height: 20px;
    padding-left:20px;
    border:none;
    outline:none;
  }

  input[type="number"]{
    font-size:16px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    
  }

  input[type=number] {
    -moz-appearance: textfield;
    
  }
`;

export const BudgetHeader = styled.div`
  padding: 50px 70px;
  padding-bottom:0px;
  width:100%;
`;

export const BudgetSubheader = styled.div`
  display:Flex;
  justify-content:end;
  align-items:end;
  height:120px;
  width:100%;
`;

export const BudgetHeaderTitle = styled.h1`
  margin:0px;
  font-size:20px;

`;

export const BudgeHeaderRules = styled.p`
  font-size:12px;
  margin:2px 0px;
  color: rgb(0,0,0, .7);
`;

export const TableContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:25px;
`;