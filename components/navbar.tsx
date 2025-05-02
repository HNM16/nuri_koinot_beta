"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, px } from "framer-motion"
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { setLanguage, selectLanguage } from "@/lib/redux/features/languageSlice"
import { useTranslation } from "@/lib/translations"
import Image from 'next/image';
import Logo from "@/public/logo.png"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const language = useAppSelector(selectLanguage)
  const dispatch = useAppDispatch()
  const t = useTranslation(language)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    dispatch(setLanguage(language === "ru" ? "en" : "ru"))
  }

  const navItems = [
    { name: language === "ru" ? "Главная" : "Home", href: "/" },
    { name: language === "ru" ? "Услуги" : "Services", href: "/services" },
    { name: language === "ru" ? "Тарифы" : "Pricing", href: "/pricing" },
    { name: language === "ru" ? "О нас" : "About", href: "/about" },
    { name: language === "ru" ? "Блог" : "Blog", href: "/blog" },
    { name: language === "ru" ? "Контакты" : "Contact", href: "/contact" },
    { name: language === "ru" ? "FAQ" : "FAQ", href: "/faq" },
  ]

  return (
    <div
      className={`fixed top-0 left-0  right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a1a40]/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="w-70 h-30  rounded-lg flex items-center  justify-center">
            <Image 
  src={Logo} 
  alt="Logo" 
  width={300} 
  height={500} 
/>
            </div>
            <div>
              
            </div>
          </Link>
         

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-white bg-[#4f46e5]/20"
                    : "text-white/70 hover:text-white hover:bg-[#4f46e5]/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 border border-white/20 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
            >
              {language === "ru" ? "EN" : "RU"}
            </button>
            <Link
              href="/login"
              className="px-3 py-1.5 border border-white/20 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
            >
              {language === "ru" ? "Вход" : "Login"}
            </Link>
            <Link
              href="/register"
              className="px-3 py-1.5 bg-[#4f46e5] hover:bg-[#4f46e5]/90 rounded-md text-sm font-medium transition-colors"
            >
              {language === "ru" ? "Регистрация" : "Register"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0f1f4b] border-t border-white/10"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-white bg-[#4f46e5]/20"
                      : "text-white/70 hover:text-white hover:bg-[#4f46e5]/10"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2"></div>
              <div className="flex items-center gap-2 py-2">
                <button
                  onClick={toggleLanguage}
                  className="flex-1 px-3 py-2 border border-white/20 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
                >
                  {language === "ru" ? "EN" : "RU"}
                </button>
                <Link
                  href="/login"
                  className="flex-1 px-3 py-2 border border-white/20 rounded-md text-sm font-medium hover:bg-white/5 transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {language === "ru" ? "Вход" : "Login"}
                </Link>
                <Link
                  href="/register"
                  className="flex-1 px-3 py-2 bg-[#4f46e5] hover:bg-[#4f46e5]/90 rounded-md text-sm font-medium transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {language === "ru" ? "Регистрация" : "Register"}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
