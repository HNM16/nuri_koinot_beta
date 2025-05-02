"use client"

import { Box, Grid, Typography, Slider, Card, CardContent, Button, Divider, Paper, useMediaQuery } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import { Memory, Storage, NetworkCheck, Add, Remove } from "@mui/icons-material"
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import {
  updateCpu,
  updateRam,
  updateStorage,
  updateTraffic,
  selectConfig,
  selectPrice,
} from "@/lib/redux/features/configuratorSlice"

export default function CloudConfigurator() {
  const isMobile = useMediaQuery("(max-width:900px)")
  const dispatch = useAppDispatch()
  const config = useAppSelector(selectConfig)
  const price = useAppSelector(selectPrice)

  const handleCpuChange = (event: Event, newValue: number | number[]) => {
    dispatch(updateCpu(newValue as number))
  }

  const handleRamChange = (event: Event, newValue: number | number[]) => {
    dispatch(updateRam(newValue as number))
  }

  const handleStorageChange = (event: Event, newValue: number | number[]) => {
    dispatch(updateStorage(newValue as number))
  }

  const handleTrafficChange = (event: Event, newValue: number | number[]) => {
    dispatch(updateTraffic(newValue as number))
  }

  const incrementCpu = () => {
    if (config.cpu < 32) {
      dispatch(updateCpu(config.cpu + 1))
    }
  }

  const decrementCpu = () => {
    if (config.cpu >1) {
      dispatch(updateCpu(config.cpu - 1))
    }
  }

  const incrementRam = () => {
    if (config.ram < 128) {
      dispatch(updateRam(config.ram + 1))
    }
  }

  const decrementRam = () => {
    if (config.ram > 1) {
      dispatch(updateRam(config.ram - 1))
    }
  }

  const incrementStorage = () => {
    if (config.storage < 2000) {
      dispatch(updateStorage(config.storage + 10))
    }
  }

  const decrementStorage = () => {
    if (config.storage > 10) {
      dispatch(updateStorage(config.storage - 10))
    }
  }

  const incrementTraffic = () => {
    if (config.traffic < 10) {
      dispatch(updateTraffic(config.traffic + 1))
    }
  }

  const decrementTraffic = () => {
    if (config.traffic > 1) {
      dispatch(updateTraffic(config.traffic - 1))
    }
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={7}>
        <Card sx={{ bgcolor: "rgba(255,255,255,0.05)", color: "white" }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Настройте параметры вашего сервера
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Memory sx={{ mr: 2, color: "#ff6b8b" }} />
                    <Typography>
                      Процессор (vCPU): <strong>{config.cpu} ядер</strong>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Button
                      onClick={decrementCpu}
                      sx={{
                        minWidth: "40px",
                        height: "40px",
                        mr: 1,
                        bgcolor: "rgba(255,107,139,0.2)",
                        color: "#ff6b8b",
                        "&:hover": { bgcolor: "rgba(255,107,139,0.3)" },
                      }}
                    >
                      <Remove />
                    </Button>
                    <Box sx={{ flexGrow: 1 }}>
                      <Slider
                        value={config.cpu}
                        onChange={handleCpuChange}
                        min={1}
                        max={32}
                        step={1}
                        marks={[
                          { value: 1, label: "1" },
                          { value: 8, label: "8" },
                          { value: 16, label: "16" },
                          { value: 24, label: "24" },
                          { value: 32, label: "32" },
                        ]}
                        sx={{
                          color: "#ff6b8b",
                          "& .MuiSlider-thumb": {
                            bgcolor: "#ff6b8b",
                          },
                          "& .MuiSlider-track": {
                            bgcolor: "#ff6b8b",
                          },
                          "& .MuiSlider-rail": {
                            bgcolor: "rgba(255,255,255,0.2)",
                          },
                          "& .MuiSlider-mark": {
                            bgcolor: "rgba(255,255,255,0.3)",
                          },
                          "& .MuiSlider-markLabel": {
                            color: "rgba(255,255,255,0.7)",
                          },
                        }}
                      />
                    </Box>
                    <Button
                      onClick={incrementCpu}
                      sx={{
                        minWidth: "40px",
                        height: "40px",
                        ml: 1,
                        bgcolor: "rgba(255,107,139,0.2)",
                        color: "#ff6b8b",
                        "&:hover": { bgcolor: "rgba(255,107,139,0.3)" },
                      }}
                    >
                      <Add />
                    </Button>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Memory sx={{ mr: 2, color: "#ff6b8b" }} />
                    <Typography>
                      Оперативная память: <strong>{config.ram} GB</strong>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Button
                      onClick={decrementRam}
                      sx={{
                        minWidth: "40px",
                        height: "40px",
                        mr: 1,
                        bgcolor: "rgba(255,107,139,0.2)",
                        color: "#ff6b8b",
                        "&:hover": { bgcolor: "rgba(255,107,139,0.3)" },
                      }}
                    >
                      <Remove />
                    </Button>
                    <Box sx={{ flexGrow: 1 }}>
                      <Slider
                        value={config.ram}
                        onChange={handleRamChange}
                        min={1}
                        max={128}
                        step={1}
                        marks={[
                          { value: 1, label: "1" },
                          { value: 32, label: "32" },
                          { value: 64, label: "64" },
                          { value: 96, label: "96" },
                          { value: 128, label: "128" },
                        ]}
                        sx={{
                          color: "#ff6b8b",
                          "& .MuiSlider-thumb": {
                            bgcolor: "#ff6b8b",
                          },
                          "& .MuiSlider-track": {
                            bgcolor: "#ff6b8b",
                          },
                          "& .MuiSlider-rail": {
                            bgcolor: "rgba(255,255,255,0.2)",
                          },
                          "& .MuiSlider-mark": {
                            bgcolor: "rgba(255,255,255,0.3)",
                          },
                          "& .MuiSlider-markLabel": {
                            color: "rgba(255,255,255,0.7)",
                          },
                        }}
                      />
                    </Box>
                    <Button
                      onClick={incrementRam}
                      sx={{
                        minWidth: "40px",
                        height: "40px",
                        ml: 1,
                        bgcolor: "rgba(255,107,139,0.2)",
                        color: "#ff6b8b",
                        "&:hover": { bgcolor: "rgba(255,107,139,0.3)" },
                      }}
                    >
                      <Add />
                    </Button>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Storage sx={{ mr: 2, color: "#ff6b8b" }} />
                    <Typography>
                      Дисковое пространство: <strong>{config.storage} GB SSD</strong>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Button
                      onClick={decrementStorage}
                      sx={{
                        minWidth: "40px",
                        height: "40px",
                        mr: 1,
                        bgcolor: "rgba(255,107,139,0.2)",
                        color: "#ff6b8b",
                        "&:hover": { bgcolor: "rgba(255,107,139,0.3)" },
                      }}
                    >
                      <Remove />
                    </Button>
                    <Box sx={{ flexGrow: 1 }}>
                      <Slider
                        value={config.storage}
                        onChange={handleStorageChange}
                        min={10}
                        max={2000}
                        step={10}
                        marks={[
                          { value: 10, label: "10" },
                          { value: 500, label: "500" },
                          { value: 1000, label: "1000" },
                          { value: 1500, label: "1500" },
                          { value: 2000, label: "2000" },
                        ]}
                        sx={{
                          color: "#ff6b8b",
                          "& .MuiSlider-thumb": {
                            bgcolor: "#ff6b8b",
                          },
                          "& .MuiSlider-track": {
                            bgcolor: "#ff6b8b",
                          },
                          "& .MuiSlider-rail": {
                            bgcolor: "rgba(255,255,255,0.2)",
                          },
                          "& .MuiSlider-mark": {
                            bgcolor: "rgba(255,255,255,0.3)",
                          },
                          "& .MuiSlider-markLabel": {
                            color: "rgba(255,255,255,0.7)",
                          },
                        }}
                      />
                    </Box>
                    <Button
                      onClick={incrementStorage}
                      sx={{
                        minWidth: "40px",
                        height: "40px",
                        ml: 1,
                        bgcolor: "rgba(255,107,139,0.2)",
                        color: "#ff6b8b",
                        "&:hover": { bgcolor: "rgba(255,107,139,0.3)" },
                      }}
                    >
                      <Add />
                    </Button>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <NetworkCheck sx={{ mr: 2, color: "#ff6b8b" }} />
                    <Typography>
                      Трафик: <strong>{config.traffic} TB</strong>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Button
                      onClick={decrementTraffic}
                      sx={{
                        minWidth: "40px",
                        height: "40px",
                        mr: 1,
                        bgcolor: "rgba(255,107,139,0.2)",
                        color: "#ff6b8b",
                        "&:hover": { bgcolor: "rgba(255,107,139,0.3)" },
                      }}
                    >
                      <Remove />
                    </Button>
                    <Box sx={{ flexGrow: 1 }}>
                      <Slider
                        value={config.traffic}
                        onChange={handleTrafficChange}
                        min={1}
                        max={10}
                        step={1}
                        marks={[
                          { value: 1, label: "1" },
                          { value: 3, label: "3" },
                          { value: 5, label: "5" },
                          { value: 7, label: "7" },
                          { value: 10, label: "10" },
                        ]}
                        sx={{
                          color: "#ff6b8b",
                          "& .MuiSlider-thumb": {
                            bgcolor: "#ff6b8b",
                          },
                          "& .MuiSlider-track": {
                            bgcolor: "#ff6b8b",
                          },
                          "& .MuiSlider-rail": {
                            bgcolor: "rgba(255,255,255,0.2)",
                          },
                          "& .MuiSlider-mark": {
                            bgcolor: "rgba(255,255,255,0.3)",
                          },
                          "& .MuiSlider-markLabel": {
                            color: "rgba(255,255,255,0.7)",
                          },
                        }}
                      />
                    </Box>
                    <Button
                      onClick={incrementTraffic}
                      sx={{
                        minWidth: "40px",
                        height: "40px",
                        ml: 1,
                        bgcolor: "rgba(255,107,139,0.2)",
                        color: "#ff6b8b",
                        "&:hover": { bgcolor: "rgba(255,107,139,0.3)" },
                      }}
                    >
                      <Add />
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={5}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${config.cpu}-${config.ram}-${config.storage}-${config.traffic}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card sx={{ bgcolor: "rgba(255,255,255,0.05)", color: "white", height: "100%" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Ваша конфигурация
                </Typography>

                <Paper sx={{ bgcolor: "rgba(255,255,255,0.1)", p: 3, mt: 3, borderRadius: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Процессор:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">
                        {config.cpu} vCPU
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Память:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">
                        {config.ram} GB
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Диск:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">
                        {config.storage} GB SSD
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Трафик:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">
                        {config.traffic} TB
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Стоимость
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Ежемесячная плата:
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="right">
                        {price.monthly} ₽
                      </Typography>
                    </Grid>

                    <Grid item xs={8}>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Ежедневная плата:
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="right">
                        {price.daily} ₽
                      </Typography>
                    </Grid>

                    <Grid item xs={8}>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Плата за установку:
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="right">
                        {price.setup} ₽
                      </Typography>
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.2)" }} />

                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Итого:
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body1" align="right" sx={{ fontWeight: "bold" }}>
                        {price.total} ₽
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 4,
                    bgcolor: "#ff6b8b",
                    "&:hover": { bgcolor: "rgba(255,107,139,0.9)" },
                  }}
                >
                  Заказать сервер
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </Grid>
    </Grid>
  )
}
