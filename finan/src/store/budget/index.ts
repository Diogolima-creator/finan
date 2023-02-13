import { createSlice } from '@reduxjs/toolkit'


// Define a type for the slice state
interface BudgetState {
    incomeBudget: number
    expenseBudget: number 
    investmentBudget: number
    budgetIncomeArray: []
    budgetExpenseArray: []
    budgetInvestmentArray: []
    budgetIncomeTotalArray:[]
    budgetExpenseTotalArray:[]
    budgetInvestmentTotalArray:[]
}

// Define the initial state using that type
const initialState: BudgetState = {
    incomeBudget: 0,
    expenseBudget: 0,
    investmentBudget: 0,
    budgetIncomeArray: [],
    budgetExpenseArray: [],
    budgetInvestmentArray: [],
    budgetIncomeTotalArray:[],
    budgetExpenseTotalArray:[],
    budgetInvestmentTotalArray:[]
}

export const budgetSlice = createSlice({
  name: 'budget',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIncomeBudget: (state, action) => {
      state.incomeBudget = action.payload
    },
    setExpenseBudget: (state, action) => {
      state.expenseBudget = action.payload
    },
    setInvestmentBudget: (state, action) => {
      state.investmentBudget = action.payload
    },
    setBudgetIncomeArray: (state, action) => {
      state.budgetIncomeArray = action.payload
    },
    setBudgetExpenseArray: (state, action) => {
      state.budgetExpenseArray = action.payload
    },
    setBudgetInvestmentArray: (state, action) => {
      state.budgetInvestmentArray = action.payload
    },
    setBudgetIncomeTotalArray: (state, action) => {
      state.budgetIncomeTotalArray = action.payload
    },
    setBudgetExpenseTotalArray: (state, action) => {
      state.budgetExpenseTotalArray = action.payload
    },
    setBudgetInvestmentTotalArray: (state, action) => {
      state.budgetInvestmentTotalArray = action.payload
    },
  },
})

export const { setIncomeBudget, setExpenseBudget, setInvestmentBudget, setBudgetExpenseArray,
setBudgetIncomeArray, setBudgetInvestmentArray, setBudgetExpenseTotalArray, setBudgetIncomeTotalArray,
setBudgetInvestmentTotalArray } = budgetSlice.actions

export default budgetSlice.reducer