"use client"
import { useAppSelector } from "@/lib/redux/hooks"
import { selectLanguage } from "@/lib/redux/features/languageSlice"
import { useTranslation } from "@/lib/translations"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RegisterPage() {
  const language = useAppSelector(selectLanguage)
  const t = useTranslation(language)

  return (
    <div className="min-h-screen bg-[#0a1a40] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="pt-36 pb-16">
        <div className="container mx-auto px-4 max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">{language === "ru" ? "Регистрация" : "Register"}</h1>

          <div className="bg-[#0f1f4b] rounded-lg p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">{language === "ru" ? "Имя" : "First Name"}</label>
                  <input
                    type="text"
                    className="w-full bg-[#0a1a40] border border-[#4f46e5]/30 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
                    placeholder={language === "ru" ? "Имя" : "First name"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === "ru" ? "Фамилия" : "Last Name"}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#0a1a40] border border-[#4f46e5]/30 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
                    placeholder={language === "ru" ? "Фамилия" : "Last name"}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">{language === "ru" ? "Email" : "Email"}</label>
                <input
                  type="email"
                  className="w-full bg-[#0a1a40] border border-[#4f46e5]/30 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
                  placeholder={language === "ru" ? "Введите email" : "Enter your email"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">{language === "ru" ? "Пароль" : "Password"}</label>
                <input
                  type="password"
                  className="w-full bg-[#0a1a40] border border-[#4f46e5]/30 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
                  placeholder={language === "ru" ? "Создайте пароль" : "Create a password"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  {language === "ru" ? "Подтвердите пароль" : "Confirm Password"}
                </label>
                <input
                  type="password"
                  className="w-full bg-[#0a1a40] border border-[#4f46e5]/30 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
                  placeholder={language === "ru" ? "Подтвердите пароль" : "Confirm your password"}
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" type="checkbox" className="w-4 h-4 accent-[#4f46e5]" />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm text-white/70">
                  {language === "ru"
                    ? "Я согласен с условиями и политикой конфиденциальности"
                    : "I agree to the terms and privacy policy"}
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4f46e5] hover:bg-[#4f46e5]/90 text-white py-3 rounded-lg font-medium transition-colors"
              >
                {language === "ru" ? "Зарегистрироваться" : "Register"}
              </button>
            </form>

            <div className="mt-4 text-center text-sm">
              <span className="text-white/70">
                {language === "ru" ? "Уже есть аккаунт?" : "Already have an account?"}
              </span>{" "}
              <a href="/login" className="text-[#4f46e5] hover:underline">
                {language === "ru" ? "Войти" : "Login"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
