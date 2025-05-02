"use client"

import { useState } from "react"
import { Shield, Globe, Gauge, Server, HeadsetIcon as HeadsetMic, Plus } from "lucide-react"
import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-[#4f46e5]" />,
      title: "Приватные сети",
      description: "Маршрутизация и фильтрация трафика, VPN.",
      details:
        "Создавайте изолированные приватные сети для ваших серверов. Настраивайте маршрутизацию и фильтрацию трафика по вашим требованиям. Поддержка OpenVPN и WireGuard для безопасного удаленного доступа.",
    },
    {
      icon: <Globe className="h-10 w-10 text-[#4f46e5]" />,
      title: "Статические внешние адреса",
      description: "IPv4 и IPv6.",
      details:
        "Получите выделенные статические IP-адреса для ваших серверов. Поддержка как IPv4, так и IPv6. Возможность заказа дополнительных IP-адресов при необходимости.",
    },
    {
      icon: <Gauge className="h-10 w-10 text-[#4f46e5]" />,
      title: "Скорость 1000 Мбит/сек",
      description: "Локальная сеть 10 Гбит.",
      details:
        "Каждый сервер подключен к внешнему каналу со скоростью 1000 Мбит/сек. Внутренняя локальная сеть работает на скорости 10 Гбит/сек для быстрого обмена данными между вашими серверами.",
    },
    {
      icon: <Server className="h-10 w-10 text-[#4f46e5]" />,
      title: "Дата-центр DataPro",
      description: "Защита от DDoS-атак.",
      details:
        "Размещаем серверы в надежном дата-центре DataPro уровня Tier III. Автоматическая защита от DDoS-атак включена в стоимость всех тарифных планов. Гарантированное время доступности 99.982%.",
    },
    {
      icon: <HeadsetMic className="h-10 w-10 text-[#4f46e5]" />,
      title: "Техническая поддержка 24/7",
      description: "Русскоязычная документация.",
      details:
        "Наша команда технических специалистов доступна круглосуточно и без выходных. Подробная русскоязычная документация по всем аспектам работы с нашими серверами. Среднее время ответа на запрос - 15 минут.",
    },
  ]

  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center bg-white/5 p-6 rounded-lg cursor-pointer"
          whileHover={{ scale: 1.03 }}
          onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
        >
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-white font-medium mb-2">{feature.title}</h3>
          <p className="text-white/70 text-sm">{feature.description}</p>

          {expandedFeature === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 pt-4 border-t border-white/10"
            >
              <p className="text-white/80 text-sm text-left">{feature.details}</p>
            </motion.div>
          )}

          <button className="mt-4 text-[#4f46e5] text-sm flex items-center gap-1">
            {expandedFeature === index ? "Скрыть детали" : "Подробнее"}
            <Plus className={`h-3 w-3 transition-transform ${expandedFeature === index ? "rotate-45" : ""}`} />
          </button>
        </motion.div>
      ))}
    </div>
  )
}
