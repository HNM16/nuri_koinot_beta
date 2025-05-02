import { configureStore } from "@reduxjs/toolkit"
import configuratorReducer from "./features/configuratorSlice"
import pricingReducer from "./features/pricingSlice"
import contactReducer from "./features/contactSlice"

export const store = configureStore({
  reducer: {
    configurator: configuratorReducer,
    pricing: pricingReducer,
    contact: contactReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
