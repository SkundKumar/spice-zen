import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Star, Languages, ChefHat } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

interface MenuItem {
  name: { en: string; jp: string; };
  description: { en: string; jp: string; };
  category: { en: string; jp: string; };
  image: string;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large';
  mobsize?: 'small' | 'medium' | 'large';
}

const menuItems: MenuItem[] = [
  {
    name: { en: "Starters and Snacks", jp: "ビリヤニ ロイヤル" },
    description: { en: "a light snack", jp: "" },
    category: { en: "Starters", jp: "" },
    image: "/Website_Food Pictures/Starters & Grills/Tandoori Prawn.jpg",
    featured: true,
    size: "small",
    mobsize: "medium"
  },
  {
    name: { en: "Drinks", jp: "ドリンク " },
    description: { en: "Refreshing drink ", jp: "さわやかな飲み物" },
    category: { en: "Beverage", jp: "飲み物" },
    image: "/Website_Food Pictures/Drinks/Alcohol Drink 2.jpg",
    size: "small",
    mobsize: "large"
  },
  {
    name: { en: "Lunch Menu", jp: "グラブジャムン" },
    description:{ en: "Lunch", jp: "昼ご飯 "},
    category: { en: "Lunch Menu", jp: "グラブジャムン" },
    image: "https://imgs.search.brave.com/AEB4ELnk4eK4zZI4gdOCY2xwRWUwRszhYPcUrntqgeo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vaHozZ211cXc2/L2ltYWdlL3VwbG9h/ZC9jX2ZpbGwscV8z/MCx3Xzc1MC9mX2F1/dG8vdGstdHJhZGl0/aW9uYWwtaW5kaWFu/LWZvb2RzLXRvLXRh/c3RlLWluLTIwMjIt/cGhwRVhBWE5T",
    size: "small",
  },
  {
    name: { en: "Dinner", jp: "夕食" },
    description: { en: "Assortment of tandoori meats and vegetables, served with mint chutney", jp: "タンドリーミートと野菜の盛り合わせ、ミントチャツネ添え" },
    category: { en: "Dinner", jp: "夕食" },
    image: "/Website_Food Pictures/Chicken Curry/Chicken Tikka Masala.jpg",
    featured: true,
    size: "medium",
  },
  {
    name: { en: "Naan/Breads", jp: "ナン/パン" },
    description: { en: "Crispy indian style breads", jp: "クリスピーなインド風パン" },
    category: { en: "Naan/Breads", jp: "ナン/パン" },
    image: "/Website_Food Pictures/Breads_Nan/Choco Honey Nan.jpg",
    size: "small"
  },
  {
    name: { en: "Biryani/Rice", jp: "ビリヤニ . ライス" },
    description: { en: "Rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat", jp: "チャーハンは、中華鍋やフライパンで炒めたご飯に、卵、野菜、魚介類、肉などの他の材料を混ぜた料理です。" },
    category: { en: "Biryani", jp: "ベジタリアン" },
    image: "/Website_Food Pictures/Rice_Biryani/Chicken Biryani.jpg",
    size: "large"
  },
  {
    name: { en: "Special Meal Set", jp: "スペシャルミールセット" },
    description: { en: "Slow-cooked red kidney beans with aromatic basmati rice", jp: "じっくり煮込んだレッドキドニービーンズと香り高いバスマティ米" },
    category: { en: "Special", jp:"スペシャルミールセット" },
    image: "/Website_Food Pictures/Special Meal Sets/Non veg Thali_Dinner.JPG",
    size: "small"
  },
  {
    name: { en: "Takeout Indian Bento", jp: "お持ち帰り インド弁当" },
    description: { en:"A Packed Set (Takeout only)", jp: "パックセット (テイクアウト限定)" },
    category: { en: "Bento", jp:"" },
    image: "/Website_Food Pictures/Bento Box/Bento Box_Chicken Curry Nan-3.jpg",
    size: "small"
  }
];

function Menu() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'jp'>('en');
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!gridRef.current) return;
  
    gsap.fromTo(
      cardsRef.current.filter(Boolean),
      { opacity: 0, y: 0 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  
    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
            <h1 className="text-4xl font-serif text-gray-900"><a href='/'>North Park</a></h1>
          </div>
          <button
            onClick={() => setLanguage(prev => prev === 'en' ? 'jp' : 'en')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-200/50 backdrop-blur-lg hover:bg-orange-300/50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span className="text-lg font-medium text-orange-700">
              {language === 'en' ? '日本語' : 'English'}
            </span>
          </button>
        </div>
      </motion.header>

      <main className="container mx-auto max-w-7xl px-6 py-12">
        <div 
          ref={gridRef}
          className="grid grid-cols-2 gap-3 auto-rows-[200px] sm:grid-cols-2 sm:auto-rows-[300px] md:grid-cols-2 lg:grid-cols-3"
        >
          {menuItems.map((item, index) => (
            <div
              key={item.name.en}
              ref={el => cardsRef.current[index] = el}
              onClick={() => navigate(`/category/${item.category.en.toLowerCase().replace(/\s+/g, '-')}`)}
              className={`
                group relative rounded-2xl overflow-hidden bg-orange-100/50 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-out 
                ${item.size === 'medium' ? 'md:col-span-2 lg:col-span-2' : ''}
                ${item.size === 'large' ? 'md:col-span-2 lg:col-span-2 md:row-span-2' : ''}
                ${item.mobsize === 'medium' ? 'sm:col-span-2 sm:row-span-1 md:col-span-1 md:row-span-1' : ''}
                ${item.mobsize === 'large' ? 'sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-1' : ''}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={item.image}
                alt={item.name[language]}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 z-20 bg-black/50 backdrop-blur-sm transition-all duration-500 ease-out">
                <h1 className="text-xl font-semibold text-white leading-tight text-center">
                  {item.name[language]}
                </h1>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out hidden sm:block">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h1 className="text-2xl font-semibold text-white leading-tight">
                    {item.name[language]}
                  </h1>
                  <span className="text-yellow-400 font-bold text-lg">{}</span>
                </div>
                <p className="text-gray-200 text-md leading-relaxed mb-2 line-clamp-2">
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

export default Menu;