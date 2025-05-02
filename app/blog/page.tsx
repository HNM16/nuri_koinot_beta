"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useAppSelector } from "@/lib/redux/hooks"
import { selectLanguage } from "@/lib/redux/features/languageSlice"
import { useTranslation } from "@/lib/translations"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Tag, ChevronRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function BlogPage() {
  const language = useAppSelector(selectLanguage)
  const t = useTranslation(language)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const featuredPosts = [
    {
      title: "Как выбрать оптимальную конфигурацию сервера для вашего проекта",
      excerpt:
        "Рассказываем о ключевых параметрах, которые нужно учитывать при выборе сервера для различных типов проектов.",
      image: "/placeholder.svg?height=400&width=800",
      date: "15 апреля 2023",
      readTime: "8 мин",
      author: "Алексей Иванов",
      category: "guides",
    },
    {
      title: "Обзор новых технологий виртуализации в 2023 году",
      excerpt:
        "Анализируем последние тенденции в области виртуализации и их влияние на производительность облачных серверов.",
      image: "/placeholder.svg?height=400&width=800",
      date: "2 марта 2023",
      readTime: "12 мин",
      author: "Мария Петрова",
      category: "technology",
    },
    {
      title: "Как защитить ваш сервер от DDoS-атак",
      excerpt:
        "Практические рекомендации по настройке защиты от DDoS-атак и обеспечению бесперебойной работы вашего сервера.",
      image: "/placeholder.svg?height=400&width=800",
      date: "18 февраля 2023",
      readTime: "10 мин",
      author: "Дмитрий Сидоров",
      category: "security",
    },
  ]

  const blogPosts = [
    {
      title: "10 способов оптимизировать работу вашего сервера",
      excerpt: "Практические советы по настройке и оптимизации сервера для достижения максимальной производительности.",
      image: "/placeholder.svg?height=300&width=500",
      date: "10 апреля 2023",
      readTime: "6 мин",
      author: "Алексей Иванов",
      category: "guides",
    },
    {
      title: "Сравнение облачных и выделенных серверов: что выбрать?",
      excerpt: "Анализируем преимущества и недостатки различных типов серверов для разных бизнес-задач.",
      image: "/placeholder.svg?height=300&width=500",
      date: "5 апреля 2023",
      readTime: "9 мин",
      author: "Мария Петрова",
      category: "comparison",
    },
    {
      title: "Новые функции в панели управления НУРИ КОИНОТ",
      excerpt:
        "Обзор новых возможностей панели управления, которые помогут вам эффективнее управлять вашими серверами.",
      image: "/placeholder.svg?height=300&width=500",
      date: "28 марта 2023",
      readTime: "5 мин",
      author: "Елена Смирнова",
      category: "news",
    },
    {
      title: "Как настроить автоматическое резервное копирование данных",
      excerpt:
        "Пошаговая инструкция по настройке автоматического резервного копирования для обеспечения безопасности ваших данных.",
      image: "/placeholder.svg?height=300&width=500",
      date: "20 марта 2023",
      readTime: "7 мин",
      author: "Дмитрий Сидоров",
      category: "guides",
    },
    {
      title: "Обзор новых тарифных планов НУРИ КОИНОТ",
      excerpt: "Рассказываем о новых тарифных планах и их преимуществах для различных типов клиентов.",
      image: "/placeholder.svg?height=300&width=500",
      date: "15 марта 2023",
      readTime: "4 мин",
      author: "Алексей Иванов",
      category: "news",
    },
    {
      title: "Как мигрировать ваш проект на наши серверы без простоев",
      excerpt:
        "Практические рекомендации по безопасной миграции проектов на серверы НУРИ КОИНОТ без прерывания работы сервисов.",
      image: "/placeholder.svg?height=300&width=500",
      date: "10 марта 2023",
      readTime: "8 мин",
      author: "Мария Петрова",
      category: "guides",
    },
  ]

  const categories = [
    { id: "all", name: "Все статьи" },
    { id: "guides", name: "Руководства" },
    { id: "news", name: "Новости" },
    { id: "technology", name: "Технологии" },
    { id: "security", name: "Безопасность" },
    { id: "comparison", name: "Сравнения" },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || post.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#0a1a40] text-white">
      {/* Navbar */}
      <Navbar  />

      {/* Content */}
      <div className="pt-36 pb-16 ">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{language === "ru" ? "Блог" : "Blog"}</h1>

          {/* Hero Section */}
          <div className="pb-10 bg-gradient-to-b from-[#0a1a40] to-[#0f1f4b] relative overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl text-white/80 mb-8">
                  Новости, руководства и полезные статьи о наших сервисах и технологиях
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
                {featuredPosts.map((post, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-[#0f1f4b] rounded-lg overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="h-[250px] md:h-auto bg-[#0a1a40] flex items-center justify-center">
                          <p className="text-white/50">Изображение статьи</p>
                        </div>
                        <div className="p-8">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center text-white/60 text-sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              {post.date}
                            </div>
                            <div className="flex items-center text-white/60 text-sm">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                          <p className="text-white/80 mb-6">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-white/60 text-sm">
                              <User className="h-4 w-4 mr-1" />
                              {post.author}
                            </div>
                            <Button className="bg-[#4f46e5] hover:bg-[#4f46e5]/90">Читать статью</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Background elements */}
            <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-[#4f46e5]/20 blur-3xl"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-[#4f46e5]/10 blur-3xl"></div>
          </div>

          {/* Blog Content Section */}
          <div className="py-16 bg-[#0a1a40]">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-[#0f1f4b] rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4">Поиск</h3>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Поиск статей..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-[#0a1a40] border-[#0a1a40] text-white pr-10"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-[#0f1f4b] rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4">Категории</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            activeCategory === category.id
                              ? "bg-[#4f46e5] text-white"
                              : "bg-[#0a1a40] text-white/80 hover:bg-[#0a1a40]/80"
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#0f1f4b] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Подписка на новости</h3>
                    <p className="text-white/80 mb-4">Получайте новые статьи на вашу почту</p>
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      className="bg-[#0a1a40] border-[#0a1a40] text-white mb-4"
                    />
                    <Button className="w-full bg-[#4f46e5] hover:bg-[#4f46e5]/90">Подписаться</Button>
                  </div>
                </div>

                {/* Blog Posts */}
                <div className="lg:col-span-3">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">
                      {activeCategory === "all" ? "Все статьи" : categories.find((c) => c.id === activeCategory)?.name}
                    </h2>
                    <div className="text-white/60">Найдено статей: {filteredPosts.length}</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {filteredPosts.map((post, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-[#0f1f4b] rounded-lg overflow-hidden"
                      >
                        <div className="h-[200px] bg-[#0a1a40] flex items-center justify-center">
                          <p className="text-white/50">Изображение статьи</p>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center text-white/60 text-sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              {post.date}
                            </div>
                            <div className="flex items-center text-white/60 text-sm">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                          <p className="text-white/80 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-white/60 text-sm">
                              <Tag className="h-4 w-4 mr-1" />
                              {categories.find((c) => c.id === post.category)?.name}
                            </div>
                            <Button
                              variant="ghost"
                              className="text-[#4f46e5] hover:text-[#4f46e5]/90 p-0 flex items-center"
                            >
                              Читать
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {filteredPosts.length === 0 && (
                    <div className="bg-[#0f1f4b] rounded-lg p-8 text-center">
                      <p className="text-xl">По вашему запросу ничего не найдено</p>
                      <p className="text-white/60 mt-2">Попробуйте изменить параметры поиска</p>
                    </div>
                  )}

                  {filteredPosts.length > 0 && (
                    <div className="mt-8 flex justify-center">
                      <Button className="bg-[#4f46e5] hover:bg-[#4f46e5]/90">Загрузить еще статьи</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
