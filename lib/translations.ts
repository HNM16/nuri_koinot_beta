type TranslationKey =
  | "common.login"
  | "common.register"
  | "common.logout"
  | "common.home"
  | "common.about"
  | "common.services"
  | "common.pricing"
  | "common.blog"
  | "common.contact"
  | "common.faq"
  | "common.terms"
  | "common.privacy"
  | "common.language"
  | "common.orderNow"
  | "common.getConsultation"
  | "common.orderHosting"
  | "common.orderServer"
  | "common.learnMore"
  | "home.title"
  | "home.subtitle"
  | "home.heroTitle"
  | "home.heroSubtitle"
  | "home.cloudServers"
  | "home.standardServers"
  | "home.hiCpuServers"
  | "home.dedicatedServers"
  | "home.chooseServerType"
  | "home.cloudConfigurator"
  | "home.configureServer"
  | "home.yourConfiguration"
  | "home.pricing"
  | "home.monthlyCost"
  | "home.dailyCost"
  | "home.setupFee"
  | "home.total"
  | "home.orderServer"
  | "home.getConsultation"

type Translations = {
  [key in TranslationKey]: {
    ru: string
    en: string
  }
}

export const translations: Translations = {
  "common.login": {
    ru: "Вход",
    en: "Login",
  },
  "common.register": {
    ru: "Регистрация",
    en: "Register",
  },
  "common.logout": {
    ru: "Выход",
    en: "Logout",
  },
  "common.home": {
    ru: "Главная",
    en: "Home",
  },
  "common.about": {
    ru: "О нас",
    en: "About",
  },
  "common.services": {
    ru: "Услуги",
    en: "Services",
  },
  "common.pricing": {
    ru: "Тарифы",
    en: "Pricing",
  },
  "common.blog": {
    ru: "Блог",
    en: "Blog",
  },
  "common.contact": {
    ru: "Контакты",
    en: "Contact",
  },
  "common.faq": {
    ru: "FAQ",
    en: "FAQ",
  },
  "common.terms": {
    ru: "Условия использования",
    en: "Terms of Service",
  },
  "common.privacy": {
    ru: "Политика конфиденциальности",
    en: "Privacy Policy",
  },
  "common.language": {
    ru: "Язык",
    en: "Language",
  },
  "common.orderNow": {
    ru: "Заказать сейчас",
    en: "Order Now",
  },
  "common.getConsultation": {
    ru: "Получить консультацию",
    en: "Get Consultation",
  },
  "common.orderHosting": {
    ru: "Заказать хостинг",
    en: "Order Hosting",
  },
  "common.orderServer": {
    ru: "Заказать сервер",
    en: "Order Server",
  },
  "common.learnMore": {
    ru: "Узнать больше",
    en: "Learn More",
  },
  "home.title": {
    ru: "Нури Койнот - Облачные серверы",
    en: "Nuri Koinot - Cloud Servers",
  },
  "home.subtitle": {
    ru: "Хостинг облачных серверов нового поколения",
    en: "Next generation cloud server hosting",
  },
  "home.heroTitle": {
    ru: "Облачные серверы нового поколения",
    en: "Next Generation Cloud Servers",
  },
  "home.heroSubtitle": {
    ru: "Размещаем в лучшем дата-центре DataPro, каждый облачный сервер подключен к каналу 1000 Мбит/сек, защита от DDoS-атак включена в стоимость.",
    en: "Hosted in the best DataPro data center, each cloud server is connected to a 1000 Mbps channel, DDoS protection is included in the price.",
  },
  "home.cloudServers": {
    ru: "Облачные серверы",
    en: "Cloud Servers",
  },
  "home.standardServers": {
    ru: "Стандартные серверы",
    en: "Standard Servers",
  },
  "home.hiCpuServers": {
    ru: "Hi-CPU серверы",
    en: "Hi-CPU Servers",
  },
  "home.dedicatedServers": {
    ru: "Выделенные серверы",
    en: "Dedicated Servers",
  },
  "home.chooseServerType": {
    ru: "Выберите тип сервера",
    en: "Choose Server Type",
  },
  "home.cloudConfigurator": {
    ru: "Конфигуратор облачного сервера",
    en: "Cloud Server Configurator",
  },
  "home.configureServer": {
    ru: "Настройте параметры вашего сервера",
    en: "Configure your server parameters",
  },
  "home.yourConfiguration": {
    ru: "Ваша конфигурация",
    en: "Your Configuration",
  },
  "home.pricing": {
    ru: "Стоимость",
    en: "Pricing",
  },
  "home.monthlyCost": {
    ru: "Ежемесячная плата",
    en: "Monthly Cost",
  },
  "home.dailyCost": {
    ru: "Ежедневная плата",
    en: "Daily Cost",
  },
  "home.setupFee": {
    ru: "Плата за установку",
    en: "Setup Fee",
  },
  "home.total": {
    ru: "Итого",
    en: "Total",
  },
  "home.orderServer": {
    ru: "Заказать сервер",
    en: "Order Server",
  },
  "home.getConsultation": {
    ru: "Получить консультацию",
    en: "Get Consultation",
  },
}

export const useTranslation = (language: "ru" | "en") => {
  return (key: TranslationKey): string => {
    return translations[key]?.[language] || key
  }
}
