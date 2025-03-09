import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, MapPin, Phone, Clock, Info, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Bento() {
  const [language, setLanguage] = useState<'en' | 'jp'>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Menu data structure with added images
  const menuSections = [
    {
      title: { en: "Chicken", jp: "チキン" },
      price: { en: "¥600 (tax included)", jp: "¥600 (税込)" },
      image: "/Website_Food Pictures/Bento Box/Bento Box_Chicken Curry Nan-3.jpg",
      items: [
        { name: { en: "CHICKEN CURRY", jp: "チキンカレー" } },
        { name: { en: "SAAG CHICKEN", jp: "サーグ・チキン" } },
        { name: { en: "BUTTER CHICKEN", jp: "バターチキン" } },
        { name: { en: "KEEMA CURRY", jp: "キーマカレー" } }
      ]
    },
    {
      title: { en: "Mutton", jp: "マトン" },
      price: { en: "¥600 (tax included)", jp: "¥600 (税込)" },
      image: "/Website_Food Pictures/Bento Box/Take_Out_Mutton Curry Nan-2.jpg",
      items: [
        { name: { en: "MUTTON CURRY", jp: "マトンカレー" } },
        { name: { en: "SAAG MUTTON", jp: "サーグ・マトン" } }
      ]
    },
    {
      title: { en: "Seafood", jp: "シーフード" },
      price: { en: "¥600 (tax included)", jp: "¥600 (税込)" },
      image: "/Website_Food Pictures/Bento Box/Take_Out_Seafood Curry Nan-1.jpg",
      items: [
        { name: { en: "SEAFOOD CURRY", jp: "海鮮カレー" } },
        { name: { en: "SAAG SEAFOOD", jp: "サーグシーフード" } }
      ]
    },
    {
      title: { en: "Vegetarian", jp: "ベジタリアン" },
      price: { en: "¥600 (tax included)", jp: "¥600 (税込)" },
      image: "/Website_Food Pictures/Bento Box/Take out_Vegetarien lunch set .jpg",
      items: [
        { name: { en: "VEGETABLE CURRY", jp: "野菜カレー" } },
        { name: { en: "PANEER CURRY", jp: "パニールカレー" } },
        { name: { en: "DAL CURRY", jp: "ダルカレー" } }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-100 to-orange-50">

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="py-4 sm:py-6 sticky top-0 bg-orange-100/70 backdrop-blur-lg z-50 border-b border-orange-200/50 shadow-md"
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/menu">
            <h1 
              className="text-3xl sm:text-4xl font-serif text-gray-900"
              
            >
              North Park, Indian Restaurant & Café
            </h1>
            </a>
            
      
      
          </div>
          <a className="font-mono text-lg" href="/">Home</a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(prev => prev === 'en' ? 'jp' : 'en')}
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-orange-200/70 backdrop-blur-lg hover:bg-orange-300/70 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span className="text-sm sm:text-base font-medium text-orange-700">
              {language === 'en' ? '日本語' : 'English'}
            </span>
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[250px] sm:h-[350px] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 shadow-xl mb-8 sm:mb-12"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80')] bg-cover bg-center opacity-80" />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Banner Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-6xl font-bold mb-2 sm:mb-4 text-white drop-shadow-lg"
            >
              {language === 'en' ? "Takeout Indian Bento" : "お持ち帰り インド弁当"}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl sm:text-2xl text-orange-300 font-medium mb-4 sm:mb-6"
            >
              {language === 'en' ? "A Packed Set (Takeout only)" : "パックセット (テイクアウト限定)"}
            </motion.p>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-2 sm:mt-4 flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-3 rounded-full">
                <Clock size={18} className="text-orange-300" />
                <span className="text-base sm:text-lg">{language === 'en' ? "Weekdays lunch time only" : "平日ランチ タイム限定"}</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-500/80 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-3 rounded-full">
                <UtensilsCrossed size={18} className="text-white" />
                <span className="font-bold text-base sm:text-lg">TAKE OUT</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Restaurant Info */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="bg-white/80 backdrop-blur-md rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg mb-8 sm:mb-12 border border-orange-200/50"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-5 border-b border-orange-200 pb-3">
            {language === 'en' ? "North Park Indian Restaurant & Cafe" : "North Park インドレストラン & カフェ"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                <MapPin className="text-orange-600" size={20} />
              </div>
              <div>
                <p className="text-sm sm:text-base text-orange-700 font-medium mb-1 sm:mb-2">{language === 'en' ? "Address" : "住所"}</p>
                <p className="text-lg sm:text-xl text-gray-700">
                  {language === 'en' 
                    ? "1-7 Higashimanabemachi, Tsuchiura, Ibaraki 300-0052" 
                    : "300-0052 茨城県土浦市東真鍋町1-7"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-orange-100 p-2 sm:p-3 rounded-full">
                <Phone className="text-orange-600" size={20} />
              </div>
              <div>
                <p className="text-sm sm:text-base text-orange-700 font-medium mb-1 sm:mb-2">{language === 'en' ? "Contact" : "連絡先"}</p>
                <p className="text-lg sm:text-xl text-gray-700">Tel: 029-811-9527</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Menu Sections */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
        >
          {menuSections.map((section, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/80 backdrop-blur-md rounded-lg sm:rounded-xl overflow-hidden shadow-xl transition-all duration-300 border border-orange-200/30 hover:border-orange-300"
            >
              <div className="h-40 sm:h-48 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" 
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img 
                  src={section.image} 
                  alt={section.title[language]} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                      {section.title[language]}
                    </h3>
                    <span className="text-white font-medium bg-orange-500/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
                      {section.price[language]}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="p-4 sm:p-6">
                {section.items.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    whileHover={{ x: 8, backgroundColor: "rgba(251, 146, 60, 0.1)" }}
                    className="py-3 sm:py-4 border-b border-orange-100 last:border-0 flex justify-between items-center rounded-lg px-2 sm:px-3 transition-colors duration-300"
                  >
                    <span className="text-lg sm:text-xl font-medium text-gray-800">{item.name[language]}</span>
                    <ChevronRight size={18} className="text-orange-500" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Delivery Info Box */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="bg-orange-100/80 backdrop-blur-md rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg mb-8 sm:mb-12 border-2 border-orange-300"
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-orange-500/80 p-2 sm:p-3 rounded-full shadow-md">
              <Info className="text-white" size={24} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-800 mt-1">
              {language === 'en' ? "Delivery & Order Information" : "配達・注文情報"}
            </h3>
          </div>
          
          <div className="space-y-4 sm:space-y-6 text-gray-800">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-orange-200 flex items-center gap-4 sm:gap-5"
            >
              <div className="bg-orange-50 p-3 sm:p-4 rounded-full border border-orange-200">
                <UtensilsCrossed className="text-orange-600" size={24} />
              </div>
              <p className="font-medium text-lg sm:text-xl">
                {language === 'en' 
                  ? "Choose either naan or rice" 
                  : "ナンかライスを選ぶ"}
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-orange-200"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="bg-orange-500 text-white font-bold px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg inline-block text-base sm:text-lg">
                  {language === 'en' ? "DELIVERY OK!" : "配達OK!"}
                </div>
              </div>
              <p className="text-lg sm:text-xl mb-2 sm:mb-3">
                {language === 'en' 
                  ? "Free delivery (within 2km) on 5 or more bentos" 
                  : "5個以上ご注文で配達無料 (2km以内)"}
              </p>
              <p className="text-sm sm:text-base text-gray-600 italic">
                {language === 'en' 
                  ? "* Delivery depends on staff availability" 
                  : "* 配達はスタッフの空き状況によります"}
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-center pt-2 sm:pt-3">
              <div>
                <p className="text-lg sm:text-xl font-medium">www.northparkgrp.com</p>
                <p className="text-lg sm:text-xl">northparknp@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-dashed border-black py-12 mt-12">
        <div className="container mx-auto px-6">
          <p className="text-center text-black text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {language === 'en' 
              ? "Prices are subject to change without prior notice. Images are for illustration purposes only, and actual dishes may vary in presentation and ingredients."
              : "価格は予告なく変更される場合があります。画像はイメージです。実際の料理は見た目や材料が異なる場合があります。"
            }
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Bento;