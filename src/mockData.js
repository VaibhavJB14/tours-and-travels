// Reliable, high-quality Unsplash image links with proper formatting
const images = {
  // Hero & General
  kalsubai: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
  harishchandragad: "https://images.unsplash.com/photo-1586861114251-51268686e003?auto=format&fit=crop&w=800&q=80",
  scuba: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80",
  himalayas: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80",
  varanasi: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",

  // International
  bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
  dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  swiss: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
  paris: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",

  // Domestic
  kerala: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
  manali: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=800&q=80",
  agra: "https://images.unsplash.com/photo-1564507592208-02df23a780fc?auto=format&fit=crop&w=800&q=80",
  ladakh: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?auto=format&fit=crop&w=800&q=80",

  // Spiritual
  tirupati: "https://images.unsplash.com/photo-1582510003544-4d00b7f7415e?auto=format&fit=crop&w=800&q=80",
  chardham: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80", 
  rameshwaram: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=800&q=80",
  dharmasthala: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
};

export const popularDestinations = {
  international: [
    { id: 101, name: "Bali", image: images.bali },
    { id: 102, name: "Dubai", image: images.dubai },
    { id: 103, name: "Swiss Alps", image: images.swiss },
    { id: 104, name: "Paris", image: images.paris }
  ],
  domestic: [
    { id: 201, name: "Kerala", image: images.kerala },
    { id: 202, name: "Manali", image: images.manali },
    { id: 203, name: "Agra", image: images.agra },
    { id: 204, name: "Leh Ladakh", image: images.ladakh }
  ],
  teertayatra: [
    { id: 301, name: "Tirupati", image: images.tirupati },
    { id: 302, name: "Chardham", image: images.chardham },
    { id: 303, name: "Rameshwaram", image: images.rameshwaram },
    { id: 304, name: "Dharmasthala", image: images.dharmasthala }
  ]
};

// HERO SLIDES 
export const heroSlides = [
  {
    id: 1,
    title: "Discover the Magic of Switzerland",
    subtitle: "Experience the breathtaking Alps, pristine lakes, and charming villages in our premium guided tour.",
    image: images.swiss,
    price: "₹1,85,000",
    time: "7 Days"
  },
  {
    id: 2,
    title: "Unwind in Tropical Bali",
    subtitle: "Relax in luxury private villas, explore ancient temples, and walk through lush green rice terraces.",
    image: images.bali,
    price: "₹45,000",
    time: "5 Days"
  },
  {
    id: 3,
    title: "Journey Through Historic Paris",
    subtitle: "A romantic getaway featuring exclusive wine tastings, private museum tours, and exquisite dining.",
    image: images.paris,
    price: "₹1,20,000",
    time: "6 Days"
  }
];

export const upcomingTours = [
  {
    id: 1,
    title: "Kalsubai Peak Weekend Trek",
    image: images.kalsubai,
    description: "The classic trek to Maharashtra's highest summit. Perfectly organized for individuals and groups.",
    budget: "₹3,499",
    category: "Treks",
    type: "Domestic"
  },
  {
    id: 2,
    title: "Harishchandragad Fort & Caves",
    image: images.harishchandragad,
    description: "Explore the historic fort, ancient caves, and stand atop the mighty Konkan Kada cliff.",
    budget: "₹4,199",
    category: "Treks",
    type: "Domestic"
  },
  {
    id: 3,
    title: "Malvan Scuba Diving & Beach Tour",
    image: images.scuba,
    description: "Experience the underwater world in Malvan. Includes water sports and Sindhudurg fort visit.",
    budget: "₹15,000",
    category: "Adventure",
    type: "Domestic"
  },
  {
    id: 4,
    title: "Magical Kerala Backwaters",
    image: images.kerala,
    description: "Drift along the pristine canals on a premium houseboat. Includes a Kathakali performance.",
    budget: "₹21,500",
    category: "Tours",
    type: "Domestic"
  },
  {
    id: 5,
    title: "Chardham Yatra",
    image: images.chardham,
    description: "A complete spiritual pilgrimage to the sacred temples of the Himalayas.",
    budget: "₹32,000",
    category: "Teertayatra",
    type: "Domestic"
  },
  {
    id: 6,
    title: "Intro to Himalayan Trekking",
    image: images.himalayas,
    description: "Beginner-friendly Himalayan expedition. Start your journey into the world's highest mountains.",
    budget: "₹35,000",
    category: "Treks",
    type: "Himalayan"
  }
];

export const faqs = [
  { question: "What are the essential items to pack for a Sahyadri trek?", answer: "Comfortable trekking shoes, 2 liters of water, torch, personal medication, suncap, and extra clothes. A detailed list is sent post-booking." },
  { question: "Are your tours beginner-friendly?", answer: "Many of our local Sahyadri treks are perfect for beginners. Himalayan expeditions are marked with difficulty levels." },
  { question: "What is your cancellation policy?", answer: "Cancellation 7 days before the trip: 50% refund. Within 7 days: No refund. You can transfer your booking to a friend." },
  { question: "What kind of transport do you use from Pune/Mumbai?", answer: "We use private, comfortable Non-AC buses or tempo travelers depending on group size." }
];

