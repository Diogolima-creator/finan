import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import * as M from './styles'
import { useAppSelector, useAppDispatch } from '../../../../../../hooks/redux/index';
import { setExpense, setIncome,setInvestment,setNoPaidExpenseArray,setNoReceivedIncomeArray,setRowAbr, setRowAgo, setRowDez, setRowFev, setRowJan, setRowJul, setRowJun, setRowMai, setRowMar, setRowNov, setRowOut, setRowSet } from '../../../../../../store/release';
import { setIncomeDash, setInvestmentDash, setExpenseDash } from '../../../../../../store/dashboard';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '48%',
  height: '55%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  h1: { margin: 0}
};

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

interface ModalReleaseType {
  open: any,
  handleClose: () => void,
  setRows: Dispatch<SetStateAction<DataRow[]>>,
  rows: DataRow[]
}

function createData(
  date: string,
  category: string,
  subCategory: string,
  methodOfPayment:string,
  value: number,
  paid: 'Sim' | 'Não',
  balance: number,
  description: string,
  categoryType: 'income' | 'expense' | 'investment'
): DataRow {
  return {
    date,
    category,
    subCategory,
    methodOfPayment,
    value,
    paid,
    balance,
    description,
    categoryType
  };
}

const MOP = ['Crédito em conta', 'Boleto', 'Débito em conta', 'PIX']

