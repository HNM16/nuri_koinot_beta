import { configureStore } from "@reduxjs/toolkit"
import configuratorReducer from "./features/configuratorSlice"
import pricingReducer from "./features/pricingSlice"
import contactReducer from "./features/contactSlice"
import authReducer from "./features/authSlice"
import languageReducer from "./features/languageSlice"

export const store = configureStore({
  reducer: {
    configurator: configuratorReducer,
    pricing: pricingReducer,
    contact: contactReducer,
    auth: authReducer,
    language: languageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
