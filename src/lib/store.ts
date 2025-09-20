import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './CounterSlice'

export const store = configureStore({
  reducer: {
    counterRed : CounterReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch