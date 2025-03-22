"use client"

import { useEffect, useState, useRef } from "react"
import {
  MapPin,
  Clock,
  Phone,
  ChevronDown,
  Utensils,
  MessageSquare,
  Sparkles,
  Heart,
  Star,
  Award,
  Users,
  Truck,
} from "lucide-react"
import { CiFacebook } from "react-icons/ci"
import { FaInstagram } from "react-icons/fa"

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [language, setLanguage] = useState("en")
  const heroRef = useRef(null)
  const aboutRef = useRef(null)

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
      para: "At our Indian restaurant, we offer a warm and vibrant atmosphere that reflects the rich culture and traditions of India. Our spacious dining area can comfortably host both intimate dinners and large gatherings, making it an ideal spot for any occasion. We also provide ample free parking, ensuring that your visit is convenient from start to finish. Inside, you'll find a beautifully decorated interior, adorned with traditional Indian motifs and colors, creating an inviting ambiance that enhances the authentic dining experience we offer.",
      home: "Home",
      about: "About",
      contact: "Contact",
      gallery: "Gallery",
      foodDelivery: "Food Delivery",
      enjoyHome: "Enjoy our delicious meals from the comfort of your home",
      fastDelivery: "Fast delivery to your doorstep",
      japanFavorite: "Japan's favorite delivery service",
      ourStory: "Our Story",
      storySubtitle: "A journey of flavors, tradition, and innovation",
      fusionCultures: "A Fusion of Cultures",
      exploreGallery: "Explore Gallery",
      ourPassion: "Our Passion",
      passionText:
        "We pour our heart into every dish, ensuring each plate reflects our dedication to authentic flavors and innovative presentation.",
      qualityFirst: "Quality First",
      qualityText:
        "We source only the finest ingredients, combining premium Indian spices with local Japanese produce to create exceptional dishes.",
      ourTeam: "Our Team",
      teamText:
        "Our diverse team brings together expertise from both Indian and Japanese culinary traditions, creating a unique dining experience.",
      pressCoverage: "Press Coverage & Reviews",
      hours: "Hours",
      hoursText: "Monday - Sunday: '11:00 - 15:00' & '17:00 - 22:30'",
      makeReservation: "Make a Reservation",
      reservationText: "Join us for an unforgettable dining experience. Book your table or send us an inquiry.",
      bookTable: "Book a Table",
      sendInquiry: "Send Inquiry",
      footerText: "The Authentic taste of Indian",
      copyright: "© 2025 North Park, Indian Restaurant & Café. All rights reserved.",
      membershipTitle: "Membership Program",
      membershipText:
        "Join our exclusive membership program! Request a Member Card from our staff during your next visit and enjoy an exclusive 5% discount every time you dine in.",
      memberBenefits: "Member Benefits",
      discountText: "5% discount on all dine-in orders",
      facilitiesTitle: "Our Facilities",
      facilitiesText:
        "Spacious dining meets hassle-free parking! Our large dining space and free parking make group dining more convenient than ever.",
      seatingCapacity: "Seating Capacity",
      carParking: "Car Parking",
      halalFood: "Halal Food",
    },
    jp: {
      title: "ノースパーク、",
      title2: "インド料理レストラン＆カフェ",
      subtitle: "インドの本場の味",
      exploreMenu: "メニューを見る",
      visitUs: "お店に行く",
      address: "〒300-0052 茨城県土浦市東真鍋町1-7",
      connect: "お問い合わせ",
      toggleLanguage: "English",
      explore: "メニューを見る",
      para: "私たちのインド料理レストランでは、インドの豊かな文化と伝統を反映した温かく活気のある雰囲気を提供しています。広々としたダイニングエリアは、親しいディナーから大規模な集まりまで、どんなシーンにも対応できる理想的な空間です。また、無料の広い駐車場を完備しており、訪れる際の利便性も抜群です。店内は、伝統的なインドのモチーフとカラーで美しく装飾されており、本格的なインド料理を楽しむための魅力的な雰囲気を演出しています。",
      home: "ホーム",
      about: "私たちについて",
      contact: "お問い合わせ",
      gallery: "ギャラリー",
      foodDelivery: "デリバリー",
      enjoyHome: "ご自宅で本格的なインド料理をお楽しみください",
      fastDelivery: "迅速なお届けサービス",
      japanFavorite: "日本で人気の出前サービス",
      ourStory: "私たちのストーリー",
      storySubtitle: "伝統と革新の味わいの旅",
      fusionCultures: "文化の融合",
      exploreGallery: "ギャラリーを見る",
      ourPassion: "私たちの情熱",
      passionText: "一皿一皿に心を込めて、本場の味と革新的な演出を追求しています。",
      qualityFirst: "品質第一",
      qualityText: "最高級のインドのスパイスと地元の食材を組み合わせ、exceptional な料理を提供しています。",
      ourTeam: "私たちのチーム",
      teamText: "インドと日本の料理の伝統を融合させた、独自のダイニング体験を提供しています。",
      pressCoverage: "お客様の声",
      hours: "営業時間",
      hoursText: "月曜日〜日曜日：'11:00 - 15:00' & '17:00 - 22:30'",
      makeReservation: "ご予約",
      reservationText: "忘れられない食事体験のために、テーブルのご予約やお問い合わせをお待ちしております。",
      bookTable: "テーブルを予約",
      sendInquiry: "お問い合わせ",
      footerText: "インドの本場の味",
      copyright: "© 2025 ノースパーク インド料理レストラン＆カフェ. All rights reserved.",
      membershipTitle: "メンバーシッププログラム",
      membershipText:
        "特別なメンバーシッププログラムにご参加ください！次回のご来店時にスタッフにメンバーカードをリクエストいただくと、ご来店のたびに5％の割引をお楽しみいただけます。",
      memberBenefits: "会員特典",
      discountText: "店内でのご注文すべてに5％割引",
      facilitiesTitle: "施設情報",
      facilitiesText:
        "広々とした食事スペースと便利な駐車場！広いダイニングスペースと無料駐車場で、グループでのお食事がより便利になりました。",
      seatingCapacity: "座席数",
      carParking: "駐車場",
      halalFood: "ハラールフード",
    },
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "jp" ? "en" : "jp"))
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const scrollPosition = window.scrollY + window.innerHeight / 3
      const sections = ["home", "about", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      if (aboutRef.current && window.scrollY > aboutRef.current.offsetTop - window.innerHeight / 2) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }

      const heroSection = document.querySelector(".hero-content")
      if (heroSection) {
        const offset = window.scrollY * 0.5
        heroSection.setAttribute("style", `--parallax-offset: ${offset}px`)
      }
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)
    document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right, .scale-up").forEach((el) => {
      observer.observe(el)
    })

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-1 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className={`mt-2 text-md md:text-2xl font-bold ${isScrolled ? "text-black" : "text-white"}`}>
                {translations[language].title}
              </div>
              <div className={`text-md md:text-2xl font-bold ${isScrolled ? "text-black" : "text-white"}`}>
                {translations[language].title2}
              </div>
            </div>

            <div className="hidden md:flex space-x-8 mr-36">
              <button
                onClick={() => scrollToSection("home")}
                className={`relative transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                } ${activeSection === "home" ? "text-orange-600" : ""} hover:text-orange-600`}
              >
                {translations[language].home}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`relative transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                } ${activeSection === "about" ? "text-orange-600" : ""} hover:text-orange-600`}
              >
                {translations[language].about}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`relative transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                } ${activeSection === "contact" ? "text-orange-600" : ""} hover:text-orange-600`}
              >
                {translations[language].contact}
              </button>
              <a
                className={`relative transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-orange-600`}
                href="/gallery"
              >
                {translations[language].gallery}
              </a>
            </div>

            <button
              onClick={toggleLanguage}
              className={`px-4 py-2 ${isScrolled ? "bg-orange-500" : "bg-white"} ${
                isScrolled ? "text-white" : "text-orange-500"
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
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">{translations[language].title}</h1>
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">{translations[language].title2}</h1>
              <Sparkles className="absolute -bottom-8 -right-8 w-6 h-6 text-orange-400 floating" />
            </div>
            <p className="text-xl md:text-3xl text-white mb-8 font-light">{translations[language].subtitle}</p>
            <button className="bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group">
              <a href="/menu">{translations[language].explore}</a>
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

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
              <h2 className="text-4xl font-bold">{translations[language].foodDelivery}</h2>
            </div>
            <p className="text-gray-600 text-lg">{translations[language].enjoyHome}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="https://www.ubereats.com/jp-en/store/north-park-indian-restaurant-%26-cafe-%E3%83%8E%E3%83%BC%E3%82%B9%E3%83%8F%E3%83%BC%E3%82%AF-%E3%82%A4%E3%83%B3%E3%83%86%E3%82%A3%E3%82%A2%E3%83%B3%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%26%E3%82%AB%E3%83%95%E3%82%A7/6H00l28aSHKV5y8Miga5ig?diningMode=PICKUP"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in-up"
            >
              <img
                src="https://1000logos.net/wp-content/uploads/2020/08/Uber-Eats-Logo-2018.jpg"
                alt="Uber Eats"
                className="w-62 h-36 object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">Uber Eats</h3>
              <p className="text-gray-600 text-center">{translations[language].fastDelivery}</p>
            </a>

            <a
              href="https://demae-can.com/shop/menu/3392106"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in-up delay-100"
            >
              <img
                src="https://vos.line-scdn.net/strapi-cluster-instance-bucket-84/1_62eaf29e06.png"
                alt="Demae-can"
                className="w-96 object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">出前館</h3>
              <p className="text-gray-600 text-center">{translations[language].japanFavorite}</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 fade-in-left">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Award className="text-orange-600 w-8 h-8" />
                <h2 className="text-3xl font-bold">{translations[language].membershipTitle}</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{translations[language].membershipText}</p>
              <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Heart className="text-orange-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{translations[language].memberBenefits}</h4>
                    <p className="text-gray-600">{translations[language].discountText}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in-right">
              <img
                src="/Website_Food Pictures/membership.jpg"
                alt="Membership card"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left order-2 md:order-1">
              <img
                src="/Website_Food Pictures/parking.jpg"
                alt="Restaurant interior"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6 fade-in-right order-1 md:order-2">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Users className="text-orange-600 w-8 h-8" />
                <h2 className="text-3xl font-bold">{translations[language].facilitiesTitle}</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{translations[language].facilitiesText}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 shadow-sm text-center">
                  <h4 className="text-xl font-semibold mb-2">{translations[language].seatingCapacity}</h4>
                  <p className="text-3xl font-bold text-orange-600">104</p>
                </div>
                <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 shadow-sm text-center">
                  <h4 className="text-xl font-semibold mb-2">{translations[language].carParking}</h4>
                  <p className="text-3xl font-bold text-orange-600">29</p>
                </div>
                <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 shadow-sm text-center flex flex-col items-center justify-center">
                  <h4 className="text-xl font-semibold mb-2">{translations[language].halalFood}</h4>
                  <Utensils className="text-orange-600 w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{translations[language].ourStory}</h2>
            <p className="text-gray-600 text-lg">{translations[language].storySubtitle}</p>
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
              <h3 className="text-3xl font-bold text-gray-800">{translations[language].fusionCultures}</h3>
              <p className="text-gray-600 leading-relaxed">{translations[language].para}</p>
              <div className="w-32 p-2 flex justify-center items-center rounded-lg bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300 hover:drop-shadow-2xl">
                <a className="flex items-center justify-center font-semibold" href="/gallery">
                  {translations[language].exploreGallery}
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl shadow-lg fade-in-up">
              <div className="p-3 bg-orange-100 rounded-full w-fit mb-6">
                <Heart className="text-orange-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">{translations[language].ourPassion}</h4>
              <p className="text-gray-600">{translations[language].passionText}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg fade-in-up delay-100">
              <div className="p-3 bg-orange-100 rounded-full w-fit mb-6">
                <Star className="text-orange-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">{translations[language].qualityFirst}</h4>
              <p className="text-gray-600">{translations[language].qualityText}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg fade-in-up delay-200">
              <div className="p-3 bg-orange-100 rounded-full w-fit mb-6">
                <Users className="text-orange-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">{translations[language].ourTeam}</h4>
              <p className="text-gray-600">{translations[language].teamText}</p>
            </div>
          </div>

          {/* Press Coverage Section */}
          <div className="text-center fade-in-up mt-16">
            <div className="inline-flex items-center space-x-2 mb-8">
              <Award className="text-orange-600 w-8 h-8" />
              <h3 className="text-2xl font-bold">{translations[language].pressCoverage}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-4">
                  "夕食時に訪れました。チキンビリヤニを注文しましたが、別皿のヨーグルトソースが酸味があって爽やかで美味しかったです。"
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-4">
                  "体が疲れているときの救世主です。タンドリーチキンやチキンマライティッカなどのグリル料理が絶品。柔らかく、辛すぎず、ヨーグルトとスパイスの組み合わせが絶妙です。"
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-4">
                  "インド料理は私の大好物の一つで、このレストランでの体験と試した料理に大変満足しました。入り口から、他のインド料理店では見られないような装飾が多く見られ、店内の雰囲気はまるでインドの一部にいるような気分にさせてくれます。"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership & Facilities Section */}
      

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in-up">
            {translations[language].connect}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-2xl shadow-lg fade-in-left transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-orange-100 rounded-full">
                  <MapPin className="text-orange-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{translations[language].visitUs}</h3>
              </div>
              <p className="text-gray-600">{translations[language].address}</p>
              <div className="mt-6">
                <iframe
                  className="w-full h-48 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d201.50819145660188!2d140.206474!3d36.090293!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDA1JzI1LjAiTiAxNDDCsDEyJzIzLjMiRQ!5e0!3m2!1sen!2sus!4v1740129253055!5m2!1sen!2sus"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl shadow-lg fade-in-up space-y-8">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Clock className="text-orange-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{translations[language].hours}</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">{translations[language].hoursText}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Phone className="text-orange-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{translations[language].contact}</h3>
                </div>
                <p className="text-gray-600">029-811-9527</p>
                <p className="text-gray-600">northparknp@gmail.com</p>
              </div>
            </div>

            <div className="lg:row-span-1 bg-orange-50 p-8 rounded-2xl shadow-lg fade-in-right">
              <h3 className="text-2xl font-semibold mb-6">{translations[language].makeReservation}</h3>
              <p className="text-gray-600 mb-8">{translations[language].reservationText}</p>
              <div className="space-y-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeC4mHXyAx9o8_qDb3NJqEdak3LMcRwEM1mDyePUbACkrU1ow/viewform?usp=sharing"
                  className="w-full inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Utensils className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  {translations[language].bookTable}
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeL3z_YVeW7pK59sjeUlggLANci2-wTJGhLUrRVZ_CONXk4lA/viewform?usp=sharing"
                  className="w-full inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 group"
                >
                  <MessageSquare className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  {translations[language].sendInquiry}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center scale-up">
          <p className="text-2xl font-bold mb-4 gradient-text">
            {translations[language].title + translations[language].title2}
          </p>
          <p className="text-gray-400">{translations[language].footerText}</p>
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
          <div className="mt-8 text-sm text-gray-400">{translations[language].copyright}</div>
          Japanese content translated from English using advanced AI technology. In case of discrepancy, English text
          prevails.
        </div>
      </footer>
    </div>
  )
}

export default Home

