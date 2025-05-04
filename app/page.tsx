'use client'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import PricingCards from '@/components/pricing-cards'
import Servers from '@/components/servers'
import { selectLanguage, setLanguage } from '@/lib/redux/features/languageSlice'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { useTranslation } from '@/lib/translations'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image';
import Cloud from '@/public/cloudServer.png'
import Building from "@/public/ServerBuilding.png"
import ServerPerson from "@/public/personwithserver.png"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Home() {
	const [scrolled, setScrolled] = useState(false)
	const language = useAppSelector(selectLanguage)
	const dispatch = useAppDispatch()
	const t = useTranslation(language)

	// Server configuration state
	const [config, setConfig] = useState({
		cpu: 2,
		ram: 4,
		storage: 50,
		traffic: 1,
	})

	// Calculate price based on configuration
	const price = {
		monthly:
			Math.round(
				(config.cpu * 300 +
					config.ram * 150 +
					config.storage * 3 +
					config.traffic * 200) *
					100
			) / 100,
		daily:
			Math.round(
				((config.cpu * 300 +
					config.ram * 150 +
					config.storage * 3 +
					config.traffic * 200) /
					30) *
					100
			) / 100,
		setup: 0,
		total:
			Math.round(
				(config.cpu * 300 +
					config.ram * 150 +
					config.storage * 3 +
					config.traffic * 200) *
					100
			) / 100,
	}

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const toggleLanguage = () => {
		dispatch(setLanguage(language === 'ru' ? 'en' : 'ru'))
	}

	const handleCpuChange = (event: Event, newValue: number | number[]) => {
		setConfig({ ...config, cpu: newValue as number })
	}

	const handleRamChange = (event: Event, newValue: number | number[]) => {
		setConfig({ ...config, ram: newValue as number })
	}

	const handleStorageChange = (event: Event, newValue: number | number[]) => {
		setConfig({ ...config, storage: newValue as number })
	}

	const handleTrafficChange = (event: Event, newValue: number | number[]) => {
		setConfig({ ...config, traffic: newValue as number })
	}

	const slides = [
		{
			title:
				language === 'ru'
					? 'Облачные серверы нового поколения на базе AMD EPYC и Intel Gold'
					: 'Next generation cloud servers based on AMD EPYC and Intel Gold',
			description:
				language === 'ru'
					? 'Размещаем в лучшем московском дата-центре DataPro, каждый облачный сервер подключен к каналу 1000 Мбит/сек, защита от DDoS-атак включена в стоимость.'
					: 'Hosted in the best Moscow data center DataPro, each cloud server is connected to a 1000 Mbps channel, DDoS protection is included in the price.',
			image: Cloud, 
		},
		{
			title:
				language === 'ru'
					? 'Высокопроизводительные серверы для любых задач'
					: 'High-performance servers for any task',
			description:
				language === 'ru'
					? 'Идеальное решение для веб-приложений, баз данных, игровых серверов и высоконагруженных проектов.'
					: 'Perfect solution for web applications, databases, game servers and high-load projects.',
			image: Building,
		},
		{
			title:
				language === 'ru'
					? 'Гибкая масштабируемость и мгновенное развертывание'
					: 'Flexible scalability and instant deployment',
			description:
				language === 'ru'
					? 'Увеличивайте мощность по мере роста вашего проекта. Разверните новый сервер за считанные минуты.'
					: 'Increase power as your project grows. Deploy a new server in minutes.',
			image: ServerPerson,
		},
	]

	const features = [
		{
			title: language === 'ru' ? 'Приватные сети' : 'Private Networks',
			description:
				language === 'ru'
					? 'Маршрутизация и фильтрация трафика, VPN.'
					: 'Traffic routing and filtering, VPN.',
			icon: 'shield',
		},
		{
			title:
				language === 'ru'
					? 'Статические внешние адреса'
					: 'Static External Addresses',
			description: language === 'ru' ? 'IPv4 и IPv6.' : 'IPv4 and IPv6.',
			icon: 'globe',
		},
		{
			title: language === 'ru' ? 'Скорость 1000 Мбит/сек' : '1000 Mbps Speed',
			description:
				language === 'ru'
					? 'Локальная сеть 10 Гбит.'
					: '10 Gbps local network.',
			icon: 'zap',
		},
		{
			title: language === 'ru' ? 'Дата-центр DataPro' : 'DataPro Data Center',
			description:
				language === 'ru' ? 'Защита от DDoS-атак.' : 'DDoS protection.',
			icon: 'database',
		},
		{
			title:
				language === 'ru'
					? 'Техническая поддержка 24/7'
					: '24/7 Technical Support',
			description:
				language === 'ru'
					? 'Русскоязычная документация.'
					: 'Russian documentation.',
			icon: 'headphones',
		},
	]

	return (
		<div className='min-h-screen bg-[#0a1a40] text-white'>
			{/* Navbar */}
			<Navbar />

			{/* Hero Section with Swiper */}
			<div className='pt-40 pb-20 bg-gradient-to-b from-[#0a1a40] to-[#0f1f4b] relative overflow-hidden'>
				<div className='container mx-auto px-4'>
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
						className='overflow-visible'
					>
						{slides.map((slide, index) => (
							<SwiperSlide key={index}>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5 }}
									>
										<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
											{slide.title}
										</h1>
										<p className='text-white/80 text-lg mb-8'>
											{slide.description}
										</p>
										<div className='flex flex-wrap gap-4'>
											<button className='bg-[#4f46e5] hover:bg-[#4f46e5]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors'>
												{language === 'ru' ? 'Создать сервер' : 'Create Server'}
											</button>
											<button className='border border-white/20 border-solid hover:border-white/40 text-white px-6 py-3 rounded-lg font-medium transition-colors'>
												{language === 'ru' ? 'Узнать больше' : 'Learn More'}
											</button>
										</div>
									</motion.div>
									<div className='relative h-[300px] md:h-[400px]'>
										{/* Placeholder for server illustration */}
										<div className='w-full h-full  flex items-center justify-center'>
                    <Image 
                    src={slide.image}
                     alt={slide.title}
                     width={400}
                     height={500}
                      />
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Background elements */}
				<div className='absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-[#4f46e5]/20 blur-3xl'></div>
				<div className='absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-[#4f46e5]/10 blur-3xl'></div>
			</div>

			{/* Server Types Section */}
			<Servers />

			{/* Cloud Configurator Section */}
			<div className='py-16 bg-[#0a1a40]'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
						{language === 'ru'
							? 'Конфигуратор облачного сервера'
							: 'Cloud Server Configurator'}
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
						<div className='md:col-span-7'>
							<div className='bg-[#0f1f4b] rounded-lg p-6'>
								<h3 className='text-xl font-bold mb-6'>
									{language === 'ru'
										? 'Настройте параметры вашего сервера'
										: 'Configure your server parameters'}
								</h3>

								<div className='space-y-8'>
									<div>
										<div className='flex items-center justify-between mb-2'>
											<div className='flex items-center gap-2'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='20'
													height='20'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
													className='text-[#4f46e5]'
												>
													<rect
														x='4'
														y='4'
														width='16'
														height='16'
														rx='2'
														ry='2'
													></rect>
													<rect x='9' y='9' width='6' height='6'></rect>
													<line x1='9' y1='2' x2='9' y2='4'></line>
													<line x1='15' y1='2' x2='15' y2='4'></line>
													<line x1='9' y1='20' x2='9' y2='22'></line>
													<line x1='15' y1='20' x2='15' y2='22'></line>
													<line x1='20' y1='9' x2='22' y2='9'></line>
													<line x1='20' y1='14' x2='22' y2='14'></line>
													<line x1='2' y1='9' x2='4' y2='9'></line>
													<line x1='2' y1='14' x2='4' y2='14'></line>
												</svg>
												<span>
													{language === 'ru'
														? 'Процессор (vCPU):'
														: 'Processor (vCPU):'}
												</span>
											</div>
											<span className='font-bold'>{config.cpu} vCPU</span>
										</div>
										<div className='relative h-2 bg-[#0a1a40] rounded-full'>
											<input
												type='range'
												min='1'
												max='32'
												step='1'
												value={config.cpu}
												onChange={e =>
													setConfig({
														...config,
														cpu: Number.parseInt(e.target.value),
													})
												}
												className='absolute w-full h-full opacity-0 cursor-pointer'
											/>
											<div
												className='absolute h-full bg-[#4f46e5] rounded-full'
												style={{ width: `${(config.cpu / 32) * 100}%` }}
											></div>
										</div>
										<div className='flex justify-between mt-1 text-xs text-white/50'>
											<span>1</span>
											<span>8</span>
											<span>16</span>
											<span>24</span>
											<span>32</span>
										</div>
									</div>

									<div>
										<div className='flex items-center justify-between mb-2'>
											<div className='flex items-center gap-2'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='20'
													height='20'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
													className='text-[#4f46e5]'
												>
													<path d='M6 19v-3'></path>
													<path d='M10 19v-3'></path>
													<path d='M14 19v-3'></path>
													<path d='M18 19v-3'></path>
													<path d='M8 11V9'></path>
													<path d='M16 11V9'></path>
													<path d='M12 11V9'></path>
													<path d='M2 15h20'></path>
													<path d='M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.8V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.8V7z'></path>
												</svg>
												<span>
													{language === 'ru' ? 'Оперативная память:' : 'RAM:'}
												</span>
											</div>
											<span className='font-bold'>{config.ram} GB</span>
										</div>
										<div className='relative h-2 bg-[#0a1a40] rounded-full'>
											<input
												type='range'
												min='1'
												max='128'
												step='1'
												value={config.ram}
												onChange={e =>
													setConfig({
														...config,
														ram: Number.parseInt(e.target.value),
													})
												}
												className='absolute w-full h-full opacity-0 cursor-pointer'
											/>
											<div
												className='absolute h-full bg-[#4f46e5] rounded-full'
												style={{ width: `${(config.ram / 128) * 100}%` }}
											></div>
										</div>
										<div className='flex justify-between mt-1 text-xs text-white/50'>
											<span>1</span>
											<span>32</span>
											<span>64</span>
											<span>96</span>
											<span>128</span>
										</div>
									</div>

									<div>
										<div className='flex items-center justify-between mb-2'>
											<div className='flex items-center gap-2'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='20'
													height='20'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
													className='text-[#4f46e5]'
												>
													<path d='M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5z'></path>
													<path d='M7 7h10'></path>
													<path d='M7 12h10'></path>
													<path d='M7 17h10'></path>
												</svg>
												<span>
													{language === 'ru'
														? 'Дисковое пространство:'
														: 'Disk space:'}
												</span>
											</div>
											<span className='font-bold'>{config.storage} GB SSD</span>
										</div>
										<div className='relative h-2 bg-[#0a1a40] rounded-full'>
											<input
												type='range'
												min='10'
												max='2000'
												step='10'
												value={config.storage}
												onChange={e =>
													setConfig({
														...config,
														storage: Number.parseInt(e.target.value),
													})
												}
												className='absolute w-full h-full opacity-0 cursor-pointer'
											/>
											<div
												className='absolute h-full bg-[#4f46e5] rounded-full'
												style={{ width: `${(config.storage / 2000) * 100}%` }}
											></div>
										</div>
										<div className='flex justify-between mt-1 text-xs text-white/50'>
											<span>10</span>
											<span>500</span>
											<span>1000</span>
											<span>1500</span>
											<span>2000</span>
										</div>
									</div>

									<div>
										<div className='flex items-center justify-between mb-2'>
											<div className='flex items-center gap-2'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='20'
													height='20'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
													className='text-[#4f46e5]'
												>
													<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
												</svg>
												<span>
													{language === 'ru' ? 'Трафик:' : 'Traffic:'}
												</span>
											</div>
											<span className='font-bold'>{config.traffic} TB</span>
										</div>
										<div className='relative h-2 bg-[#0a1a40] rounded-full'>
											<input
												type='range'
												min='1'
												max='10'
												step='1'
												value={config.traffic}
												onChange={e =>
													setConfig({
														...config,
														traffic: Number.parseInt(e.target.value),
													})
												}
												className='absolute w-full h-full opacity-0 cursor-pointer'
											/>
											<div
												className='absolute h-full bg-[#4f46e5] rounded-full'
												style={{ width: `${(config.traffic / 10) * 100}%` }}
											></div>
										</div>
										<div className='flex justify-between mt-1 text-xs text-white/50'>
											<span>1</span>
											<span>3</span>
											<span>5</span>
											<span>7</span>
											<span>10</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='md:col-span-5'>
							<motion.div
								key={`${config.cpu}-${config.ram}-${config.storage}-${config.traffic}`}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}
								className='bg-[#0f1f4b] rounded-lg p-6 h-full'
							>
								<h3 className='text-xl font-bold mb-6'>
									{language === 'ru'
										? 'Ваша конфигурация'
										: 'Your Configuration'}
								</h3>

								<div className='bg-[#0a1a40] p-4 rounded-lg mb-6'>
									<div className='grid grid-cols-2 gap-y-4'>
										<div className='text-white/70'>
											{language === 'ru' ? 'Процессор:' : 'CPU:'}
										</div>
										<div className='text-right'>{config.cpu} vCPU</div>

										<div className='text-white/70'>
											{language === 'ru' ? 'Память:' : 'Memory:'}
										</div>
										<div className='text-right'>{config.ram} GB</div>

										<div className='text-white/70'>
											{language === 'ru' ? 'Диск:' : 'Disk:'}
										</div>
										<div className='text-right'>{config.storage} GB SSD</div>

										<div className='text-white/70'>
											{language === 'ru' ? 'Трафик:' : 'Traffic:'}
										</div>
										<div className='text-right'>{config.traffic} TB</div>
									</div>
								</div>

								<div>
									<h4 className='font-semibold mb-4'>
										{language === 'ru' ? 'Стоимость' : 'Cost'}
									</h4>

									<div className='space-y-2 mb-4'>
										<div className='flex justify-between'>
											<span className='text-white/70'>
												{language === 'ru'
													? 'Ежемесячная плата:'
													: 'Monthly fee:'}
											</span>
											<span>{price.monthly} ₽</span>
										</div>

										<div className='flex justify-between'>
											<span className='text-white/70'>
												{language === 'ru' ? 'Ежедневная плата:' : 'Daily fee:'}
											</span>
											<span>{price.daily} ₽</span>
										</div>
									</div>

									<div className='h-px bg-white/10 my-4'></div>

									<div className='flex justify-between font-bold'>
										<span>{language === 'ru' ? 'Итого:' : 'Total:'}</span>
										<span>{price.total} ₽</span>
									</div>

									<button className='w-full bg-[#4f46e5] hover:bg-[#4f46e5]/90 text-white py-3 rounded-lg font-medium mt-6 transition-colors'>
										{language === 'ru' ? 'Заказать сервер' : 'Order Server'}
									</button>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>

			{/* Pricing Cards Section */}
			<PricingCards />

			{/* Features Section */}
			<div className='py-16 bg-[#0a1a40]'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
						{language === 'ru' ? 'Наши преимущества' : 'Our Advantages'}
					</h2>
					<p className='text-white/70 text-center mb-12 max-w-2xl mx-auto'>
						{language === 'ru'
							? 'Почему клиенты выбирают НУРИ КОИНОТ'
							: 'Why customers choose NURI KOINOT'}
					</p>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -5 }}
								className='bg-[#0f1f4b] p-6 rounded-lg'
							>
								<div className='bg-[#4f46e5]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='text-[#4f46e5]'
									>
										{feature.icon === 'shield' && (
											<>
												<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
											</>
										)}
										{feature.icon === 'globe' && (
											<>
												<circle cx='12' cy='12' r='10'></circle>
												<line x1='2' y1='12' x2='22' y2='12'></line>
												<path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path>
											</>
										)}
										{feature.icon === 'zap' && (
											<>
												<polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon>
											</>
										)}
										{feature.icon === 'database' && (
											<>
												<ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
												<path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
												<path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
											</>
										)}
										{feature.icon === 'headphones' && (
											<>
												<path d='M3 18v-6a9 9 0 0 1 18 0v6'></path>
												<path d='M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z'></path>
											</>
										)}
									</svg>
								</div>
								<h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
								<p className='text-white/70'>{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	)
}
