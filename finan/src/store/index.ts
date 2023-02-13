import { configureStore } from "@reduxjs/toolkit"
import { menuSlice } from "./menu"
import { releaseSlice } from "./release"
import { budgetSlice } from './budget';
import { categorySlice } from "./category";
import { dashBoardSlice } from "./dashboard";

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    release: releaseSlice.reducer,
    budget: budgetSlice.reducer,
    category: categorySlice.reducer,
    dashboard: dashBoardSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch