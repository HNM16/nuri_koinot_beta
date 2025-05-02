"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useAppSelector } from "@/lib/redux/hooks"
import { selectLanguage } from "@/lib/redux/features/languageSlice"
import { useTranslation } from "@/lib/translations"
import Navbar from "@/components/navbar"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Footer from "@/components/footer"
import Servers from "@/components/servers"
import PricingCards from "@/components/pricing-cards"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function AboutPage() {
  const language = useAppSelector(selectLanguage)
  const t = useTranslation(language)
  const [activeTab, setActiveTab] = useState(0)

  const values = [
    {
      title: "Инновации",
      description:
        "Мы постоянно внедряем новейшие технологии и решения для обеспечения максимальной производительности и надежности наших серверов.",
      icon: (
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
          className="text-[#4f46e5]"
        >
          <path d="M2 12h5"></path>
          <path d="M17 12h5"></path>
          <path d="M12 2v5"></path>
          <path d="M12 17v5"></path>
          <path d="M4.93 4.93l3.54 3.54"></path>
          <path d="M15.54 15.54l3.54 3.54"></path>
          <path d="M4.93 19.07l3.54-3.54"></path>
          <path d="M15.54 8.46l3.54-3.54"></path>
        </svg>
      ),
    },
    {
      title: "Надежность",
      description:
        "Наша инфраструктура обеспечивает 99.9% доступности, что гарантирует бесперебойную работу ваших проектов в любое время.",
      icon: (
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
          className="text-[#4f46e5]"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: "Клиентоориентированность",
      description:
        "Мы ставим потребности клиентов на первое место и предоставляем индивидуальный подход к каждому проекту.",
      icon: (
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
          className="text-[#4f46e5]"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Безопасность",
      description:
        "Мы обеспечиваем высокий уровень защиты данных и предоставляем комплексные решения для безопасности вашей инфраструктуры.",
      icon: (
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
          className="text-[#4f46e5]"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
    },
  ]

  const team = [
    {
      name: "Алексей Иванов",
      position: "Генеральный директор",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Мария Петрова",
      position: "Технический директор",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Дмитрий Сидоров",
      position: "Руководитель отдела разработки",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Елена Смирнова",
      position: "Руководитель службы поддержки",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a1a40] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="pt-36 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            {language === "ru" ? "О компании" : "About Us"}
          </h1>

          {/* Hero Section */}
          <div className="pb-10 bg-gradient-to-b from-[#0a1a40] to-[#0f1f4b] relative overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl text-white/80 mb-8">
                  Мы предоставляем высокопроизводительные облачные решения для бизнеса любого масштаба
                </p>
              </div>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="mt-12 overflow-visible"
              >
                <SwiperSlide>
                  <div className="bg-[#0f1f4b] rounded-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Наша миссия</h2>
                        <p className="text-white/80">
                          Предоставлять инновационные облачные решения, которые помогают нашим клиентам развивать свой
                          бизнес, обеспечивая высокую производительность, надежность и безопасность их
                          IT-инфраструктуры.
                        </p>
                      </div>
                      <div className="h-[250px] bg-[#0a1a40] rounded-lg flex items-center justify-center">
                        <p className="text-white/50">Место для изображения</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-[#0f1f4b] rounded-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Наша история</h2>
                        <p className="text-white/80">
                          Компания НУРИ КОИНОТ была основана в 2018 году группой IT-специалистов с целью создания
                          современной облачной платформы, которая отвечает всем требованиям бизнеса и обеспечивает
                          высокий уровень сервиса.
                        </p>
                      </div>
                      <div className="h-[250px] bg-[#0a1a40] rounded-lg flex items-center justify-center">
                        <p className="text-white/50">Место для изображения</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-[#0f1f4b] rounded-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Наши достижения</h2>
                        <p className="text-white/80">
                          За время работы мы реализовали более 500 проектов различной сложности, от небольших стартапов
                          до крупных корпоративных решений. Наша инфраструктура обслуживает более 10 000 серверов по
                          всему миру.
                        </p>
                      </div>
                      <div className="h-[250px] bg-[#0a1a40] rounded-lg flex items-center justify-center">
                        <p className="text-white/50">Место для изображения</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Background elements */}
            <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-[#4f46e5]/20 blur-3xl"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-[#4f46e5]/10 blur-3xl"></div>
          </div>

          {/* Values Section */}
          <div className="py-16 bg-[#0a1a40]">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Наши ценности</h2>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {values.map((value, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === index
                        ? "bg-[#4f46e5] text-white"
                        : "bg-[#0f1f4b] text-white/80 hover:bg-[#0f1f4b]/80"
                    }`}
                  >
                    {value.title}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0f1f4b] rounded-lg p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#4f46e5]/10 p-3 rounded-full">{values[activeTab].icon}</div>
                  <h3 className="text-2xl font-bold">{values[activeTab].title}</h3>
                </div>
                <p className="text-white/80 text-lg">{values[activeTab].description}</p>
              </motion.div>
            </div>
          </div>

          {/* Team Section */}
          <div className="py-16 bg-[#0f1f4b]">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Наша команда</h2>
              <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
                Профессионалы своего дела, которые обеспечивают высокое качество наших услуг
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-[#0a1a40] rounded-lg overflow-hidden"
                  >
                    <div className="h-[250px] bg-[#0f1f4b] flex items-center justify-center">
                      <p className="text-white/50">Фото сотрудника</p>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-white/70">{member.position}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Server Types Section */}
          <Servers />

          {/* Pricing Cards Section */}
          <PricingCards />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
