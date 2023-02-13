import * as R from './styles'
import { BudgetCard } from '../Budget/Components/BudgetCard'
import { useEffect, useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button'
import { ReleaseTable } from './components/ReleaseTable';
import { ModalRelease } from './components/ModalRelease';
import { useAppDispatch } from '../../../../hooks/redux';
import { useAppSelector } from '../../../../hooks/redux';
import { setMonthValue } from '../../../../store/release';

interface DataRow {
  date: string,
  category: string,
  subCategory: string,
  methodOfPayment:string,
  value: number,
  paid: 'Sim' | 'Não',
  balance: number,
  description: string
  categoryType: 'income' | 'expense' | 'investment'
}

export const Release = () => {  
  const monthValue = useAppSelector((state) => state.release.monthValue)
  const valueIncome = useAppSelector((state)=> state.release.income)
  const valueExpenses = useAppSelector((state)=> state.release.expense)
  const valueInvestment = useAppSelector((state)=> state.release.investment)
  const rowJan = useAppSelector((state) => state.release.rowJan)
  const rowFev = useAppSelector((state) => state.release.rowFev)
  const rowMar = useAppSelector((state) => state.release.rowMar)
  const rowAbr = useAppSelector((state) => state.release.rowAbr)
  const rowMai = useAppSelector((state) => state.release.rowMai)
  const rowJun = useAppSelector((state) => state.release.rowJun)
  const rowJul = useAppSelector((state) => state.release.rowJul)
  const rowAgo = useAppSelector((state) => state.release.rowAgo)
  const rowSet = useAppSelector((state) => state.release.rowSet)
  const rowOut = useAppSelector((state) => state.release.rowOut)
  const rowNov = useAppSelector((state) => state.release.rowNov)
  const rowDez = useAppSelector((state) => state.release.rowDez)
  const rowMonths = [rowJan,rowFev,rowMar,rowAbr,rowMai,rowJun,rowJul,rowAgo,rowSet,rowOut,
    rowNov,rowDez]
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState<DataRow[]>(rowMonths[monthValue])
  const dispatch = useAppDispatch()
  
  const months = [{mes:'Jan'},{mes:'Fev'},{mes:'Mar'},{mes:'Abr'},{mes:'Mai'}
  ,{mes:'Jun'},{mes:'Jul'},{mes:'Ago'},{mes:'Set'},{mes:'Out'},{mes:'Nov'},{mes:'Dez'}]

  const monthsFull = [{mes:'Janeiro'},{mes:'Fevereiro'},{mes:'Março'},{mes:'Abril'},{mes:'Maio'}
  ,{mes:'Junho'},{mes:'Julho'},{mes:'Agosto'},{mes:'Setembro'},{mes:'Outubro'},{mes:'Novembro'},{mes:'Dezembro'}]
  
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <R.ReleaseArea>
      <R.ReleaseHeader>
        <R.ReleaseHeaderTitle>Lançamentos - {monthsFull[monthValue].mes}</R.ReleaseHeaderTitle>
      </R.ReleaseHeader>
      <R.ReleaseSubheader>
        <R.ReleaseSubheaderInput>
          <Button onClick={handleOpen} variant="contained">Fazer Lançamento</Button>
        </R.ReleaseSubheaderInput>
        <R.ReleaseSubheaderCards>
          <BudgetCard title={'Receita-Despesas'} value={valueIncome-valueExpenses}/>
          <BudgetCard title={'Receita'} value={valueIncome}/>
          <BudgetCard title={'Despesas'} value={valueExpenses}/>
          <BudgetCard title={'Investimentos'} value={valueInvestment}/>
        </R.ReleaseSubheaderCards>
      </R.ReleaseSubheader>
      <R.ReleaseTableHeader>
        <BottomNavigation
        sx={{ height:35, '.MuiBottomNavigationAction-root.Mui-selected' : {color:'black'} }} 
        showLabels
        value={monthValue}
        onChange={(event, newValue) => {
          dispatch(
            setMonthValue(newValue)
          )
          if(newValue === 0){setRows(rowJan)}
          if(newValue === 1){setRows(rowFev)}
          if(newValue === 2){setRows(rowMar)}
          if(newValue === 3){setRows(rowAbr)}
          if(newValue === 4){setRows(rowMai)}
          if(newValue === 5){setRows(rowJun)}
          if(newValue === 6){setRows(rowJul)}
          if(newValue === 7){setRows(rowAgo)}
          if(newValue === 8){setRows(rowSet)}
          if(newValue === 9){setRows(rowOut)}
          if(newValue === 10){setRows(rowNov)}
          if(newValue === 11){setRows(rowDez)}
        }}
      >
        {months.map((month) => (
          <BottomNavigationAction sx={{ '.Mui-selected': {fontSize:'18px'}, minWidth: 50, backgroundColor: 'rgb(128,128,128,.2)', fontSize: 24}} label={month.mes} />
        ))}
      </BottomNavigation>
      </R.ReleaseTableHeader>
      <R.ReleaseTable>
          <ReleaseTable rows={rows}/>
      </R.ReleaseTable>
        <ModalRelease open={open} handleClose={handleClose} setRows={setRows} rows={rows}/>
    </R.ReleaseArea>
    
  )
}