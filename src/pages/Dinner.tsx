import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MenuItem {
  name: { en: string; jp: string; };
  description: { en: string; jp: string; };
  category: { en: string; jp: string; };
  price: string;
  image: string;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large';
}

interface AccordionProps {
    
  title: { en: string; jp: string; };
  items: MenuItem[];
  language: 'en' | 'jp';
}

function Accordion({ title, items, language }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-orange-100/50 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden mb-6 border border-orange-200/30">
      <motion.button
        whileHover={{ backgroundColor: 'rgba(251, 146, 60, 0.1)' }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-6 h-6 text-orange-600" />
          <h2 className="text-2xl font-serif text-gray-900">{title[language]}</h2>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </motion.button>
      
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {items.map((item, index) => (
            <motion.div
              key={item.name.en}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4">
                <span className="text-orange-300 text-sm font-medium">
                  {item.category[language]}
                </span>
                <h3 className="text-white text-lg font-semibold mt-1">
                  {item.name[language]}
                </h3>
                <p className="text-gray-200 text-sm mt-1">
                  {item.description[language]}
                </p>
                <p className="text-orange-300 font-semibold mt-2">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="px-6 pb-6">
          <p className="text-sm text-gray-600">
            {language === 'en' 
              ? 'Nan or rice, soup & papad is included with curry. Please select your spice level (Mild, Medium, Hot, Extra Hot).'
              : 'カレーにはナンまたはライス、スープ、パパドが付きます。辛さレベルを選択してください (弱辛、中辛、辛口、極辛)'}
          </p>
        </div>
      </div>
    </div>
  );
}

const menuItems = {
  seafood: [ 
    {
        name: { en: "Fish Curry", jp: "魚のカレー" },
        description: { en: "Boneless Fish Cooked in Masala Sauce", jp: "骨なし魚のマサラソース煮" },
        category: { en: "Seafood", jp: "海鮮" },
        price: "¥1280",
        image: "https://images.unsplash.com/photo-1600699626575-36420e191563?w=800&auto=format&fit=crop&q=60"
      },
      {
        name: { en: "Chilli Fish", jp: "チリ魚" },
        description: { en: "Spicy Fish Curry", jp: "スパイシーフィッシュカレー" },
        category: { en: "Seafood", jp: "海鮮" },
        price: "¥1280",
        image: "https://images.unsplash.com/photo-1626102555140-cc4b68834fac?w=800&auto=format&fit=crop&q=60"
      },
      {
        name: { en: "Prawn Masala", jp: "エビマサラ" },
        description: { en: "Prawns Cooked in Tomato Masala Paste", jp: "エビのトマトマサラペースト煮" },
        category: { en: "Seafood", jp: "海鮮" },
        price: "¥1380",
        image: "https://images.unsplash.com/photo-1627907228175-2bf846a303b4?w=800&auto=format&fit=crop&q=60"
      },
      {
        name: { en: "Chilli Garlic Prawn", jp: "チリガーリックプロウン" },
        description: { en: "Prawn Curry Cooked with Chilli and Garlic Sauce", jp: "エビのチリソースとガーリックソースのカレー" },
        category: { en: "Seafood", jp: "海鮮" },
        price: "¥1380",
        image: "https://images.unsplash.com/photo-1632557656422-5c8e145b5e0d?w=800&auto=format&fit=crop&q=60"
      },
      {
        name: { en: "Mix Seafood", jp: "ミックスシーフード" },
        description: { en: "Prawns, Squid & Clam Curry", jp: "エビ、イカ、アサリのカレー" },
        category: { en: "Seafood", jp: "海鮮" },
        price: "¥1280",
        image: "https://images.unsplash.com/photo-1632557656422-5c8e145b5e0d?w=800&auto=format&fit=crop&q=60"
      }
    ],
  mutton: [
    {
        name: { en: "Palak Mutton", jp: "パラック (サーグ) マトン" },
        description: { en: "Mutton in Spinach Curry", jp: "マトンのほうれん草カレー" },
        category: { en: "Mutton", jp: "マトン" },
        price: "¥1280",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=60"
      },
      {
        name: { en: "Mughlai Mutton", jp: "シャヒマトン" },
        description: { en: "Slowly cooked mutton in spicy sauce", jp: "じっくり煮込んだ羊肉のスパイシーソース添え" },
        category: { en: "Mutton", jp: "マトン" },
        price: "¥1280",
        image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5c?w=800&auto=format&fit=crop&q=60"
      },
      {
        name: { en: "Mutton Do Pyaza", jp: "マトン・ドゥ・ピアザ" },
        description: { en: "Mutton, Pepper, & Onion Curry", jp: "マトン、ペッパー、オニオンのカレー" },
        category: { en: "Mutton", jp: "マトン" },
        price: "¥1280",
        image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5c?w=800&auto=format&fit=crop&q=60"
      },
      {
        name: { en: "Dal Gosht", jp: "ダル・ゴシュト" },
        description: { en: "Beans & Mutton Curry", jp: "ビーンズ&マトンカレー" },
        category: { en: "Mutton", jp: "マトン" },
        price: "¥1280",
        image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5c?w=800&auto=format&fit=crop&q=60"
      },
      {
        name: { en: "Mutton Binda Aloo", jp: "マトンピンダアルー" },
        description: { en: "Mutton and Potato (Aloo) curry", jp: "マトンとジャガイモ (アルー)のカレー" },
        category: { en: "Mutton", jp: "マトン" },
        price: "¥1280",
        image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5c?w=800&auto=format&fit=crop&q=60"
      } 
  ],
  chicken: [
    {
        name: { en: "Butter Chicken", jp: "バターチキン" },
        description: { en: "Creamy Butter Tomato Sauce Chicken Curry", jp: "クリーミーパタートマトソースチキンカレー" },
        category: { en: "Chicken", jp: "チキン" },
        price: "¥1280",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=60"
      },
      {
        name: { en: "Kadhai Chicken", jp: "カダイチキン" },
        description: { en: "Chicken in Spicy Curry", jp: "チキンのスパイシーカレー" },
        category: { en: "Chicken", jp: "チキン" },
        price: "¥1180",
        image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5c?w=800&auto=format&fit=crop&q=60"
      },
      {
        name: { en: "Chicken Tikka Masala", jp: "チキンティッカマサラ" },
        description: { en: "Roasted Marinated Chicken in Spiced Curry Sauce", jp: "マリネチキンのローストスパイスカレーソース" },
        category: { en: "Chicken", jp: "チキン" },
        price: "¥1180",
        image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5c?w=800&auto=format&fit=crop&q=60"
      },
      {
        name: { en: "Chicken Mughlai", jp: "チキンムグライ" },
        description: { en: "Mild chicken curry with boiled egg", jp: "マイルドチキンカレーゆで卵添え" },
        category: { en: "Chicken", jp: "チキン" },
        price: "¥1280",
        image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5c?w=800&auto=format&fit=crop&q=60"
      }
  ],
  vegetable: [
    {
      "name": { "en": "Dal Fry", "jp": "ダルフライ" },
      "description": { "en": "Mixed Lentils Fried with Cumin, Onion & Garlic", "jp": "カミン、オニオン、ガーリックで揚げたレンズ豆のミックス" },
      "category": { "en": "Vegetable", "jp": "野菜" },
      "price": "¥980",
      "image": "https://images.unsplash.com/photo-1600699626575-36420e191563?w=800&auto=format&fit=crop&q=60"
    },
    {
      "name": { "en": "Vegetable Curry", "jp": "ベジタブルカレー" },
      "description": { "en": "Potato, Green Peas, Green Beans, Mushrooms, Carrot, Cauliflower Curry", "jp": "ジャガイモ、グリーンピース、インゲン、マッシュルーム、ニンジン、カリフラワーカレー" },
      "category": { "en": "Vegetable", "jp": "野菜" },
      "price": "¥1180",
      "image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=60"
    },
    {
      "name": { "en": "Aloo Bhindi", "jp": "アルービンディ" },
      "description": { "en": "Potato & Okra Cooked in Light Curry Sauce", "jp": "ジャガイモとオクラのあっさりカレーソース" },
      "category": { "en": "Vegetable", "jp": "野菜" },
      "price": "¥1280",
      "image": "https://images.unsplash.com/photo-1604152135912-04a022e2369f?w=800&auto=format&fit=crop&q=60"
    },
    {
      "name": { "en": "Aloo Baigan", "jp": "アルー・バインガン" },
      "description": { "en": "Potato & Eggplant Cooked in Light Curry Sauce", "jp": "ジャガイモとナスのあっさりカレーソース" },
      "category": { "en": "Vegetable", "jp": "野菜" },
      "price": "¥1280",
      "image": "https://images.unsplash.com/photo-1589302336062-13d1c0b8d6b7?w=800&auto=format&fit=crop&q=60"
    },
    {
      "name": { "en": "Palak Paneer", "jp": "パラック・パニール" },
      "description": { "en": "Indian Cottage Cheese in Spinach Sauce", "jp": "インドのカッテージチーズのほうれん草ソース" },
      "category": { "en": "Vegetable", "jp": "野菜" },
      "price": "¥1280",
      "image": "https://images.unsplash.com/photo-1626082890717-b51a6b66cf3b?w=800&auto=format&fit=crop&q=60"
    },
    {
      "name": { "en": "Sahi Paneer", "jp": "シャヒパニール" },
      "description": { "en": "Indian Cottage Cheese in Spicy Sauce", "jp": "インド産カッテージチーズのスパイシーソース添え" },
      "category": { "en": "Vegetable", "jp": "野菜" },
      "price": "¥1280",
      "image": "https://images.unsplash.com/photo-1591522810865-26414b3f8494?w=800&auto=format&fit=crop&q=60"
    },
    {
      "name": { "en": "Palak Mushroom", "jp": "パラックキノコ" },
      "description": { "en": "Mushroom in Spinach Sauce", "jp": "キノコのほうれん草ソース" },
      "category": { "en": "Vegetable", "jp": "野菜" },
      "price": "¥1280",
      "image": "https://images.unsplash.com/photo-1579005616914-15d0b9c51abe?w=800&auto=format&fit=crop&q=60"
    },
    {
      "name": { "en": "Paneer Butter Masala", "jp": "パニールバターマサラ" },
      "description": { "en": "Indian Cottage Cheese Cooked in Butter Masala Sauce", "jp": "インド産カッテージチーズのバターマサラソース煮" },
      "category": { "en": "Vegetable", "jp": "野菜" },
      "price": "¥1180",
      "image": "https://images.unsplash.com/photo-1592251771074-39d1266c8754?w=800&auto=format&fit=crop&q=60"
    },
    {
      "name": { "en": "Chana Masala", "jp": "チャナマサラ" },
      "description": { "en": "Chickpeas Cooked in Aromatic Spices", "jp": "ひよこ豆の香り豊かなスパイス煮" },
      "category": { "en": "Vegetable", "jp": "野菜" },
      "price": "¥1180",
      "image": "https://images.unsplash.com/photo-1607619056573-f4b404a26c46?w=800&auto=format&fit=crop&q=60"
    }
  ]
  
};

function Dinner() {
  const [language, setLanguage] = useState<'en' | 'jp'>('en');
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(".accordion", {
        onEnter: (elements) => {
          gsap.from(elements, {
            opacity: 0,
            y: 60,
            stagger: 0.15,
            duration: 1,
            ease: "power4.out"
          });
        },
        once: true
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-100 to-orange-50">
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-6 sticky top-0 bg-orange-100/50 backdrop-blur-lg z-50 border-b border-orange-200/50 shadow-md"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-serif text-gray-900">Spice & Zen</h1>
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

      <main ref={mainRef} className="container mx-auto px-6 py-12">
        <Accordion 
          title={{ en: "Seafood Delicacies", jp: "海鮮珍味" }}
          items={menuItems.seafood}
          language={language}
        />
        <Accordion 
          title={{ en: "Mutton Curries", jp: "マトンカレー" }}
          items={menuItems.mutton}
          language={language}
        />
        <Accordion 
            
          title={{ en: "Chicken Curries", jp: "チキンカレー" }}
          items={menuItems.chicken}
          language={language}
        />
        <Accordion 
          title={{ en: "Vegetable Delicacies", jp: "野菜珍味" }}
          items={menuItems.vegetable}
          language={language}
        />
      </main>
    </div>
  );
}

export default Dinner;