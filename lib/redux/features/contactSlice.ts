import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  terms: boolean
}

interface ContactState {
  submissions: ContactFormData[]
  loading: boolean
  error: string | null
}

const initialState: ContactState = {
  submissions: [],
  loading: false,
  error: null,
}

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    submitContactForm: (state, action: PayloadAction<ContactFormData>) => {
      state.loading = true
      state.error = null
    },
    submitContactFormSuccess: (state, action: PayloadAction<ContactFormData>) => {
      state.submissions.push(action.payload)
      state.loading = false
    },
    submitContactFormFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { submitContactForm, submitContactFormSuccess, submitContactFormFailure } = contactSlice.actions

export default contactSlice.reducer
