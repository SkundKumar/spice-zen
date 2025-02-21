
import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Clock, Phone, Mail, ChevronDown, Utensils, MessageSquare, Sparkles, Flame, Leaf, Soup, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [language, setLanguage] = useState<'en' | 'jp'>('en');
  const heroRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  const translations = {
    en: {
      title: "North Park",
      subtitle: " where authentic Indian flavors and culinary excellence awaits you!",
      exploreMenu: "Explore Menu",
      visitUs: "Visit Us",
      address:"1-7 Higashimanabemachi, Tsuchiura, Ibaraki 300-0052",
      connect: "Connect With Us",
      toggleLanguage: "日本語",
      explore: "Explore Full Menu",
    },
    jp: {
      title: "スパイス＆禅",
      subtitle: "インドの味と日本の優雅さの融合",
      exploreMenu: "メニューを見る",
      visitUs: "お店に行く",
      address: "東京都渋谷区1-2-3 150-0002",
      connect: "お問い合わせ",
      toggleLanguage: "English",
      explore:"メニュー"
    },
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'jp' : 'en'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = ['home', 'menu', 'contact'];
      
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

      // Hide scroll indicator when user scrolls into the menu section
      if (menuRef.current && window.scrollY > menuRef.current.offsetTop - window.innerHeight / 2) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }

      // Parallax effect for hero section
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
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <div className="text-2xl font-bold gradient-text">{translations[language].title}</div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'menu', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative text-white hover:text-orange-600 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } ${activeSection === section ? 'text-orange-600' : ''}`}
              >
                <span className="capitalize">{section}</span>
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform origin-left transition-transform duration-300 scale-x-100"></span>
                )}
              </button>
            ))}
          </div>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
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
            src="https://lh3.googleusercontent.com/fD65IKqwTsYKp_S8qZ-NB_CIFo1zqYqn32JNhkuFC7atwasYW7d9Lx9LMmNEh6WwSsKKZaaPnxO6bZWvxb2CaPI" 
            alt="Restaurant interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center hero-content parallax">
          <div className="px-4 space-y-8 scale-up">
            <div className="relative inline-block">
              <Sparkles className="absolute -top-8 -left-8 w-6 h-6 text-orange-400 floating" />
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              {translations[language].title}
              </h1>
              <Sparkles className="absolute -bottom-8 -right-8 w-6 h-6 text-orange-400 floating" />
            </div>
            <p className="text-xl md:text-3xl text-white mb-8 font-light">
              {translations[language].subtitle}
            </p>
            <button 
              onClick={() => navigate('/menu')}
              className="bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group"
            >
              {translations[language].explore} 
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

      {/* Menu Section */}
      <section id="menu" ref={menuRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Bento Experience</h2>
            <p className="text-gray-600 text-lg">A harmonious fusion of Indian spices and Japanese presentation</p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1400px] mx-auto">
            {/* Featured Item - Large */}
            <div className="md:col-span-2 md:row-span-2 bento-card group fade-in-left">
              <div className="relative h-full overflow-hidden rounded-3xl bg-orange-50">
                <img 
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
                  alt="Butter Chicken Ramen"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <Flame className="w-8 h-8 text-orange-400 mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">Butter Chicken</h3>
                  <p className="text-gray-200 mb-4">A fusion masterpiece combining creamy butter chicken with Japanese ramen noodles</p>
                  <p className="text-orange-400 font-bold text-xl">¥1800</p>
                </div>
              </div>
            </div>

            {/* Regular Items */}
            <div className="bento-card group fade-in-up">
              <div className="relative h-full overflow-hidden rounded-3xl bg-orange-50">
                <img 
                  src="https://imgs.search.brave.com/4OdPg6-LeSRxwXADVozycReX5BVsyRo_8B-t91cMo-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzQ1LzQ2LzE3/LzM2MF9GXzk0NTQ2/MTc1OV94SFVkRnUy/OGVFVTZXcGY3SDhw/M1VNN3Z5SEY2MHpZ/cS5qcGc"
                  alt="Curry Udon"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <Soup className="w-6 h-6 text-orange-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Rajma Chawal</h3>
                  <p className="text-orange-400 font-bold">¥1600</p>
                </div>
              </div>
            </div>

            <div className="bento-card group fade-in-right">
              <div className="relative h-full overflow-hidden rounded-3xl bg-orange-50">
                <img 
                  src="https://images.unsplash.com/photo-1542367592-8849eb950fd8?auto=format&fit=crop&w=800&q=80"
                  alt="Tandoori Bento"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <Flame className="w-6 h-6 text-orange-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Tandoori Thali</h3>
                  <p className="text-orange-400 font-bold">¥2000</p>
                </div>
              </div>
            </div>

            {/* Wide Item */}
            <div className="md:col-span-2 md:row-span-2 bento-card group fade-in-left">
              <div className="relative h-full overflow-hidden rounded-3xl bg-orange-50">
                <img 
                  src="https://imgs.search.brave.com/D53yuQn4L6l5qpu0rPbLKbB4CL-S7K5i1_vF2JtxUak/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jaG9sZS1iaGF0/dXJlLXBob3RvLXZp/bnRhZ2UtcGxhdGVf/MTAzNjk5OC0yOTgw/MTMuanBnP3NlbXQ9/YWlzX2h5YnJpZA"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <Leaf className="w-6 h-6 text-orange-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Chole Bhature</h3>
                  <p className="text-orange-400 font-bold">¥1200</p>
                </div>
              </div>
            </div>

            {/* Regular Items */}
            <div className="bento-card group fade-in-up">
              <div className="relative h-full overflow-hidden rounded-3xl bg-orange-50">
                <img 
                  src="https://imgs.search.brave.com/RNvbZKovHQ3ISrra1ThRSv4-t9OfdWkq6Iq3DDhS3wQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ2/MDAzMzkwMC9waG90/by9sYXNzaS1tYW5n/by5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Yl9OTG4wNTlU/WTkzRjUtTlFOcklD/VW5majB0OXAyeVJR/UWJoQWZ2RXZnST0"
                  alt="Matcha Lassi"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <Coffee className="w-6 h-6 text-orange-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Lassi</h3>
                  <p className="text-orange-400 font-bold">¥800</p>
                </div>
              </div>
            </div>

            <div className="bento-card group fade-in-right">
              <div className="relative h-full overflow-hidden rounded-3xl bg-orange-50">
                <img 
                  src="https://img.freepik.com/free-photo/fresh-homemade-flatbread-with-meat-spice-guacamole-plate-generated-by-artificial-intelligence_188544-124618.jpg?t=st=1740045676~exp=1740049276~hmac=cc494d1c4a53ceb37b7682fa8686cb99a8c34befb0ebc98516da2067673bb706&w=1480"
                  alt="Naan Katsu"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <Flame className="w-6 h-6 text-orange-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Naan </h3>
                  <p className="text-orange-400 font-bold">¥1900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="w-screen flex justify-center p-5"
         onClick={() => navigate('/Menu')} 
         >
  <a href="/menu" className="h-10 w-52 rounded-full bg-orange-500 flex justify-center items-center md:h-16 md:mt-10 transition duration-300 ease-in-out hover:bg-orange-600 hover:scale-105">
    <p className="text-white font-semibold">Explore Full Menu</p>
  </a>
</button>

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
                  <p className="text-gray-600">Monday - Sunday: 11:00 AM - 10:00 PM</p>
                  
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Phone className="text-orange-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Contact</h3>
                </div>
                <p className="text-gray-600"> 029-811-9527</p>
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
                  href="https://forms.gle/your-form-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Utensils className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Book a Table
                </a>
                <a 
                  href="https://forms.gle/your-form-link-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
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
          <p className="text-2xl font-bold mb-4 gradient-text">North Park</p>
          <p className="text-gray-400">Where tradition meets innovation</p>
          <div className="mt-8 text-sm text-gray-400">
            © 2024 North Park. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
  
}

export default Home