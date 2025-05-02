"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { setLanguage, selectLanguage } from "@/lib/redux/features/languageSlice"
import { Button, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material"
import { Language as LanguageIcon, KeyboardArrowDown } from "@mui/icons-material"

export default function LanguageSwitcher() {
  const dispatch = useAppDispatch()
  const currentLanguage = useAppSelector(selectLanguage)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  // Устанавливаем русский язык по умолчанию при первой загрузке
  useEffect(() => {
    if (currentLanguage !== "ru") {
      dispatch(setLanguage("ru"))
    }
  }, [dispatch, currentLanguage])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageChange = (language: "ru" | "en") => {
    dispatch(setLanguage(language))
    handleClose()
  }

  return (
    <>
      <Button
        color="inherit"
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        endIcon={<KeyboardArrowDown />}
        sx={{ opacity: 0.8, "&:hover": { opacity: 1 } }}
      >
        {currentLanguage === "ru" ? "RU" : "EN"}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: "#0a2472",
            color: "white",
          },
        }}
      >
        <MenuItem onClick={() => handleLanguageChange("ru")} selected={currentLanguage === "ru"}>
          <ListItemIcon>
            {currentLanguage === "ru" && <span style={{ fontSize: "1.2rem", marginRight: "8px" }}>✓</span>}
          </ListItemIcon>
          <ListItemText>Русский</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange("en")} selected={currentLanguage === "en"}>
          <ListItemIcon>
            {currentLanguage === "en" && <span style={{ fontSize: "1.2rem", marginRight: "8px" }}>✓</span>}
          </ListItemIcon>
          <ListItemText>English</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}
