"use client"
import { useAppSelector } from "@/lib/redux/hooks"
import { selectLanguage } from "@/lib/redux/features/languageSlice"
import { useTranslation } from "@/lib/translations"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PricingCards from "@/components/pricing-cards"

export default function PricingPage() {
  const language = useAppSelector(selectLanguage)
  const t = useTranslation(language)

  return (
    <div className="min-h-screen bg-[#0a1a40] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="pt-36 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            {language === "ru" ? "Тарифы" : "Pricing"}
          </h1>

          <PricingCards />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
