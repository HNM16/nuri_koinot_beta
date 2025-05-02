"use client"

import { Box, Container, Grid, Typography, Divider, IconButton } from "@mui/material"
import Link from "next/link"
import { Facebook, Twitter, LinkedIn, Instagram, YouTube, GitHub } from "@mui/icons-material"
import { useAppSelector } from "@/lib/redux/hooks"
import { selectLanguage } from "@/lib/redux/features/languageSlice"
import { useTranslation } from "@/lib/translations"
import Logo from "../public/logo.png"
import Image from 'next/image';


export default function Footer() {
  const language = useAppSelector(selectLanguage)
  const t = useTranslation(language)

  const footerLinks = {
    services: [
      { label: language === "ru" ? "Облачные серверы" : "Cloud Servers", href: "/services#cloud" },
      { label: language === "ru" ? "Стандартные серверы" : "Standard Servers", href: "/services#standard" },
      { label: language === "ru" ? "Hi-CPU серверы" : "Hi-CPU Servers", href: "/services#hicpu" },
      { label: language === "ru" ? "Выделенные серверы" : "Dedicated Servers", href: "/services#dedicated" },
      { label: language === "ru" ? "Резервное копирование" : "Backup", href: "/services#backup" },
      { label: language === "ru" ? "Защита от DDoS" : "DDoS Protection", href: "/services#ddos" },
    ],
    company: [
      { label: language === "ru" ? "О нас" : "About Us", href: "/about" },
      { label: language === "ru" ? "Блог" : "Blog", href: "/blog" },
      { label: language === "ru" ? "Карьера" : "Careers", href: "/careers" },
      { label: language === "ru" ? "Контакты" : "Contact", href: "/contact" },
      { label: language === "ru" ? "Партнеры" : "Partners", href: "/partners" },
      { label: language === "ru" ? "Отзывы" : "Testimonials", href: "/testimonials" },
    ],
    support: [
      { label: language === "ru" ? "Документация" : "Documentation", href: "/documents" },
      { label: language === "ru" ? "FAQ" : "FAQ", href: "/faq" },
      { label: language === "ru" ? "Статус сервисов" : "Service Status", href: "/status" },
      { label: language === "ru" ? "Техподдержка" : "Support", href: "/support" },
      { label: language === "ru" ? "API" : "API", href: "/api" },
      { label: language === "ru" ? "Сообщество" : "Community", href: "/community" },
    ],
    legal: [
      { label: language === "ru" ? "Условия использования" : "Terms of Service", href: "/terms" },
      { label: language === "ru" ? "Политика конфиденциальности" : "Privacy Policy", href: "/privacy" },
      { label: language === "ru" ? "Соглашение об уровне обслуживания" : "SLA", href: "/sla" },
      { label: language === "ru" ? "Правовая информация" : "Legal Information", href: "/legal" },
      { label: language === "ru" ? "GDPR" : "GDPR", href: "/gdpr" },
      { label: language === "ru" ? "Безопасность" : "Security", href: "/security" },
    ],
  }

  return (
    <Box sx={{ bgcolor: "#0f172a", py: 6, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box sx={{ mr: 1, width: 200, height: 40, marginBottom:4, position: "relative" }}>
            
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                    <Image 
  src={Logo} 
  alt="Logo" 
  width={300} 
  height={500} 
/>
                </Box>
              </Box>
            
            </Box>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mb: 2 }}>
              {language === "ru"
                ? "Облачные серверы нового поколения для вашего бизнеса"
                : "Next generation cloud servers for your business"}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <IconButton size="small" sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}>
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}>
                <Twitter fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}>
                <LinkedIn fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}>
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}>
                <YouTube fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}>
                <GitHub fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              {language === "ru" ? "Услуги" : "Services"}
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {footerLinks.services.map((link, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Link href={link.href} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        "&:hover": { color: "white" },
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              {language === "ru" ? "Компания" : "Company"}
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {footerLinks.company.map((link, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Link href={link.href} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        "&:hover": { color: "white" },
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              {language === "ru" ? "Поддержка" : "Support"}
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {footerLinks.support.map((link, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Link href={link.href} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        "&:hover": { color: "white" },
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              {language === "ru" ? "Правовая информация" : "Legal"}
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {footerLinks.legal.map((link, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Link href={link.href} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        "&:hover": { color: "white" },
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)", my: 3 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "center" },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            © 2024 НУРИ КОИНОТ. {language === "ru" ? "Все права защищены." : "All rights reserved."}
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="/terms" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
              <Typography
                variant="body2"
                sx={{
                  "&:hover": { color: "white" },
                  transition: "color 0.2s",
                }}
              >
                {language === "ru" ? "Условия использования" : "Terms of Service"}
              </Typography>
            </Link>
            <Link href="/privacy" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
              <Typography
                variant="body2"
                sx={{
                  "&:hover": { color: "white" },
                  transition: "color 0.2s",
                }}
              >
                {language === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
