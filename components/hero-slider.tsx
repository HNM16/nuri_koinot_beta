"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HeroSlider() {
  const slides = [
    {
      title: "Облачные серверы нового поколения на базе AMD EPYC и Intel Gold",
      description:
        "Размещаем в лучшем дата-центре DataPro, каждый облачный сервер подключен к каналу 1000 Мбит/сек, защита от DDoS-атак включена в стоимость.",
      image: "/server-illustration.png",
    },
    {
      title: "Высокопроизводительные серверы для любых задач",
      description: "Идеальное решение для веб-приложений, баз данных, игровых серверов и высоконагруженных проектов.",
      image: "/server-illustration2.png",
    },
    {
      title: "Гибкая масштабируемость и мгновенное развертывание",
      description: "Увеличивайте мощность по мере роста вашего проекта. Разверните новый сервер за считанные минуты.",
      image: "/server-illustration3.png",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 space-y-6">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{slide.title}</h2>
                  <p className="text-white/80">{slide.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-[#4f46e5] hover:bg-[#4f46e5]/90 text-white">Заказать хостинг</Button>
                    <Button variant="outline" className="text-white border-white hover:bg-white/10">
                      Получить консультацию
                    </Button>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt="Cloud Servers"
                    width={500}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        className="absolute left-0 top-1/2 -translate-y-1/2 text-white h-12 w-12 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        className="absolute right-0 top-1/2 -translate-y-1/2 text-white h-12 w-12 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              currentSlide === index ? "bg-[#4f46e5]" : "bg-white/50",
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
