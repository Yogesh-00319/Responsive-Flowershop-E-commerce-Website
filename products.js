
const SHOP_PHONE = "916374651456";

const SHOP_NAME = "JMS Fresh Flowers";

const CATEGORIES = [
  { id: "all", name: "🌸 All Products" },
  { id: "flowers", name: "🌿 Fresh Flowers (உதிரி & சரம்)" },
  { id: "maalai", name: "📿 Traditional Maalai (மாலைகள்)" },
  { id: "bouquets", name: "💐 Bouquets / Poche's (பூச்செண்டு)" },
  { id: "pooja", name: "🪔 Pooja & Festival Specials" }
];


const PRODUCTS = [
  {
    id: "f1",
    name: "Madurai Gundu Malli (குண்டு மல்லி)",
    category: "flowers",
    badge: "Bestseller",
    description: "Super fragrant, hand-picked fresh Madurai Jasmine flowers.",
    unit: "1 Mozham / 100g",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 150, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈 (Save image inside 'images/' folder)
    image: "images/malli.jpg", 
    // ========================================================================
  },
  {
    id: "f2",
    name: "Mullai Poo (முல்லை பூ)",
    category: "flowers",
    badge: "Fresh Today",
    description: "Delicate and aromatic Mullai flowers tied with traditional thread.",
    unit: "1 Mozham / 100g",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 120, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/Mullai poo.jpg", 
    // ========================================================================
  },
  {
    id: "f3",
    name: "Jaathi Malli / Pitchi Poo (ஜாதி மல்லி)",
    category: "flowers",
    badge: "Aromatic",
    description: "Intensely scented seasonal Pichchi Poo garland strand.",
    unit: "1 Mozham / 100g",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 140, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/ppitchi poo.jpg", 
    // ========================================================================
  },
  {
    id: "f4",
    name: "Paneer Rose / Country Rose (பன்னீர் ரோஜா)",
    category: "flowers",
    badge: "Daily Fresh",
    description: "Heavenly scented natural pink paneer roses for pooja and hair adornment.",
    unit: "1/4 Kg (250g)",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 80, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/Temple Roses.jpg", 
    // ========================================================================
  },
  {
    id: "f5",
    name: "Sevvanthi Poo - Yellow & White (செவ்வந்தி)",
    category: "flowers",
    badge: "Pooja Special",
    description: "Bright fresh Chrysanthemum flowers for temple, pooja, and decor.",
    unit: "1/2 Kg (500g)",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 100, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/sevvanthi poo.jpg", 
    // ========================================================================
  },
  {
    id: "f6",
    name: "Red Arali Poo (அரளி பூ)",
    category: "flowers",
    badge: "Temple Favorite",
    description: "Deep red and pink Arali flowers ideal for daily temple offering and archanai.",
    unit: "250 Grams",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 60, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/Red arali poo.jpg", 
    // ========================================================================
  },
  {
    id: "f7",
    name: "Fresh Pink Lotus (தாமரை மலர்)",
    category: "flowers",
    badge: "Sacred",
    description: "Auspicious fresh blooming lotus flowers for Mahalakshmi Pooja.",
    unit: "Pair (2 Flowers)",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 50, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/lotus.jpg", 
    // ========================================================================
  },

  // --------------------------------------------------------------------------
  // SECTION 2: TRADITIONAL MAALAI / GARLANDS (மாலைகள்)
  // --------------------------------------------------------------------------
  {
    id: "m1",
    name: "Royal Wedding Kalyana Maalai (ஜோடி மாலை)",
    category: "maalai",
    badge: "Wedding Special",
    description: "Premium handcrafted bride & groom wedding garland pair with fresh roses & jasmine.",
    unit: "1 Pair (2 Garlands)",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 3500, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/Special Wedding maalai.jpg", 
    // ========================================================================
  },
  {
    id: "m2",
    name: "Rose Petal Knot Maalai (ரோஜா இதழ் மாலை)",
    category: "maalai",
    badge: "Popular",
    description: "Intricately woven dense rose petal garland with golden zari borders.",
    unit: "Per Garland (Single)",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 850, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/rose ithazh set.jpg", 
    // ========================================================================
  },
  {
    id: "m3",
    name: "Jasmine & Red Rose Combination Maalai",
    category: "maalai",
    badge: "Classic",
    description: "Traditional fragrant Gundu Malli with rich red rose borders and pendant tassel.",
    unit: "Per Garland (Single)",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 650, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/Jasmine & Red Rose.jpg", 
    // ========================================================================
  },
  {
    id: "m4",
    name: "Temple & Deity Pooja Maalai (சுவாமி மாலை)",
    category: "maalai",
    badge: "Sacred",
    description: "Auspicious multi-flower temple garland with Tulasi, Sevvanthi, and Rose.",
    unit: "Per Garland (Standard Size)",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 350, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/Temple.jpg", 
    // ========================================================================
  },
  {
    id: "m5",
    name: "Reception Fancy Feather Garland (ரிசப்ஷன் மாலை)",
    category: "maalai",
    badge: "Trending",
    description: "Modern lightweight feather-finish pastel roses garland pair for wedding reception.",
    unit: "1 Pair (2 Garlands)",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 2800, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/Receptiopn.jpg", 
    // ========================================================================
  },
  {
    id: "m6",
    name: "Cardamom & Gold Net Garland (ஏலக்காய் மாலை)",
    category: "maalai",
    badge: "VIP Honor",
    description: "Grand aromatic elaichi (cardamom) garland made for felicitations & VIP honors.",
    unit: "Per Garland",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 1200, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/elakkai maalai.jpg", 
    // ========================================================================
  },

  // --------------------------------------------------------------------------
  // SECTION 3: BOUQUETS & POCHE'S / POOCHENDU (பூச்செண்டு)
  // --------------------------------------------------------------------------
  {
    id: "b1",
    name: "Classic Red Rose Hand Bouquet (Red Poche)",
    category: "bouquets",
    badge: "Best Gift",
    description: "12 premium long-stem Dutch red roses wrapped in elegant matte paper with ribbon.",
    unit: "1 Hand Bouquet (12 Roses)",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 499, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/bouqe.jpg", 
    // ========================================================================
  },
  {
    id: "b2",
    name: "Mixed Floral Celebration Bouquet",
    category: "bouquets",
    badge: "Vibrant",
    description: "Colorful arrangement of carnations, roses, chrysanthemums, and gypsophila greens.",
    unit: "1 Grand Bouquet",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 699, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/Mixed.jpg", 
    // ========================================================================
  },
  {
    id: "b3",
    name: "Exotic Purple Orchid Posy Bouquet",
    category: "bouquets",
    badge: "Luxury",
    description: "Fresh farm-sourced purple orchids hand-tied in Korean luxury wrapping.",
    unit: "1 Posy Bouquet (6 Orchids)",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 799, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/Purple.jpg", 
    // ========================================================================
  },
  {
    id: "b4",
    name: "Pink Posy Mini Bouquet (Cute Gift Poche)",
    category: "bouquets",
    badge: "Pocket Friendly",
    description: "Charming hand posy with baby pink roses and gypsophila (baby's breath).",
    unit: "1 Posy Bunch",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 299, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/Pink.jpg", 
    // ========================================================================
  },
  {
    id: "b5",
    name: "Grand Stage / Felicitations Big Bouquet",
    category: "bouquets",
    badge: "VIP Event",
    description: "Huge eye-catching bouquet designed for stages, birthdays, anniversaries & VIP welcomes.",
    unit: "1 Giant Bouquet (25+ Flowers)",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 1199, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/boquet.jpg", 
    // ========================================================================
  },

  // --------------------------------------------------------------------------
  // SECTION 4: POOJA & FESTIVAL PACKS
  // --------------------------------------------------------------------------
  {
    id: "p1",
    name: "Daily Home Pooja Mixed Flower Box",
    category: "pooja",
    badge: "Daily Essential",
    description: "Complete pooja mix: Malli, Rose petals, Sevvanthi, Arali, and Tulasi leaves.",
    unit: "1 Daily Box (300g)",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 99, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/God.jpg", 
    // ========================================================================
  },
  {
    id: "p2",
    name: "Friday Lakshmi Pooja Special Thali Set",
    category: "pooja",
    badge: "Friday Special",
    description: "Includes 2 Lotus flowers, 1 Mozham Malli, Sevvanthi, Vilvam, and Betel leaves.",
    unit: "Complete Set",
    // ========================================================================
    // 🟡 👉👉👉 [EDIT PRICE HERE] 👈👈👈
    price: 199, 
    // 🟢 👉👉👉 [EDIT IMAGE HERE] 👈👈👈
    image: "images/Friday Lakshmi Pooja Special Thali Set.jpg", 
    // ========================================================================
  }
];
