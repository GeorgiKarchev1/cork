'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import BackgroundLayout from '@/components/BackgroundLayout'

type TabType = 'merchant' | 'terms' | 'privacy';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<TabType>('merchant');

  return (
    <BackgroundLayout>
      {/* Header with back button */}
      <header className="fixed w-full z-50 bg-[#0A0A33]/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center h-16 sm:h-20 lg:h-24">
            <Link href="/" className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-800/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              <span className="text-white font-medium">Назад към началната страница</span>
            </Link>
            
            <div className="ml-auto">
              <Image
                src="/img/agency.png"
                alt="Agency Logo"
                width={150}
                height={45}
                className="w-24 sm:w-32 h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <section className="relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient orbs */}
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#7D4CC3]/10 rounded-full blur-[100px] -translate-x-1/4 hardware-accelerated" />
            <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#F4A836]/10 rounded-full blur-[80px] translate-x-1/4 hardware-accelerated" />
          </div>

          <div className="container relative mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-12 hardware-accelerated"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-300">Правна</span>
                <br />
                <span className="bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">
                  информация
                </span>
              </h1>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8 space-x-4 overflow-x-auto pb-2 hardware-accelerated">
              <TabButton 
                active={activeTab === 'merchant'} 
                onClick={() => setActiveTab('merchant')}
                label="Информация за търговеца"
              />
              <TabButton 
                active={activeTab === 'terms'} 
                onClick={() => setActiveTab('terms')}
                label="Общи условия"
              />
              <TabButton 
                active={activeTab === 'privacy'} 
                onClick={() => setActiveTab('privacy')}
                label="Политика за поверителност"
              />
            </div>

            {/* Tab Content */}
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto bg-[#141414]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hardware-accelerated"
            >
              {activeTab === 'merchant' && <MerchantInfo />}
              {activeTab === 'terms' && <TermsOfService />}
              {activeTab === 'privacy' && <PrivacyPolicy />}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} "Агенцията" ООД. Всички права запазени.</p>
        </div>
      </footer>
    </BackgroundLayout>
  )
}

