"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAppSelector } from "@/lib/redux/hooks"
import { selectLanguage } from "@/lib/redux/features/languageSlice"
import { useTranslation } from "@/lib/translations"

export default function Servers() {
  const language = useAppSelector(selectLanguage)
  const t = useTranslation(language)
  const [activeTab, setActiveTab] = useState(0)

  const serverTypes = [
    {
      icon: "cloud",
      label: language === "ru" ? "ОБЛАЧНЫЕ СЕРВЕРЫ" : "CLOUD SERVERS",
      content: {
        title: language === "ru" ? "Облачные серверы" : "Cloud Servers",
        description:
          language === "ru"
            ? "Виртуальные серверы с гибкой конфигурацией и быстрым развертыванием. Идеально подходят для веб-приложений, баз данных и тестовых сред."
            : "Virtual servers with flexible configuration and rapid deployment. Perfect for web applications, databases, and test environments.",
        specs: [
          {
            name: "CPU",
            value: language === "ru" ? "от 1 до 32 vCPU" : "from 1 to 32 vCPU",
          },
          {
            name: "RAM",
            value: language === "ru" ? "от 1 до 128 GB" : "from 1 to 128 GB",
          },
          {
            name: language === "ru" ? "Диск" : "Disk",
            value: language === "ru" ? "от 10 до 2000 GB SSD" : "from 10 to 2000 GB SSD",
          },
          {
            name: language === "ru" ? "Сеть" : "Network",
            value: "1 Gbit/s",
          },
        ],
        features:
          language === "ru"
            ? [
                "Мгновенное развертывание",
                "Гибкая масштабируемость",
                "Оплата по факту использования",
                "Автоматическое резервное копирование",
                "Защита от DDoS-атак",
              ]
            : ["Instant deployment", "Flexible scalability", "Pay-as-you-go", "Automatic backup", "DDoS protection"],
      },
    },
    {
      icon: "server",
      label: language === "ru" ? "СТАНДАРТНЫЕ СЕРВЕРЫ" : "STANDARD SERVERS",
      content: {
        title: language === "ru" ? "Стандартные серверы" : "Standard Servers",
        description:
          language === "ru"
            ? "Оптимальное соотношение цены и производительности для большинства задач. Подходят для корпоративных приложений и сайтов с высокой посещаемостью."
            : "Optimal price-performance ratio for most tasks. Suitable for corporate applications and high-traffic websites.",
        specs: [
          { name: "CPU", value: "4-8 vCPU" },
          { name: "RAM", value: "8-16 GB" },
          {
            name: language === "ru" ? "Диск" : "Disk",
            value: "100-500 GB SSD",
          },
          {
            name: language === "ru" ? "Сеть" : "Network",
            value: "1 Gbit/s",
          },
        ],
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
    },
    {
      icon: "cpu",
      label: language === "ru" ? "HI-CPU СЕРВЕРЫ" : "HI-CPU SERVERS",
      content: {
        title: language === "ru" ? "Hi-CPU серверы" : "Hi-CPU Servers",
        description:
          language === "ru"
            ? "Высокопроизводительные серверы для ресурсоемких задач. Оптимальны для обработки больших объемов данных, машинного обучения и аналитики."
            : "High-performance servers for resource-intensive tasks. Optimal for processing large volumes of data, machine learning, and analytics.",
        specs: [
          { name: "CPU", value: "8-64 vCPU" },
          { name: "RAM", value: "16-256 GB" },
          {
            name: language === "ru" ? "Диск" : "Disk",
            value: "200-2000 GB SSD",
          },
          {
            name: language === "ru" ? "Сеть" : "Network",
            value: "10 Gbit/s",
          },
        ],
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
    },
    {
      icon: "shield",
      label: language === "ru" ? "ВЫДЕЛЕННЫЕ СЕРВЕРЫ" : "DEDICATED SERVERS",
      content: {
        title: language === "ru" ? "Выделенные серверы" : "Dedicated Servers",
        description:
          language === "ru"
            ? "Физические серверы с эксклюзивным доступом к ресурсам. Максимальная производительность и безопасность для критически важных приложений."
            : "Physical servers with exclusive access to resources. Maximum performance and security for mission-critical applications.",
        specs: [
          { name: "CPU", value: "Intel Xeon / AMD EPYC" },
          { name: "RAM", value: "32-512 GB" },
          {
            name: language === "ru" ? "Диск" : "Disk",
            value: language === "ru" ? "RAID массивы до 24 TB" : "RAID arrays up to 24 TB",
          },
          {
            name: language === "ru" ? "Сеть" : "Network",
            value: "10 Gbit/s",
          },
        ],
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
    },
  ]

  return (
    <div className="py-16 bg-[#0f1f4b]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {language === "ru" ? "Выберите тип сервера" : "Choose Server Type"}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {serverTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative flex flex-col items-center justify-center px-6 py-4 rounded-full border-2 transition-all duration-300 ${
                activeTab === index
                  ? "border-[#4f46e5] bg-[#4f46e5]/10"
                  : "border-white/10 hover:border-white/30 bg-transparent"
              }`}
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={activeTab === index ? "text-[#4f46e5]" : "text-white/70"}
                >
                  {type.icon === "cloud" && <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>}
                  {type.icon === "server" && (
                    <>
                      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                      <line x1="6" x2="6" y1="6" y2="6"></line>
                      <line x1="6" x2="6" y1="18" y2="18"></line>
                    </>
                  )}
                  {type.icon === "cpu" && (
                    <>
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <line x1="9" y1="2" x2="9" y2="4"></line>
                      <line x1="15" y1="2" x2="15" y2="4"></line>
                      <line x1="9" y1="20" x2="9" y2="22"></line>
                      <line x1="15" y1="20" x2="15" y2="22"></line>
                      <line x1="20" y1="9" x2="22" y2="9"></line>
                      <line x1="20" y1="14" x2="22" y2="14"></line>
                      <line x1="2" y1="9" x2="4" y2="9"></line>
                      <line x1="2" y1="14" x2="4" y2="14"></line>
                    </>
                  )}
                  {type.icon === "shield" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>}
                </svg>
                <span className="font-medium text-sm">{type.label}</span>
              </div>
              {activeTab === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-[#4f46e5]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0a1a40] rounded-lg p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#4f46e5]/20 p-2 rounded-lg">
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
                  {serverTypes[activeTab].icon === "cloud" && (
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                  )}
                  {serverTypes[activeTab].icon === "server" && (
                    <>
                      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                      <line x1="6" x2="6" y1="6" y2="6"></line>
                      <line x1="6" x2="6" y1="18" y2="18"></line>
                    </>
                  )}
                  {serverTypes[activeTab].icon === "cpu" && (
                    <>
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <line x1="9" y1="2" x2="9" y2="4"></line>
                      <line x1="15" y1="2" x2="15" y2="4"></line>
                      <line x1="9" y1="20" x2="9" y2="22"></line>
                      <line x1="15" y1="20" x2="15" y2="22"></line>
                      <line x1="20" y1="9" x2="22" y2="9"></line>
                      <line x1="20" y1="14" x2="22" y2="14"></line>
                      <line x1="2" y1="9" x2="4" y2="9"></line>
                      <line x1="2" y1="14" x2="4" y2="14"></line>
                    </>
                  )}
                  {serverTypes[activeTab].icon === "shield" && (
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  )}
                </svg>
              </div>
              <h3 className="text-xl font-bold">{serverTypes[activeTab].content.title}</h3>
            </div>

            <p className="text-white/70 mb-8">{serverTypes[activeTab].content.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {language === "ru" ? "Характеристики" : "Specifications"}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {serverTypes[activeTab].content.specs.map((spec, i) => (
                    <div key={i} className="bg-[#0f1f4b] p-4 rounded-lg">
                      <div className="text-white/60 text-sm mb-1">{spec.name}</div>
                      <div className="font-medium">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">{language === "ru" ? "Преимущества" : "Benefits"}</h4>
                <ul className="space-y-2">
                  {serverTypes[activeTab].content.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#4f46e5] mt-0.5 flex-shrink-0"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-[#4f46e5] hover:bg-[#4f46e5]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                {language === "ru" ? "Заказать сервер" : "Order Server"}
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                {language === "ru" ? "Подробнее о тарифах" : "More About Pricing"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