export const ModalRelease = ({open,handleClose, setRows, rows}:ModalReleaseType) => {
  
  const[category, setCategory] = useState('')
  const[subCategory, setSubCategory] = useState('')
  const[methodOfPayment, setMethodOfPayment] = useState('')
  const[paid, setPaid] = useState<DataRow["paid"]>('Sim')
  const[description, setDescription] = useState('')
  const[valueRelease, setValueRelease] = useState('')
  const[dateRelease, setDateRelease] = useState('')
  
  const categoryData = useAppSelector((state) => state.category.categoryData)
  const subCategoriesData = useAppSelector((state) => state.category.subCategories)

  const monthValue = useAppSelector((state) => state.release.monthValue)
  const incomeValue = useAppSelector((state) => state.release.income)
  const expenseValue = useAppSelector((state)=> state.release.expense)
  const noReceivedIncomeArray = useAppSelector((state) => state.release.noReceivedIncomeArray)
  const noPaidExpenseArray = useAppSelector((state) => state.release.noPaidExpenseArray)
  const dispatch = useAppDispatch()
  
  const[buttonDisabled, setButtonDisabled] = useState(true)

  const handleChangeCategory = (event: any) => {setCategory(event.target.value)}
  const handleChangeSubCategory = (event: any) => {setSubCategory(event.target.value)}
  const handleChangeMOP = (event: any) => {setMethodOfPayment(event.target.value)}
  const handleChangePaid = (event: any) => {setPaid(event.target.value)}
  const handleChangeDescription = (event: any) => {setDescription(event.target.value)}
  const handleChangeValueRelease = (event: any) => {setValueRelease(event.target.value)}
  const handleChangeDateRelease = (event: any) => { setDateRelease(event.target.value)}

  const handleMaxLength = (event:any) => {
    let valor:string = event.target.value
    if(event.target.value.length > 20){
      event.target.value = valor.slice(0,-1)
    }
    handleChangeDescription(event)
  }

  const handleMaxValue = (event:any) => {
    let valor:string = event.target.value
    if(parseInt(event.target.value) > 10000000){
      event.target.value = valor.slice(0,-1)
    }
    handleChangeValueRelease(event)
  }

  const addNewRows = () => { 
  let cloneRows = rows; 
  let categoryType = ''
  if(category === 'Receitas'){ 
  categoryType = 'income'
  if(paid === 'Não')
  { 
    let clone:number[] = [...noReceivedIncomeArray[monthValue]]
    let clone2:number[][] = [...noReceivedIncomeArray]
    clone.push(parseInt(valueRelease))
    clone2[monthValue] = clone
    dispatch( setNoReceivedIncomeArray(clone2) )
  } 
}else if(category === 'Investimentos'){ categoryType = 'investment'} else { 
  categoryType = 'expense'
  if(paid === 'Não')
  { 
    let clone:number[] = [...noPaidExpenseArray[monthValue]]
    let clone2:number[][] = [...noPaidExpenseArray]
    clone.push(parseInt(valueRelease))
    clone2[monthValue] = clone
    dispatch( setNoPaidExpenseArray(clone2) )
  }
}

  cloneRows = [...cloneRows, createData(dateRelease, category, subCategory, methodOfPayment, parseInt(valueRelease), paid, (incomeValue-expenseValue), description, categoryType)]
  setRows([...cloneRows]); 
  handleClose(); 
  setCategory(''); setSubCategory(''); setMethodOfPayment(''); setPaid('Sim'); setDescription(''); setValueRelease(''); setDateRelease('');
  
  if(monthValue===0){ dispatch(setRowJan([...cloneRows]))}
  else if(monthValue===1){dispatch(setRowFev([...cloneRows]))}
  else if(monthValue===2){dispatch(setRowMar([...cloneRows]))}
  else if(monthValue===3){dispatch(setRowAbr([...cloneRows]))}
  else if(monthValue===4){dispatch(setRowMai([...cloneRows]))}
  else if(monthValue===5){dispatch(setRowJun([...cloneRows]))}
  else if(monthValue===6){dispatch(setRowJul([...cloneRows]))}
  else if(monthValue===7){dispatch(setRowAgo([...cloneRows]))}
  else if(monthValue===8){dispatch(setRowSet([...cloneRows]))}
  else if(monthValue===9){dispatch(setRowOut([...cloneRows]))}
  else if(monthValue===10){dispatch(setRowNov([...cloneRows]))}
  else if(monthValue===11){dispatch(setRowDez([...cloneRows]))}
  
}

  useEffect(() => {
    
    if(category != '' && subCategory != '' && methodOfPayment != '' && 
     valueRelease != '' && dateRelease != ''){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  })

  useEffect(()=>{
    let totalValueIncome=0;
    let totalValueExpense = 0;
    let totalValueInvestment=0;

    for(let i=0;i<rows.length;i++){
      if(rows[i].category === 'Receitas'){
        totalValueIncome = totalValueIncome + rows[i].value
      } else if(rows[i].category === 'Investimentos'){
        totalValueInvestment = totalValueInvestment + rows[i].value
      } else{
        totalValueExpense = totalValueExpense + rows[i].value
      }
    }
      dispatch(setIncome(totalValueIncome))
      dispatch(setInvestment(totalValueInvestment))
      dispatch(setExpense(totalValueExpense))
  },[rows])

  return(
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    
      <Box sx={style}>
     <h1>Novo lançamento</h1>   
    <M.Modal>
        <M.ModalSelect>
            <TextField
              select
              id="select-1"
              label="Categoria"
              margin="dense"
              onChange={handleChangeCategory}
            >
          {categoryData.map((category) => (
            <MenuItem value={category.title}>{category.title}</MenuItem>
          ))}
        </TextField>
        </M.ModalSelect>
        <M.ModalSelect>
         <TextField
              select
              id="select-2"
              label="SubCategoria"
              margin="dense"
              helperText="Selecione uma categoria antes"
              onChange={handleChangeSubCategory}
            >
          {category === '' && <Typography sx={{fontSize:13,padding:.5, color:'red', fontWeight:'bold'}}>Selecione uma categoria</Typography>}
          {category != '' && 
            subCategoriesData[categoryData.findIndex((p) => p.title === category)].map((sub) => ( <MenuItem value={sub}>{sub}</MenuItem> ))
          }
        </TextField>
        </M.ModalSelect>
    </M.Modal>
    <M.Modal>
    <M.ModalSelect>
        <TextField
              select
              id="select-3"
              label="Método de Pagamento"
              margin="dense"
              onChange={handleChangeMOP}
            >
          {MOP.map((mop)=> ( <MenuItem value={mop}>{mop}</MenuItem>))}
        </TextField>
    </M.ModalSelect>
    <M.ModalSelect>
        <TextField
              select
              id="select-4"
              label="Pago/Recebido"
              margin="dense"
              onChange={handleChangePaid}
            >
          <MenuItem value={'Sim'}>Sim</MenuItem>
          <MenuItem value={'Não'}>Não</MenuItem>
        </TextField>
    </M.ModalSelect>
    </M.Modal>
    <M.Modal>
        <TextField sx={{margin:1}} onChange={handleMaxLength} helperText="Máximo 20 caracteres" id="standard-basic" label="Descrição" variant="standard" />
        <TextField sx={{margin:1}} onChange={handleMaxValue} helperText="Valor máximo 10000000" type='number' id="standard-basic" label="Valor" variant="standard" />
        <TextField sx={{margin:1}} onChange={handleChangeDateRelease} type='date' id="standard-basic" label="Data do Lançamento" placeholder='' variant="standard" />
    </M.Modal>
    <M.Modal>
        <Button disabled={buttonDisabled} onClick={()=> addNewRows()} sx={{margin:1, height:45}} variant="contained">Adicionar</Button>
        <Button sx={{margin:1, height:45}} onClick={handleClose} variant="contained">Sair</Button>
    </M.Modal>
    </Box>
    </Modal>
  )
}