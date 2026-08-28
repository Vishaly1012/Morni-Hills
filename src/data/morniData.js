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
    paragraphs: [
      "Named after a legendary 17th-century queen who ruled Kotaha, Morni Hills offers travelers an antidote to urban chaos. The twin interconnected lakes of Tikkar Taal reflect emerald hills, while the ancient Morni Fort stands sentinel on high cliffs overlooking rolling valleys.",
      "Home to vibrant wildlife including barking deer, wild boars, sambars, and the elusive leopard, the hills are also an ornithologist's paradise with over 80 species of Himalayan and migratory birds."
    ],
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
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
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
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
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
      image: "/src/Images/Thakurdwara Temple.png",
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
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
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
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1439853941329-a99ce04b5a8a?auto=format&fit=crop&w=1600&q=85",
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
      id: "shivalik-pines-kitchen",
      name: "The Shivalik Pine Kitchen",
      cuisine: "Authentic Haryanvi & North Indian",
      location: "Near Morni Fort Road",
      rating: 4.8,
      reviewsCount: 320,
      priceRange: "₹₹ (Moderate)",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
      description: "Famous for traditional clay-oven tandoori breads, Bajra Roti with fresh homemade white butter, Sarson Ka Saag, and rich slow-simmered Dal Makhani with scenic patio seating.",
      specialties: ["Bajra Roti with White Makkhan", "Desi Ghee Kadhi Pakora", "Smoked Paneer Tikka", "Kullhad Mountain Chai"],
      features: ["Outdoor Terrace", "Pure Vegetarian Options", "Mountain Views", "Parking Available"]
    },
    {
      id: "tikkar-lakeview-cafe",
      name: "Tikkar Taal Lakeview Bistro",
      cuisine: "Continental, Cafe & Fast Casual",
      location: "Tikkar Taal Lakefront Promenade",
      rating: 4.6,
      reviewsCount: 450,
      priceRange: "₹₹ (Moderate)",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      description: "Perched right beside the twin lakes, this airy wooden cafe serves freshly brewed artisan espresso, wood-fired artisan flatbreads, grilled sandwiches, and herbal mountain infusions.",
      specialties: ["Shivalik Wood-fired Pizza", "Nutella Pancake Stack", "Ginger Lemongrass Tea", "Loaded Mountain Fries"],
      features: ["Lakefront Deck", "Free Wi-Fi", "Pet Friendly", "Sunset Spot"]
    },
    {
      id: "kotaha-heritage-restaurant",
      name: "Kotaha Royal Courtyard",
      cuisine: "Mughlai, Awadhi & Royal Indian",
      location: "Kotaha Hills Road, Morni",
      rating: 4.9,
      reviewsCount: 190,
      priceRange: "₹₹₹ (Fine Dining)",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      description: "Set within a heritage-inspired stone courtyard with candlelight and soft classical instrumental music, serving royal slow-cooked delicacies and curated vegetarian thalis.",
      specialties: ["Shahi Paneer Dum Pukht", "Subz Biryani Handi", "Tandoori Malai Broccoli", "Gulab Jamun with Rabri"],
      features: ["Fine Dining Ambience", "Private Cabanas", "Live Sitar on Weekends", "Cocktail & Mocktail Bar"]
    },
    {
      id: "orchard-farm-table",
      name: "Pine & Orchard Tea House",
      cuisine: "Farm-to-Table, Organic & Health",
      location: "Mandhana Village Outskirts",
      rating: 4.7,
      reviewsCount: 210,
      priceRange: "₹₹ (Moderate)",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      description: "An eco-friendly garden eatery using 100% locally harvested organic ingredients from nearby hill farms. Savor fresh honey-lemon teas, garden-fresh salads, and multigrain parathas.",
      specialties: ["Wild Mountain Honey Waffles", "Farm Fresh Garden Salad", "Buckwheat Paratha", "Himalayan Pink Salt Lassi"],
      features: ["Organic Garden Setting", "Farm Tour Included", "Vegan Friendly", "Artisan Honey for Sale"]
    }
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
      image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
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
      image: "/src/Images/Yadavindra Gardens.png",
      description: "A 17th-century Mughal-style terraced garden covering 100 acres with multi-level fountains, historic Sheesh Mahal, Rang Mahal, and illuminated water cascades.",
      highlights: ["Terraced Mughal Design", "Water Fountains & Canals", "Heritage Architecture", "Evening Light Show"]
    },
    {
      id: "sukhna-lake",
      name: "Sukhna Lake (Chandigarh)",
      distance: "42 km from Morni",
      driveTime: "1 hour",
      image: "/src/Images/Sukhna Lake.png",
      description: "Chandigarh's picturesque 3 km² rain-fed reservoir against the Shivalik backdrop. Ideal for sunrise jogging, rowing, solar boat rides, and waterside dining.",
      highlights: ["Rowing & Boating", "Promenade Walking", "Migratory Birds", "Le Corbusier Architecture"]
    },
    {
      id: "nada-sahib",
      name: "Nada Sahib Gurudwara",
      distance: "30 km from Morni",
      driveTime: "40 mins",
        image: "/src/Images/Nada Sahib.png",
      description: "A revered historic Sikh shrine on the quiet banks of the Ghaggar river, visited by Guru Gobind Singh Ji in 1688. Known for its peaceful sanctum and 24/7 community langar.",
      highlights: ["Historic Sikh Pilgrimage", "Peaceful Riverbank", "Continuous Langar", "Golden Architecture"]
    },
    {
      id: "timber-trail",
      name: "Timber Trail Cable Car (Parwanoo)",
      distance: "40 km from Morni",
      driveTime: "55 mins",
      image: "/src/Images/Timber Trail Cable Car.png",
      description: "An exhilarating 1.8 km cable car ride soaring high above deep mountain gorges and pine valleys, connecting two picturesque hilltops with panoramic cafes.",
      highlights: ["Aerial Cable Car", "Deep Mountain Gorge", "Hilltop Resort & Cafe", "Thrill Experience"]
    },
    {
      id: "kasauli-hills",
      name: "Kasauli Hill Town",
      distance: "52 km from Morni",
      driveTime: "1 hr 25 mins",
      image: "/src/Images/Kasauli Hill Town.png",
      description: "A charming colonial-era hill town in Himachal Pradesh known for cobblestone streets, Christ Church, Monkey Point, and the famous Gilbert Nature Trail.",
      highlights: ["Colonial Architecture", "Gilbert Trail Walk", "Upper & Lower Malls", "Pine Forest Vistas"]
    },
    {
      id: "cactus-garden",
      name: "National Cactus Garden (Panchkula)",
      distance: "33 km from Morni",
      driveTime: "45 mins",
      image: "/src/Images/National Cactus Garden.png",
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
      image: "/src/Images/Shivalik Valley Sunbeams.png",
      location: "Karoh Peak Viewpoint"
    },
    {
      id: 3,
      title: "Morni Fort Hilltop Ruins",
      category: "Heritage",
      aspect: "square",
      image: "/src/Images/Morni Fort Hilltop Ruins.png",
      location: "Morni Fort Grounds"
    },
    {
      id: 4,
      title: "Aromatic Pine Canopy Walk",
      category: "Nature",
      aspect: "landscape",
      image: "/src/Images/Aromatic Pine Canopy Walk.png",
      location: "Mandhana Forest Reserve"
    },
    {
      id: 5,
      title: "Luxury Glamping Under the Stars",
      category: "Stays",
      aspect: "landscape",
      image: "/src/Images/Luxury Glamping Under the Stars.png",
      location: "Tikkar Taal Shore"
    },
    {
      id: 6,
      title: "Golden Hour Crimson Sky",
      category: "Sunsets",
      aspect: "portrait",
      image: "/src/Images/Golden Hour Crimson Sky.png",
      location: "Morni Ridge Road"
    },
    {
      id: 7,
      title: "Authentic Mountain Kulhad Chai & Delicacies",
      category: "Dining",
      aspect: "square",
      image: "/src/Images/Authentic Mountain Kulhad Chai & Delicacies.png",
      location: "Shivalik Pine Kitchen"
    },
    {
      id: 8,
      title: "Tranquil Water Reflections",
      category: "Lakes",
      aspect: "landscape",
      image: "/src/Images/Tranquil Water Reflections.png",
      location: "Chota Taal"
    },
    {
      id: 9,
      title: "Historic Ancient Temple Stone Carvings",
      category: "Heritage",
      aspect: "portrait",
      image: "/src/Images/Historic Ancient Temple Stone Carvings.png",
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
