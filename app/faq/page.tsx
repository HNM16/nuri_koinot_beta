"use client"

import { useState } from "react"
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
} from "@mui/material"
import { motion } from "framer-motion"
import { ExpandMore, Search } from "@mui/icons-material"
import { useAppSelector } from "@/lib/redux/hooks"
import { selectLanguage } from "@/lib/redux/features/languageSlice"
import { useTranslation } from "@/lib/translations"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FaqPage() {
  const language = useAppSelector(selectLanguage)
  const t = useTranslation(language)
  const [searchTerm, setSearchTerm] = useState("")

  const faqCategories = [
    {
      title: language === "ru" ? "Общие вопросы" : "General Questions",
      faqs: [
        {
          question: language === "ru" ? "Что такое облачный сервер?" : "What is a cloud server?",
          answer:
            language === "ru"
              ? "Облачный сервер — это виртуальный сервер, работающий на базе облачной инфраструктуры. В отличие от физических серверов, облачные серверы используют виртуализацию для распределения ресурсов между несколькими пользователями, что обеспечивает гибкость, масштабируемость и экономическую эффективность."
              : "A cloud server is a virtual server running on cloud infrastructure. Unlike physical servers, cloud servers use virtualization to distribute resources among multiple users, providing flexibility, scalability, and cost-effectiveness.",
        },
        {
          question:
            language === "ru"
              ? "Чем облачный сервер отличается от выделенного?"
              : "How does a cloud server differ from a dedicated server?",
          answer:
            language === "ru"
              ? "Основное отличие заключается в том, что облачный сервер использует виртуализацию для распределения ресурсов физического сервера между несколькими пользователями, в то время как выделенный сервер предоставляет эксклюзивный доступ к физическому оборудованию одному клиенту. Облачные серверы обычно более гибкие и экономичные, а выделенные серверы обеспечивают максимальную производительность и безопасность."
              : "The main difference is that a cloud server uses virtualization to distribute physical server resources among multiple users, while a dedicated server provides exclusive access to physical hardware to a single client. Cloud servers are typically more flexible and cost-effective, while dedicated servers provide maximum performance and security.",
        },
        {
          question:
            language === "ru"
              ? "Какие операционные системы доступны для установки?"
              : "What operating systems are available for installation?",
          answer:
            language === "ru"
              ? "Мы предлагаем широкий выбор операционных систем, включая различные дистрибутивы Linux (Ubuntu, Debian, CentOS, Fedora и др.) и Windows Server. Вы также можете загрузить собственный образ операционной системы."
              : "We offer a wide range of operating systems, including various Linux distributions (Ubuntu, Debian, CentOS, Fedora, etc.) and Windows Server. You can also upload your own operating system image.",
        },
      ],
    },
    {
      title: language === "ru" ? "Технические вопросы" : "Technical Questions",
      faqs: [
        {
          question:
            language === "ru" ? "Как быстро будет развернут мой сервер?" : "How quickly will my server be deployed?",
          answer:
            language === "ru"
              ? "Облачные серверы обычно разворачиваются в течение нескольких минут после оплаты. Выделенные серверы могут потребовать больше времени, обычно от нескольких часов до 1-2 рабочих дней, в зависимости от конфигурации и доступности оборудования."
              : "Cloud servers are typically deployed within minutes after payment. Dedicated servers may take more time, usually from a few hours to 1-2 business days, depending on the configuration and hardware availability.",
        },
        {
          question:
            language === "ru"
              ? "Могу ли я изменить конфигурацию сервера после его создания?"
              : "Can I change the server configuration after it's created?",
          answer:
            language === "ru"
              ? "Да, для облачных серверов вы можете изменить количество CPU, объем RAM и дискового пространства в любое время через панель управления. Для некоторых изменений может потребоваться перезагрузка сервера. Для выделенных серверов возможности изменения конфигурации более ограничены и могут потребовать консультации с нашей технической поддержкой."
              : "Yes, for cloud servers, you can change the number of CPUs, RAM, and disk space at any time through the control panel. Some changes may require a server restart. For dedicated servers, configuration change options are more limited and may require consultation with our technical support.",
        },
        {
          question:
            language === "ru" ? "Как осуществляется резервное копирование данных?" : "How is data backup performed?",
          answer:
            language === "ru"
              ? "Мы предлагаем автоматическое резервное копирование для всех серверов. По умолчанию резервные копии создаются ежедневно и хранятся в течение 7 дней. Вы можете настроить расписание и период хранения резервных копий в соответствии с вашими потребностями. Также доступно ручное создание резервных копий в любое время."
              : "We offer automatic backup for all servers. By default, backups are created daily and stored for 7 days. You can configure the schedule and retention period for backups according to your needs. Manual backup creation is also available at any time.",
        },
      ],
    },
    {
      title: language === "ru" ? "Оплата и тарифы" : "Payment and Pricing",
      faqs: [
        {
          question: language === "ru" ? "Какие способы оплаты вы принимаете?" : "What payment methods do you accept?",
          answer:
            language === "ru"
              ? "Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР), электронными деньгами (WebMoney, Яндекс.Деньги), через PayPal, а также банковским переводом для юридических лиц. Для постоянных клиентов доступна постоплата."
              : "We accept payment by bank cards (Visa, MasterCard, MIR), electronic money (WebMoney, Yandex.Money), via PayPal, as well as bank transfer for legal entities. Post-payment is available for regular customers.",
        },
        {
          question: language === "ru" ? "Есть ли у вас пробный период?" : "Do you have a trial period?",
          answer:
            language === "ru"
              ? "Да, мы предлагаем бесплатный тестовый период продолжительностью 7 дней для новых клиентов. В течение этого времени вы можете протестировать наши услуги и убедиться в их качестве. Для активации тестового периода требуется верификация с помощью банковской карты, но оплата не снимается, если вы отмените услугу до окончания тестового периода."
              : "Yes, we offer a free 7-day trial period for new customers. During this time, you can test our services and ensure their quality. Verification with a bank card is required to activate the trial period, but payment is not charged if you cancel the service before the end of the trial period.",
        },
        {
          question:
            language === "ru"
              ? "Как рассчитывается стоимость при почасовой оплате?"
              : "How is the cost calculated for hourly payment?",
          answer:
            language === "ru"
              ? "При почасовой оплате стоимость рассчитывается исходя из фактического времени использования сервера. Тарификация происходит с точностью до минуты. Например, если вы используете сервер 5 часов и 30 минут, вам будет начислена плата за 5.5 часов использования. Это удобно для тестирования или для задач, требующих временного увеличения мощностей."
              : "With hourly payment, the cost is calculated based on the actual time of server use. Billing occurs with minute precision. For example, if you use the server for 5 hours and 30 minutes, you will be charged for 5.5 hours of use. This is convenient for testing or for tasks requiring a temporary increase in capacity.",
        },
      ],
    },
    {
      title: language === "ru" ? "Поддержка и обслуживание" : "Support and Maintenance",
      faqs: [
        {
          question: language === "ru" ? "Как связаться с технической поддержкой?" : "How to contact technical support?",
          answer:
            language === "ru"
              ? "Вы можете связаться с нашей технической поддержкой несколькими способами: через тикет-систему в личном кабинете (рекомендуется для большинства вопросов), по электронной почте support@nurikoinot.com, по телефону +7 (999) 123-45-67 или через онлайн-чат на нашем сайте. Техническая поддержка доступна 24/7."
              : "You can contact our technical support in several ways: through the ticket system in your personal account (recommended for most questions), by email support@nurikoinot.com, by phone +7 (999) 123-45-67, or via online chat on our website. Technical support is available 24/7.",
        },
        {
          question:
            language === "ru"
              ? "Проводите ли вы плановые технические работы?"
              : "Do you conduct scheduled maintenance?",
          answer:
            language === "ru"
              ? "Да, мы проводим плановые технические работы для обновления оборудования и программного обеспечения. О таких работах мы уведомляем заранее по электронной почте и в личном кабинете. Мы стараемся проводить работы в ночное время или в периоды минимальной нагрузки, чтобы минимизировать влияние на работу ваших сервисов."
              : "Yes, we conduct scheduled maintenance to update hardware and software. We notify about such work in advance by email and in your personal account. We try to carry out work at night or during periods of minimum load to minimize the impact on your services.",
        },
        {
          question:
            language === "ru" ? "Что делать, если мой сервер недоступен?" : "What to do if my server is unavailable?",
          answer:
            language === "ru"
              ? "Если ваш сервер недоступен, сначала проверьте статус сервера в личном кабинете. Если там указано, что сервер работает нормально, но вы все равно не можете получить к нему доступ, создайте тикет в технической поддержке с описанием проблемы. В экстренных случаях вы можете позвонить нам по телефону технической поддержки."
              : "If your server is unavailable, first check the server status in your personal account. If it indicates that the server is working normally, but you still cannot access it, create a ticket in technical support with a description of the problem. In emergency cases, you can call us at the technical support phone number.",
        },
      ],
    },
  ]

  const filteredFaqs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  return (
    <div className="min-h-screen bg-[#0a1a40] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="pt-36 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            {language === "ru" ? "Часто задаваемые вопросы" : "Frequently Asked Questions"}
          </h1>

          {/* Rest of the FAQ page content */}
          {/* Hero Section */}
          <Box sx={{ py: 10, position: "relative" }}>
            <Container maxWidth="xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                {/*<Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: "bold" }}>*/}
                {/*  {language === "ru" ? "Часто задаваемые вопросы" : "Frequently Asked Questions"}*/}
                {/*</Typography>*/}
                <Typography variant="h5" align="center" sx={{ opacity: 0.8, mb: 4, maxWidth: 800, mx: "auto" }}>
                  {language === "ru"
                    ? "Ответы на популярные вопросы о наших услугах"
                    : "Answers to popular questions about our services"}
                </Typography>

                <Box sx={{ maxWidth: 600, mx: "auto", mb: 6 }}>
                  <TextField
                    fullWidth
                    placeholder={language === "ru" ? "Поиск по вопросам..." : "Search questions..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search sx={{ color: "white" }} />
                        </InputAdornment>
                      ),
                      sx: {
                        color: "white",
                        bgcolor: "rgba(255,255,255,0.1)",
                        borderRadius: 2,
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
                </Box>
              </motion.div>
            </Container>
          </Box>

          {/* FAQ Content */}
          <Box sx={{ pb: 10 }}>
            <Container maxWidth="xl">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((category, categoryIndex) => (
                  <Box key={categoryIndex} sx={{ mb: 6 }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
                      {category.title}
                    </Typography>

                    <Grid container spacing={3}>
                      {category.faqs.map((faq, faqIndex) => (
                        <Grid item xs={12} key={faqIndex}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: faqIndex * 0.1 }}
                          >
                            <Accordion
                              sx={{
                                bgcolor: "rgba(255,255,255,0.05)",
                                color: "white",
                                boxShadow: "none",
                                "&:before": {
                                  display: "none",
                                },
                                "&.Mui-expanded": {
                                  margin: 0,
                                },
                              }}
                            >
                              <AccordionSummary
                                expandIcon={<ExpandMore sx={{ color: "#ff6b8b" }} />}
                                sx={{
                                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                                  "&.Mui-expanded": {
                                    minHeight: 48,
                                  },
                                }}
                              >
                                <Typography variant="h6">{faq.question}</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                  {faq.answer}
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                ))
              ) : (
                <Card sx={{ bgcolor: "rgba(255,255,255,0.05)", color: "white" }}>
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Typography variant="h6">
                      {language === "ru" ? "По вашему запросу ничего не найдено" : "No results found for your search"}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, opacity: 0.8 }}>
                      {language === "ru"
                        ? "Попробуйте изменить поисковый запрос или свяжитесь с нашей поддержкой"
                        : "Try changing your search query or contact our support"}
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Container>
          </Box>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
