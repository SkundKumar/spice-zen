import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Clock, Phone, Mail, ChevronDown, Utensils, MessageSquare, Sparkles, Heart, Star, Award, Users, Truck} from 'lucide-react';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [language, setLanguage] = useState<'en' | 'jp'>('en');
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  const translations = {
    en: {
      title: "North Park,",
      title2: "Indian Restaurant & Café",
      subtitle: "The Authentic taste of India",
      exploreMenu: "Explore Menu",
      visitUs: "Visit Us",
      address: "1-7 Higashimanabemachi, Tsuchiura, Ibaraki 300-0052",
      connect: "Connect With Us",
      toggleLanguage: "日本語",
      explore: "Explore Full Menu",
      para: "At our Indian restaurant, we offer a warm and vibrant atmosphere that reflects the rich culture and traditions of India. Our spacious dining area can comfortably host both intimate dinners and large gatherings, making it an ideal spot for any occasion. We also provide ample free parking, ensuring that your visit is convenient from start to finish. Inside, you'll find a beautifully decorated interior, adorned with traditional Indian motifs and colors, creating an inviting ambiance that enhances the authentic dining experience we offer."
    },
    jp: {
      title: "スパイス＆禅",
      title2:"",
      subtitle: "インドの本場の味",
      exploreMenu: "メニューを見る",
      visitUs: "お店に行く",
      address: "東京都渋谷区1-2-3 150-0002",
      connect: "お問い合わせ",
      toggleLanguage: "English",
      explore: "メニュー",
      para: " 私たちのインド料理レストランでは、インドの豊かな文化と伝統を反映した温かく活気のある雰囲気を提供しています。広々としたダイニングエリアは、親しいディナーから大規模な集まりまで、どんなシーンにも対応できる理想的な空間です。また、無料の広い駐車場を完備しており、訪れる際の利便性も抜群です。店内は、伝統的なインドのモチーフとカラーで美しく装飾されており、本格的なインド料理を楽しむための魅力的な雰囲気を演出しています。"
    },
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'jp' : 'en'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = ['home', 'about', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (aboutRef.current && window.scrollY > aboutRef.current.offsetTop - window.innerHeight / 2) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }

      const heroSection = document.querySelector('.hero-content');
      if (heroSection) {
        const offset = window.scrollY * 0.5;
        heroSection.setAttribute('style', `--parallax-offset: ${offset}px`);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-up').forEach(el => {
      observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-1 py-6">
          <div className="flex items-center  justify-between">
            <div>
            <div className={`mt-2 text-md md:text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
              {translations[language].title}
            </div>
            <div className={`text-md md:text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
              {translations[language].title2}
            </div>
            </div>
            
            <div className="hidden md:flex space-x-8  mr-36">
              {['home', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  } ${activeSection === section ? 'text-orange-600' : ''} hover:text-orange-600`}
                >
                  <span className="capitalize">{section}</span>
                  {activeSection === section && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform origin-left transition-transform duration-300 scale-x-100"></span>
                  )}
                </button>
              ))}
              <a className={`relative transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }  hover:text-orange-600`}href="/galary">Gallery</a>
            </div>
            
            <button
              onClick={toggleLanguage}
              className={`px-4 py-2 ${isScrolled ? 'bg-orange-500' : 'bg-white'} ${
                isScrolled ? 'text-white' : 'text-orange-500'
              } rounded-full hover:bg-orange-600 hover:text-white transition`}
            >
              {translations[language].toggleLanguage}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/Website_Food Pictures/Restaurant pictures/Extrior 1.jpeg" 
            alt="Restaurant interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center hero-content parallax">
          <div className="px-4 space-y-8 scale-up">
            <div className="relative inline-block">
              <Sparkles className="absolute -top-8 -left-8 w-6 h-6 text-orange-400 floating" />
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                {translations[language].title}
              </h1>
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                {translations[language].title2}
              </h1>
              <Sparkles className="absolute -bottom-8 -right-8 w-6 h-6 text-orange-400 floating" />
            </div>
            <p className="text-xl md:text-3xl text-white mb-8 font-light">
              {translations[language].subtitle}
            </p>
            <button 
              className="bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group"
            >
              <a href='/menu'>{translations[language].explore}</a> 
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up">
            <div className="animate-bounce w-6 h-6 text-white">
              <ChevronDown className="w-full h-full" />
            </div>
          </div>
        )}
      </section>

      {/* Delivery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in-up">
            <div className="inline-flex items-center space-x-3 mb-4">
              <Truck className="text-orange-600 w-8 h-8" />
              <h2 className="text-4xl font-bold">Food Delivery</h2>
            </div>
            <p className="text-gray-600 text-lg">Enjoy our delicious meals from the comfort of your home</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="https://www.ubereats.com/jp-en/store/north-park-indian-restaurant-%26-cafe-%E3%83%8E%E3%83%BC%E3%82%B9%E3%83%8F%E3%83%BC%E3%82%AF-%E3%82%A4%E3%83%B3%E3%83%86%E3%82%A3%E3%82%A2%E3%83%B3%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%26%E3%82%AB%E3%83%95%E3%82%A7/6H00l28aSHKV5y8Miga5ig?diningMode=PICKUP" target="_blank" rel="noopener noreferrer" 
               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in-up">
              <img src="https://1000logos.net/wp-content/uploads/2020/08/Uber-Eats-Logo-2018.jpg" 
                   alt="Uber Eats" 
                   className="w-62 h-36 object-contain mx-auto mb-4"/>
              <h3 className="text-xl font-bold text-center mb-2">Uber Eats</h3>
              <p className="text-gray-600 text-center">Fast delivery to your doorstep</p>
            </a>
            
            <a href="https://demae-can.com/shop/menu/3392106 " target="_blank" rel="noopener noreferrer" 
               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in-up delay-100">
              <img src="https://vos.line-scdn.net/strapi-cluster-instance-bucket-84/1_62eaf29e06.png" 
                   alt="Demae-can" 
                   className="w-96  object-contain mx-auto mb-4"/>
              <h3 className="text-xl font-bold text-center mb-2">出前館</h3>
              <p className="text-gray-600 text-center">Japan's favorite delivery service</p>
            </a>
            
            
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 text-lg">A journey of flavors, tradition, and innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-in-left">
              <img 
                src="/Website_Food Pictures/Restaurant pictures/Exterior-1.jpg" 
                alt="Restaurant ambiance" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6 fade-in-right">
              <h3 className="text-3xl font-bold text-gray-800">A Fusion of Cultures</h3>
              <p className="text-gray-600 leading-relaxed">
                {translations[language].para}
              </p>
              <div className='w-32 p-2 flex justify-center items-center rounded-lg bg-orange-500 text-white hover:bg-white hover:text-orange-500  transition-all duration-300 hover:drop-shadow-2xl'>
                <a className=" flex items-center justify-center font-semibold " href="/galary">Explore Gallery</a>
            </div>
            </div>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl shadow-lg fade-in-up">
              <div className="p-3 bg-orange-100 rounded-full w-fit mb-6">
                <Heart className="text-orange-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">Our Passion</h4>
              <p className="text-gray-600">
                We pour our heart into every dish, ensuring each plate reflects our dedication to authentic flavors and innovative presentation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg fade-in-up delay-100">
              <div className="p-3 bg-orange-100 rounded-full w-fit mb-6">
                <Star className="text-orange-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">Quality First</h4>
              <p className="text-gray-600">
                We source only the finest ingredients, combining premium Indian spices with local Japanese produce to create exceptional dishes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg fade-in-up delay-200">
              <div className="p-3 bg-orange-100 rounded-full w-fit mb-6">
                <Users className="text-orange-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">Our Team</h4>
              <p className="text-gray-600">
                Our diverse team brings together expertise from both Indian and Japanese culinary traditions, creating a unique dining experience.
              </p>
            </div>
          </div>

          {/* Enhanced Press Coverage Section */}
          <div className="text-center fade-in-up mt-16">
            <div className="inline-flex items-center space-x-2 mb-8">
              <Award className="text-orange-600 w-8 h-8" />
              <h3 className="text-2xl font-bold">Press Coverage & Reviews</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto ">
              <div className="bg-white p-6 rounded-xl shadow-lg ">
                
                
                <p className="text-gray-600 mb-4">
                  "I visited during dinner time.

I had the chicken biryani, and the yogurt sauce on a separate plate was sour, refreshing, and delicious, but I wasn't that good at it, so I was glad I was able"
                </p>
                <p className="font-semibold"></p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                
                <p className="text-gray-600 mb-4">
                  "It's a savior when your body is tired.

Grilled dishes such as tandoori chicken and chicken malai tikka are exquisite. It's soft, not spicy, and the combination of yogurt and spices is exquisite"
                </p>
                <p className="font-semibold"></p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                
                <p className="text-gray-600 mb-4">
                  "Indian food is one of my favorites and I was very pleased with my experience and the dishes I tried in this restaurant.

Just at the entrance, you can observe a lot of decorations that you normally don't find in other indian restaurants. Then inside, the whole atmosphere makes you feel like you are in a small part of India"
                </p>
                <p className="font-semibold"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in-up">Connect With Us</h2>
          
          {/* Bento Grid Contact Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Location Card */}
            <div className="bg-orange-50 p-8 rounded-2xl shadow-lg fade-in-left transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-orange-100 rounded-full">
                  <MapPin className="text-orange-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Visit Us</h3>
              </div>
              <p className="text-gray-600">1-7 Higashimanabemachi, Tsuchiura, Ibaraki 300-0052</p>
              <div className="mt-6">
                <iframe
                  className="w-full h-48 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d201.50819145660188!2d140.206474!3d36.090293!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDA1JzI1LjAiTiAxNDDCsDEyJzIzLjMiRQ!5e0!3m2!1sen!2sus!4v1740129253055!5m2!1sen!2sus"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Hours & Contact Card */}
            <div className="bg-orange-50 p-8 rounded-2xl shadow-lg fade-in-up space-y-8">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Clock className="text-orange-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Hours</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">Monday - Sunday: '11:00 - 15:00' & '17:00 - 22:30'
                  </p>
               
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Phone className="text-orange-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Contact</h3>
                </div>
                <p className="text-gray-600">029-811-9527</p>
                <p className="text-gray-600">northparknp@gmail.com</p>
              </div>
            </div>

            {/* Reservation & Inquiry Card */}
            <div className="lg:row-span-1 bg-orange-50 p-8 rounded-2xl shadow-lg fade-in-right">
              <h3 className="text-2xl font-semibold mb-6">Make a Reservation</h3>
              <p className="text-gray-600 mb-8">
                Join us for an unforgettable dining experience. Book your table or send us an inquiry.
              </p>
              <div className="space-y-4">
                <a 
                  href="#"
                  className="w-full inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Utensils className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Book a Table
                </a>
                <a 
                  href="#"
                  className="w-full inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 group"
                >
                  <MessageSquare className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Send Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center scale-up">
          <p className="text-2xl font-bold mb-4 gradient-text">North Park, Indian Restaurant & Café</p>
          <p className="text-gray-400">The Authentic taste of Indian</p>
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://www.facebook.com/share/1FJh5xvfWj/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <CiFacebook className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/northpark.indian?igsh=MXUxcWNxbno4MzFzMw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            
              
            
          </div>
          <div className="mt-8 text-sm text-gray-400">
            © 2025 North Park, Indian Restaurant & Café. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;