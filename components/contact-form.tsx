"use client"

import type React from "react"

import { useState } from "react"
import {
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
} from "@mui/material"
import { motion } from "framer-motion"
import { useAppDispatch } from "@/lib/redux/hooks"
import { submitContactForm } from "@/lib/redux/features/contactSlice"

export default function ContactForm() {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    terms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target
    setFormData({
      ...formData,
      [name]: name === "terms" ? checked : value,
    })

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: false,
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors = {
      name: !formData.name,
      email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
      message: !formData.message,
      terms: !formData.terms,
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some((error) => error)) {
      return
    }

    // Submit form
    setIsSubmitting(true)

    // Dispatch to Redux
    dispatch(submitContactForm(formData))

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        terms: false,
      })
    }, 1500)
  }

  return (
    <>
      <Card sx={{ bgcolor: "rgba(255,255,255,0.05)", color: "white" }}>
        <CardContent sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Имя"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={errors.name}
                  helperText={errors.name ? "Введите ваше имя" : ""}
                  InputLabelProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
                  InputProps={{
                    sx: {
                      color: "white",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255,255,255,0.3)",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255,255,255,0.5)",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ff6b8b",
                      },
                    },
                  }}
                  FormHelperTextProps={{ sx: { color: "#f44336" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={errors.email}
                  helperText={errors.email ? "Введите корректный email" : ""}
                  InputLabelProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
                  InputProps={{
                    sx: {
                      color: "white",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255,255,255,0.3)",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255,255,255,0.5)",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ff6b8b",
                      },
                    },
                  }}
                  FormHelperTextProps={{ sx: { color: "#f44336" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Телефон"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  InputLabelProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
                  InputProps={{
                    sx: {
                      color: "white",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255,255,255,0.3)",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255,255,255,0.5)",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ff6b8b",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Сообщение"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  required
                  multiline
                  rows={4}
                  error={errors.message}
                  helperText={errors.message ? "Введите ваше сообщение" : ""}
                  InputLabelProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
                  InputProps={{
                    sx: {
                      color: "white",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255,255,255,0.3)",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255,255,255,0.5)",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ff6b8b",
                      },
                    },
                  }}
                  FormHelperTextProps={{ sx: { color: "#f44336" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      sx={{
                        color: errors.terms ? "#f44336" : "rgba(255,255,255,0.7)",
                        "&.Mui-checked": {
                          color: "#ff6b8b",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2" sx={{ color: errors.terms ? "#f44336" : "rgba(255,255,255,0.7)" }}>
                      Я согласен с обработкой персональных данных
                    </Typography>
                  }
                />
                {errors.terms && (
                  <Typography variant="caption" sx={{ color: "#f44336", display: "block", ml: 2 }}>
                    Необходимо согласие с обработкой персональных данных
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{
                      bgcolor: "#ff6b8b",
                      "&:hover": { bgcolor: "rgba(255,107,139,0.9)" },
                      py: 1.5,
                    }}
                  >
                    {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success" sx={{ width: "100%" }}>
          Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
        </Alert>
      </Snackbar>
    </>
  )
}
