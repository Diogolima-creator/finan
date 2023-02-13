import { BudgetCard } from './Components/BudgetCard'
import { TableBudget } from './Components/TableBudget'
import * as B from './styles'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { setIncomeBudget, setInvestmentBudget, setExpenseBudget, setBudgetIncomeArray, setBudgetExpenseArray, setBudgetInvestmentArray, setBudgetIncomeTotalArray, setBudgetInvestmentTotalArray, setBudgetExpenseTotalArray } from '../../../../store/budget'


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

export const Budget = () => {

  const valueIncome = useAppSelector((state)=> state.budget.incomeBudget)
  const valueInvestment = useAppSelector((state)=> state.budget.investmentBudget)
  const valueExpenses = useAppSelector((state)=> state.budget.expenseBudget)
  const budgetIncomeArray = useAppSelector((state)=> state.budget.budgetIncomeArray) 
  const budgetInvestmentArray = useAppSelector((state)=> state.budget.budgetInvestmentArray)
  const budgetExpenseArray = useAppSelector((state)=> state.budget.budgetExpenseArray)
  const budgetIncomeTotalArray = useAppSelector((state)=> state.budget.budgetIncomeTotalArray)
  const budgetInvestmentTotalArray = useAppSelector((state)=> state.budget.budgetInvestmentTotalArray)
  const budgetExpenseTotalArray = useAppSelector((state)=> state.budget.budgetExpenseTotalArray)
  const [arrayIncome, setArrayIncome] = useState<number[][]>(useAppSelector((state)=> state.budget.budgetIncomeArray) )
  const [arrayInvestment, setArrayInvestment] = useState<number[][]>(useAppSelector((state)=> state.budget.budgetInvestmentArray) )
  const [arrayExpense, setArrayExpense]= useState<number[][]>(useAppSelector((state)=> state.budget.budgetExpenseArray) )
  const [arrayIncomeTotal, setArrayIncomeTotal] = useState<number[][]>(useAppSelector((state)=> state.budget.budgetIncomeTotalArray))
  const [arrayExpenseTotal, setArrayExpenseTotal] = useState<number[][]>(useAppSelector((state)=> state.budget.budgetExpenseTotalArray))
  const [arrayInvestmentTotal, setArrayInvestmentTotal] = useState<number[][]>(useAppSelector((state)=> state.budget.budgetInvestmentTotalArray))
  const [tableBudgetMenu, setTableBudgetMenu] = useState(0)

  const dispatch = useAppDispatch()
  
  const receita = ['Salário', '13 Salário', 'Dividendos', 'Férias', 'Horas extras', 'IR', 'Outras Receitas',
  'Pensão', 'Resgate Investimentos']

  const investimentos = ['Fundo de Emergência', 'Fundo de Investimentos', 'LCI & LCA', 'Poupança', 'Previdência Privada',
  'Renda Fixa','Renda Variável', 'Tesouro Direto', 'Outras Poupanças & Investimento']

  const expenses = ['Moradia','Alimentação','Transporte','Educação','Lazer','Saúde & Beleza','Serviços Financeiros','Vestuário']
  
  const num = [0,1,2,3,4,5,6,7,8,9,10,11]

  const updateValueTotal = (row:string, categoryData: string[], categoryTitle: CategoryTitle, pos:number, handleValueInput:(event:any) => void) => {
    handleValueInput(event)
    let total = 0 
    let totalCategory = 0

      //att o array
      if(categoryTitle === CategoryTitle.Income){
        let posFilter = categoryData.findIndex((p) => p === row)
        let clone = [...arrayIncome[posFilter]]
        let clone2 = [...arrayIncome]
        clone[pos] = parseInt(event.target.value)
        clone2[posFilter] = clone
        setArrayIncome(clone2)
        dispatch( setBudgetIncomeArray([...clone2]))
        let clone3 = [...clone2[posFilter]]
        let clone4 = [...arrayIncomeTotal]
        for(var i = 0; i < 12; i++){
          let posFilter = categoryData.findIndex((p) => p === row)
          total = total + (!Number.isNaN(clone2[posFilter][i]) ? clone2[posFilter][i] : 0)
          clone3 = [total] 
          clone4[posFilter] = clone3
          setArrayIncomeTotal(clone4)
          dispatch( setBudgetIncomeTotalArray([...clone4]))
        }
        for(let i=0;i<clone4.length;i++){
          totalCategory = totalCategory +  clone4[i][0]
        }
        dispatch( setIncomeBudget(totalCategory))
      }
      
      if(categoryTitle === CategoryTitle.Investment){
        let posFilter = categoryData.findIndex((p) => p === row)
        let clone = [...arrayInvestment[posFilter]]
        let clone2 = [...arrayInvestment]
        clone[pos] = parseInt(event.target.value)
        clone2[posFilter] = clone
        setArrayInvestment(clone2)
        dispatch( setBudgetInvestmentArray([...clone2]))
        let clone3 = [...arrayInvestmentTotal[posFilter]]
        let clone4 = [...arrayInvestmentTotal]
        for(var i = 0; i < 12; i++){
          let posFilter = categoryData.findIndex((p) => p === row)
          total = total +  (!Number.isNaN(clone2[posFilter][i]) ? clone2[posFilter][i] : 0)
          clone3 = [total] 
          clone4[posFilter] = clone3
          console.log(clone4)
          setArrayInvestmentTotal(clone4)
          dispatch( setBudgetInvestmentTotalArray([...clone4]))
        }
        for(let i=0;i<clone4.length;i++){
          totalCategory = totalCategory +  clone4[i][0]
        }
        dispatch( setInvestmentBudget(totalCategory))
        }
      
      if(categoryTitle === CategoryTitle.Expense){
        let posFilter = categoryData.findIndex((p) => p === row)
        let clone = [...arrayExpense[posFilter]]
        let clone2 = [...arrayExpense]
        clone[pos] = parseInt(event.target.value)
        clone2[posFilter] = clone
        setArrayExpense(clone2)
        dispatch( setBudgetExpenseArray([...clone2]))
        let clone3 = [...arrayExpenseTotal[posFilter]]
        let clone4 = [...arrayExpenseTotal]
        for(var i = 0; i < 12; i++){
          let posFilter = categoryData.findIndex((p) => p === row)
          total = total +  (!Number.isNaN(clone2[posFilter][i]) ? clone2[posFilter][i] : 0)
          clone3 = [total] 
          clone4[posFilter] = clone3
          setArrayExpenseTotal(clone4)
          dispatch( setBudgetExpenseTotalArray([...clone4]))
        }
        for(let i=0;i<clone4.length;i++){
          totalCategory = totalCategory +  clone4[i][0]
        }
        dispatch( setExpenseBudget(totalCategory))
      }         
    return undefined
  }


  const budgetIncome:TableBudget = { budget:{ categoryTitle: CategoryTitle.Income, categoryData:receita, num, update:updateValueTotal, budgetArray:budgetIncomeArray, budgetTotalArray:budgetIncomeTotalArray} }
  const budgetInvestment:TableBudget = { budget:{ categoryTitle: CategoryTitle.Investment, categoryData: investimentos, num, update:updateValueTotal, budgetArray:budgetInvestmentArray, budgetTotalArray:budgetInvestmentTotalArray}}
  const budgetExpenses:TableBudget = { budget: { categoryTitle: CategoryTitle.Expense, categoryData: expenses, num, update:updateValueTotal, budgetArray:budgetExpenseArray, budgetTotalArray:budgetExpenseTotalArray}}
  
  useEffect(() => {  
    if(arrayIncome.length === 0){  
      let clone = []
      let clone2 = []
      for(let i=0;i<receita.length;i++){
        clone.push([0,0,0,0,0,0,0,0,0,0,0,0])
      }
      for(let i=0;i<receita.length;i++){
        clone2.push([0])
      }
      setArrayIncome(clone)
      setArrayIncomeTotal(clone2)
      dispatch( setBudgetIncomeArray([...clone]) )
      dispatch( setBudgetIncomeTotalArray([...arrayIncomeTotal]) )
  }
    if(arrayInvestment.length === 0){ 
    let clone = []
    let clone2 = []
      for(let i=0;i<investimentos.length;i++){
        clone.push([0,0,0,0,0,0,0,0,0,0,0,0])
      }
      for(let i=0;i<investimentos.length;i++){
        clone2.push([0])
      }
      setArrayInvestment(clone)
      setArrayInvestmentTotal(clone2)
      dispatch( setBudgetInvestmentArray([...arrayInvestment]))
      dispatch( setBudgetInvestmentTotalArray([...arrayInvestmentTotal]))
  } 
    if(arrayExpense.length === 0){ 
    let clone = []
    let clone2 = []
    for(let i=0;i<expenses.length;i++){
        clone.push([0,0,0,0,0,0,0,0,0,0,0,0])
    }
    for(let i=0;i<expenses.length;i++){
      clone2.push([0])
    }
     setArrayExpense(clone)
     setArrayExpenseTotal(clone2)
    dispatch( setBudgetExpenseArray([...arrayExpense]))
    dispatch( setBudgetExpenseTotalArray([...arrayExpenseTotal]))
  } 
  },[])

  const handleBack = () => { if((tableBudgetMenu-1) >= 0){setTableBudgetMenu(tableBudgetMenu-1)}else{setTableBudgetMenu(2)}}
  const handleNext = () => { if((tableBudgetMenu+1) <= 2){setTableBudgetMenu(tableBudgetMenu+1)}else{setTableBudgetMenu(0)}}

  return(
    <B.Budget>
      <B.BudgetHeader>
        <B.BudgetHeaderTitle>Limite de Orçamento por Categoria (previsão) </B.BudgetHeaderTitle>
        <B.BudgeHeaderRules>
          É nessa aba que você vai definir suas metas (orçamento) de receitas e despesas por categorias e subcategoria. 
        </B.BudgeHeaderRules>
        <B.BudgeHeaderRules>
          Para adicionar uma nova receita, investimento ou despesas, vá na aba categorias e adicione
          para atualizar na tabela.
        </B.BudgeHeaderRules>
        <B.BudgeHeaderRules>
          IMPORTANTE: CLIQUE EM SALVAR ANTES DE SAIR DA PAGINA!
        </B.BudgeHeaderRules>
      </B.BudgetHeader>
      <B.BudgetSubheader>
          <Button sx={{marginRight:1}} variant="contained">Salvar Orçamento</Button>
          <Button sx={{ marginRight:1 }} onClick={handleBack} variant="contained">Voltar</Button>
          <Button sx={{ marginRight:5 }} onClick={handleNext} variant="contained">Próxima</Button>
          <BudgetCard title={'Receita-Despesas'} value={valueIncome-valueExpenses}/>
          <BudgetCard title={'Receita'} value={valueIncome}/>
          <BudgetCard title={'Despesas'} value={valueExpenses}/>
          <BudgetCard title={'Investimentos'} value={valueInvestment}/>
      </B.BudgetSubheader>
      <B.TableContainer>
          {tableBudgetMenu === 0 && <TableBudget budget={budgetIncome.budget} />}
          {tableBudgetMenu === 1 && <TableBudget budget={budgetInvestment.budget}/>}
          {tableBudgetMenu === 2 &&  <TableBudget budget={budgetExpenses.budget}/>}
      </B.TableContainer>

    </B.Budget>
  )
}