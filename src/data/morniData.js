// Morni Hills Tourism Data Store


export const MORNI_DATA = {
  meta: {
    title: "Morni Hills",
    tagline: "Haryana's Hidden Hill Escape",
    heroHeading: "Discover\nMorni Hills",
    heroDescription: "Escape into the quiet beauty of the Shivalik Hills, where forests, lakes and mountain landscapes come together.",
    elevation: "1,220 m",
    highestPeak: "1,467 m (Karoh Peak)",
    district: "Panchkula, Haryana",
    coordinates: "30.6974° N, 77.0864° E",
    bestSeason: "October to April",
    tempCurrent: "22°C",
    weatherCondition: "Pleasant & Breezy",
  },

  about: {
    heading: "Where the Hills Begin to Breathe",
    subheading: "The Only Hill Station in Haryana",
    description: "Tucked away in the outer Shivalik ranges of the Himalayas, Morni Hills is a serene sanctuary situated just 45 kilometers from Chandigarh. Draped in dense pine, oak, and sal woodlands, this secluded hill station blends untouched nature, mythological legends, and historic ruins with cool mountain breezes.",
    // paragraphs: [
    //   "Named after a legendary 17th-century queen who ruled Kotaha, Morni Hills offers travelers an antidote to urban chaos. The twin interconnected lakes of Tikkar Taal reflect emerald hills, while the ancient Morni Fort stands sentinel on high cliffs overlooking rolling valleys.",
    //   "Home to vibrant wildlife including barking deer, wild boars, sambars, and the elusive leopard, the hills are also an ornithologist's paradise with over 80 species of Himalayan and migratory birds."
    // ],
    stats: [
      { value: "1,220 m", label: "Elevation (4,000 ft)", sub: "Pleasant micro-climate" },
      { value: "Shivalik", label: "Himalayan Foothills", sub: "Ancient mountain range" },
      { value: "Panchkula", label: "Haryana, India", sub: "45 km from Chandigarh" },
      { value: "35+ km²", label: "Protected Forest", sub: "Pine & deciduous woods" }
    ],
    highlights: [
      "Twin Sacred Lakes of Tikkar Taal",
      "17th Century Kotaha Morni Fort",
      "Panoramic Karoh Peak Views",
      "Dense Pine & Sal Forest Trails",
      "Himalayan Bird Sanctuary",
      "Quiet Mountain Village Hamlets"
    ]
  },

  attractions: [
    {
      id: "morni-fort",
      title: "Morni Fort",
      category: "Heritage",
      tagline: "17th-century sentinel over Shivalik ridges",
      description: "Built during the reign of the Kotaha rulers, this stone fortress crowns a high hillcrest offering panoramic 360-degree vistas across forested valleys. Restored by Haryana Tourism, the fort grounds feature landscaped lawns, historical exhibits, and peaceful viewing points.",
      image: "/assets/Morni Fort Hilltop Ruins.png",
      elevation: "1,200 m",
      timings: "08:00 AM – 06:00 PM",
      entryFee: "₹20 (Free for children under 5)",
      highlights: ["Historical Bastions", "Panoramic Valley Views", "Lush Lawn Gardens", "Heritage Photography"],
      bestTime: "Late afternoon for golden sunset lighting"
    },
    {
      id: "tikkar-taal",
      title: "Tikkar Taal Twin Lakes",
      category: "Nature & Lakes",
      tagline: "Two sacred jewel lakes separated by a hillock",
      description: "The crown jewel of Morni Hills, Tikkar Taal consists of two serene interconnected bodies of water known locally as Bada Taal and Chota Taal. Surrounded by pine slopes, it is Haryana's most sought-after spot for paddle boating, kayaking, waterside picnics, and lakeside camping.",
      image: "/assets/tikkar-taal-boating.jpg.png",
      elevation: "1,000 m",
      timings: "Open all day (Boating: 09:00 AM – 05:30 PM)",
      entryFee: "Free (Boating ₹100–₹250)",
      highlights: ["Pedal & Row Boating", "Kayaking", "Lakeside Sunset Walk", "Camping Grounds"],
      bestTime: "Early mornings for mist & calm waters"
    },
    {
      id: "thakurdwara-temple",
      title: "Thakurdwara Temple",
      category: "Spiritual",
      tagline: "10th-century stone temple with ancient carvings",
      description: "An ancient shrine believed to date back to the 10th-century Pandava era, dedicated to Lord Krishna. The temple displays stone relief carvings and traditional hill-style masonry, nestled beside a mountain brook near Tikkar Taal.",
      image: "/assets/Thakurdwara Temple.png",
      elevation: "1,050 m",
      timings: "06:00 AM – 08:00 PM",
      entryFee: "Free",
      highlights: ["Ancient Stone Sculptures", "Sacred Spring", "Meditative Courtyard", "Tranquil Stream"],
      bestTime: "Morning prayer hours"
    },
    {
      id: "morni-viewpoints",
      title: "Karoh Peak & Sunset Viewpoint",
      category: "Viewpoints",
      tagline: "Highest elevation in Haryana at 1,467 meters",
      description: "Karoh Peak stands proudly on the border of Haryana and Himachal Pradesh as the highest geographic point in the state. Accessible via a rewarding hiking trail through pine woods, the summit rewards climbers with sweeping horizons reaching snow-dusted peaks in winter.",
      image: "/assets/Shivalik Valley Sunbeams.png",
      elevation: "1,467 m (Haryana's Highest)",
      timings: "Sunrise to Sunset",
      entryFee: "Free",
      highlights: ["Highest Point in Haryana", "Himalayan Ridge Vistas", "Trekking Trail", "Sunset Panorama"],
      bestTime: "October to February for clear horizons"
    },
    {
      id: "forest-trails",
      title: "Mandhana Pine Forest Trails",
      category: "Adventure",
      tagline: "Dense chir pine forest walking routes and wildlife trails",
      description: "A labyrinth of gentle and moderate walking paths weaving through aromatic Chir pine and Sal tree canopy. Popular among birders, solo walkers, and nature lovers seeking fresh oxygen and pure mountain calm.",
      image: "/assets/Aromatic Pine Canopy Walk.png",
      elevation: "1,150 m",
      timings: "Daylight hours",
      entryFee: "Free",
      highlights: ["Pine Needle Carpet", "Red Junglefowl Spotting", "Herbal Flora", "Gentle Slopes"],
      bestTime: "Dawn and early evening"
    },
    {
      id: "adventure-park",
      title: "Morni Adventure Park",
      category: "Activities",
      tagline: "Outdoor obstacle courses and zipline thrills for all ages",
      description: "Equipped with high ropes courses, Burma bridge crossings, flying fox ziplines, rock climbing walls, and children's adventure obstacle zones, making it an ideal weekend hotspot for families and thrill-seekers.",
      image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=1200&q=80",
      elevation: "1,180 m",
      timings: "09:30 AM – 06:00 PM",
      entryFee: "₹50 entry + Activity tickets (₹100–₹400)",
      highlights: ["Zipline Across Pine Canopies", "Burma Bridge", "Archery & Target Shooting", "Kids Play Zone"],
      bestTime: "Mid-morning to afternoon"
    }
  ],

  tikkarTaalSpecial: {
    badge: "SIGNATURE ATTRACTION",
    title: "Two Lakes. One Peaceful Escape.",
    subtitle: "Tikkar Taal — The Twin Lakes of Shivalik",
    description: "Separated by a low hillock yet believed to be connected by an ancient subterranean water channel, Bada Taal (Big Lake) and Chota Taal (Small Lake) mirror the shifting moods of the sky and forest. Legend holds that these sacred waters have never dried up, providing life and calm to the entire valley.",
    image: "/assets/tikkar-taal-boating.jpg.png",
    features: [
      { title: "Bada & Chota Taal", desc: "Two scenic natural water bodies nestled side-by-side in lush greenery." },
      { title: "Water Sports", desc: "Paddle boating, rowing, and kayaking with full safety gear provided." },
      { title: "Lakeside Camping", desc: "Overnight tents under clear starry skies with gentle water sounds." },
      { title: "Sacred Legends", desc: "Associated with Mahabharata folklore and revered local lore." }
    ],
    stats: [
      { label: "Water Spread", value: "35 Acres" },
      { label: "Altitude", value: "1,000 m" },
      { label: "Boating Hours", value: "9 AM – 5:30 PM" },
      { label: "Distance from Fort", value: "7 km" }
    ]
  },

  experiences: [
    {
      id: "nature-walks",
      title: "Nature Walks & Forest Bathing",
      icon: "Trees",
      description: "Wander through pine-fragrant trails, breathing in fresh mountain air while listening to gentle wind murmurs.",
      duration: "1 – 3 Hours",
      difficulty: "Easy",
      tag: "Relaxing"
    },
    {
      id: "photography",
      title: "Cinematic Photography",
      icon: "Camera",
      description: "Capture breathtaking morning mist rolling over emerald valleys, dramatic lake reflections, and golden sunsets.",
      duration: "Flexible",
      difficulty: "All Levels",
      tag: "Scenic"
    },
    {
      id: "trekking",
      title: "Shivalik Ridge Trekking",
      icon: "Mountain",
      description: "Scale trails up to Karoh Peak (1,467m) and Ghaggar ridge for exhilarating views and mountain fitness.",
      duration: "3 – 5 Hours",
      difficulty: "Moderate",
      tag: "Adventure"
    },
    {
      id: "camping",
      title: "Lakeside Camping & Stargazing",
      icon: "Tent",
      description: "Pitch a tent near Tikkar Taal or ridge camps, gather around a warm bonfire, and stargaze far from city lights.",
      duration: "Overnight",
      difficulty: "Easy",
      tag: "Unforgettable"
    },
    {
      id: "boating",
      title: "Paddle Boating & Kayaking",
      icon: "Compass",
      description: "Glide silently across calm lake waters in tandem pedal boats or agile kayaks with surrounding hill reflections.",
      duration: "30 – 60 Mins",
      difficulty: "Easy",
      tag: "Family Favorite"
    },
    {
      id: "bird-watching",
      title: "Bird Watching & Pheasant Spotting",
      icon: "Feather",
      description: "Spot Kalij Pheasants, Grey Francolins, Himalayan Barbets, and Crested Kingfishers in their natural habitats.",
      duration: "2 – 4 Hours",
      difficulty: "Easy",
      tag: "Wildlife"
    },
    {
      id: "village-walks",
      title: "Mountain Hamlet Immersion",
      icon: "Home",
      description: "Visit quaint hillside villages, experience authentic Haryanvi & hill hospitality, and taste pure mountain dairy.",
      duration: "2 Hours",
      difficulty: "Easy",
      tag: "Culture"
    },
    {
      id: "sunset-watching",
      title: "Morni Ridge Sunset Vistas",
      icon: "Sun",
      description: "Watch the sky transform into vibrant shades of violet, amber, and crimson across the Shivalik hill horizon.",
      duration: "1 Hour",
      difficulty: "Easy",
      tag: "Romantic"
    }
  ],

 restaurants: [
  {
    id: 1,
    slug: "the-hill-kitchen",

    name: "The Hill Kitchen",
    cuisine: "Himachali Cuisine",

    location: "Morni Hills",
    address: "Morni Hills, Haryana",

    rating: "4.8",
    reviewsCount: 124,


    image: "/assets/restaurent/The Hill Kitchen.png",

    description:
      "A warm mountain dining experience inspired by traditional Himachali flavours and local ingredients.",

    about:
      "The Hill Kitchen brings the authentic taste of the hills to your table. Enjoy traditional recipes, locally inspired flavours and a peaceful dining atmosphere surrounded by the beauty of Morni.",

    specialties: [
      "Himachali Dham",
      "Siddu with Ghee",
      "Rajma Chawal",
      "Chha Gosht",
    ],

    features: [
      "Mountain View",
      "Outdoor Seating",
      "Family Friendly",
      "Local Cuisine",
    ],

    gallery: [
      "/assets/restaurent/The Hill Kitchen.png",
      "/assets/restaurent/Interior1.png",
      "/assets/restaurent/Interior2.png",
      "/assets/Authentic Mountain Kulhad Chai & Delicacies.png",
    ],

    menu: [
      {
        category: "Starters",
        items: [
          {
            name: "Himachali Siddu",
            description: "Traditional steamed Himachali bread",
            price: "₹180",
          },
          {
            name: "Paneer Tikka",
            description: "Chargrilled cottage cheese",
            price: "₹280",
          },
        ],
      },

      {
        category: "Main Course",
        items: [
          {
            name: "Rajma Chawal",
            description: "Slow cooked rajma served with steamed rice",
            price: "₹240",
          },
          {
            name: "Chha Gosht",
            description: "Traditional Himachali mutton curry",
            price: "₹420",
          },
        ],
      },

      {
        category: "Desserts",
        items: [
          {
            name: "Gulab Jamun",
            description: "Soft milk dumplings served warm",
            price: "₹140",
          },
        ],
      },
    ],

    timings: {
      monday: "10:00 AM – 10:00 PM",
      tuesday: "10:00 AM – 10:00 PM",
      wednesday: "10:00 AM – 10:00 PM",
      thursday: "10:00 AM – 10:00 PM",
      friday: "10:00 AM – 11:00 PM",
      saturday: "10:00 AM – 11:00 PM",
      sunday: "10:00 AM – 10:00 PM",
    },

    phone: "+91 98765 43210",

    bookingUrl: "#",
  },

  {
    id: 2,
    slug: "lakeview-bistro",

    name: "Lakeview Bistro",
    cuisine: "Modern Indian",

    location: "Near Tikkar Taal",
    address: "Tikkar Taal, Morni Hills, Haryana",

    rating: "4.7",
    reviewsCount: 98,
    priceRange: "₹₹₹",

    image: "/assets/restaurent/Lakeview Bisto.png",

    description:
      "A contemporary lakeside dining experience combining modern cuisine with breathtaking views.",

    about:
      "Lakeview Bistro is designed for slow afternoons, beautiful sunsets and memorable meals. Enjoy modern Indian flavours with a relaxed lakeside ambience.",

    specialties: [
      "Wood Fired Pizza",
      "Indian Fusion",
      "Fresh Salads",
      "Artisan Desserts",
    ],

    features: [
      "Lake View",
      "Sunset Dining",
      "Outdoor Seating",
      "Pet Friendly",
    ],

    gallery: [
      "/assets/restaurent/Lakeview Bisto.png",
      "/assets/restaurent/Interior1.png",
      "/assets/restaurent/Interior3.png",
      "/assets/restaurent/Interior4.png",
    ],

    menu: [
      {
        category: "Starters",
        items: [
          {
            name: "Paneer Tikka",
            description: "Smoked paneer with house spices",
            price: "₹320",
          },
          {
            name: "Crispy Corn",
            description: "Crispy corn with herbs and spices",
            price: "₹260",
          },
        ],
      },

      {
        category: "Main Course",
        items: [
          {
            name: "Butter Chicken",
            description: "Creamy tomato based classic",
            price: "₹420",
          },
          {
            name: "Truffle Pasta",
            description: "Creamy pasta with truffle oil",
            price: "₹480",
          },
        ],
      },

      {
        category: "Desserts",
        items: [
          {
            name: "Chocolate Fondant",
            description: "Warm chocolate cake with molten centre",
            price: "₹280",
          },
        ],
      },
    ],

    timings: {
      monday: "11:00 AM – 10:00 PM",
      tuesday: "11:00 AM – 10:00 PM",
      wednesday: "11:00 AM – 10:00 PM",
      thursday: "11:00 AM – 10:00 PM",
      friday: "11:00 AM – 11:00 PM",
      saturday: "10:00 AM – 11:00 PM",
      sunday: "10:00 AM – 10:00 PM",
    },

    phone: "+91 98765 43211",

    bookingUrl: "#",
  },

  {
    id: 3,
    slug: "royal-courtyard",

    name: "Royal Courtyard",
    cuisine: "North Indian",

    location: "Morni",
    address: "Morni Hills, Haryana",

    rating: "4.9",
    reviewsCount: 156,
    priceRange: "₹₹₹",

    image: "/assets/restaurent/Royal.png",

    description:
      "Elegant courtyard dining inspired by royal Indian hospitality and traditional flavours.",

    about:
      "Royal Courtyard celebrates India's rich culinary heritage through refined North Indian cuisine, warm hospitality and an intimate courtyard setting.",

    specialties: [
      "Dal Makhani",
      "Galouti Kebab",
      "Butter Chicken",
      "Biryani",
    ],

    features: [
      "Courtyard Dining",
      "Premium Dining",
      "Family Friendly",
      "Private Events",
    ],

    gallery: [
      "/assets/restaurent/Royal.png",
      "/assets/restaurent/Interior2.png",
      "/assets/restaurent/Interior3.png",
      "/assets/restaurent/Interior4.png",
    ],

    menu: [
      {
        category: "Starters",
        items: [
          {
            name: "Galouti Kebab",
            description: "Tender minced meat kebabs",
            price: "₹480",
          },
          {
            name: "Paneer Angara",
            description: "Smoked paneer with royal spices",
            price: "₹360",
          },
        ],
      },

      {
        category: "Main Course",
        items: [
          {
            name: "Dal Makhani",
            description: "Slow cooked black lentils",
            price: "₹320",
          },
          {
            name: "Butter Chicken",
            description: "Classic creamy North Indian curry",
            price: "₹460",
          },
          {
            name: "Royal Biryani",
            description: "Fragrant basmati rice with aromatic spices",
            price: "₹520",
          },
        ],
      },

      {
        category: "Desserts",
        items: [
          {
            name: "Shahi Tukda",
            description: "Traditional royal Indian dessert",
            price: "₹220",
          },
        ],
      },
    ],

    timings: {
      monday: "12:00 PM – 10:30 PM",
      tuesday: "12:00 PM – 10:30 PM",
      wednesday: "12:00 PM – 10:30 PM",
      thursday: "12:00 PM – 10:30 PM",
      friday: "12:00 PM – 11:00 PM",
      saturday: "12:00 PM – 11:00 PM",
      sunday: "12:00 PM – 10:30 PM",
    },

    phone: "+91 98765 43212",

    bookingUrl: "#",
  },

  {
    id: 4,
    slug: "mountain-brew-co",

    name: "Mountain Brew Co.",
    cuisine: "Cafe & Bakery",

    location: "Morni Hills",
    address: "Morni Hills, Haryana",

    rating: "4.6",
    reviewsCount: 87,
    priceRange: "₹₹",

    image: "/assets/restaurent/Mountain Brew.png",

    description:
      "A cosy mountain cafe serving fresh coffee, baked treats and comforting food.",

    about:
      "Mountain Brew Co. is a relaxed hillside cafe created for coffee lovers, slow mornings and conversations over freshly baked treats.",

    specialties: [
      "Specialty Coffee",
      "Fresh Croissants",
      "Wood Fired Pizza",
      "Mountain Tea",
    ],

    features: [
      "Mountain View",
      "Free Wi-Fi",
      "Pet Friendly",
      "Breakfast",
    ],

    gallery: [
      "/assets/restaurent/Mountain Brew.png",
      "/assets/restaurent/Interior1.png",
      "/assets/restaurent/Interior2.png",
      "/assets/Authentic Mountain Kulhad Chai & Delicacies.png",
    ],

    menu: [
      {
        category: "Breakfast",
        items: [
          {
            name: "Classic Pancakes",
            description: "Fluffy pancakes with maple syrup",
            price: "₹280",
          },
          {
            name: "Avocado Toast",
            description: "Sourdough toast with avocado",
            price: "₹320",
          },
        ],
      },

      {
        category: "Cafe",
        items: [
          {
            name: "Cappuccino",
            description: "Freshly brewed espresso with steamed milk",
            price: "₹180",
          },
          {
            name: "Mountain Brew",
            description: "House special coffee blend",
            price: "₹220",
          },
        ],
      },

      {
        category: "Bakery",
        items: [
          {
            name: "Butter Croissant",
            description: "Freshly baked French-style croissant",
            price: "₹160",
          },
          {
            name: "Chocolate Cake",
            description: "Rich chocolate cake",
            price: "₹240",
          },
        ],
      },
    ],

    timings: {
      monday: "08:00 AM – 09:00 PM",
      tuesday: "08:00 AM – 09:00 PM",
      wednesday: "08:00 AM – 09:00 PM",
      thursday: "08:00 AM – 09:00 PM",
      friday: "08:00 AM – 10:00 PM",
      saturday: "08:00 AM – 10:00 PM",
      sunday: "08:00 AM – 09:00 PM",
    },

    phone: "+91 98765 43213",

    bookingUrl: "#",
  },
],

  resorts: [
    {
      id: "shivalik-pines-resort",
      name: "The Shivalik Pines Eco-Resort & Spa",
      type: "Luxury Mountain Resort",
      location: "Morni Ridge Road",
      rating: 4.9,
      reviewsCount: 280,
      pricePerNight: "₹5,500",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      description: "A premier luxury resort nestled amidst 10 acres of untouched pine forest. Features spacious stone chalets with private valley-view balconies, heated infinity plunge pool, and ayurvedic spa therapies.",
      amenities: ["Valley View Balconies", "Heated Pool & Spa", "Pine Trail Access", "High-speed Wi-Fi", "Bonfire Evenings", "Multi-cuisine Dining"],
      featured: true
    },
    {
      id: "tikkar-lake-glamping",
      name: "Tikkar Taal Lakefront Glamping",
      type: "Luxury Geodesic Domes & Safari Tents",
      location: "Tikkar Taal East Shore",
      rating: 4.8,
      reviewsCount: 340,
      pricePerNight: "₹4,200",
      image: "/assets/Luxury Glamping Under the Stars.png",
      description: "Experience the thrill of camping without giving up modern luxuries. Geodesic glass-roof domes with cozy king beds, attached designer bathrooms, barbecue grill pits, and unobstructed lake reflections.",
      amenities: ["Glass Stargazing Roof", "Private Lake Deck", "BBQ & Bonfire Setup", "Ensuite Modern Baths", "Kayaking Included", "Live Acoustic Music"],
      featured: true
    },
    {
      id: "royal-kotaha-cottages",
      name: "Royal Kotaha Heritage Cottages",
      type: "Colonial Stone Cottages",
      location: "Near Morni Fort",
      rating: 4.7,
      reviewsCount: 160,
      pricePerNight: "₹3,800",
      image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80",
      description: "Charming stone and cedarwood cottages designed in colonial hill architecture. Equipped with real wood-burning fireplaces, antique brass decor, and private flower gardens.",
      amenities: ["Wood-burning Fireplace", "Private Garden", "Butler Service", "Heritage Architecture", "Board Games Lounge", "Pet Welcoming"],
      featured: false
    },
    {
      id: "pine-valley-treehouses",
      name: "Pine Valley Treehouse Haven",
      type: "Eco Treehouses & Wooden Lodges",
      location: "Mandhana Forest Ridge",
      rating: 4.9,
      reviewsCount: 220,
      pricePerNight: "₹4,900",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      description: "Elevated high among giant pine canopies, these wooden treehouses offer 360-degree forest immersion, suspension bridge walkways, birdsong wake-up calls, and complete private seclusion.",
      amenities: ["Elevated Treehouse Deck", "Canopy Walkway", "Binoculars & Stargazer Telescope", "Organic Breakfast Included", "Nature Guide on Request"],
      featured: false
    }
  ],

  nearbyPlaces: [
    {
      id: "pinjore-gardens",
      name: "Yadavindra Gardens (Pinjore)",
      distance: "28 km from Morni",
      driveTime: "45 mins",
      image: "/assets/Yadavindra Gardens.png",
      description: "A 17th-century Mughal-style terraced garden covering 100 acres with multi-level fountains, historic Sheesh Mahal, Rang Mahal, and illuminated water cascades.",
      highlights: ["Terraced Mughal Design", "Water Fountains & Canals", "Heritage Architecture", "Evening Light Show"]
    },
    {
      id: "sukhna-lake",
      name: "Sukhna Lake (Chandigarh)",
      distance: "42 km from Morni",
      driveTime: "1 hour",
      image: "/assets/Sukhna Lake.png",
      description: "Chandigarh's picturesque 3 km² rain-fed reservoir against the Shivalik backdrop. Ideal for sunrise jogging, rowing, solar boat rides, and waterside dining.",
      highlights: ["Rowing & Boating", "Promenade Walking", "Migratory Birds", "Le Corbusier Architecture"]
    },
    {
      id: "nada-sahib",
      name: "Nada Sahib Gurudwara",
      distance: "30 km from Morni",
      driveTime: "40 mins",
        image: "/assets/Nada Sahib.png",
      description: "A revered historic Sikh shrine on the quiet banks of the Ghaggar river, visited by Guru Gobind Singh Ji in 1688. Known for its peaceful sanctum and 24/7 community langar.",
      highlights: ["Historic Sikh Pilgrimage", "Peaceful Riverbank", "Continuous Langar", "Golden Architecture"]
    },
    {
      id: "timber-trail",
      name: "Timber Trail Cable Car (Parwanoo)",
      distance: "40 km from Morni",
      driveTime: "55 mins",
      image: "/assets/Timber Trail Cable Car.png",
      description: "An exhilarating 1.8 km cable car ride soaring high above deep mountain gorges and pine valleys, connecting two picturesque hilltops with panoramic cafes.",
      highlights: ["Aerial Cable Car", "Deep Mountain Gorge", "Hilltop Resort & Cafe", "Thrill Experience"]
    },
    {
      id: "kasauli-hills",
      name: "Kasauli Hill Town",
      distance: "52 km from Morni",
      driveTime: "1 hr 25 mins",
      image: "/assets/Kasauli Hill Town.png",
      description: "A charming colonial-era hill town in Himachal Pradesh known for cobblestone streets, Christ Church, Monkey Point, and the famous Gilbert Nature Trail.",
      highlights: ["Colonial Architecture", "Gilbert Trail Walk", "Upper & Lower Malls", "Pine Forest Vistas"]
    },
    {
      id: "cactus-garden",
      name: "National Cactus Garden (Panchkula)",
      distance: "33 km from Morni",
      driveTime: "45 mins",
      image: "/assets/National Cactus Garden.png",
      description: "Asia's largest outdoor botanical garden dedicated to rare cacti and succulents, featuring over 3,500 endangered species across 7 acres.",
      highlights: ["Asia's Largest Cactus Collection", "Botanical Heritage", "Bonsai Section", "Photographer Haven"]
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Tikkar Taal Morning Mist",
      category: "Lakes",
      aspect: "landscape",
      image: "/assets/Tikkar Taal Morning Mist.png",
      location: "Tikkar Taal, Morni"
    },
    {
      id: 2,
      title: "Shivalik Valley Sunbeams",
      category: "Mountains",
      aspect: "portrait",
      image: "/assets/Shivalik Valley Sunbeams.png",
      location: "Karoh Peak Viewpoint"
    },
    {
      id: 3,
      title: "Morni Fort Hilltop Ruins",
      category: "Heritage",
      aspect: "square",
      image: "/assets/Morni Fort Hilltop Ruins.png",
      location: "Morni Fort Grounds"
    },
    {
      id: 4,
      title: "Aromatic Pine Canopy Walk",
      category: "Nature",
      aspect: "landscape",
      image: "/assets/Aromatic Pine Canopy Walk.png",
      location: "Mandhana Forest Reserve"
    },
    {
      id: 5,
      title: "Luxury Glamping Under the Stars",
      category: "Stays",
      aspect: "landscape",
      image: "/assets/Luxury Glamping Under the Stars.png",
      location: "Tikkar Taal Shore"
    },
    {
      id: 6,
      title: "Golden Hour Crimson Sky",
      category: "Sunsets",
      aspect: "portrait",
      image: "/assets/Golden Hour Crimson Sky.png",
      location: "Morni Ridge Road"
    },
    {
      id: 7,
      title: "Authentic Mountain Kulhad Chai & Delicacies",
      category: "Dining",
      aspect: "square",
      image: "/assets/Authentic Mountain Kulhad Chai & Delicacies.png",
      location: "Shivalik Pine Kitchen"
    },
    {
      id: 8,
      title: "Tranquil Water Reflections",
      category: "Lakes",
      aspect: "landscape",
      image: "/assets/Tranquil Water Reflections.png",
      location: "Chota Taal"
    },
    {
      id: 9,
      title: "Historic Ancient Temple Stone Carvings",
      category: "Heritage",
      aspect: "portrait",
      image: "/assets/Historic Ancient Temple Stone Carvings.png",
      location: "Thakurdwara Temple"
    }
  ],

  faqs: [
    {
      q: "What is the best time of year to visit Morni Hills?",
      a: "The ideal months are from October to April when the weather is pleasantly cool, crisp, and ideal for outdoor trekking and boating. Monsoon (July–September) is lush green but requires careful mountain driving."
    },
    {
      q: "How far is Morni Hills from Chandigarh and Delhi?",
      a: "Morni Hills is approximately 45 km (1 hour drive) from Chandigarh/Panchkula and about 260 km (4.5 to 5 hours drive via NH 44) from New Delhi."
    },
    {
      q: "Is boating available throughout the year at Tikkar Taal?",
      a: "Yes! Pedal boats, row boats, and kayaks operate year-round from 9:00 AM to 5:30 PM, subject to clear weather conditions."
    },
    {
      q: "Are there good accommodation options for families and couples?",
      a: "Yes, Morni Hills offers a range of stays including luxury eco-resorts with valley views, lakeside glamping domes at Tikkar Taal, heritage colonial cottages, and Haryana Tourism's Mountain Quail resort."
    },
    {
      q: "Is a private vehicle necessary to explore Morni Hills?",
      a: "Having your own car or a hired taxi is highly recommended as internal sightseeing spots (Morni Fort, Tikkar Taal, Karoh Peak) are spread across 10 to 15 km of scenic hilly roads."
    }
  ],

  contactInfo: {
    address: "Morni Hills Tourism Center, Main Ridge Road, Panchkula District, Haryana 134205",
    phone: "+91 172 258 3600 / +91 98120 00000",
    emergency: "112 (State Emergency) | +91 172 256 0888 (Panchkula Police)",
    email: "info@explore-mornihills.gov.in",
    operatingHours: "08:00 AM – 08:00 PM (All 7 Days)",
    weatherForecast: {
      temp: "22°C",
      humidity: "58%",
      wind: "12 km/h NW",
      uv: "Moderate",
      airQuality: "Good (AQI 32)"
    }
  }
};
