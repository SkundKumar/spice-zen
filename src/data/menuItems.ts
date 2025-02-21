export interface MenuItem {
    name: { en: string; jp: string; };
    description: { en: string; jp: string; };
    price: string;
    category: { en: string; jp: string; };
    image: string;
    featured?: boolean;
    size?: 'small' | 'medium' | 'large';
    mobsize?: 'small' | 'medium' | 'large';
  }
  
  export const menuItems: MenuItem[] = [
    // Main Course
    {
      name: { en: "Biryani Royale", jp: "ビリヤニ ロイヤル" },
      description: { en: "Aromatic basmati rice with saffron, slow-cooked spices, and tender meat", jp: "サフランとスパイスでじっくり調理した香り高いバスマティ米" },
      price: "$40",
      category: { en: "Main Course", jp: "メイン" },
      image: "https://i.pinimg.com/736x/a4/66/9a/a4669a419a1d51fc927182f6660bfb3e.jpg",
      featured: true,
      size: "large",
      mobsize: "medium"
    },
    {
      name: { en: "Butter Chicken", jp: "バターチキン" },
      description: { en: "Classic Indian butter chicken with rich tomato and cashew gravy", jp: "濃厚なトマトとカシューナッツのグレービーで仕上げたインドの定番バターチキン" },
      price: "$35",
      category: { en: "Main Course", jp: "メイン" },
      image: "https://imgs.search.brave.com/mMs3b2YFe4us1A1GSP2hAcxXcDZ2_dm3vLzKTUdr_oQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzE0LzY0LzQz/LzM2MF9GXzkxNDY0/NDM1Ml8zTHVjWE5i/cEtQMGEwcG5ZY1Jn/QnY0U2JRd29PbGpX/di5qcGc",
      size: "medium",
      mobsize: "large"
    },
    {
      name: { en: "Dal Makhani", jp: "ダルマカニ" },
      description: { en: "Creamy black lentils simmered overnight with aromatic spices", jp: "芳香なスパイスと共に一晩煮込んだクリーミーな黒レンズ豆" },
      price: "$28",
      category: { en: "Main Course", jp: "メイン" },
      image: "https://imgs.search.brave.com/8FwxH_rQF1KyNKQxdqN1-PYQYPXHGHZg_j9O0nFk1vE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpc2thZmZhaXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA4L0RhbC1N/YWtoYW5pLTMtMy5q/cGc",
      size: "small"
    },
    {
      name: { en: "Rogan Josh", jp: "ローガン ジョシュ" },
      description: { en: "Kashmiri style lamb curry with yogurt and aromatic spices", jp: "ヨーグルトと香辛料で仕上げたカシミール風ラム肉カレー" },
      price: "$38",
      category: { en: "Main Course", jp: "メイン" },
      image: "https://imgs.search.brave.com/qqX7PHy2LiRqC1kKqVHGk4-W9LMa-mBYyG-JUHPzLpE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpc2thZmZhaXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA4L1JvZ2Fu/LUpvc2gtMi0zLmpw/Zw",
      size: "small",
      mobsize: "medium"
    },
  
    // Appetizers
    {
      name: { en: "Tandoori Platter", jp: "タンドリープラッター" },
      description: { en: "Assortment of tandoori meats and vegetables, served with mint chutney", jp: "タンドリーミートと野菜の盛り合わせ、ミントチャツネ添え" },
      price: "$50",
      category: { en: "Appetizer", jp: "前菜" },
      image: "https://imgs.search.brave.com/1bYy7osK4iKzTdbHtdI7mvIYahoVY812wNFJCcc7sik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzM5LzMwLzE4/LzM2MF9GXzEzOTMw/MTgxOV9JcDFXTUlI/TGM2dnRGamtYTmt1/aGlWdzNGcWFYVVp5/ZC5qcGc",
      featured: true,
      size: "large",
      mobsize: "large"
    },
    {
      name: { en: "Paneer Tikka", jp: "パニールティッカ" },
      description: { en: "Chargrilled cottage cheese marinated in yogurt and spices", jp: "ヨーグルトとスパイスに漬け込んだカッテージチーズの炭火焼き" },
      price: "$30",
      category: { en: "Appetizer", jp: "前菜" },
      image: "https://imgs.search.brave.com/bvlZpQAIsOIZBvaGS7sQDjU5btatsDDmaN7mKgNbw1A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzI0LzM1LzYx/LzM2MF9GXzgyNDM1/NjE1Ml95bkRCMTRK/MHFZejhERU5DWG9S/cTZ3SVJCYWxHSm9s/RC5qcGc",
      size: "small",
      mobsize: "medium"
    },
    {
      name: { en: "Samosa Chaat", jp: "サモサチャート" },
      description: { en: "Crispy samosas topped with chickpea curry, chutneys, and yogurt", jp: "ひよこ豆カレー、チャツネ、ヨーグルトをのせたカリカリサモサ" },
      price: "$25",
      category: { en: "Appetizer", jp: "前菜" },
      image: "https://imgs.search.brave.com/q_rJpK64HjsXJO_J_Rpb_K_0RH2h8tap9Jm_dJV_KSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpc2thZmZhaXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA5L1NhbW9z/YS1DaGFhdC0yLTMu/anBn",
      size: "medium"
    },
    {
      name: { en: "Onion Bhaji", jp: "オニオンバジ" },
      description: { en: "Crispy spiced onion fritters served with tamarind chutney", jp: "タマリンドチャツネを添えたスパイシーな玉ねぎのフリッター" },
      price: "$20",
      category: { en: "Appetizer", jp: "前菜" },
      image: "https://imgs.search.brave.com/PQJ_uvj_YI_0Dxk8eTNY3McyVSBwmfZGkQGEwmEJYYE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpc2thZmZhaXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA4L09uaW9u/LUJoYWppLTItMy5q/cGc",
      size: "small",
      mobsize: "large"
    },
  
    // Beverages
    {
      name: { en: "Mango Lassi", jp: "マンゴーラッシー" },
      description: { en: "Refreshing yogurt-based mango drink with cardamom", jp: "カルダモンが香る爽やかなヨーグルトベースのマンゴードリンク" },
      price: "$10",
      category: { en: "Beverage", jp: "飲み物" },
      image: "https://imgs.search.brave.com/JVDwGefljnqj7a_EexU0Acx8qFshOrYYuN4qYB_lFIM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzYzLzk1Lzc5/LzM2MF9GXzY2Mzk1/Nzk5OV9FOW9MVnEw/akt4UHEwMFJ5SGFB/SGt5ZW9oM1FmakVo/eC5qcGc",
      size: "medium",
      mobsize: "medium"
    },
    {
      name: { en: "Masala Chai", jp: "マサラチャイ" },
      description: { en: "Traditional Indian spiced tea with milk", jp: "ミルクで仕上げた伝統的なインドのスパイスティー" },
      price: "$8",
      category: { en: "Beverage", jp: "飲み物" },
      image: "https://imgs.search.brave.com/oP2sBqIybLcrdrwCJ3jqOUKqVS_G_oXAcURth_FIzBc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzk0LzczLzM3/LzM2MF9GXzEwOTQ3/MzM3NDFfcjBYbWhj/b2EwdWUwN0o5YnJ1/bVRlZHZsQ1l6VHZ2/c0YuanBn",
      size: "small"
    },
    {
      name: { en: "Rose Falooda", jp: "ローズファルーダ" },
      description: { en: "Traditional Indian dessert drink with rose syrup, basil seeds, and vermicelli", jp: "ローズシロップ、バジルシード、春雨を使用した伝統的なインドのデザートドリンク" },
      price: "$12",
      category: { en: "Beverage", jp: "飲み物" },
      image: "https://imgs.search.brave.com/V8Dv_0UBWZZQXtT9JqkQH5jfKwZ5P1zJ5Xf-SCvWHhE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpc2thZmZhaXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA4L0ZhbG9v/ZGEtMi0zLmpwZw",
      size: "large",
      mobsize: "large"
    },
  
    // Desserts
    {
      name: { en: "Gulab Jamun", jp: "グラブジャムン" },
      description: { en: "Soft fried milk dumplings soaked in rose-flavored sugar syrup", jp: "ローズ風味のシロップに浸した柔らかい揚げミルク団子" },
      price: "$15",
      category: { en: "Dessert", jp: "デザート" },
      image: "https://imgs.search.brave.com/kv_PVqd8PO8JggEDOBDl4LAueYJdHgHlWbfkXBBCmNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzE0LzY0LzYy/LzM2MF9GXzkxNDY0/NjI3M19Xcmh1Y0Vj/MFRLU1ZXUXhyeWlI/ekltNjZ3Mk0xRmhI/YS5qcGc",
      size: "medium",
      mobsize: "medium"
    },
    {
      name: { en: "Rasmalai", jp: "ラスマライ" },
      description: { en: "Soft cottage cheese patties in saffron-flavored milk", jp: "サフラン風味のミルクに浸したやわらかいカッテージチーズのパティ" },
      price: "$18",
      category: { en: "Dessert", jp: "デザート" },
      image: "https://imgs.search.brave.com/3yqpGIBECHuOr_7gq0kTKMBHtuX1i5qR4TxlpP7XnN4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk5LzEw/LzEyLzk5MTAxMjBi/YWY5ZmVhOWU4YmVj/MDUzYTk2NGRkYTZi/LmpwZw",
      size: "small",
      mobsize: "large"
    },
    {
      name: { en: "Kulfi", jp: "クルフィ" },
      description: { en: "Traditional Indian ice cream with pistachios and cardamom", jp: "ピスタチオとカルダモンを使用した伝統的なインドのアイスクリーム" },
      price: "$14",
      category: { en: "Dessert", jp: "デザート" },
      image: "https://imgs.search.brave.com/hNJogRvrk0ia949nDS1k0K5XlH8Le9DeMfW3Q4qsWFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFkLzli/LzFjLzFkOWIxY2Fm/MjkwZGQ1MjVmMDNm/MzkyMWZhZTVjOWM0/LmpwZw",
      size: "large"
    },
  
    // South Indian
    {
      name: { en: "Masala Dosa", jp: "マサラドーサ" },
      description: { en: "Crispy rice crepe filled with spiced potatoes, served with chutneys", jp: "スパイス風味のポテトを詰めたカリカリの米クレープ、チャツネ添え" },
      price: "$25",
      category: { en: "South Indian", jp: "南インド" },
      image: "https://imgs.search.brave.com/x5ZcmKmzUUfE5kVCVR9evfAp_1aA6xLOJ4YHigzq3BI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVhZm9ydHVybWVy/aWMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzA0L1Jh/am1hLTEyLTcyOHgx/MDkyLmpwZw",
      size: "large",
      mobsize: "large"
    },
    {
      name: { en: "Idli Sambar", jp: "イドリサンバル" },
      description: { en: "Steamed rice cakes served with lentil soup and coconut chutney", jp: "レンズ豆のスープとココナッツチャツネを添えた蒸し米ケーキ" },
      price: "$22",
      category: { en: "South Indian", jp: "南インド" },
      image: "https://imgs.search.brave.com/bvlZpQAIsOIZBvaGS7sQDjU5btatsDDmaN7mKgNbw1A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzI0LzM1LzYx/LzM2MF9GXzgyNDM1/NjE1Ml95bkRCMTRK/MHFZejhERU5DWG9S/cTZ3SVJCYWxHSm9s/RC5qcGc",
      size: "medium",
      mobsize: "medium"
    },
    {
      name: { en: "Uttapam", jp: "ウッタパム" },
      description: { en: "Thick rice pancake topped with onions, tomatoes, and chilies", jp: "玉ねぎ、トマト、唐辛子をのせた厚手の米パンケーキ" },
      price: "$24",
      category: { en: "South Indian", jp: "南インド" },
      image: "https://imgs.search.brave.com/q_rJpK64HjsXJO_J_Rpb_K_0RH2h8tap9Jm_dJV_KSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpc2thZmZhaXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA5L1NhbW9z/YS1DaGFhdC0yLTMu/anBn",
      size: "small",
      mobsize: "large"
    }
  ];