export const searchPlaceholders = [
  "Kalsubai Trek", 
  "Harishchandragad Kada", 
  "Kerala Houseboats", 
  "Varanasi Aarti"
];

export const megaMenuDestinations = upcomingTours.map(tour => ({
  id: tour.id,
  name: tour.title.split(' ').slice(0, 2).join(' '),
  image: tour.image,
  highlight: tour.category
}));

// CATEGORIES RESTORED TO ORIGINAL REQUEST
export const megaMenuCategories = [
  { id: 1, name: "Treks", desc: "Local peak conquests.", image: images.kalsubai },
  { id: 2, name: "International", desc: "Global getaways & luxury trips.", image: images.swiss },
  { id: 3, name: "Domestic", desc: "Incredible India explorations.", image: images.kerala },
  { id: 4, name: "Teertayatra", desc: "Divine spiritual journeys.", image: images.varanasi }
];

export const detailedTourTemplate = {
  duration: "6 Days / 5 Nights",
  price: "₹14,999",
  overview: "Embark on an unforgettable journey tailored for the modern explorer. Experience the perfect blend of breathtaking landscapes, rich cultural heritage, and premium comfort. This carefully curated package ensures you see the most iconic sights while enjoying exclusive accommodations and expert guided tours.",
  highlights: [
    "Premium Accommodations",
    "Expert Local Tour Guide",
    "Exclusive Cultural Experiences",
    "All Private Transfers Included"
  ],
  // UPDATED: Added dedicated images directly to each day in the itinerary
  itinerary: [
    { 
      day: 1, 
      title: "Arrival & Grand Welcome", 
      description: "Arrive at the destination where our premium chauffeur will be waiting. Enjoy a seamless transfer to your hotel. Spend the evening relaxing.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
    },
    { 
      day: 2, 
      title: "Iconic Sightseeing Tour", 
      description: "After a hearty breakfast, embark on a fully guided tour of the most famous local landmarks. Capture stunning photos and learn about the history.",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80"
    },
    { 
      day: 3, 
      title: "Cultural Immersion & Leisure", 
      description: "Dive deep into the local culture with an exclusive hands-on experience. The afternoon is free for shopping or relaxation.",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80"
    },
    { 
      day: 4, 
      title: "Adventure & Nature Exploration", 
      description: "Head out to witness breathtaking natural landscapes. Enjoy a mild trek or a scenic boat ride, followed by lunch amidst nature.",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=800&q=80"
    },
    { 
      day: 5, 
      title: "Farewell Gala Dinner", 
      description: "Enjoy a free day to visit any missed spots. In the evening, join us for a spectacular farewell dinner featuring authentic local cuisine.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    { 
      day: 6, 
      title: "Departure", 
      description: "Enjoy your final breakfast before our chauffeur transfers you back to the airport/station for your safe journey home.",
      image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80"
    }
  ],
  inclusions: [
    "5 Nights Accommodation",
    "Daily Breakfast & Dinner",
    "Pick-up & Drop Transfers",
    "All Sightseeing Entry Tickets",
    "Dedicated Expert Guide"
  ],
  exclusions: [
    "Flights / Train Tickets",
    "Travel Insurance",
    "Personal Expenses (Laundry, Tips)",
    "Additional Adventure Activities"
  ]
};

// --- ADD THIS TO THE BOTTOM OF mockData.js ---
export const testimonials = [
  {
    id: 1,
    name: "Rahul Deshmukh",
    location: "Mumbai, MH",
    trip: "Kalsubai Peak Trek",
    image: images.kalsubai,
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
    review: "Absolutely thrilling experience! The guides were very professional and the sunrise view from Kalsubai was unforgettable. Highly recommend Sahyadri Sanchari for weekend treks.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Pune, MH",
    trip: "Magical Kerala Backwaters",
    image: images.kerala,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    review: "The houseboat stay was pure luxury. Every detail was meticulously planned, from the delicious local food to the smooth transfers. A perfect relaxing getaway.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Bengaluru, KA",
    trip: "Chardham Yatra",
    image: images.chardham,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    review: "A deeply spiritual and well-organized pilgrimage. Taking care of elderly parents on such a trip is tough, but the team made it incredibly smooth and comfortable.",
    rating: 5
  },
  {
    id: 4,
    name: "Neha Joshi",
    location: "Thane, MH",
    trip: "Malvan Scuba Diving",
    image: images.scuba,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    review: "My first time scuba diving and I felt completely safe! The underwater videos they provided were amazing. The beachside resort was the cherry on top.",
    rating: 4
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Delhi",
    trip: "Swiss Alps Luxury",
    image: images.swiss,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    review: "A flawless international trip. Sahyadri Sanchari handled our visas, flights, and premium hotels. Gliding through the Swiss Alps on the train was a dream come true.",
    rating: 5
  }
];

// --- ADD THIS TO THE BOTTOM OF mockData.js ---
export const tourGallery = [
  { id: 1, url: "https://images.unsplash.com/photo-1506905925203-080862086e37?auto=format&fit=crop&w=800&q=80", caption: "Sunset Views" },
  { id: 2, url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80", caption: "Local Explorations" },
  { id: 3, url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80", caption: "Mountain Passes" },
  { id: 4, url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80", caption: "Ancient Architecture" },
  { id: 5, url: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80", caption: "Hidden Valleys" }
];