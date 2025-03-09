import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
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

const menuItems: MenuItem[] = [
    {
        name: { en: "Biryani/Rice", jp: "ビリヤニ . ライス" },
        description: { en: "Spicy pilaf with basmati rice (Indian rice)", jp: "バスマティ米（インド米）を使ったスパイシーピラフ" },
        category: { en: "Rice Dishes", jp: "ライス料理" },
        image: "/Website_Food Pictures/Rice_Biryani/Chicken Biryani.jpg",
        featured: true,
        size: "large",
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
        image: "/Website_Food Pictures/Rice_Biryani/Fried Rice .jpg",
        size: "small",
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
        image: "/Website_Food Pictures/Rice_Biryani/Saffron Rice.jpg",
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

            <main className="container mx-auto max-w-[1400px] px-6 py-12">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-gray-900 shadow-xl mb-16">
                    <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/a4/66/9a/a4669a419a1d51fc927182f6660bfb3e.jpg')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1 }}
                            className="text-6xl font-bold"
                        >
                            {language === 'en' ? "Biryani/Rice " : "ビリヤニ . ライス"}
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1, delay: 0.3 }}
                            className="mt-6 text-xl text-orange-400 max-w-3xl"
                        >
                            {language === 'en' 
                                ? "A delightful fusion of flavors bringing together the best of Indian and Japanese cuisine."
                                : "インドと日本の最高の味を融合させた、美味しいメインコースをお楽しみください。"}
                        </motion.p>
                    </div>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {menuItems.map((item, index) => (
                        <motion.div 
                            key={item.name.en}
                            ref={el => cardsRef.current[index] = el}
                            className={`bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ${!item.variations ? 'pb-0' : ''}`}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="relative h-[300px]">
                                <img
                                    src={item.image}
                                    alt={item.name[language]}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-8">
                                    <div className="flex justify-between items-start gap-2 mb-3">
                                        <h3 className="text-3xl font-semibold text-white leading-tight">
                                            {item.name[language]}
                                        </h3>
                                    </div>
                                    <p className="text-gray-200 text-lg leading-relaxed mb-4">
                                        {item.description[language]}
                                    </p>
                                    <span className="inline-block text-base text-orange-400 bg-black/40 backdrop-blur-sm rounded-full px-5 py-2.5 border border-orange-400/30">
                                        {item.category[language]}
                                    </span>
                                </div>
                            </div>
                            
                            {item.variations && (
                                <div className="p-8">
                                    <h4 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-3">
                                        {language === 'en' ? 'Available Options' : 'オプション'}
                                    </h4>
                                    <div className="grid gap-3">
                                        {item.variations.map((variation, vIndex) => (
                                            <div 
                                                key={vIndex} 
                                                className="flex justify-between items-center p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-200"
                                            >
                                                <span className="text-lg font-medium text-gray-800">
                                                    {variation.name[language]}
                                                </span>
                                                <span className="text-lg font-semibold text-orange-600">
                                                    {variation.price || ''}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
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

export default Biryani;