"use client"

import { Container, Typography, Box, Card, CardContent } from "@mui/material"
import { motion } from "framer-motion"
import { useAppSelector } from "@/lib/redux/hooks"
import { selectLanguage } from "@/lib/redux/features/languageSlice"
import { useTranslation } from "@/lib/translations"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  const language = useAppSelector(selectLanguage)
  const t = useTranslation(language)

  return (
    <Box sx={{ bgcolor: "#001a5e", minHeight: "100vh", color: "white" }}>
      <Navbar />

      {/* Hero Section */}
      <Box sx={{ py: 10, position: "relative" }}>
        <Container maxWidth="xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
              {language === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}
            </Typography>
            <Typography variant="h5" align="center" sx={{ opacity: 0.8, mb: 4, maxWidth: 800, mx: "auto" }}>
              {language === "ru" ? "Последнее обновление: 15 апреля 2024" : "Last updated: April 15, 2024"}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Privacy Content */}
      <Box sx={{ pb: 10 }}>
        <Container maxWidth="lg">
          <Card sx={{ bgcolor: "rgba(255,255,255,0.05)", color: "white" }}>
            <CardContent sx={{ p: 6 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "1. Введение" : "1. Introduction"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Настоящая Политика конфиденциальности (далее — «Политика») объясняет, как компания Нури Койнот (далее — «Компания», «мы», «нас» или «наш») собирает, использует, хранит и раскрывает информацию, полученную от пользователей (далее — «вы», «ваш») нашего веб-сайта и услуг (далее — «Услуги»). Мы уважаем вашу конфиденциальность и стремимся защищать ваши персональные данные."
                  : 'This Privacy Policy (hereinafter referred to as the "Policy") explains how Nuri Koinot (hereinafter referred to as the "Company", "we", "us" or "our") collects, uses, stores, and discloses information obtained from users (hereinafter referred to as "you", "your") of our website and services (hereinafter referred to as the "Services"). We respect your privacy and are committed to protecting your personal data.'}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "2. Собираемая информация" : "2. Information We Collect"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Мы можем собирать следующие типы информации:\n\n2.1. Персональные данные: имя, адрес электронной почты, номер телефона, почтовый адрес, платежная информация и другая информация, которую вы предоставляете при регистрации, оформлении заказа или обращении в службу поддержки.\n\n2.2. Технические данные: IP-адрес, тип и версия браузера, операционная система, информация об устройстве, данные о посещении нашего веб-сайта, включая время и дату посещения, время, проведенное на страницах, и другая диагностическая информация."
                  : "We may collect the following types of information:\n\n2.1. Personal Data: name, email address, phone number, postal address, payment information, and other information you provide when registering, placing an order, or contacting customer support.\n\n2.2. Technical Data: IP address, browser type and version, operating system, device information, information about your visits to our website, including time and date of visit, time spent on pages, and other diagnostic information."}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "3. Использование информации" : "3. How We Use Your Information"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Мы используем собранную информацию для следующих целей:\n\n3.1. Предоставление и поддержка Услуг.\n3.2. Обработка и выполнение ваших заказов.\n3.3. Отправка административных сообщений, обновлений, технических уведомлений и информации о безопасности.\n3.4. Ответы на ваши запросы и предоставление клиентской поддержки.\n3.5. Улучшение наших Услуг и разработка новых функций.\n3.6. Анализ использования Услуг и проведение исследований.\n3.7. Защита наших прав, собственности и безопасности, а также прав, собственности и безопасности наших пользователей."
                  : "We use the collected information for the following purposes:\n\n3.1. Providing and maintaining the Services.\n3.2. Processing and fulfilling your orders.\n3.3. Sending administrative messages, updates, technical notices, and security information.\n3.4. Responding to your inquiries and providing customer support.\n3.5. Improving our Services and developing new features.\n3.6. Analyzing usage of the Services and conducting research.\n3.7. Protecting our rights, property, and safety, as well as the rights, property, and safety of our users."}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "4. Раскрытие информации" : "4. Information Disclosure"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Мы можем раскрывать вашу информацию в следующих случаях:\n\n4.1. Поставщикам услуг, которые помогают нам в предоставлении Услуг (например, обработка платежей, хостинг, аналитика).\n4.2. В ответ на законный запрос от государственных органов или в соответствии с требованиями закона.\n4.3. Для защиты наших прав, собственности и безопасности, а также прав, собственности и безопасности наших пользователей или общественности.\n4.4. В связи с корпоративной сделкой, такой как слияние, приобретение или продажа активов."
                  : "We may disclose your information in the following cases:\n\n4.1. To service providers who help us provide the Services (e.g., payment processing, hosting, analytics).\n4.2. In response to a legitimate request from government authorities or as required by law.\n4.3. To protect our rights, property, and safety, as well as the rights, property, and safety of our users or the public.\n4.4. In connection with a corporate transaction, such as a merger, acquisition, or sale of assets."}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "5. Безопасность данных" : "5. Data Security"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Мы принимаем разумные меры для защиты вашей информации от несанкционированного доступа, использования, изменения или раскрытия. Однако, ни один метод передачи через Интернет или метод электронного хранения не является полностью безопасным. Поэтому, хотя мы стремимся использовать коммерчески приемлемые средства для защиты вашей информации, мы не можем гарантировать ее абсолютную безопасность."
                  : "We take reasonable measures to protect your information from unauthorized access, use, alteration, or disclosure. However, no method of transmission over the Internet or method of electronic storage is completely secure. Therefore, while we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security."}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "6. Ваши права" : "6. Your Rights"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "В зависимости от вашего местоположения, вы можете иметь следующие права в отношении ваших персональных данных:\n\n6.1. Право на доступ к вашим персональным данным.\n6.2. Право на исправление неточных или неполных данных.\n6.3. Право на удаление ваших персональных данных.\n6.4. Право на ограничение обработки ваших персональных данных.\n6.5. Право на возражение против обработки ваших персональных данных.\n6.6. Право на перенос данных.\n\nДля осуществления этих прав, пожалуйста, свяжитесь с нами по контактной информации, указанной ниже."
                  : "Depending on your location, you may have the following rights regarding your personal data:\n\n6.1. The right to access your personal data.\n6.2. The right to rectify inaccurate or incomplete data.\n6.3. The right to delete your personal data.\n6.4. The right to restrict the processing of your personal data.\n6.5. The right to object to the processing of your personal data.\n6.6. The right to data portability.\n\nTo exercise these rights, please contact us using the contact information provided below."}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "7. Изменения политики" : "7. Changes to This Policy"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Мы можем обновлять нашу Политику конфиденциальности время от времени. Мы уведомим вас о любых изменениях, разместив новую Политику на этой странице и обновив дату «последнего обновления» в верхней части Политики. Мы рекомендуем вам периодически просматривать эту Политику для получения информации о любых изменениях."
                  : 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Policy on this page and updating the "last updated" date at the top of the Policy. We encourage you to review this Policy periodically for any changes.'}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {language === "ru" ? "8. Контактная информация" : "8. Contact Information"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {language === "ru"
                  ? "Если у вас есть вопросы или комментарии относительно настоящей Политики конфиденциальности, пожалуйста, свяжитесь с нами по адресу: info@nurikoinot.com или по телефону: +7 (999) 123-45-67."
                  : "If you have any questions or comments regarding this Privacy Policy, please contact us at: info@nurikoinot.com or by phone: +7 (999) 123-45-67."}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}
