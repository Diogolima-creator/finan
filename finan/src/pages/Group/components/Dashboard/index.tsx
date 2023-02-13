import * as D from './styles'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState, useEffect} from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import LinearProgress from '@mui/material/LinearProgress'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CardCategory } from './components'
import Chart from 'react-google-charts'
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux/index';
import { setIncomeDash, setExpenseDash, setInvestmentDash, setMonthValueDash, setMonthNameDash, setIncomeBudgetDash, setInvestmentBudgetDash, setExpenseBudgetDash, setCardsCategoryDash } from '../../../../store/dashboard'

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

export const Dashboard = () => {

  const months = [{mes:'TODOS', value:12},{mes:'Janeiro', value:0},{mes:'Fevereiro', value:1},{mes:'Março', value:2},{mes:'Abril', value:3},{mes:'Maio', value:4}
  ,{mes:'Junho', value:5 },{mes:'Julho', value:6},{mes:'Agosto', value:7},{mes:'Setembro', value:8},{mes:'Outubro', value:9},{mes:'Novembro', value:10},{mes:'Dezembro', value:11}]

  const [month, setMonth] = useState(useAppSelector((state) => state.dashboard.monthNameDash));
  const [valueMonth, setValueMonth] = useState(useAppSelector((state) => state.dashboard.monthValueDash))
  const [rows, setRows] = useState([useAppSelector((state)=> state.release.rowJan),useAppSelector((state)=> state.release.rowFev),useAppSelector((state)=> state.release.rowMar),
    useAppSelector((state)=> state.release.rowAbr),useAppSelector((state)=> state.release.rowMai),useAppSelector((state)=> state.release.rowJun),
    useAppSelector((state)=> state.release.rowJul),useAppSelector((state)=> state.release.rowAgo),useAppSelector((state)=> state.release.rowSet),
    useAppSelector((state)=> state.release.rowOut),useAppSelector((state)=> state.release.rowNov),useAppSelector((state)=> state.release.rowDez)])
  const NoReceivedIncomeArray = useAppSelector((state) => state.release.noReceivedIncomeArray)
  const NoPaidExpenseArray = useAppSelector((state) => state.release.noPaidExpenseArray)
  const [rowBudgetIncome, setRowsBudgetIncome] = useState(useAppSelector((state)=> state.budget.budgetIncomeArray))
  const [rowBudgetInvestment, setRowsBudgetInvestment] = useState(useAppSelector((state)=> state.budget.budgetInvestmentArray))
  const [rowBudgetExpense, setRowsBudgetExpense] = useState(useAppSelector((state)=> state.budget.budgetExpenseArray))
  const [rowCardsExpense, setRowsCardsExpense] = useState(useAppSelector((state)=> state.dashboard.cardsCategory))
  const [noReceivedIncome, setNoReceivedIncome] = useState(0) 
  const [noPaidExpense, setNoPaidExpense] = useState(0)
  const [total, setTotal] = useState(false)
  const [realized, setRealized] = useState(true)

  const dispatch = useAppDispatch()

  const handleTotalRealized = () => { setTotal(!total), setRealized(!realized) }

  function createData(
    title: string,
    value: number,
    budget: number,
    progress: number,
    colorProgress: string,
    colorProgressTwo: string
  ) {
    return { title,value,budget,progress,colorProgress, colorProgressTwo };
  }

  function createDataCategory(
    title: string,
    value: number,
    budget: number,
    percent: number,
  ) {
    return { title,value,budget,percent };
  }

  const incomeDash = useAppSelector((state) => state.dashboard.incomeDash)
  const expenseDash = useAppSelector((state) => state.dashboard.expenseDash)
  const investmentDash = useAppSelector((state) => state.dashboard.investmentDash)
  const incomeBudgetDash = useAppSelector((state) => state.dashboard.incomeBudgetDash)
  const expenseBudgetDash = useAppSelector((state) => state.dashboard.expenseBudgetDash)
  const investmentBudgetDash = useAppSelector((state) => state.dashboard.investmentBudgetDash)

  const cards = [
    createData('Receitas', incomeDash, incomeBudgetDash, incomeDash*100/incomeBudgetDash,'rgb(50,205,50)',	'rgb(50,205,50,0.5)'),
    createData('Despesas', expenseDash, expenseBudgetDash, expenseDash*100/expenseBudgetDash, 'rgb(255,0,0)', 'rgb(255,0,0,0.5)'),
    createData('Investimentos', investmentDash, investmentBudgetDash, investmentDash*100/investmentBudgetDash, 'rgb(204,204,0)', 'rgb(204,204,0,0.5)'),
    createData('Resultado', incomeDash-expenseDash, (incomeBudgetDash-expenseBudgetDash), (incomeDash-expenseDash)*100/(incomeBudgetDash-expenseBudgetDash), 'gray', 'rgb(128,128,128,0.5)'),
  ]

  const handleChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
    setValueMonth(parseInt(event.target.value))
    dispatch(setMonthValueDash(parseInt(event.target.value)))
    dispatch(setMonthNameDash(event.target.value as string))
  }

  const sumAllIncome = (incomesMonth:DataRow[]) => {
    let total = 0
    incomesMonth = incomesMonth.filter((p) => p.categoryType === 'income')
    incomesMonth.map((income) => {
      total = income.value + total
    })
    return total
  }

  const sumAllExpense = (expenseMonth:DataRow[]) => {
    let total = 0
    expenseMonth = expenseMonth.filter((p) => p.categoryType === 'expense')
    expenseMonth.map((expense) => {
      total = expense.value + total
    })
    return total
  }

   const dataGraph = [
    ["Mês", "Ganhos", "Dividas"],
    ["Jan", sumAllIncome(rows[0]), sumAllExpense(rows[0])],
    ["Fev", sumAllIncome(rows[1]), sumAllExpense(rows[1])],
    ["Mar", sumAllIncome(rows[2]), sumAllExpense(rows[2])],
    ["Abr", sumAllIncome(rows[3]), sumAllExpense(rows[3])],
    ["Maio", sumAllIncome(rows[4]), sumAllExpense(rows[4])],
    ["Jun", sumAllIncome(rows[5]), sumAllExpense(rows[5])],
    ["Jul", sumAllIncome(rows[6]), sumAllExpense(rows[6])],
    ["Ago", sumAllIncome(rows[7]), sumAllExpense(rows[7])],
    ["Set", sumAllIncome(rows[8]), sumAllExpense(rows[8])],
    ["Out", sumAllIncome(rows[9]), sumAllExpense(rows[9])],
    ["Nov", sumAllIncome(rows[10]), sumAllExpense(rows[10])],
    ["Dez", sumAllIncome(rows[11]), sumAllExpense(rows[11])],
  ];

  const options = {
    chart: {
      title: "Receitas & despesas",
    },
  };


  const sumAllBudgetExpenses = (rowBudgetExpense: number[][], TotalRealized: boolean) => {
    let total = 0;

    if(!TotalRealized){
      for(let i=0;i<rowBudgetExpense.length;i++){
          total = total + rowBudgetExpense[i][valueMonth]
      }
    }else{
      for(let j=0;j<12;j++){
        for(let i=0;i<rowBudgetExpense.length;i++){
            total = total + rowBudgetExpense[i][j]
        }
      }
    }
    return Number.isNaN(total) ? 0 : total
  }

  useEffect(()=>{
    let totalValueIncome=0;
    let totalValueExpense = 0;
    let totalValueInvestment=0;

    if(valueMonth < 12){
      for(let i=0;i<rows[valueMonth].length;i++){
        if(rows[valueMonth][i].category === 'Receitas'){
          totalValueIncome = totalValueIncome + rows[valueMonth][i].value
        } else if(rows[valueMonth][i].category === 'Investimentos'){
          totalValueInvestment = totalValueInvestment + rows[valueMonth][i].value
        } else{
          totalValueExpense = totalValueExpense + rows[valueMonth][i].value
        }
      }
    }else{
      for(let j=0;j<12;j++){
        for(let i=0;i<rows[j].length;i++){
          if(rows[j][i].category === 'Receitas'){
            totalValueIncome = totalValueIncome + rows[j][i].value
          } else if(rows[j][i].category === 'Investimentos'){
            totalValueInvestment = totalValueInvestment + rows[j][i].value
          } else{
            totalValueExpense = totalValueExpense + rows[j][i].value
          }
        }
      }
    }
      dispatch(setIncomeDash(totalValueIncome))
      dispatch(setInvestmentDash(totalValueInvestment))
      dispatch(setExpenseDash(totalValueExpense))
  },[month])

  useEffect(()=>{
    let totalValueBudgetIncome=0;
    let totalValueBudgetExpense = 0;
    let totalValueBudgetInvestment=0;

    if(valueMonth < 12){
      for(let i=0;i<rowBudgetIncome.length;i++){
          totalValueBudgetIncome = totalValueBudgetIncome + rowBudgetIncome[i][valueMonth]
        }
      for(let i=0;i<rowBudgetInvestment.length;i++){
          totalValueBudgetInvestment = totalValueBudgetInvestment + rowBudgetInvestment[i][valueMonth]
      }
      for(let i=0;i<rowBudgetExpense.length;i++){
          totalValueBudgetExpense = totalValueBudgetExpense + rowBudgetExpense[i][valueMonth]
      }
    }else{
      for(let j=0;j<12;j++){
        for(let i=0;i<rowBudgetIncome.length;i++){
          totalValueBudgetIncome = totalValueBudgetIncome + rowBudgetIncome[i][j]
        }
        for(let i=0;i<rowBudgetInvestment.length;i++){
            totalValueBudgetInvestment = totalValueBudgetInvestment + rowBudgetInvestment[i][j]
        }
        for(let i=0;i<rowBudgetExpense.length;i++){
            totalValueBudgetExpense = totalValueBudgetExpense + rowBudgetExpense[i][j]
        }
      }
    }
      dispatch(setIncomeBudgetDash(totalValueBudgetIncome))
      dispatch(setInvestmentBudgetDash(totalValueBudgetInvestment))
      dispatch(setExpenseBudgetDash(totalValueBudgetExpense))
  },[month])

  useEffect(() => {
    if(valueMonth < 12) {
      let cloneRows = rows[valueMonth].filter((p) => p.categoryType === 'expense')
      let cloneCards:any = []
      let cloneCardsNameRepeated:any = []
      let cloneRowsRepeated:any = []
      let cloneValuesRepeated:any = []
      let clone6:any = []
      //let clone7:any = []

      for(let i =0; i<cloneRows.length;i++){
        if(!cloneCardsNameRepeated.includes(cloneRows[i].category)){
          cloneCardsNameRepeated.push(cloneRows[i].category)
          cloneRowsRepeated.push(cloneRows[i])
        }else{
          clone6.push(cloneRows[i].category)
        }
      }

      for(let i =0; i<cloneCardsNameRepeated.length;i++){
        let total = 0;
        for(let j=0; j<cloneRows.length;j++){
          if(cloneCardsNameRepeated[i] === cloneRows[j].category){
            total = total + cloneRows[j].value
          }
        }
        cloneValuesRepeated.push(total)
      }
      /*for(let i=0;i< clone3.length;i++){
        let total = 0;
        if(clone3[i].includes(clone[i].category)){
          clone.map((p) => { if(p.category === clone3[i]){ total=total+p.value; }})
          clone7.push(total)
        }
      }*/     
      
      cloneRowsRepeated.map((c:any,key:number) => (
        cloneCards.push(createDataCategory(c.category, cloneValuesRepeated[key], sumAllBudgetExpenses(rowBudgetExpense,total), Math.round((cloneValuesRepeated[key]*100/sumAllBudgetExpenses(rowBudgetExpense,total)) * 100) / 100))
      ))

      setRowsCardsExpense(cloneCards)
      dispatch(setCardsCategoryDash(cloneCards))
    }else if(valueMonth === 12){
      let cloneRows = []
      let cloneCards:any = []
      let cloneCardsNameRepeated:any = []
      let cloneRowsRepeated:any = []
      let cloneValuesRepeated:any = []
      let clone6:any = []

      for(let i=0;i<12;i++){
        cloneRows.push(rows[i].filter((p) => p.categoryType === 'expense'))
      }

      for(let j =0;j<12;j++){
          for(let i =0; i<cloneRows[j].length;i++){
          if(!cloneCardsNameRepeated.includes(cloneRows[j][i].category)){
            cloneCardsNameRepeated.push(cloneRows[j][i].category)
            cloneRowsRepeated.push(cloneRows[j][i])
          }else{
            clone6.push(cloneRows[j][i].category)
          }
        }
      }

      for(let i =0; i<cloneCardsNameRepeated.length;i++){
          let total = 0;
          for(let w=0; w<12;w++){
            for(let j=0; j<cloneRows[w].length;j++){
              if(cloneCardsNameRepeated[i] === cloneRows[w][j].category){
                total = total + cloneRows[w][j].value
              }
            }
          }
          cloneValuesRepeated.push(total)
      }
      
      cloneRowsRepeated.map((c:any,key:number) => (
        cloneCards.push(createDataCategory(c.category, cloneValuesRepeated[key], sumAllBudgetExpenses(rowBudgetExpense,total), Math.round((cloneValuesRepeated[key]*100/sumAllBudgetExpenses(rowBudgetExpense,total)) * 100) / 100))
      ))

      console.log(cloneCards)
      setRowsCardsExpense(cloneCards)
      dispatch(setCardsCategoryDash(cloneCards))

    }
  },[month,total,realized])

  useEffect(() => {
    if(valueMonth < 12) {
      let clone = [...NoReceivedIncomeArray[parseInt(month)]]
      let clone2 = [...NoPaidExpenseArray[parseInt(month)]]
      let total = 0
      let total2 = 0
      clone.map((value: number)=> {
        total = total + value
      })
      clone2.map((value:number) => {
        total2 = total2 + value
      })
      setNoReceivedIncome(total)
      setNoPaidExpense(total2)
    }else{
      let clone = [...NoReceivedIncomeArray]
      let clone2 = [...NoPaidExpenseArray]
      let total = 0 
      let total2 = 0
      for(let i = 0; i<12; i++){
        clone[i].map((value:number) => {
            total = total + value
        })
        clone2[i].map((value:number) => {
            total2 = total2 + value
        })
      }
      setNoReceivedIncome(total)
      setNoPaidExpense(total2)
    }
  },[month])

  return(
    <D.DashBoardContainer>
      <D.DashBoardHeader>
        <D.DashBoardTitle>Dashboard de Orçamento Pessoal</D.DashBoardTitle>
        <D.DashBoardMonth>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-label">Mês</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={month}
                label="Mês"
                sx={{ width:120 }}
                onChange={handleChange}
              >
                {months.map((monthly)=> (
                  <MenuItem value={monthly.value}>{monthly.mes}</MenuItem>
                ))}
              </Select>
            </FormControl>
        </D.DashBoardMonth>
      </D.DashBoardHeader>
      <D.DashBoardCards>
        {cards.map((card)=> (
          <D.DashBoardCardItem>
            <D.DashBoardCardItemsTVB>
              <D.DashBoardCardItemTitle>{card.title}</D.DashBoardCardItemTitle>
              <D.DashBoardCardItemValue>R$ {card.value}</D.DashBoardCardItemValue>
            </D.DashBoardCardItemsTVB>
              <D.DashBoardCardItemBudget>Orçamento: R$ {card.budget}</D.DashBoardCardItemBudget>
              <D.DashBoardCardItemLinear>
                <LinearProgress value={(!Number.isNaN(card.progress) && Number.isFinite(card.progress)) ? card.progress : 0} sx={{height:20, width:'95%', borderRadius:45, marginBottom:.5, '.MuiLinearProgress-bar1Determinate': { backgroundColor: card.colorProgress}, backgroundColor: card.colorProgressTwo }} variant="determinate"></LinearProgress>
                <p>{(!Number.isNaN(card.progress) && Number.isFinite(card.progress)) ? Math.round(card.progress * 100) / 100 : 0}%</p>
              </D.DashBoardCardItemLinear>
              
        </D.DashBoardCardItem>
        ))}
        
      </D.DashBoardCards>
      <D.DashBoardCategoryAndGraph>
        <D.DashBoardExpensesCategory>
            <D.DashBoardExpensesCategoryHeader>
                <p>Despesas por Categoria</p>
                <RadioGroup
                  sx={{'.Mui-checked' : { color: 'black'}, '.MuiTypography-root' : { fontSize:14}}}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                <FormControlLabel value="total" control={<Radio onChange={handleTotalRealized} checked={total} size="small" />} label="% do Total" />
                <FormControlLabel value="accomplished" control={<Radio onChange={handleTotalRealized} checked={realized} size="small"/>} label="% Realizado" />
              </RadioGroup>
            </D.DashBoardExpensesCategoryHeader>
            <D.DashBoardExpensesCategoryTable>
                {rowCardsExpense.map((cardCategory) => (
                  <CardCategory title={cardCategory.title} value={cardCategory.value}
                    budget={cardCategory.budget} percent={cardCategory.percent}
                  />
                ))}
            </D.DashBoardExpensesCategoryTable>
        </D.DashBoardExpensesCategory>
      <D.DashBoardGraph>
        <D.DashBoardPayAndPayout>
                    <D.DashBoardPayAndPayoutCard color='green'>
                          <D.DashBoardPayAndPayoutTitle>Pagamentos a receber</D.DashBoardPayAndPayoutTitle>
                          <D.DashBoardPayAndPayoutValue>R$ {noReceivedIncome}</D.DashBoardPayAndPayoutValue>
                    </D.DashBoardPayAndPayoutCard>
                    <D.DashBoardPayAndPayoutCard color='#fa8072'>
                          <D.DashBoardPayAndPayoutTitle>Contas a pagar + investimentos a Depositar</D.DashBoardPayAndPayoutTitle>
                          <D.DashBoardPayAndPayoutValue>R$ {noPaidExpense}</D.DashBoardPayAndPayoutValue>
                    </D.DashBoardPayAndPayoutCard>
        </D.DashBoardPayAndPayout>
        <D.DashBoardGraphIncomeAndExpenses>
            <Chart
              chartType="Bar"
              width="100%"
              height="500px"
              data={dataGraph}
              options={options}
            />
        </D.DashBoardGraphIncomeAndExpenses>
      </D.DashBoardGraph>
      </D.DashBoardCategoryAndGraph>
    </D.DashBoardContainer>
  )
}