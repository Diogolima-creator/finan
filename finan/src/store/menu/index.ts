import { createSlice } from '@reduxjs/toolkit'

export interface MenuType {
  0: 'myGroup',
  1: 'createGroup',
  2: 'invites',
  3: 'myProfile',
  4: 'settings',
  5: 'logout'
}

export interface MenuGroupType{
  0: 'settings',
  1: 'category',
  2: 'budget',
  3: 'release',
  4: 'dashboard',
  5: 'report'
}
// Define a type for the slice state
interface MenuState {
    menuSelected: number, 
    menuGroupSelected: number
}

// Define the initial state using that type
const initialState: MenuState = {
    menuSelected: 0,
    menuGroupSelected: 2 
}

export const menuSlice = createSlice({
  name: 'menu',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMenuSelected: (state, action) => {
      state.menuSelected = action.payload
    },
    setMenuGroupSelected: (state, action) => {
      state.menuGroupSelected = action.payload
    }
  },
})

export const { setMenuSelected, setMenuGroupSelected } = menuSlice.actions

export default menuSlice.reducer