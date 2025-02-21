import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Star, Languages, ChefHat } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MenuItem {
  name: { en: string; jp: string; };
  description: { en: string; jp: string; };
  price: string;
  category: { en: string; jp: string; };
  image: string;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large';
  mobsize?: 'small' | 'medium' | 'large';
}

const menuItems: MenuItem[] = 
[
    {
      name: { en: "Main Course", jp: "ビリヤニ ロイヤル" },
      description: { en: "Aromatic basmati rice with saffron, slow-cooked spices, and tender meat", jp: "サフランとスパイスでじっくり調理した香り高いバスマティ米" },
      price: "$40",
      category: { en: "Main Course", jp: "メイン" },
      image: "https://i.pinimg.com/736x/a4/66/9a/a4669a419a1d51fc927182f6660bfb3e.jpg",
      featured: true,
      size: "small",
      mobsize: "medium"
    },
    {
      name: { en: "Beverage", jp: "マンゴーラッシー" },
      description: { en: "Refreshing yogurt-based mango drink with cardamom", jp: "カルダモンが香る爽やかなヨーグルトベースのマンゴードリンク" },
      price: "$10",
      category: { en: "Beverage", jp: "飲み物" },
      image: "https://imgs.search.brave.com/JVDwGefljnqj7a_EexU0Acx8qFshOrYYuN4qYB_lFIM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzYzLzk1Lzc5/LzM2MF9GXzY2Mzk1/Nzk5OV9FOW9MVnEw/akt4UHEwMFJ5SGFB/SGt5ZW9oM1FmakVo/eC5qcGc",
      size: "small",
      mobsize: "large"
    
    },
    {
      name: { en: "Gulab Jamun", jp: "グラブジャムン" },
      description: { en: "Soft fried milk dumplings soaked in rose-flavored sugar syrup", jp: "ローズ風味のシロップに浸した柔らかい揚げミルク団子" },
      price: "$15",
      category: { en: "Dessert", jp: "デザート" },
      image: "https://imgs.search.brave.com/kv_PVqd8PO8JggEDOBDl4LAueYJdHgHlWbfkXBBCmNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzE0LzY0LzYy/LzM2MF9GXzkxNDY0/NjI3M19Xcmh1Y0Vj/MFRLU1ZXUXhyeWlI/ekltNjZ3Mk0xRmhI/YS5qcGc",
      size: "small",
      
     
    },
    {
      name: { en: "Tandoori Platter", jp: "タンドリープラッター" },
      description: { en: "Assortment of tandoori meats and vegetables, served with mint chutney", jp: "タンドリーミートと野菜の盛り合わせ、ミントチャツネ添え" },
      price: "$50",
      category: { en: "Appetizer", jp: "前菜" },
      image: "https://imgs.search.brave.com/1bYy7osK4iKzTdbHtdI7mvIYahoVY812wNFJCcc7sik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzM5LzMwLzE4/LzM2MF9GXzEzOTMw/MTgxOV9JcDFXTUlI/TGM2dnRGamtYTmt1/aGlWdzNGcWFYVVp5/ZC5qcGc",
      featured: true,
      size: "medium",
      
    },
    {
      name: { en: "Butter Chicken", jp: "バターチキン" },
      description: { en: "Classic Indian butter chicken with rich tomato and cashew gravy", jp: "濃厚なトマトとカシューナッツのグレービーで仕上げたインドの定番バターチキン" },
      price: "$35",
      category: { en: "Main Course", jp: "メイン" },
      image: "https://imgs.search.brave.com/mMs3b2YFe4us1A1GSP2hAcxXcDZ2_dm3vLzKTUdr_oQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzE0LzY0LzQz/LzM2MF9GXzkxNDY0/NDM1Ml8zTHVjWE5i/cEtQMGEwcG5ZY1Jn/QnY0U2JRd29PbGpX/di5qcGc",
      size: "small",
      
    },
    {
      name: { en: "Paneer Tikka", jp: "パニールティッカ" },
      description: { en: "Chargrilled cottage cheese marinated in yogurt and spices", jp: "ヨーグルトとスパイスに漬け込んだカッテージチーズの炭火焼き" },
      price: "$30",
      category: { en: "Appetizer", jp: "前菜" },
      image: "https://imgs.search.brave.com/bvlZpQAIsOIZBvaGS7sQDjU5btatsDDmaN7mKgNbw1A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzI0LzM1LzYx/LzM2MF9GXzgyNDM1/NjE1Ml95bkRCMTRK/MHFZejhERU5DWG9S/cTZ3SVJCYWxHSm9s/RC5qcGc",
      size: "small",
      mobsize: "large"
      

    },
    {
      name: { en: "Mango Lassi", jp: "マンゴーラッシー" },
      description: { en: "Refreshing yogurt-based mango drink with cardamom", jp: "カルダモンが香る爽やかなヨーグルトベースのマンゴードリンク" },
      price: "$10",
      category: { en: "Beverage", jp: "飲み物" },
      image: "https://imgs.search.brave.com/oP2sBqIybLcrdrwCJ3jqOUKqVS_G_oXAcURth_FIzBc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzk0LzczLzM3/LzM2MF9GXzEwOTQ3/MzM3NDFfcjBYbWhj/b2EwdWUwN0o5YnJ1/bVRlZHZsQ1l6VHZ2/c0YuanBn",
      size: "medium",
      
    },
    {
      name: { en: "Gulab Jamun", jp: "グラブジャムン" },
      description: { en: "Soft fried milk dumplings soaked in rose-flavored sugar syrup", jp: "ローズ風味のシロップに浸した柔らかい揚げミルク団子" },
      price: "$15",
      category: { en: "Dessert", jp: "デザート" },
      image: "https://imgs.search.brave.com/3yqpGIBECHuOr_7gq0kTKMBHtuX1i5qR4TxlpP7XnN4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk5LzEw/LzEyLzk5MTAxMjBi/YWY5ZmVhOWU4YmVj/MDUzYTk2NGRkYTZi/LmpwZw",
      size: "small",
      mobsize: "medium"
    },
    {
      name: { en: "Masala Dosa", jp: "マサラドーサ" },
      description: { en: "Crispy rice crepe filled with spiced potatoes, served with chutneys", jp: "スパイス風味のポテトを詰めたカリカリの米クレープ、チャツネ添え" },
      price: "$25",
      category: { en: "South Indian", jp: "南インド" },
      image: "https://imgs.search.brave.com/hNJogRvrk0ia949nDS1k0K5XlH8Le9DeMfW3Q4qsWFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFkLzli/LzFjLzFkOWIxY2Fm/MjkwZGQ1MjVmMDNm/MzkyMWZhZTVjOWM0/LmpwZw",
      size: "large"
    },
    {
      name: { en: "Rajma Chawal", jp: "ラジマチャワル" },
      description: { en: "Slow-cooked red kidney beans with aromatic basmati rice", jp: "じっくり煮込んだレッドキドニービーンズと香り高いバスマティ米" },
      price: "$20",
      category: { en: "Vegetarian", jp: "ベジタリアン" },
      image: "https://imgs.search.brave.com/x5ZcmKmzUUfE5kVCVR9evfAp_1aA6xLOJ4YHigzq3BI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVhZm9ydHVybWVy/aWMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzA0L1Jh/am1hLTEyLTcyOHgx/MDkyLmpwZw",
      size: "small"
    }
  ];

function Menu() {
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
              <h1 className="text-3xl font-serif text-gray-900 drop-shadow-lg">Spics & Zen</h1>
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
  export default Menu;  