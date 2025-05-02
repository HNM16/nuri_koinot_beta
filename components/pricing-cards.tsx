'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { togglePricingPeriod, selectPricingPeriod } from "@/lib/redux/features/pricingSlice"
import { useTranslation } from "@/lib/translations"
import { selectLanguage } from "@/lib/redux/features/languageSlice"

export default function PricingCards() {
  const dispatch = useAppDispatch()
  const isMonthly = useAppSelector(selectPricingPeriod)
  const language = useAppSelector(selectLanguage)
  const t = useTranslation(language)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const plans = [
    {
      name: "Базовый",
      priceMonthly: "1200 ₽",
      priceDaily: "50 ₽",
      features: ["2 vCPU", "4 GB RAM", "50 GB SSD", "1 TB трафик", "24/7 поддержка"],
    },
    {
      name: "Стандарт",
      priceMonthly: "2400 ₽",
      priceDaily: "100 ₽",
      features: ["4 vCPU", "8 GB RAM", "100 GB SSD", "2 TB трафик", "24/7 поддержка", "Резервное копирование"],
      popular: true,
    },
    {
      name: "Премиум",
      priceMonthly: "4800 ₽",
      priceDaily: "200 ₽",
      features: [
        "8 vCPU",
        "16 GB RAM",
        "200 GB SSD",
        "5 TB трафик",
        "24/7 приоритетная поддержка",
        "Резервное копирование",
        "Выделенный IP",
      ],
    },
  ]

  const handleOrderClick = (planName: string) => {
    setSelectedPlan(planName)
    setIsDialogOpen(true)
  }

  return (
    <div className="py-16 bg-[#0a1a40]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {language === "ru" ? "Тарифные планы" : "Pricing Plans"}
        </h2>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          {language === "ru"
            ? "Выберите оптимальный тарифный план для ваших задач с гибкой системой оплаты"
            : "Choose the optimal pricing plan for your needs with a flexible payment system"}
        </p>

        <div className="flex justify-center items-center gap-4 mb-12">
          <div className="relative inline-flex items-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`h-[2px] w-full bg-[#4f46e5]/30 rounded-full`}></div>
            </div>
            <div className="relative flex items-center justify-between w-[200px] px-4">
              <button
                onClick={() => dispatch(togglePricingPeriod())}
                className={`px-4 py-2 rounded-full transition-all ${
                  !isMonthly ? "text-white font-medium" : "text-white/50"
                }`}
              >
                {language === "ru" ? "День" : "Day"}
              </button>
              <div
                className={`w-10 h-6 bg-[#4f46e5] rounded-full p-1 cursor-pointer transition-all duration-300`}
                onClick={() => dispatch(togglePricingPeriod())}
              >
                <motion.div
                  className="w-4 h-4 bg-white rounded-full"
                  animate={{ x: isMonthly ? 16 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>
              <button
                onClick={() => dispatch(togglePricingPeriod())}
                className={`px-4 py-2 rounded-full transition-all ${
                  isMonthly ? "text-white font-medium" : "text-white/50"
                }`}
              >
                {language === "ru" ? "Месяц" : "Month"}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`bg-[#0f1f4b] rounded-lg p-6 h-full relative overflow-hidden ${
                  plan.popular ? "ring-2 ring-[#4f46e5]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-[#4f46e5] text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-[30%] translate-y-[-10%]">
                      {language === "ru" ? "Популярный" : "Popular"}
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMonthly ? "monthly" : "daily"}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="mb-6"
                  >
                    <span className="text-4xl font-bold">{isMonthly ? plan.priceMonthly : plan.priceDaily}</span>
                    <span className="text-white/70"> / {isMonthly ? "месяц" : "день"}</span>
                  </motion.div>
                </AnimatePresence>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
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
                        className="text-[#4f46e5]"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleOrderClick(plan.name)}
                  className="w-full bg-[#ff6b81] hover:bg-[#ff6b81]/90 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  {language === "ru" ? "Заказать" : "Order"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {isDialogOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#0f1f4b] rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-2">
                {language === "ru" ? `Заказ тарифа ${selectedPlan}` : `Order plan ${selectedPlan}`}
              </h3>
              <p className="text-white/70 mb-4">
                {language === "ru" ? "Заполните форму для оформления заказа" : "Fill out the form to place an order"}
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">{language === "ru" ? "Имя" : "Name"}</label>
                  <input
                    type="text"
                    className="w-full bg-[#0a1a40] border border-white/20 rounded-lg p-2.5 focus:outline-none focus:border-[#4f46e5]"
                    placeholder={language === "ru" ? "Введите имя" : "Enter your name"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#0a1a40] border border-white/20 rounded-lg p-2.5 focus:outline-none focus:border-[#4f46e5]"
                    placeholder={language === "ru" ? "Введите email" : "Enter your email"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === "ru" ? "Операционная система" : "Operating System"}
                  </label>
                  <select className="w-full bg-[#0a1a40] border border-white/20 rounded-lg p-2.5 focus:outline-none focus:border-[#4f46e5]">
                    <option value="ubuntu">Ubuntu 22.04</option>
                    <option value="debian">Debian 11</option>
                    <option value="centos">CentOS 8</option>
                    <option value="windows">Windows Server 2022</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === "ru" ? "Период оплаты" : "Payment Period"}
                  </label>
                  <select
                    className="w-full bg-[#0a1a40] border border-white/20 rounded-lg p-2.5 focus:outline-none focus:border-[#4f46e5]"
                    defaultValue={isMonthly ? "month" : "day"}
                  >
                    <option value="day">{language === "ru" ? "День" : "Day"}</option>
                    <option value="month">{language === "ru" ? "Месяц" : "Month"}</option>
                    <option value="3months">{language === "ru" ? "3 месяца (-5%)" : "3 months (-5%)"}</option>
                    <option value="year">{language === "ru" ? "Год (-10%)" : "Year (-10%)"}</option>
                  </select>
                </div>

                <div className="flex justify-end gap-2 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsDialogOpen(false)}
                    className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {language === "ru" ? "Отмена" : "Cancel"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      alert(
                        language === "ru"
                          ? `Заказ тарифа ${selectedPlan} успешно оформлен!`
                          : `Order for ${selectedPlan} plan successfully placed!`,
                      )
                      setIsDialogOpen(false)
                    }}
                    className="px-4 py-2 bg-[#ff6b81] hover:bg-[#ff6b81]/90 rounded-lg transition-colors"
                  >
                    {language === "ru" ? "Оформить заказ" : "Place Order"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
