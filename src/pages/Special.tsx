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
        name: { en: "Vegetable Thali", jp: "ベジタブルターリー" },
        description: { en: "A wholesome vegetarian meal with assorted delicacies", jp: "様々な美味しいベジタリアン料理の盛り合わせ" },
        category: { en: "Thali", jp: "ターリー" },
        image: "https://lh5.googleusercontent.com/otG_YpqN8XfKkzFgxfRJUcscJztvZ2VfJa2kFFmDpnLqXAxF5zOLr8MoBNCvGNCbjIKN255EflAiy7mWB9MDFyY",
        size: "large",
        mobsize: "large",
        price: "",
        variations: [
          { name: { en: "Dal", jp: "豆カレー" }, price: "" },
          { name: { en: "Paneer Butter Masala", jp: "パニールバターマサラ" }, price: "" },
          { name: { en: "Palak Mushroom", jp: "パラックキノコ" }, price: "" },
          { name: { en: "Vegetable Curry", jp: "ベジタブルカレー" }, price: "" }
        ]
      },
      {
        name: { en: "Non-Veg Thali", jp: "ノンベジタリー" },
        description: { en: "A meaty delight featuring classic Indian dishes", jp: "伝統的なインドの肉料理の贅沢な盛り合わせ" },
        category: { en: "Thali", jp: "ターリー" },
        image: "https://lh4.googleusercontent.com/X_HcQV2lPX93Vf1gi6aQtmVZ5H2fOA1gIPSqEy7xHjxCYyHeKjc4OteaeGccEJSaGtFBB2r8QPSTi0LBx27BqOg",
        size: "small",
        mobsize: "large",
        price: "",
        variations: [
          { name: { en: "Tandoori Chicken", jp: "タンドリーチキン" }, price: "" },
          { name: { en: "Seek Kebab", jp: "シークケバブ" }, price: "" },
          { name: { en: "Mutton Curry", jp: "マトンカレー" }, price: "" },
          { name: { en: "Chicken Curry", jp: "チキンカレー" }, price: "" },
          { name: { en: "Keema Curry", jp: "キーマカレー" }, price: "" },
          { name: { en: "Vegetable Curry", jp: "ベジタブルカレー" }, price: "" }
        ]
      },
      {
        name: { en: "Seafood Thali", jp: "シーフードターリー" },
        description: { en: "A seafood lover’s dream with freshly prepared dishes", jp: "新鮮な魚介類を使った贅沢な盛り合わせ" },
        category: { en: "Thali", jp: "ターリー" },
        image: "https://lh6.googleusercontent.com/8Oc79HemoarpPtXddq-F5ROrnymc9wVc9CBYBbktG5d3OGE0AhuJqKhbAQrsH-UwAi57gacu2n0HG0UIz6myCFY",
        size: "small",
        mobsize: "small",
        price: "",
        variations: [
          { name: { en: "Fish Tikka", jp: "フィッシュティッカ" }, price: "" },
          { name: { en: "Tandoori Prawn", jp: "タンドリープラウン" }, price: "" },
          { name: { en: "Seafood Curry", jp: "シーフードカレー" }, price: "" },
          { name: { en: "Prawn Curry", jp: "プラウンカレー" }, price: "" }
        ]
      },
      {
        name: { en: "Garlic Kebab Masala Rice", jp: "ガーリックケバブマサラライス" },
        description: { en: "A flavorful rice dish with aromatic spices and garlic", jp: "香ばしいスパイスとガーリックの風味豊かなライス料理" },
        category: { en: "Rice Dishes", jp: "ライス料理" },
        image: "https://lh4.googleusercontent.com/QtNL6DveCp5zajcxNeIysRe0bYPlUHuv9hnLuBEhp92NmdDT-sLTRVW8KTGBI9x2sZbSaLjFHAl2Wp4ftH8u8Q",
        size: "medium",
        mobsize: "medium",
        price: "",
        variations: [
          { name: { en: "Kebab Masala", jp: "カバブマサラ" }, price: "" },
          { name: { en: "Garlic Naan", jp: "ガーリックナン" }, price: "" },
          { name: { en: "Basmati Rice", jp: "バスマティライス（インド米）" }, price: "" },
          { name: { en: "Softdrink", jp: "ソフトドリンク" }, price: "" }
        ]
      }
  ];

function Special() {
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
        {language === 'en' ? "Special Meal Sets " : "スペシャルミールセット"}
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
${item.mobsize === 'large' ? 'sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-2' : ''}

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
  export default Special;  