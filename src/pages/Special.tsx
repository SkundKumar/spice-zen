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
    footNote: { en: string; jp: string };
}

const menuItems: MenuItem[] = [
    {
        name: { en: "Vegetable Thali", jp: "ベジタブルターリー" },
        description: { en: "A wholesome vegetarian meal with assorted delicacies", jp: "様々な美味しいベジタリアン料理の盛り合わせ" },
        category: { en: "Thali", jp: "ターリー" },
        image: "/Website_Food Pictures/Special Meal Sets/Vegetable Thali_Dinner .jpg",
        size: "large",
        mobsize: "large",
        price: "",
        variations: [
          { name: { en: "Dal", jp: "豆カレー" }, price: "" },
          { name: { en: "Samosa", jp: "サモサ " }, price: "" },
          { name: { en: "Paneer Butter Masala", jp: "パニールバターマサラ" }, price: "" },
          { name: { en: "Palak Mushroom", jp: "パラックキノコ" }, price: "" },
          { name: { en: "Vegetable Curry", jp: "ベジタブルカレー" }, price: "" },
          { name: { en: "Salad, Papad, Nan, Rice, & Soft Drink ", jp: "サモサ サラダ パパド ナン ライス ソフトドリンク" }, price: "" },

          
        ],
        footNote: { en: "Choose any two dishes from the four dishes & any soft drink", jp: "4つの料理の中から2つの料理と、お好きなソフトドリンクをお選びください。" }
    },
    {
        name: { en: "Non-Veg Thali", jp: "ノンベジタリー" },
        description: { en: "A meaty delight featuring classic Indian dishes", jp: "伝統的なインドの肉料理の贅沢な盛り合わせ" },
        category: { en: "Thali", jp: "ターリー" },
        image: "/Website_Food Pictures/Special Meal Sets/Non veg Thali_Dinner.JPG",
        size: "small",
        mobsize: "large",
        price: "",
        variations: [
          { name: { en: "Tandoori Chicken", jp: "タンドリーチキン" }, price: "" },
          { name: { en: "Seek Kebab", jp: "シークケバブ" }, price: "" },
          { name: { en: "Mutton Curry", jp: "マトンカレー" }, price: "" },
          { name: { en: "Chicken Curry", jp: "チキンカレー" }, price: "" },
          { name: { en: "Keema Curry", jp: "キーマカレー" }, price: "" },
          { name: { en: "Vegetable Curry", jp: "ベジタブルカレー" }, price: "" },
          { name: { en: "Salad, Papad, Nan, Rice, & Soft Drink ", jp: "サモサ サラダ パパド ナン ライス ソフトドリンク" }, price: "" },
        ],
        footNote: { en: "Choose any two dishes from the four dishes & any soft drink", jp: "4つの料理の中から2つの料理と、お好きなソフトドリンクをお選びください。" }
    },
    {
        name: { en: "Seafood Thali", jp: "シーフードターリー" },
        description: { en: "A seafood lover's dream with freshly prepared dishes", jp: "新鮮な魚介類を使った贅沢な盛り合わせ" },
        category: { en: "Thali", jp: "ターリー" },
        image: "/Website_Food Pictures/Special Meal Sets/Seafood Thali_Dinner .jpg",
        size: "small",
        mobsize: "small",
        price: "",
        variations: [
          { name: { en: "Fish Tikka", jp: "フィッシュティッカ" }, price: "" },
          { name: { en: "Tandoori Prawn", jp: "タンドリープラウン" }, price: "" },
          { name: { en: "Seafood Curry", jp: "シーフードカレー" }, price: "" },
          { name: { en: "Prawn Curry", jp: "プラウンカレー" }, price: "" },
          { name: { en: "Salad, Papad, Nan, Rice, & Soft Drink ", jp: "サモサ サラダ パパド ナン ライス ソフトドリンク" }, price: "" },
        ],
        footNote: { en: "Choose any soft drink", jp: "お好きなソフトドリンクをお選びください。" }

    },
    {
        name: { en: "Garlic Kebab Masala Rice", jp: "ガーリックケバブマサラライス" },
        description: { en: "A flavorful rice dish with aromatic spices and garlic", jp: "香ばしいスパイスとガーリックの風味豊かなライス料理" },
        category: { en: "Rice Dishes", jp: "ライス料理" },
        image: "/Website_Food Pictures/Special Meal Sets/Garlic Nan with Kebab Masala & Rice-3.JPG",
        size: "medium",
        mobsize: "medium",
        price: "",
        variations: [
          { name: { en: "Kebab Masala", jp: "カバブマサラ" }, price: "" },
          { name: { en: "Garlic Naan", jp: "ガーリックナン" }, price: "" },
          { name: { en: "Basmati Rice", jp: "バスマティライス（インド米）" }, price: "" },
          { name: { en: "Softdrink", jp: "ソフトドリンク" }, price: "" }
        ],
        footNote: {en:"",jp:""}
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
                        <h1 className="text-3xl font-serif text-gray-900"><a href='/menu'>North Park, Indian Restaurant & Café</a></h1>
                    </div>
                    <a className="font-mono text-lg " href="/">Home</a>
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
                <div className="relative w-full h-[300px] rounded-2xl overflow-hidden bg-gray-900 shadow-lg mb-10">
                    <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/a4/66/9a/a4669a419a1d51fc927182f6660bfb3e.jpg')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1 }}
                            className="text-6xl font-bold"
                        >
                            {language === 'en' ? "Special Meal Sets" : "スペシャルミールセット"}
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

                <div className="grid gap-8 md:gap-12">
                    {menuItems.map((item, index) => (
                        <div
                            key={item.name.en}
                            ref={el => cardsRef.current[index] = el}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-[300px] md:h-[400px]">
                                <img
                                    src={item.image}
                                    alt={item.name[language]}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h2 className="text-3xl font-bold mb-2">{item.name[language]}</h2>
                                    <p className="text-lg text-gray-200">{item.description[language]}</p>
                                    <span className="inline-block mt-3 text-sm text-orange-400 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 border border-orange-400/30">
                                        {item.category[language]}
                                    </span>
                                </div>
                            </div>
                            
                            {item.variations && item.variations.length > 0 && (
                                <div className="p-6 bg-orange-50">
                                    <h3 className="text-2xl font-bold text-orange-900 mb-4">
                                        {language === 'en' ? 'Included Items' : '含まれる料理'}
                                    </h3>
                                    <div className="grid gap-3">
                                        {item.variations.map((variation, vIndex) => (
                                            <div 
                                                key={vIndex}
                                                className="flex justify-between items-center text-lg py-2 border-b border-orange-200 last:border-0"
                                            >
                                                <span className="text-gray-800">{variation.name[language]}</span>
                                                {variation.price && (
                                                    <span className="font-medium text-orange-600">{variation.price}</span>
                                                )}
                                                
                                            </div>
                                            
                                        ))}
                                        <p className='font-mono mt-10 border-dashed border-t border-black'>{item.footNote[language]}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="space-y-8 mt-12">
                    
                    <img className='rounded-xl shadow-lg' src="/Website_Food Pictures/Special Meal Sets/Family Set_Dinner Course-1.png" alt="Family Set Dinner Course" />
                    <img className='rounded-xl shadow-lg' src="/Website_Food Pictures/Special Meal Sets/Party Course .png" alt="Party Course" />
                    <h2 className='text-4xl font-bold '>Couple Set</h2>
                    <img className='rounded-xl shadow-lg' src="/Website_Food Pictures/Special Meal Sets/Couple set-Veg-v2.jpg" alt="Party Course" />
                    <h2 className='text-4xl font-bold '>Drink Set</h2>
                    <img className='rounded-xl shadow-lg' src="/Website_Food Pictures/Special Meal Sets/Drink Set_Dinner course.png" alt="Party Course" />
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

export default Special;