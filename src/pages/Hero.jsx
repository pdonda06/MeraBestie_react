import "./Hero.css";
import ProductCard from "../components/ProductCard";

import customStamps from "../assets/custom-stamps.jpg";
import paperClips from "../assets/paper-clips.jpg";
import customCards from "../assets/custom-cards.jpg";
import customPens from "../assets/custom-pens.jpg";
import bookmarks from "../assets/bookmarks.jpg";
import journals from "../assets/journals.jpg";
import gift from "../assets/gift.jpg";

import metallicGelPens from "../assets/metallic-gel-pens.png";
import shiffonBluePens from "../assets/shiffon-blue-pens.png";
import purpleLiteGold from "../assets/purple-lite-gold.png";


const categories = [
  { name: "Custom Stamps", img: customStamps },
  { name: "Paper Clips", img: paperClips },
  { name: "Custom Cards", img: customCards },
  { name: "Custom Pens", img: customPens },
  { name: "Bookmarks", img: bookmarks },
  { name: "Journals", img: journals },
  { name: "Gift", img: gift },
];

const writingEssentials = [
    {
      id: 1,
      image: metallicGelPens,
      title: "Metallic Gel Pens",
      price: "₹1250",
      rating: 4.98,
      reviews: 205,
      badge: "Best Seller",
    },
    {
      id: 2,
      image: shiffonBluePens,
      title: "Shiffon Blue Pens",
      price: "₹4700",
      rating: 4.98,
      reviews: 205,
    },
    {
      id: 3,
      image: purpleLiteGold,
      title: "Purple Lite Gold",
      price: "₹300",
      rating: 4.98,
      reviews: 177,
      badge: "Best Seller",
    },
  ];
  

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-tags">
          <button className="hero-btn">Stickers & Bookmarks</button>
          <button className="hero-btn">Gift Cards</button>
          <button className="hero-btn">Customize Yours</button>
        </div>
        <button className="shop-btn">SHOP NOW</button>
      </section>

      {/* Exclusive Collection */}
      <section className="collection-section">
        <h2>Discover our exclusive collection</h2>
        <div className="categories-container">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <img src={category.img} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-box">
          <h3>PERFECT CUSTOMIZED Products</h3>
          <p>Early Bird Offer</p>
          <p className="offer-text">The Offer Ends Soon!</p>
        </div>
      </section>

      {/* Writing Essentials */}
      <section className="essentials-section">
        <h2>Writing Essentials</h2>
        <div className="grid-container">
          {writingEssentials.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="essentials-section">
        <h2>Notebooks & Paper Products</h2>
        <div className="grid-container">
          {writingEssentials.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
