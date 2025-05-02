"use client"

import { createTheme } from "@mui/material/styles"

// Единая цветовая схема - синяя
export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4f46e5", // Основной синий цвет
    },
    secondary: {
      main: "#1e1b4b",
    },
    background: {
      default: "#0f172a", // Темно-синий фон
      paper: "#1e293b",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0f172a", // Цвет AppBar совпадает с фоном
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        },
      },
    },
  },
})
