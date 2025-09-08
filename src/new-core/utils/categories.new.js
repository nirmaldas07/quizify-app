// src/utils/categories.js

export const categories = [
  { name: "GK", slug: "general-knowledge", questions: 50, icon: "🧠", color: "#FF6B6B", gradient: "from-red-500 to-pink-500" },
  { name: "Science", slug: "science", questions: 45, icon: "🧪", color: "#4ECDC4", gradient: "from-cyan-500 to-teal-500" },
  { name: "Fun Facts", slug: "fun-facts", questions: 30, icon: "🎉", color: "#FFD93D", gradient: "from-yellow-400 to-orange-500" },
  { name: "History", slug: "history", questions: 42, icon: "🏺", color: "#A8E6CF", gradient: "from-green-400 to-emerald-500" },
  { name: "AI & Tech", slug: "artificial-intelligence", questions: 28, icon: "🤖", color: "#C7B8FF", gradient: "from-purple-400 to-indigo-500" },
  { name: "More", slug: "more", questions: 0, icon: "✨", color: "#FF8CC3", gradient: "from-pink-400 to-rose-500" },
];

export const moreCategories = [
  { name: "Geography", slug: "geography", questions: 38, icon: "🗺️", color: "#FACC15", gradient: "from-yellow-400 to-amber-500" },
  { name: "Computer", slug: "computer", questions: 34, icon: "💻", color: "#3B82F6", gradient: "from-blue-400 to-blue-600" },
  { name: "Aptitude", slug: "aptitude", questions: 36, icon: "📐", color: "#EC4899", gradient: "from-pink-500 to-rose-500" },
  { name: "Iconic Figures", slug: "iconic-figures", questions: 26, icon: "🌟", color: "#8B5CF6", gradient: "from-purple-500 to-violet-600" },
];

// All categories except "More" button
export const allCategories = [...categories.filter(c => c.slug !== "more"), ...moreCategories];

// Helper function to get category by slug
export const getCategoryBySlug = (slug) => {
  return allCategories.find(cat => cat.slug === slug);
};

// Helper function to get random categories excluding certain slugs
export const getRandomCategories = (excludeSlugs = [], count = 3) => {
  const available = allCategories.filter(cat => !excludeSlugs.includes(cat.slug));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Helper function to get categories by difficulty level
export const getCategoriesByDifficulty = (userLevel) => {
  // You can customize this based on your game logic
  const beginnerCategories = ["general-knowledge", "fun-facts"];
  const intermediateCategories = ["science", "history", "geography"];
  const advancedCategories = ["artificial-intelligence", "computer", "aptitude", "iconic-figures"];
  
  if (userLevel < 5) {
    return allCategories.filter(cat => beginnerCategories.includes(cat.slug));
  } else if (userLevel < 10) {
    return allCategories.filter(cat => 
      [...beginnerCategories, ...intermediateCategories].includes(cat.slug)
    );
  } else {
    return allCategories;
  }
};