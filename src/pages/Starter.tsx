import React, { useEffect, useRef, useState } from 'react';
import { UtensilsCrossed, Flame, Salad } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MenuItem {
  name: { en: string; jp: string };
  description: { en: string; jp: string };
  price: string;
  category: { en: string; jp: string };
  image: string;
  size?: "small" | "medium" | "large";
  mobsize?: 'small' | 'medium' | 'large';
}

const menuItems: MenuItem[] = [
  {
    name: { en: "Chicken Tikka", jp: "チキンティッカ" },
    description: { en: "Spicy Chicken Barbeque (4 pc)", jp: "スパイシーチキンバーベキュー" },
    price: "¥500",
    category: { en: "Grills", jp: "グリル" },
    image: "/Website_Food Pictures/Starters & Grills/Chicken Tikka .jpg",
    size: "medium",
    mobsize: "medium"
  },
  {
    name: { en: "Tandoori Chicken", jp: "タンドリーチキン" },
    description: { en: "Tandoori Grilled Chicken Marinated in Spices for 24 hours (1 Leg pc)", jp: "24時間スパイスに漬け込んだタンドリーグリルチキン" },
    price: "¥550",
    category: { en: "Grills", jp: "グリル" },
    image: "/Website_Food Pictures/Starters & Grills/Tandoori Chicken.jpg",
    size: "small",
    mobsize: "large"
  },
  {
    name: { en: "Garlic Tikka", jp: "ガーリックティッカ" },
    description: { en: "Garlic-Flavoured Chicken Barbeque (4 pc)", jp: "ガーリック風味のチキンバーベキュー" },
    price: "¥600",
    category: { en: "Grills", jp: "グリル" },
    image: "/Website_Food Pictures/Starters & Grills/Garlic Tikka .jpg",
    size: "small",
    mobsize: "large"
  },
  {
    name: { en: "Fish Tikka", jp: "フィッシュティッカ" },
    description: { en: "Spicy Fish Barbeque (4 pc)", jp: "スパイシーな魚のバーベキュー" },
    price: "¥700",
    category: { en: "Grills", jp: "グリル" },
    image: "/Website_Food Pictures/Starters & Grills/Fish-Tikka-2.jpg",
    size: "small",
    mobsize: "medium"
  },
  {
    name: { en: "Seek Kabab", jp: "シークカバブ" },
    description: { en: "Spicy Minced Chicken Skewer (4 pc)", jp: "スパイシーな鶏ひき肉の串" },
    price: "¥800",
    category: { en: "Grills", jp: "グリル" },
    image: "/Website_Food Pictures/Starters & Grills/Seek Kebab.v1.jpg",
    size: "small",
    mobsize: "small"
  },
  {
    name: { en: "Samosa", jp: "サモサ" },
    description: { en: "Fried patty with potato, onion & nuts filling (2 pc)", jp: "ポテト、タマネギ、ナッツを詰めたフライドバティ" },
    price: "¥500",
    category: { en: "Snacks", jp: "スナック" },
    image: "/Website_Food Pictures/Starters & Grills/",
    size: "small",
    mobsize: "medium"
  },
  {
    name: { en: "Green Salad", jp: "グリーンサラダ" },
    description: { en: "Tomato, cucumber, corn and lettuce salad", jp: "トマト、キュウリ、コーン、レタスのサラダ" },
    price: "¥500",
    category: { en: "Salads", jp: "サラダ" },
    image: "/Website_Food Pictures/Starters & Grills/",
    size: "small",
    mobsize: "large"
  },
  {
    name: { en: "Chicken Salad", jp: "チキンサラダ" },
    description: { en: "Chicken, tomato, cabbage, lettuce, carrot, green pepper", jp: "鶏肉、トマト、キャベツ、レタス、玉ねぎ、にんじん、ピーマン" },
    price: "¥700",
    category: { en: "Salads", jp: "サラダ" },
    image: "/Website_Food Pictures/Starters & Grills/",
    size: "large",
    mobsize: "large"
  }
];

