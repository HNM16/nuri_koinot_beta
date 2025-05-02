import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

type Language = "ru" | "en"

interface LanguageState {
  current: Language
}

const initialState: LanguageState = {
  current: "ru", // Russian is default
}

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.current = action.payload
    },
  },
})

export const { setLanguage } = languageSlice.actions

export const selectLanguage = (state: RootState) => state.language.current

export default languageSlice.reducer
