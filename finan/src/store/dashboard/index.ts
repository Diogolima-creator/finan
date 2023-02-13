import { createSlice } from '@reduxjs/toolkit'

interface CardCategory{
    title: string,
    value: number,
    budget: number,
    percent: number,
}


// Define a type for the slice state
interface DashboardState {
    incomeDash: number
    expenseDash: number 
    investmentDash: number
    incomeBudgetDash: number
    expenseBudgetDash: number 
    investmentBudgetDash: number
    monthValueDash: number
    monthNameDash: string
    cardsCategory: CardCategory[]
}

// Define the initial state using that type
const initialState: DashboardState = {
    incomeDash: 0,
    expenseDash: 0,
    investmentDash: 0,
    incomeBudgetDash: 0,
    expenseBudgetDash: 0, 
    investmentBudgetDash: 0,
    monthValueDash: 13,
    monthNameDash: '',
    cardsCategory: []
}

export const dashBoardSlice = createSlice({
  name: 'dashboard',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIncomeDash: (state, action) => {
      state.incomeDash = action.payload
    },
    setExpenseDash: (state,action) => {
      state.expenseDash = action.payload
    },
    setInvestmentDash: (state,action) => {
      state.investmentDash = action.payload
    },
    setIncomeBudgetDash: (state, action) => {
      state.incomeBudgetDash = action.payload
    },
    setExpenseBudgetDash: (state,action) => {
      state.expenseBudgetDash = action.payload
    },
    setInvestmentBudgetDash: (state,action) => {
      state.investmentBudgetDash = action.payload
    },
    setMonthValueDash: (state, action) => {
      state.monthValueDash = action.payload
    },
    setMonthNameDash: (state, action) => {
      state.monthNameDash = action.payload
    },
    setCardsCategoryDash: (state, action) => {
      state.cardsCategory = action.payload
    }
  },
})

export const { setExpenseDash, setIncomeDash, setInvestmentDash, 
  setMonthValueDash, setMonthNameDash, setCardsCategoryDash,
setExpenseBudgetDash, setIncomeBudgetDash, setInvestmentBudgetDash } = dashBoardSlice.actions

export default dashBoardSlice.reducer