function Starters() {
  const [language, setLanguage] = useState<'en' | 'jp'>('en');
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Banner animations
    const bannerTl = gsap.timeline();
    bannerTl
      .fromTo(bannerRef.current?.querySelector('.banner-bg'),
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
      )
      .fromTo(bannerRef.current?.querySelector('.banner-content'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=1"
      );

    // Cards animation
    if (!gridRef.current) return;

    const cards = cardsRef.current.filter(Boolean);
    
    cards.forEach((card, index) => {
      // Initial scroll animation
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1
        }
      );

      // Hover animations
      const content = card?.querySelector('.card-content');
      const overlay = card?.querySelector('.card-overlay');
      const details = card?.querySelector('.card-details');

      // Set initial states
      gsap.set(content, { y: 30, opacity: 0 });
      gsap.set(overlay, { opacity: 0 });
      gsap.set(details, { y: 20, opacity: 0 });

      card?.addEventListener('mouseenter', () => {
        gsap.to(overlay, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(content, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out"
        });
        gsap.to(details, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.1,
          ease: "power3.out"
        });
      });

      card?.addEventListener('mouseleave', () => {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(content, {
          y: 30,
          opacity: 0,
          duration: 0.4,
          ease: "power3.out"
        });
        gsap.to(details, {
          y: 20,
          opacity: 0,
          duration: 0.3,
          ease: "power3.out"
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      cardsRef.current.forEach(card => {
        card?.removeEventListener('mouseenter', () => {});
        card?.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-100 to-orange-50 backdrop-blur-xl">
      <header 
        ref={headerRef}
        className="py-6 sticky top-0 bg-orange-100/50 backdrop-blur-lg z-50 border-b border-orange-200/50 shadow-md"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="w-8 h-8 text-orange-600" />
            <h1 className="text-3xl font-serif text-gray-900"><a href='/menu'>North Park</a></h1>
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
      </header>

      <main className="container mx-auto max-w-7xl px-6 py-12">
        <div 
          ref={bannerRef}
          className="relative w-full h-[300px] rounded-2xl overflow-hidden bg-gray-900 shadow-lg mb-10"
        >
          <div className="banner-bg absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="banner-content relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <Flame className="w-8 h-8 text-orange-500" />
              {language === 'en' ? "Starters & Grills" : "前菜 & グリル"}
              <Salad className="w-8 h-8 text-green-500" />
            </h1>
            <p className="mt-5 text-lg text-orange-400 max-w-2xl">
              {language === 'en' 
                ? "Discover our selection of authentic Indian starters, grilled specialties, and fresh salads" 
                : "本格的なインド料理の前菜、グリル料理、フレッシュサラダをご堪能ください"}
            </p>
          </div>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px]"
        >
          {menuItems.map((item, index) => (
            <div
              key={item.name.en}
              ref={el => cardsRef.current[index] = el}
              className={`
                group relative rounded-2xl overflow-hidden bg-orange-100/50 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer
                ${item.size === 'medium' ? 'md:col-span-2 lg:col-span-2' : ''}
                ${item.size === 'large' ? 'md:col-span-2 lg:col-span-2 md:row-span-2' : ''}
                ${item.mobsize === 'medium' ? 'sm:col-span-2 sm:row-span-1 md:col-span-1 md:row-span-1' : ''}
                ${item.mobsize === 'large' ? 'sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-2' : ''}
              `}
            >
              <img
          src={item.image}
          alt={item.name[language]}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
              <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-0 transition-opacity duration-300" />
              <div className="card-content absolute inset-x-0 bottom-0 p-4 translate-y-8 opacity-0">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {item.name[language]}
                  </h3>
                  <span className="text-yellow-400 font-bold text-lg">{item.price}</span>
                </div>
                <div className="card-details translate-y-4 opacity-0">
                  <p className="text-gray-200 text-sm leading-relaxed mb-3">
                    {item.description[language]}
                  </p>
                  <span className="inline-block text-xs text-orange-400 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 border border-orange-400/30">
                    {item.category[language]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Starters;