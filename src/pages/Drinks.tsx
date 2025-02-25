import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Wine, Beer, Coffee, Milk } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface DrinkItem {
  name: { en: string; jp: string };
  price: string | { bottle?: string; glass?: string };
  category: { en: string; jp: string };
  description ? : { en: string; jp: string }; 
}

const drinkCategories = [
  {
    title: { en: "Beer", jp: "ビール" },
    icon: Beer,
    image: "/public/Website_Food Pictures/Drinks/Alcohol Drink 2.jpg",
    items: [
      { name: { en: "Nama Beer", jp: "生ビール" }, price: "¥500" },
      { name: { en: "Bottle Beer Asahi", jp: "瓶ビールアサヒ" }, price: "¥500" },
      { name: { en: "Indian Beer", jp: "インドビール" }, description: { en: "(Made in India)", jp: "インド産" }, price: "¥550" },
      { name: { en: "Non Alcohol Beer", jp: "0.0% ビール" }, price: "¥450" },
      { name: { en: "Imported Beer", jp: "輸入ビール" }, description: { en: "(Foreign)", jp: "外国産" }, price: "¥550" },
      { name: { en: "Corona Beer", jp: "コロナビール" }, price: "¥500" }
    ]
  },
  {
    title: { en: "Wine & Whisky", jp: "ワイン ウィスキー" },
    icon: Wine,
    image: "/public/Website_Food Pictures/Drinks/Alcohol Drinks .jpg",
    items: [
      { 
        name: { en: "Indian Wines", jp: "インドワイン" },
        description: { en: "(Made in India)", jp: "インド産" },
        price: { bottle: "¥3500", glass: "¥500" }
      },
      { 
        name: { en: "Indian Whisky", jp: "インディアンウイスキー" },
        price: { bottle: "¥2200", glass: "¥450" }
      },
      { name: { en: "Sake", jp: "酒" }, price: "¥450" },
      { name: { en: "High ball", jp: "ハイボール" }, price: "¥450" },
      { name: { en: "Sochu (Mugi/Imo)", jp: "焼酎 (麦/芋)" }, price: "¥450" },
      { name: { en: "Indian Rum", jp: "インディアンラム" }, price: "¥500" }
    ]
  },
  {
    title: { en: "Tea/Coffee/Juice", jp: "紅茶/コーヒー/ジュース" },
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    items: [
      { name: { en: "Oolong Tea", jp: "ウーロン茶" }, price: "¥250" },
      { name: { en: "Ice Tea", jp: "アイスチャイ" }, price: "¥300" },
      { name: { en: "Masala Tea", jp: "マサラチャイ" }, description: { en: "(Hot)", jp: "" }, price: "¥300" },
      { name: { en: "Ice Coffee", jp: "アイスコーヒー" }, price: "¥300" },
      { name: { en: "Hot Coffee", jp: "ホットコーヒー" }, price: "¥300" },
      { name: { en: "Cola", jp: "コーラ" }, price: "¥250" },
      { name: { en: "Orange Juice", jp: "オレンジジュース" }, price: "¥250" },
      { name: { en: "Coconut Water", jp: "ココナッツウォーター" }, price: "¥400" }
    ]
  },
  {
    title: { en: "Lassi", jp: "ラッシー" },
    icon: Milk,
    items: [
      { name: { en: "Lassi", jp: "ラッシー" }, price: "¥300" },
      { name: { en: "Mango Juice", jp: "マンゴージュース" }, price: "¥350" },
      { name: { en: "Mango Lassi", jp: "マンゴーラッシー" }, price: "¥400" }
    ]
  }
];

function Drinks() {
  const [language, setLanguage] = useState<'en' | 'jp'>('en');
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean);
    
    sections.forEach((section, index) => {
      gsap.fromTo(section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50">
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-6 sticky top-0 bg-purple-100/50 backdrop-blur-lg z-50 border-b border-purple-200/50 shadow-md"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
          <h1 className="text-3xl font-serif text-gray-900"><a href='/menu'>North Park</a></h1>
          </div>
          <button
            onClick={() => setLanguage(prev => prev === 'en' ? 'jp' : 'en')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-200/50 hover:bg-purple-300/50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span className="text-sm font-medium text-purple-700">
              {language === 'en' ? '日本語' : 'English'}
            </span>
          </button>
        </div>
      </motion.header>

      <main className="container mx-auto max-w-4xl px-6 py-12">
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden bg-gray-900 shadow-lg mb-12">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="text-4xl font-bold mb-4"
            >
              {language === 'en' ? "Drinks Menu" : "ドリンクメニュー"}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg text-purple-200"
            >
              {language === 'en' 
                ? "From traditional Indian drinks to international favorites" 
                : "伝統的なインドのドリンクから世界のお気に入りまで"}
            </motion.p>
          </div>
        </div>

        {drinkCategories.map((category, categoryIndex) => (
          <div
            key={category.title.en}
            ref={el => sectionsRef.current[categoryIndex] = el}
            className="mb-12 last:mb-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                {category.title[language]}
              </h2>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
              {category.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title[language]}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-semibold">
                      {category.title[language]}
                    </h3>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="grid gap-4">
                  {category.items.map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-purple-100 last:border-0"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {item.name[language]}
                          {item.description ? (
                            <span className="text-sm text-gray-500 ml-2">
                              {item.description[language]}
                            </span>
                          ): ""}
                        </h3>
                      </div>
                      <div className="text-right">
                        {typeof item.price === 'string' ? (
                          <span className="font-medium text-purple-700">{item.price}</span>
                        ) : (
                          <div className="flex flex-col items-end">
                            {item.price.bottle && (
                              <span className="text-sm text-purple-700">
                                Bottle: {item.price.bottle}
                              </span>
                            )}
                            {item.price.glass && (
                              <span className="text-sm text-purple-700">
                                Glass: {item.price.glass}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-12 text-center text-sm text-gray-600">
          <p>1-7 HigashiManabemachi, Tsuchiura, Ibaraki 300-0052</p>
        </div>
      </main>
    </div>
  );
}

export default Drinks;