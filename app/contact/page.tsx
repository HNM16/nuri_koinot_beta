'use client'

import type React from 'react'

import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Map, YMaps } from '@pbe/react-yandex-maps'
import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Navbar from '@/components/navbar'
import { selectLanguage } from '@/lib/redux/features/languageSlice'
import { useAppSelector } from '@/lib/redux/hooks'
import { useTranslation } from '@/lib/translations'

export default function ContactPage() {
	const language = useAppSelector(selectLanguage)
	const t = useTranslation(language)

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Here you would handle the form submission
		alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.')
		setFormData({ name: '', email: '', subject: '', message: '' })
	}

	const contactInfo = [
		{
			icon: <MapPin className='h-6 w-6 text-[#4f46e5]' />,
			title: 'Адрес',
			details: [
				'г. Москва, ул. Ленина, 123',
				'Бизнес-центр «Технополис», офис 456',
			],
		},
		{
			icon: <Phone className='h-6 w-6 text-[#4f46e5]' />,
			title: 'Телефон',
			details: ['+7 (495) 123-45-67', '+7 (495) 765-43-21'],
		},
		{
			icon: <Mail className='h-6 w-6 text-[#4f46e5]' />,
			title: 'Email',
			details: ['info@nurikoinot.ru', 'support@nurikoinot.ru'],
		},
		{
			icon: <Clock className='h-6 w-6 text-[#4f46e5]' />,
			title: 'Режим работы',
			details: ['Пн-Пт: 9:00 - 18:00', 'Сб-Вс: выходной'],
		},
	]

	const faqItems = [
		{
			question: 'Как быстро будет создан мой сервер?',
			answer:
				'Создание сервера происходит автоматически и занимает не более 5 минут после оплаты.',
		},
		{
			question: 'Какие способы оплаты вы принимаете?',
			answer:
				'Мы принимаем оплату банковскими картами, электронными деньгами, через банковский перевод и криптовалютой.',
		},
		{
			question: 'Есть ли у вас тестовый период?',
			answer:
				'Да, мы предоставляем тестовый период на 3 дня для всех тарифных планов.',
		},
		{
			question: 'Как получить техническую поддержку?',
			answer:
				'Вы можете обратиться в техническую поддержку через личный кабинет, по электронной почте или по телефону.',
		},
	]

	return (
		<div className='min-h-screen bg-[#0a1a40] text-white'>
			{/* Navbar */}
			<Navbar />

			{/* Content */}
			<div className='pt-36 pb-16'>
				<div className='container mx-auto px-4'>
					<h1 className='text-4xl md:text-5xl font-bold text-center mb-8'>
						{language === 'ru' ? 'Контакты' : 'Contact Us'}
					</h1>

					{/* Hero Section */}
					<div className='pb-10 bg-gradient-to-b from-[#0a1a40] to-[#0f1f4b] relative overflow-hidden'>
						<div className='container mx-auto px-4'>
							<div className='max-w-3xl mx-auto text-center'>
								<h1 className='text-4xl md:text-5xl font-bold mb-6'>
									Свяжитесь с нами
								</h1>
								<p className='text-xl text-white/80 mb-8'>
									Мы всегда готовы ответить на ваши вопросы и помочь с выбором
									оптимального решения
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
								className='mt-12 overflow-visible'
							>
								{faqItems.map((item, index) => (
									<SwiperSlide key={index}>
										<div className='bg-[#0f1f4b] rounded-lg p-8'>
											<h3 className='text-xl md:text-2xl font-bold mb-4'>
												{item.question}
											</h3>
											<p className='text-white/80'>{item.answer}</p>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>

						{/* Background elements */}
						<div className='absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-[#4f46e5]/20 blur-3xl'></div>
						<div className='absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-[#4f46e5]/10 blur-3xl'></div>
					</div>

					{/* Contact Info & Form Section */}
					<div className='py-16 bg-[#0a1a40]'>
						<div className='container mx-auto px-4'>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
								<div>
									<h2 className='text-3xl font-bold mb-8'>
										Контактная информация
									</h2>

									<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
										{contactInfo.map((info, index) => (
											<motion.div
												key={index}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.3, delay: index * 0.1 }}
												className='bg-[#0f1f4b] p-6 rounded-lg'
											>
												<div className='flex items-center gap-3 mb-3'>
													{info.icon}
													<h3 className='text-lg font-semibold'>
														{info.title}
													</h3>
												</div>
												<div className='space-y-1'>
													{info.details.map((detail, i) => (
														<p key={i} className='text-white/80'>
															{detail}
														</p>
													))}
												</div>
											</motion.div>
										))}
									</div>

									<div className='mt-8 bg-[#0f1f4b] p-6 rounded-lg'>
										<h3 className='text-xl font-bold mb-4'>
											Мы в социальных сетях
										</h3>
										<div className='flex gap-4'>
											<a
												href='#'
												className='bg-[#4f46e5]/10 p-3 rounded-full hover:bg-[#4f46e5]/20 transition-colors'
											>
												<svg
													className='w-6 h-6 text-[#4f46e5]'
													fill='currentColor'
													viewBox='0 0 24 24'
													aria-hidden='true'
												>
													<path
														fillRule='evenodd'
														d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
														clipRule='evenodd'
													></path>
												</svg>
											</a>
											<a
												href='#'
												className='bg-[#4f46e5]/10 p-3 rounded-full hover:bg-[#4f46e5]/20 transition-colors'
											>
												<svg
													className='w-6 h-6 text-[#4f46e5]'
													fill='currentColor'
													viewBox='0 0 24 24'
													aria-hidden='true'
												>
													<path
														fillRule='evenodd'
														d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
														clipRule='evenodd'
													></path>
												</svg>
											</a>
											<a
												href='#'
												className='bg-[#4f46e5]/10 p-3 rounded-full hover:bg-[#4f46e5]/20 transition-colors'
											>
												<svg
													className='w-6 h-6 text-[#4f46e5]'
													fill='currentColor'
													viewBox='0 0 24 24'
													aria-hidden='true'
												>
													<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'></path>
												</svg>
											</a>
											<a
												href='#'
												className='bg-[#4f46e5]/10 p-3 rounded-full hover:bg-[#4f46e5]/20 transition-colors'
											>
												<svg
													className='w-6 h-6 text-[#4f46e5]'
													fill='currentColor'
													viewBox='0 0 24 24'
													aria-hidden='true'
												>
													<path
														fillRule='evenodd'
														d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
														clipRule='evenodd'
													></path>
												</svg>
											</a>
										</div>
									</div>
								</div>

								<div>
									<h2 className='text-3xl font-bold mb-8'>
										Отправьте нам сообщение
									</h2>

									<form
										onSubmit={handleSubmit}
										className='bg-[#0f1f4b] p-6 rounded-lg'
									>
										<div className='space-y-4'>
											<div>
												<label
													htmlFor='name'
													className='block text-sm font-medium mb-2'
												>
													Ваше имя
												</label>
												<Input
													id='name'
													name='name'
													value={formData.name}
													onChange={handleChange}
													className='bg-[#0a1a40] border-[#0a1a40] border-[1px] border-solid text-white'
													placeholder='Введите ваше имя'
													required
												/>
											</div>

											<div>
												<label
													htmlFor='email'
													className='block text-sm font-medium mb-2'
												>
													Email
												</label>
												<Input
													id='email'
													name='email'
													type='email'
													value={formData.email}
													onChange={handleChange}
													className='bg-[#0a1a40] border-[#0a1a40] border-[1px] border-solid text-white'
													placeholder='Введите ваш email'
													required
												/>
											</div>

											<div>
												<label
													htmlFor='subject'
													className='block text-sm font-medium mb-2'
												>
													Тема
												</label>
												<Select>
													<SelectTrigger className='bg-[#0a1a40] border-[#0a1a40] border-[1px] border-solid text-white'>
														<SelectValue placeholder='Выберите тему обращения' />
													</SelectTrigger>
													<SelectContent className='bg-[#0f1f4b] border-[#0a1a40] border-[1px] border-solid'>
														<SelectItem value='general'>
															Общий вопрос
														</SelectItem>
														<SelectItem value='technical'>
															Техническая поддержка
														</SelectItem>
														<SelectItem value='billing'>
															Вопросы оплаты
														</SelectItem>
														<SelectItem value='partnership'>
															Сотрудничество
														</SelectItem>
													</SelectContent>
												</Select>
											</div>

											<div>
												<label
													htmlFor='message'
													className='block text-sm font-medium mb-2'
												>
													Сообщение
												</label>
												<Textarea
													id='message'
													name='message'
													value={formData.message}
													onChange={handleChange}
													className='bg-[#0a1a40] border-[#0a1a40] border-[1px] border-solid text-white min-h-[150px]'
													placeholder='Введите ваше сообщение'
													required
												/>
											</div>

											<Button
												type='submit'
												className='w-full bg-[#4f46e5] hover:bg-[#4f46e5]/90'
											>
												Отправить сообщение
											</Button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

					{/* Map Section */}
					<div className='py-16 bg-[#0f1f4b]'>
						<div className='container mx-auto px-4'>
							<h2 className='text-3xl font-bold text-center mb-8'>
								Наш офис на карте
							</h2>

              <div className="h-[400px] rounded-lg overflow-hidden">
  <YMaps>
    <Map 
      defaultState={{ center: [38.563697, 68.758866], zoom: 15 }} 
      width="100%" 
      height="100%" 
    />
  </YMaps>
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
