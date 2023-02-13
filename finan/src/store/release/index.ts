import { createSlice } from '@reduxjs/toolkit'

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

// Define a type for the slice state
interface ReleaseState {
    income: number
    expense: number 
    investment: number
    monthValue: number
    noReceivedIncomeArray: number[][]
    noPaidExpenseArray: number[][]
    rowJan: DataRow[]
    rowFev: DataRow[]
    rowMar: DataRow[]
    rowAbr: DataRow[]  
    rowMai: DataRow[] 
    rowJun: DataRow[]
    rowJul: DataRow[]
    rowAgo: DataRow[]
    rowSet: DataRow[]
    rowOut: DataRow[]
    rowNov: DataRow[]
    rowDez: DataRow[]
}

// Define the initial state using that type
const initialState: ReleaseState = {
    income: 0,
    expense: 0,
    investment: 0,
    monthValue: 0,
    noReceivedIncomeArray: [[],[],[],[],[],[],[],[],[],[],[],[]],
    noPaidExpenseArray: [[],[],[],[],[],[],[],[],[],[],[],[]],
    rowJan: [],
    rowFev: [],
    rowMar: [],
    rowAbr: [],  
    rowMai: [], 
    rowJun: [],
    rowJul: [],
    rowAgo: [],
    rowSet: [],
    rowOut: [],
    rowNov: [],
    rowDez: []
}

export const releaseSlice = createSlice({
  name: 'release',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIncome: (state, action) => {
      state.income = action.payload
    },
    setExpense: (state,action) => {
      state.expense = action.payload
    },
    setNoReceivedIncomeArray: (state, action) => {
      state.noReceivedIncomeArray = action.payload
    },
    setNoPaidExpenseArray: (state, action) => {
      state.noPaidExpenseArray = action.payload
    },
    setInvestment: (state,action) => {
      state.investment = action.payload
    },
    setRowJan: (state,action) => {
      state.rowJan = action.payload
    },
    setRowFev: (state,action) => {
      state.rowFev = action.payload
    },
    setRowMar: (state,action) => {
      state.rowMar = action.payload
    },
    setRowAbr: (state,action) => {
      state.rowAbr = action.payload
    },
    setRowMai: (state,action) => {
      state.rowMai = action.payload
    },
    setRowJun: (state,action) => {
      state.rowJun = action.payload
    },
    setRowJul: (state,action) => {
      state.rowJul = action.payload
    },
    setRowAgo: (state,action) => {
      state.rowAgo = action.payload
    },
    setRowSet: (state,action) => {
      state.rowSet = action.payload
    },
    setRowOut: (state,action) => {
      state.rowOut = action.payload
    },
    setRowNov: (state,action) => {
      state.rowNov = action.payload
    },
    setRowDez: (state,action) => {
      state.rowDez = action.payload
    },
    setMonthValue: (state,action) => {
      state.monthValue = action.payload
    }

  },
})

export const { setExpense, setIncome, setInvestment, setRowAbr
, setRowAgo, setRowDez, setRowFev, setRowJan, setRowJul, setRowJun,
setRowMai, setRowMar, setRowNov, setRowOut, setRowSet, setMonthValue,
setNoPaidExpenseArray, setNoReceivedIncomeArray } = releaseSlice.actions

export default releaseSlice.reducer