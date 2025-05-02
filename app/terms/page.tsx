"use client"

import { Container, Typography, Box, Card, CardContent } from "@mui/material"
import { motion } from "framer-motion"
import { useAppSelector } from "@/lib/redux/hooks"
import { selectLanguage } from "@/lib/redux/features/languageSlice"
import { useTranslation } from "@/lib/translations"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsPage() {
  const language = useAppSelector(selectLanguage)
  const t = useTranslation(language)

  return (
    <Box sx={{ bgcolor: "#001a5e", minHeight: "100vh", color: "white" }}>
      <Navbar />

      {/* Hero Section */}
      <Box sx={{ py: 10, position: "relative", pt:20 }}>
        <Container maxWidth="xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
              {language === "ru" ? "Условия использования" : "Terms of Service"}
            </Typography>
            <Typography variant="h5" align="center" sx={{ opacity: 0.8, mb: 4, maxWidth: 800, mx: "auto" }}>
              {language === "ru" ? "Последнее обновление: 15 апреля 2024" : "Last updated: April 15, 2024"}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Terms Content */}
      <Box sx={{ pb: 10 }}>
        <Container maxWidth="lg">
          <Card sx={{ bgcolor: "rgba(255,255,255,0.05)", color: "white" }}>
            <CardContent sx={{ p: 6 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "1. Введение" : "1. Introduction"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Настоящие Условия использования (далее — «Условия») регулируют использование услуг, предоставляемых компанией Нури Койнот (далее — «Компания», «мы», «нас» или «наш»). Используя наши услуги, вы соглашаетесь с настоящими Условиями. Если вы не согласны с какой-либо частью Условий, вы не можете использовать наши услуги."
                  : 'These Terms of Service (hereinafter referred to as the "Terms") govern the use of services provided by Nuri Koinot (hereinafter referred to as the "Company", "we", "us" or "our"). By using our services, you agree to these Terms. If you do not agree with any part of the Terms, you may not use our services.'}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "2. Описание услуг" : "2. Service Description"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Компания предоставляет услуги облачного хостинга, включая, но не ограничиваясь: облачные серверы, выделенные серверы, хранение данных, резервное копирование и другие связанные услуги (далее — «Услуги»). Компания оставляет за собой право изменять, приостанавливать или прекращать предоставление любой части Услуг в любое время."
                  : 'The Company provides cloud hosting services, including but not limited to: cloud servers, dedicated servers, data storage, backup, and other related services (hereinafter referred to as the "Services"). The Company reserves the right to modify, suspend, or discontinue any part of the Services at any time.'}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "3. Регистрация и учетная запись" : "3. Registration and Account"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Для использования некоторых Услуг вам необходимо создать учетную запись. Вы несете ответственность за сохранение конфиденциальности вашей учетной записи и пароля, а также за ограничение доступа к вашему компьютеру. Вы соглашаетесь принять ответственность за все действия, которые происходят под вашей учетной записью или паролем."
                  : "To use some Services, you need to create an account. You are responsible for maintaining the confidentiality of your account and password, as well as for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password."}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "4. Оплата и тарификация" : "4. Payment and Billing"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Вы соглашаетесь оплачивать все сборы и платежи, связанные с вашей учетной записью, в соответствии с ценами и условиями, действующими на момент каждого платежа. Компания оставляет за собой право изменять цены на Услуги в любое время. Все платежи являются невозвратными, за исключением случаев, предусмотренных законодательством."
                  : "You agree to pay all fees and charges associated with your account in accordance with the prices and terms in effect at the time of each payment. The Company reserves the right to change the prices for the Services at any time. All payments are non-refundable except as provided by law."}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "5. Использование услуг" : "5. Use of Services"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Вы соглашаетесь использовать Услуги только в законных целях и в соответствии с настоящими Условиями. Вы не будете использовать Услуги для нарушения прав интеллектуальной собственности, распространения вредоносного ПО, спама, порнографии, материалов, пропагандирующих насилие или дискриминацию, или любой другой незаконной деятельности."
                  : "You agree to use the Services only for lawful purposes and in accordance with these Terms. You will not use the Services to violate intellectual property rights, distribute malware, spam, pornography, materials promoting violence or discrimination, or any other illegal activity."}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "6. Ограничение ответственности" : "6. Limitation of Liability"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Компания не несет ответственности за любые прямые, косвенные, случайные, особые или последующие убытки, возникающие в результате использования или невозможности использования Услуг, даже если Компания была уведомлена о возможности таких убытков."
                  : "The Company shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the Services, even if the Company has been advised of the possibility of such damages."}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "7. Изменения условий" : "7. Changes to Terms"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Компания оставляет за собой право изменять настоящие Условия в любое время. Мы уведомим вас о любых существенных изменениях путем размещения новых Условий на нашем веб-сайте или по электронной почте. Продолжение использования Услуг после таких изменений означает ваше согласие с новыми Условиями."
                  : "The Company reserves the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on our website or by email. Your continued use of the Services after such changes constitutes your acceptance of the new Terms."}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "8. Применимое право" : "8. Governing Law"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Настоящие Условия регулируются и толкуются в соответствии с законодательством Российской Федерации. Любые споры, возникающие в связи с настоящими Условиями, подлежат рассмотрению в судах Российской Федерации."
                  : "These Terms shall be governed by and construed in accordance with the laws of the Russian Federation. Any disputes arising in connection with these Terms shall be subject to the jurisdiction of the courts of the Russian Federation."}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "9. Контактная информация" : "9. Contact Information"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Если у вас есть вопросы или комментарии относительно настоящих Условий, пожалуйста, свяжитесь с нами по адресу: info@nurikoinot.com или по телефону: +7 (999) 123-45-67."
                  : "If you have any questions or comments regarding these Terms, please contact us at: info@nurikoinot.com or by phone: +7 (999) 123-45-67."}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}
