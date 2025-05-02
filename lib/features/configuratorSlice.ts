import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface ConfiguratorState {
  config: {
    cpu: number
    ram: number
    storage: number
    traffic: number
  }
  price: {
    monthly: number
    daily: number
    setup: number
    total: number
  }
}

const initialState: ConfiguratorState = {
  config: {
    cpu: 2,
    ram: 4,
    storage: 50,
    traffic: 1,
  },
  price: {
    monthly: 1200,
    daily: 40,
    setup: 120,
    total: 1320,
  },
}

// Helper function to calculate price
const calculatePrice = (config: ConfiguratorState["config"]) => {
  const cpuPrice = config.cpu * 300
  const ramPrice = config.ram * 150
  const storagePrice = config.storage * 5
  const trafficPrice = config.traffic * 100

  const monthlyTotal = cpuPrice + ramPrice + storagePrice + trafficPrice
  const dailyTotal = Math.round(monthlyTotal / 30)
  const setupFee = Math.round(monthlyTotal * 0.1)

  return {
    monthly: monthlyTotal,
    daily: dailyTotal,
    setup: setupFee,
    total: monthlyTotal + setupFee,
  }
}

export const configuratorSlice = createSlice({
  name: "configurator",
  initialState,
  reducers: {
    updateCpu: (state, action: PayloadAction<number>) => {
      state.config.cpu = action.payload
      state.price = calculatePrice(state.config)
    },
    updateRam: (state, action: PayloadAction<number>) => {
      state.config.ram = action.payload
      state.price = calculatePrice(state.config)
    },
    updateStorage: (state, action: PayloadAction<number>) => {
      state.config.storage = action.payload
      state.price = calculatePrice(state.config)
    },
    updateTraffic: (state, action: PayloadAction<number>) => {
      state.config.traffic = action.payload
      state.price = calculatePrice(state.config)
    },
  },
})

export const { updateCpu, updateRam, updateStorage, updateTraffic } = configuratorSlice.actions

export const selectConfig = (state: RootState) => state.configurator.config
export const selectPrice = (state: RootState) => state.configurator.price

export default configuratorSlice.reducer
