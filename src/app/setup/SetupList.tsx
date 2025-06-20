"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import SetupCard from "./SetupCard";
import setupData from "./data/setup.json";

const categories = [
  "todos",
  "equipamentos",
  "mobilia",
  "eletronico",
  "escritorio",
  "ferramentas",
  "aparelho portatil",
  "pc",
  "perifericos",
];

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const, // Adicionado 'as const' para tipagem correta
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.05,
    },
  },
};

export default function SetupList() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = setupData.items.filter((item) => {
    const matchesCategory =
      activeCategory === "todos" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Filtros e Busca */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                activeCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-800 border border-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" as const, stiffness: 300 }} // Corrigido aqui também
          className="max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Buscar itens..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>
      </div>

      {/* Lista de Itens */}
      <LayoutGroup>
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div
              layout
              variants={categoryVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              key={activeCategory} // Força nova animação ao mudar categoria
            >
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  variants={categoryVariants}
                  transition={{ type: "spring" as const, stiffness: 100 }} // Corrigido aqui também
                >
                  <SetupCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center text-gray-500 py-12"
            >
              Nenhum item encontrado. Tente ajustar os filtros.
            </motion.p>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}