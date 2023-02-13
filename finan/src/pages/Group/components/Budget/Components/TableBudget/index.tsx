import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import { useState, useEffect} from 'react';

enum CategoryTitle {
  Investment= 'Investimento',
  Income= 'Receita',
  Expense= 'Despesas'
}

interface TableBudget {
  budget: {
    categoryTitle: CategoryTitle,
    categoryData: string[],
    num: number[],
    update: (row:string, categoryData: string[], categoryTitle: CategoryTitle, pos:number, handleValueInput: (event:any)=> void) => {} | undefined
    budgetArray:[]
    budgetTotalArray:[]
  }
}

export const TableBudget = ({budget}:TableBudget) => {

  const months = [{mes:'Jan'},{mes:'Fev'},{mes:'Mar'},{mes:'Abr'},{mes:'Maio'}
  ,{mes:'Jun'},{mes:'Jul'},{mes:'Ago'},{mes:'Set'},{mes:'Out'},{mes:'Nov'},{mes:'Dez'},{mes:'Total'}]

  const [valueInput, setValueInput] = useState(0)
  const [budgetTotalValue, setBudgetTotalValue] = useState(budget.budgetTotalArray)
  
  const handleValueInput = (event:any) => {
    setValueInput(event.target.value)
  }

  useEffect(() => {
    
  },[valueInput])

  
  return(
    <TableContainer sx={{ maxWidth: '95%', margin:5}} component={Paper}>
          <Table sx={{ maxWidth: '100%' }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width:'20%',fontWeight:'bold', borderLeft:`3px solid ${budget.categoryTitle === CategoryTitle.Income ? 'rgb(50,205,50)' : budget.categoryTitle === CategoryTitle.Expense ? '#fa8072' : budget.categoryTitle === CategoryTitle.Investment ? 'yellow' : 'white'  }`, borderBottom:`3px solid ${budget.categoryTitle === CategoryTitle.Income ? 'rgb(50,205,50)' : budget.categoryTitle === CategoryTitle.Expense ? '#fa8072' : budget.categoryTitle === CategoryTitle.Investment ? 'yellow' : 'white'  }`, backgroundColor: 'rgb(128,128,128,.3)'}}>{budget.categoryTitle}</TableCell>
                {months.map((month:any) => (<TableCell sx={{ borderBottom:`3px solid ${budget.categoryTitle === CategoryTitle.Income ? 'rgb(50,205,50)' : budget.categoryTitle === CategoryTitle.Expense ? '#fa8072' : budget.categoryTitle === CategoryTitle.Investment ? 'yellow' : 'white'  }`, fontWeight:'bold', borderLeft:'2px solid white', backgroundColor: 'rgb(128,128,128,.3)', width: 100 }} align="center">{month.mes}</TableCell>))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ width: '95%', borderLeft:`3px solid ${budget.categoryTitle === CategoryTitle.Income ? 'rgb(50,205,50)' : budget.categoryTitle === CategoryTitle.Expense ? '#fa8072' : budget.categoryTitle === CategoryTitle.Investment ? 'yellow' : 'white'  }`,  }}>
              {budget.categoryData.map((row:any,keyOne) => (
                <TableRow 
                  key={row}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell sx={{ fontSize:16, backgroundColor: 'white', maxWidth:'100%', padding:1}} component="th" scope="row">
                    {row}
                  </TableCell>
                {budget.num.map((numero:any, keyTwo) => ( 
                <TableCell sx={{ backgroundColor: 'white', padding:0}} align="left">
                  <label>R$ </label>
                  <input defaultValue={budget.budgetArray.length != 0 ? budget.budgetArray[keyOne][keyTwo] : 0} onChange={()=> budget.update(row, budget.categoryData, budget.categoryTitle, keyTwo, handleValueInput)} id={`input-${row}-${numero}`} type='number'></input>
                  </TableCell> 
                ))}
                <TableCell sx={{ backgroundColor: 'white', padding:0}} align="left">
                  <label>R$</label>
                  <input value={budget.budgetTotalArray.length != 0 ? budget.budgetTotalArray[keyOne] : 0} type='number' readOnly id={`input-${row}-total`}></input></TableCell> 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  )
}