function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg font-medium transition-optimized hardware-accelerated ${
        active 
          ? 'bg-[#7D4CC3] text-white shadow-[0_0_15px_rgba(125,76,195,0.3)]' 
          : 'bg-gray-800/30 text-gray-400 hover:bg-gray-800/50 hover:text-gray-300'
      }`}
    >
      {label}
    </button>
  );
}

function MerchantInfo() {
  return (
    <div className="space-y-6 text-gray-300">
      <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">
        Информация за търговеца
      </h3>
      
      <div className="space-y-4">
        <p><strong>Име на фирмата:</strong> "Агенцията" ООД</p>
        <p><strong>ЕИК/БУЛСТАТ:</strong> 123456789</p>
        <p><strong>Седалище и адрес на управление:</strong> гр. София, ул. "Примерна" №10</p>
        <p><strong>Управител:</strong> Иван Иванов</p>
        <p><strong>Електронна поща:</strong> contact@theagency.bg</p>
        <p><strong>Телефон за контакт:</strong> +359 88 888 8888</p>
        <p><strong>Работно време:</strong> Понеделник - Петък, 9:00 - 18:00 ч.</p>
        <p className="pt-4">
          "Агенцията" ООД е регистрирана съгласно законодателството на Република България и предоставя 
          образователни услуги в сферата на видео обработката и дигиталния маркетинг.
        </p>
      </div>
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="space-y-6 text-gray-300">
      <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">
        Общи условия
      </h3>
      
      <div className="space-y-4">
        <p className="font-semibold">1. Общи положения</p>
        <p>
          Настоящите Общи условия уреждат отношенията между "Агенцията" ООД, наричано по-долу "Доставчик", 
          и потребителите на предоставяните от него услуги, наричани по-долу "Потребители".
        </p>
        
        <p className="font-semibold">2. Услуги</p>
        <p>
          Доставчикът предоставя образователни услуги в сферата на видео обработката и дигиталния маркетинг, 
          включително онлайн курсове, обучителни материали и достъп до общност от професионалисти.
        </p>
        
        <p className="font-semibold">3. Регистрация и плащане</p>
        <p>
          За да получи достъп до услугите, Потребителят трябва да се регистрира на платформата и да заплати 
          съответната такса. Плащането се извършва чрез посочените на сайта методи. След успешно плащане, 
          Потребителят получава достъп до закупените услуги за периода, посочен в описанието на съответния пакет.
        </p>
        
        <p className="font-semibold">4. Права и задължения на Потребителя</p>
        <p>
          Потребителят се задължава да не споделя своите данни за достъп с трети лица и да не разпространява 
          предоставените му материали без изричното съгласие на Доставчика. Потребителят носи отговорност за 
          всички действия, извършени чрез неговия акаунт.
        </p>
        
        <p className="font-semibold">5. Отказ от услуга и възстановяване на средства</p>
        <p>
          Потребителят има право да се откаже от услугата в срок от 14 дни от датата на закупуване, при условие 
          че не е използвал повече от 30% от предоставените материали. Възстановяването на средства се извършва 
          по същия начин, по който е извършено плащането.
        </p>
        
        <p className="font-semibold">6. Интелектуална собственост</p>
        <p>
          Всички материали, предоставени от Доставчика, са обект на авторско право и не могат да бъдат 
          използвани за търговски цели без изричното писмено съгласие на Доставчика.
        </p>
        
        <p className="font-semibold">7. Ограничение на отговорността</p>
        <p>
          Доставчикът не гарантира конкретни резултати от използването на услугите и не носи отговорност за 
          пропуснати ползи или други косвени щети, произтичащи от използването на услугите.
        </p>
        
        <p className="font-semibold">8. Изменение на Общите условия</p>
        <p>
          Доставчикът си запазва правото да изменя настоящите Общи условия по всяко време, като публикува 
          актуализираната версия на сайта. Потребителите ще бъдат уведомени за съществени промени чрез имейл.
        </p>
        
        <p className="font-semibold">9. Приложимо право</p>
        <p>
          Настоящите Общи условия се уреждат от законодателството на Република България. Всички спорове, 
          произтичащи от или свързани с тези Общи условия, ще бъдат решавани от компетентния съд в гр. София.
        </p>
        
        <p className="pt-4 italic">
          Последна актуализация: 1 Май 2023 г.
        </p>
      </div>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-gray-300">
      <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">
        Политика за поверителност
      </h3>
      
      <div className="space-y-4">
        <p className="font-semibold">1. Въведение</p>
        <p>
          "Агенцията" ООД ("ние", "нас" или "нашите") се ангажира да защитава поверителността на личните данни, 
          които събираме от потребителите на нашия уебсайт и услуги. Настоящата Политика за поверителност описва 
          как събираме, използваме и защитаваме вашите лични данни.
        </p>
        
        <p className="font-semibold">2. Събирани данни</p>
        <p>
          Ние събираме следните категории лични данни:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Идентификационни данни (име, имейл адрес, телефонен номер)</li>
          <li>Данни за плащане (информация за кредитна/дебитна карта, банкова сметка)</li>
          <li>Информация за използването на услугите (история на курсовете, активност в платформата)</li>
          <li>Технически данни (IP адрес, информация за устройството, бисквитки)</li>
        </ul>
        
        <p className="font-semibold">3. Цели на обработването</p>
        <p>
          Обработваме вашите лични данни за следните цели:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Предоставяне на достъп до нашите услуги</li>
          <li>Обработка на плащания</li>
          <li>Комуникация с вас относно нашите услуги</li>
          <li>Подобряване на нашите услуги</li>
          <li>Спазване на законови задължения</li>
        </ul>
        
        <p className="font-semibold">4. Правно основание за обработване</p>
        <p>
          Обработваме вашите лични данни на следните правни основания:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Изпълнение на договор</li>
          <li>Законово задължение</li>
          <li>Легитимен интерес</li>
          <li>Вашето съгласие</li>
        </ul>
        
        <p className="font-semibold">5. Срок на съхранение</p>
        <p>
          Съхраняваме вашите лични данни само за периода, необходим за постигане на целите, за които са събрани, 
          или за да спазим законови изисквания. След изтичане на този период, данните се изтриват или анонимизират.
        </p>
        
        <p className="font-semibold">6. Споделяне на данни с трети страни</p>
        <p>
          Можем да споделяме вашите лични данни с:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Доставчици на платежни услуги</li>
          <li>Доставчици на хостинг услуги</li>
          <li>Маркетингови партньори (само с вашето съгласие)</li>
          <li>Държавни органи (когато това се изисква по закон)</li>
        </ul>
        
        <p className="font-semibold">7. Вашите права</p>
        <p>
          Като субект на данни, вие имате следните права:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Право на достъп до вашите лични данни</li>
          <li>Право на коригиране на неточни данни</li>
          <li>Право на изтриване на данни</li>
          <li>Право на ограничаване на обработването</li>
          <li>Право на преносимост на данните</li>
          <li>Право на възражение срещу обработването</li>
          <li>Право на оттегляне на съгласието</li>
        </ul>
        
        <p className="font-semibold">8. Сигурност на данните</p>
        <p>
          Ние прилагаме подходящи технически и организационни мерки за защита на вашите лични данни от 
          неоторизиран достъп, загуба или повреда.
        </p>
        
        <p className="font-semibold">9. Контакт</p>
        <p>
          Ако имате въпроси относно обработването на вашите лични данни или желаете да упражните някое от 
          вашите права, моля, свържете се с нас на: privacy@theagency.bg
        </p>
        
        <p className="pt-4 italic">
          Последна актуализация: 1 Май 2023 г.
        </p>
      </div>
    </div>
  );
} 