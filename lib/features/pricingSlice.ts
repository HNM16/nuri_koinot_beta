import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface PricingState {
  isMonthly: boolean
}

const initialState: PricingState = {
  isMonthly: true,
}

export const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    togglePricingPeriod: (state) => {
      state.isMonthly = !state.isMonthly
    },
  },
})

export const { togglePricingPeriod } = pricingSlice.actions

export const selectPricingPeriod = (state: RootState) => state.pricing.isMonthly

export default pricingSlice.reducer
