"use client"
import { motion } from "framer-motion"
import { useAppSelector } from "@/lib/redux/hooks"
import { selectLanguage } from "@/lib/redux/features/languageSlice"
import { useTranslation } from "@/lib/translations"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Container, Typography, Box, Grid, Card, CardContent, Button } from "@mui/material"
import { Cloud, Storage, Memory, Shield, NetworkCheck, Backup, Speed, SupportAgent } from "@mui/icons-material"
import Link from "next/link"

export default function ServicesPage() {
  const language = useAppSelector(selectLanguage)
  const t = useTranslation(language)

  return (
    <div className="min-h-screen bg-[#0a1a40] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="pt-36 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            {language === "ru" ? "Услуги" : "Services"}
          </h1>

          {/* Rest of the services page content */}
          <Box sx={{ bgcolor: "#001a5e", minHeight: "100vh", color: "white" }}>
            {/* Hero Section */}
            <Box sx={{ py: 10, position: "relative" }}>
              <Container maxWidth="xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
                    {language === "ru" ? "Наши услуги" : "Our Services"}
                  </Typography>
                  <Typography variant="h5" align="center" sx={{ opacity: 0.8, mb: 4, maxWidth: 800, mx: "auto" }}>
                    {language === "ru"
                      ? "Мы предлагаем широкий спектр облачных решений для бизнеса любого масштаба"
                      : "We offer a wide range of cloud solutions for businesses of any scale"}
                  </Typography>
                </motion.div>
              </Container>
            </Box>

            {/* Main Services Section */}
            <Box sx={{ py: 5 }}>
              <Container maxWidth="xl">
                <Grid container spacing={4}>
                  {[
                    {
                      title: language === "ru" ? "Облачные серверы" : "Cloud Servers",
                      description:
                        language === "ru"
                          ? "Виртуальные серверы с гибкой конфигурацией и быстрым развертыванием. Идеально подходят для веб-приложений, баз данных и тестовых сред."
                          : "Virtual servers with flexible configuration and rapid deployment. Perfect for web applications, databases, and test environments.",
                      icon: <Cloud sx={{ fontSize: 48, color: "#ff6b8b" }} />,
                      features:
                        language === "ru"
                          ? [
                              "Мгновенное развертывание",
                              "Гибкая масштабируемость",
                              "Оплата по факту использования",
                              "Автоматическое резервное копирование",
                              "Защита от DDoS-атак",
                            ]
                          : [
                              "Instant deployment",
                              "Flexible scalability",
                              "Pay-as-you-go",
                              "Automatic backup",
                              "DDoS protection",
                            ],
                    },
                    {
                      title: language === "ru" ? "Стандартные серверы" : "Standard Servers",
                      description:
                        language === "ru"
                          ? "Оптимальное соотношение цены и производительности для большинства задач. Подходят для корпоративных приложений и сайтов с высокой посещаемостью."
                          : "Optimal price-performance ratio for most tasks. Suitable for corporate applications and high-traffic websites.",
                      icon: <Storage sx={{ fontSize: 48, color: "#ff6b8b" }} />,
                      features:
                        language === "ru"
                          ? [
                              "Сбалансированная конфигурация",
                              "Подходит для большинства задач",
                              "Стабильная производительность",
                              "Ежедневное резервное копирование",
                              "Техническая поддержка 24/7",
                            ]
                          : [
                              "Balanced configuration",
                              "Suitable for most tasks",
                              "Stable performance",
                              "Daily backup",
                              "24/7 technical support",
                            ],
                    },
                    {
                      title: language === "ru" ? "Hi-CPU серверы" : "Hi-CPU Servers",
                      description:
                        language === "ru"
                          ? "Высокопроизводительные серверы для ресурсоемких задач. Оптимальны для обработки больших объемов данных, машинного обучения и аналитики."
                          : "High-performance servers for resource-intensive tasks. Optimal for processing large volumes of data, machine learning, and analytics.",
                      icon: <Memory sx={{ fontSize: 48, color: "#ff6b8b" }} />,
                      features:
                        language === "ru"
                          ? [
                              "Высокая вычислительная мощность",
                              "Оптимизировано для CPU-интенсивных задач",
                              "Выделенные ядра процессора",
                              "Приоритетная техническая поддержка",
                              "Расширенный мониторинг",
                            ]
                          : [
                              "High computing power",
                              "Optimized for CPU-intensive tasks",
                              "Dedicated processor cores",
                              "Priority technical support",
                              "Advanced monitoring",
                            ],
                    },
                    {
                      title: language === "ru" ? "Выделенные серверы" : "Dedicated Servers",
                      description:
                        language === "ru"
                          ? "Физические серверы с эксклюзивным доступом к ресурсам. Максимальная производительность и безопасность для критически важных приложений."
                          : "Physical servers with exclusive access to resources. Maximum performance and security for mission-critical applications.",
                      icon: <Shield sx={{ fontSize: 48, color: "#ff6b8b" }} />,
                      features:
                        language === "ru"
                          ? [
                              "Полный контроль над оборудованием",
                              "Максимальная производительность",
                              "Изоляция ресурсов",
                              "Возможность кастомизации",
                              "Премиум поддержка",
                            ]
                          : [
                              "Full control over hardware",
                              "Maximum performance",
                              "Resource isolation",
                              "Customization options",
                              "Premium support",
                            ],
                    },
                  ].map((service, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                      >
                        <Card sx={{ bgcolor: "rgba(255,255,255,0.05)", color: "white", height: "100%" }}>
                          <CardContent sx={{ p: 4 }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                              {service.icon}
                              <Typography variant="h5" sx={{ ml: 2 }}>
                                {service.title}
                              </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ mb: 3, opacity: 0.8 }}>
                              {service.description}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              {language === "ru" ? "Особенности:" : "Features:"}
                            </Typography>
                            <Box component="ul" sx={{ pl: 2 }}>
                              {service.features.map((feature, i) => (
                                <Typography component="li" key={i} sx={{ mb: 1 }}>
                                  {feature}
                                </Typography>
                              ))}
                            </Box>
                            <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                              <Button
                                variant="contained"
                                component={Link}
                                href="/pricing"
                                sx={{
                                  bgcolor: "#ff6b8b",
                                  "&:hover": { bgcolor: "rgba(255,107,139,0.9)" },
                                }}
                              >
                                {language === "ru" ? "Узнать цены" : "View Pricing"}
                              </Button>
                              <Button
                                variant="outlined"
                                component={Link}
                                href="/contact"
                                sx={{
                                  color: "white",
                                  borderColor: "rgba(255,255,255,0.3)",
                                  "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" },
                                }}
                              >
                                {language === "ru" ? "Получить консультацию" : "Get Consultation"}
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>

            {/* Additional Services Section */}
            <Box sx={{ py: 10, bgcolor: "#0a2472" }}>
              <Container maxWidth="xl">
                <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: "bold", mb: 6 }}>
                  {language === "ru" ? "Дополнительные услуги" : "Additional Services"}
                </Typography>

                <Grid container spacing={4}>
                  {[
                    {
                      title: language === "ru" ? "Приватные сети" : "Private Networks",
                      description:
                        language === "ru"
                          ? "Создавайте изолированные приватные сети для ваших серверов. Настраивайте маршрутизацию и фильтрацию трафика по вашим требованиям."
                          : "Create isolated private networks for your servers. Configure routing and traffic filtering according to your requirements.",
                      icon: <NetworkCheck sx={{ fontSize: 48, color: "#ff6b8b" }} />,
                    },
                    {
                      title: language === "ru" ? "Резервное копирование" : "Backup",
                      description:
                        language === "ru"
                          ? "Автоматическое резервное копирование данных с гибкими настройками расписания и хранения. Быстрое восстановление в случае сбоев."
                          : "Automatic data backup with flexible schedule and storage settings. Quick recovery in case of failures.",
                      icon: <Backup sx={{ fontSize: 48, color: "#ff6b8b" }} />,
                    },
                    {
                      title: language === "ru" ? "Высокоскоростная сеть" : "High-Speed Network",
                      description:
                        language === "ru"
                          ? "Каждый сервер подключен к внешнему каналу со скоростью 1000 Мбит/сек. Внутренняя локальная сеть работает на скорости 10 Гбит/сек."
                          : "Each server is connected to an external channel with a speed of 1000 Mbps. The internal local network operates at a speed of 10 Gbps.",
                      icon: <Speed sx={{ fontSize: 48, color: "#ff6b8b" }} />,
                    },
                    {
                      title: language === "ru" ? "Техническая поддержка" : "Technical Support",
                      description:
                        language === "ru"
                          ? "Наша команда технических специалистов доступна круглосуточно и без выходных. Среднее время ответа на запрос - 15 минут."
                          : "Our team of technical specialists is available 24/7. Average response time to a request is 15 minutes.",
                      icon: <SupportAgent sx={{ fontSize: 48, color: "#ff6b8b" }} />,
                    },
                  ].map((service, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card sx={{ bgcolor: "rgba(255,255,255,0.05)", color: "white", height: "100%" }}>
                          <CardContent sx={{ p: 4, textAlign: "center" }}>
                            <Box sx={{ mb: 2 }}>{service.icon}</Box>
                            <Typography variant="h6" gutterBottom>
                              {service.title}
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                              {service.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ py: 10 }}>
              <Container maxWidth="md">
                <Card sx={{ bgcolor: "rgba(255,107,139,0.2)", color: "white", borderRadius: 4 }}>
                  <CardContent sx={{ p: 6, textAlign: "center" }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                      {language === "ru" ? "Нужна помощь с выбором?" : "Need help choosing?"}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                      {language === "ru"
                        ? "Наши специалисты помогут подобрать оптимальное решение под ваши задачи и бюджет."
                        : "Our specialists will help you choose the optimal solution for your tasks and budget."}
                    </Typography>
                    <Button
                      variant="contained"
                      component={Link}
                      href="/contact"
                      size="large"
                      sx={{
                        bgcolor: "#ff6b8b",
                        "&:hover": { bgcolor: "rgba(255,107,139,0.9)" },
                        px: 4,
                        py: 1.5,
                      }}
                    >
                      {language === "ru" ? "Связаться с нами" : "Contact Us"}
                    </Button>
                  </CardContent>
                </Card>
              </Container>
            </Box>
          </Box>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
