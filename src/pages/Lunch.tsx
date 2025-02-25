import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Clock, Sun } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuImages = [
  {
    url: "/public/Website_Food Pictures/Lunch Menu photo/Lunch Menu_Single Page_1.jpg",
    title: { en: "Lunch Menu Page 1", jp: "ランチメニュー ページ1" }
  },
  {
    url: "/public/Website_Food Pictures/Lunch Menu photo/Lunch Menu_Single Page_2.jpg",
    title: { en: "Lunch Menu Page 2", jp: "ランチメニュー ページ2" }
  }
];

function Lunch() {
  const [language, setLanguage] = useState<'en' | 'jp'>('en');
  const menuRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!menuRef.current) return;

    const cards = cardsRef.current.filter(Boolean);
    
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
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
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50">
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-6 sticky top-0 bg-amber-100/50 backdrop-blur-lg z-50 border-b border-amber-200/50 shadow-md"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sun className="w-8 h-8 text-amber-600" />
            <h1 className="text-3xl font-serif text-gray-900"><a href='/menu'>North Park</a></h1>
          </div>
          <button
            onClick={() => setLanguage(prev => prev === 'en' ? 'jp' : 'en')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-200/50 backdrop-blur-lg hover:bg-amber-300/50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span className="text-sm font-medium text-amber-700">
              {language === 'en' ? '日本語' : 'English'}
            </span>
          </button>
        </div>
      </motion.header>

      <main className="container mx-auto max-w-5xl px-6 py-12">
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden bg-gray-900 shadow-xl mb-16">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2940')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <div className="flex items-center gap-3 mb-4">
              <UtensilsCrossed className="w-8 h-8" />
              <Clock className="w-8 h-8" />
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {language === 'en' ? "Our Menu" : "メニュー"}
            </h1>
          </div>
        </div>

        <div 
          ref={menuRef}
          className="space-y-8"
        >
          {menuImages.map((menu, index) => (
            <div
              key={menu.title.en}
              ref={el => cardsRef.current[index] = el}
              className="rounded-2xl overflow-hidden bg-white shadow-2xl shadow-black"
            >
              <img
                src={menu.url}
                alt={menu.title[language]}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Lunch;