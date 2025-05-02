"use client"

import { useState } from "react"
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Switch,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"
import { motion } from "framer-motion"
import { Check } from "@mui/icons-material"
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { togglePricingPeriod, selectPricingPeriod } from "@/lib/redux/features/pricingSlice"

export default function PricingSection() {
  const dispatch = useAppDispatch()
  const isMonthly = useAppSelector(selectPricingPeriod)
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")

  const plans = [
    {
      name: "Базовый",
      priceMonthly: 1200,
      priceDaily: 50,
      features: ["2 vCPU", "4 GB RAM", "50 GB SSD", "1 TB трафик", "24/7 поддержка"],
    },
    {
      name: "Стандарт",
      priceMonthly: 2400,
      priceDaily: 100,
      popular: true,
      features: ["4 vCPU", "8 GB RAM", "100 GB SSD", "2 TB трафик", "24/7 поддержка", "Резервное копирование"],
    },
    {
      name: "Премиум",
      priceMonthly: 4800,
      priceDaily: 200,
      features: [
        "8 vCPU",
        "16 GB RAM",
        "200 GB SSD",
        "5 TB трафик",
        "24/7 приоритетная поддержка",
        "Резервное копирование",
        "Выделенный IP",
      ],
    },
  ]

  const handlePlanClick = (planName: string) => {
    setSelectedPlan(planName)
    setOpenDialog(true)
  }

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 4 }}>
        <Typography sx={{ color: "white", mr: 1 }}>День</Typography>
        <Switch
          checked={isMonthly}
          onChange={() => dispatch(togglePricingPeriod())}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#ff6b8b",
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#ff6b8b",
            },
          }}
        />
        <Typography sx={{ color: "white", ml: 1 }}>Месяц</Typography>
      </Box>

      <Grid container spacing={3}>
        {plans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  color: "white",
                  height: "100%",
                  position: "relative",
                  border: plan.popular ? "2px solid #ff6b8b" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {plan.popular && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bgcolor: "#ff6b8b",
                      color: "white",
                      px: 2,
                      py: 0.5,
                      transform: "rotate(45deg) translateX(20px) translateY(-10px)",
                      transformOrigin: "top right",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                    }}
                  >
                    Популярный
                  </Box>
                )}
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    {plan.name}
                  </Typography>

                  <Box sx={{ my: 3 }}>
                    <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }}>
                      {isMonthly ? plan.priceMonthly : plan.priceDaily} ₽
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                      / {isMonthly ? "месяц" : "день"}
                    </Typography>
                  </Box>

                  <List sx={{ mb: 3 }}>
                    {plan.features.map((feature, i) => (
                      <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <Check sx={{ color: "#ff6b8b" }} />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: "#ff6b8b",
                      "&:hover": { bgcolor: "rgba(255,107,139,0.9)" },
                    }}
                    onClick={() => handlePlanClick(plan.name)}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          sx: {
            bgcolor: "#0a2472",
            color: "white",
            maxWidth: 500,
          },
        }}
      >
        <DialogTitle>Заказ тарифа {selectedPlan}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 3, opacity: 0.7 }}>
            Заполните форму для оформления заказа
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Имя"
                fullWidth
                margin="normal"
                variant="outlined"
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
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
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
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel id="os-label" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  Операционная система
                </InputLabel>
                <Select
                  labelId="os-label"
                  label="Операционная система"
                  defaultValue="ubuntu"
                  sx={{
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
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "#0a2472",
                        color: "white",
                      },
                    },
                  }}
                >
                  <MenuItem value="ubuntu">Ubuntu 22.04</MenuItem>
                  <MenuItem value="debian">Debian 11</MenuItem>
                  <MenuItem value="centos">CentOS 8</MenuItem>
                  <MenuItem value="windows">Windows Server 2022</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel id="period-label" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  Период оплаты
                </InputLabel>
                <Select
                  labelId="period-label"
                  label="Период оплаты"
                  defaultValue={isMonthly ? "month" : "day"}
                  sx={{
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
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "#0a2472",
                        color: "white",
                      },
                    },
                  }}
                >
                  <MenuItem value="day">День</MenuItem>
                  <MenuItem value="month">Месяц</MenuItem>
                  <MenuItem value="3months">3 месяца (-5%)</MenuItem>
                  <MenuItem value="year">Год (-10%)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setOpenDialog(false)} sx={{ color: "white" }}>
            Отмена
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#ff6b8b",
              "&:hover": { bgcolor: "rgba(255,107,139,0.9)" },
            }}
            onClick={() => {
              alert(`Заказ тарифа ${selectedPlan} успешно оформлен!`)
              setOpenDialog(false)
            }}
          >
            Оформить заказ
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
