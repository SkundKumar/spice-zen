import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Star, Languages, ChefHat } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MenuItem {
    name: { en: string; jp: string };
    description: { en: string; jp: string };
    category: { en: string; jp: string };
    image: string;
    featured?: boolean;
    size?: "small" | "medium" | "large";
    mobsize?: 'small' | 'medium' | 'large';
    price: string;
    variations?: { name: { en: string; jp: string }; price: string }[];
  }
  

const menuItems: MenuItem[] = 
[
    {
        name: { en: "Biryani/Rice", jp: "ビリヤニ . ライス" },
        description: { en: "Spicy pilaf with basmati rice (Indian rice)", jp: "バスマティ米（インド米）を使ったスパイシーピラフ" },
        category: { en: "Rice Dishes", jp: "ライス料理" },
        image: "https://i.pinimg.com/736x/a4/66/9a/a4669a419a1d51fc927182f6660bfb3e.jpg",
        featured: true,
        size: "medium",
        mobsize: "large",
        price: "",
        variations: [
          { name: { en: "Vegetable Biryani", jp: "野菜ビリヤニ" }, price: "" },
          { name: { en: "Chicken Biryani", jp: "チキンビリヤニ" }, price: "" },
          { name: { en: "Mutton Biryani", jp: "マトンビリヤニ" }, price: "" },
          { name: { en: "Fish Biryani", jp: "魚のビリヤニ" }, price: "" },
          { name: { en: "Prawn Biryani", jp: "エビビリヤニ" }, price: "" }
        ]
      },
      {
        name: { en: "Fried Rice", jp: "炒飯" },
        description: { en: "Stir-fried rice mixed with eggs, vegetables, seafood, or meat", jp: "チャーハンは、中華鍋やフライパンで炒めたご飯に、卵、野菜、魚介類、肉などの他の材料を混ぜた料理です。" },
        category: { en: "Rice Dishes", jp: "ライス料理" },
        image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Fried_Rice.jpg",
        size: "medium",
        mobsize: "medium",
        price: "",
        variations: [
          { name: { en: "Vegetable Fried Rice", jp: "野菜炒飯" }, price: "" },
          { name: { en: "Chicken Fried Rice", jp: "チキン炒飯" }, price: "" },
          { name: { en: "Egg Fried Rice", jp: "卵炒飯" }, price: "" }
        ]
      },
      {
        name: { en: "Saffron Rice", jp: "サフランライス" },
        description: { en: "Saffron Colored (Yellow) Rice", jp: "サフラン色（黄色）の米" },
        category: { en: "Rice Dishes", jp: "ライス料理" },
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Saffron_rice.jpg",
        size: "small",
        mobsize: "small",
        price: ""
      }
  ];

function Biryani() {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');
    const gridRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
    useEffect(() => {
      if (!gridRef.current) return;
  
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
            delay: (index % 3) * 0.1
          }
        );
      });
  
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);
  
    return (

      <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-100 to-orange-50 backdrop-blur-xl">
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-6 sticky top-0 bg-orange-100/50 backdrop-blur-lg z-50 border-b border-orange-200/50 shadow-md"
        >
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-serif text-gray-900 drop-shadow-lg">North Park</h1>
            </div>
            <button
              onClick={() => setLanguage(prev => prev === 'en' ? 'jp' : 'en')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-200/50 backdrop-blur-lg hover:bg-orange-300/50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="text-sm font-medium text-orange-700">
                {language === 'en' ? '日本語' : 'English'}
              </span>
            </button>
          </div>
        </motion.header>
  
        <main className="container mx-auto max-w-7xl px-6 py-12">
        <div 
    className="relative w-full h-[300px] rounded-2xl overflow-hidden bg-gray-900 shadow-lg mb-10"
  >
    <div 
      className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/a4/66/9a/a4669a419a1d51fc927182f6660bfb3e.jpg')] bg-cover bg-center"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

    {/* Banner Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl font-bold"
      >
        {language === 'en' ? "Biryani/Rice " : "ビリヤニ . ライス"}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-5 text-lg text-orange-400 max-w-2xl"
      >
        {language === 'en' 
          ? "A delightful fusion of flavors bringing together the best of Indian and Japanese cuisine."
          : "インドと日本の最高の味を融合させた、美味しいメインコースをお楽しみください。"}
      </motion.p>
    </div>
  </div>
  <div 
    ref={gridRef}
    className="
      grid grid-cols-2 gap-3 auto-rows-[200px] 
      sm:grid-cols-2 sm:auto-rows-[300px] 
      md:grid-cols-2 lg:grid-cols-3
    "
  >
    {menuItems.map((item, index) => (
      <div
        key={item.name.en}
        ref={el => cardsRef.current[index] = el}
        className={`
            group relative rounded-2xl overflow-hidden bg-orange-100/50 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-out 
            ${item.size === 'medium' ? 'md:col-span-2 lg:col-span-2' : ''}
${item.size === 'large' ? 'md:col-span-2 lg:col-span-2 md:row-span-2' : ''}
${item.mobsize === 'medium' ? 'sm:col-span-2 sm:row-span-1 md:col-span-1 md:row-span-1' : ''}
${item.mobsize === 'large' ? 'sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-1' : ''}

          `}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />
        <img
          src={item.image}
          alt={item.name[language]}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div 
          className="absolute inset-x-0 bottom-0 p-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"
        >
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="text-lg font-semibold text-white leading-tight">
              {item.name[language]}
            </h3>
            <span className="text-yellow-400 font-bold text-md">{item.price}</span>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed mb-2 line-clamp-2">
            {item.description[language]}
          </p>
          
          {item.variations && item.variations.length > 0 && (
  <div className="mt-3 mb-3">
    <h3 className="text-sm  text-white font-bold">Variations:</h3>
    <ul className="mt-1 space-y-1 text-sm text-gray-200">
      {item.variations.map((variation, vIndex) => (
        <li key={vIndex} className="flex justify-between">
          <span>{variation.name[language]}</span>
          <span className="font-medium text-yellow-400">{variation.price}</span>
        </li>
      ))}
    </ul>
  </div>
)}
          <span className="inline-block text-xs text-orange-400 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 border border-orange-400/30">
            {item.category[language]}
          </span>
        </div>
      </div>
    ))}
  </div>
</main>

      </div>
    );
  }
  export default Biryani;  