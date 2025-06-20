"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Interface para tipagem do item
interface SetupItem {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

export default function SetupCard({ item }: { item: SetupItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-all flex flex-col h-full"
    >
      <Link
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full group"
      >
        {/* Container da Imagem com efeito de brilho no hover */}
        <motion.div
          className="relative w-full h-48 bg-gray-50/50 flex items-center justify-center"
          whileHover={{
            backgroundColor: "rgba(243, 244, 246, 0.7)",
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain p-6 transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </motion.div>

        {/* Conteúdo do Card */}
        <div className="p-6 flex-grow flex flex-col border-t border-gray-100">
          <motion.h3
            className="text-xl font-semibold text-gray-900 mb-2"
            whileHover={{
              color: "#6366f1",
              x: 2,
            }}
            transition={{ type: "spring", damping: 10 }}
          >
            {item.title}
          </motion.h3>

          <motion.p
            className="text-gray-600 mb-4 flex-grow"
            whileHover={{
              color: "#4b5563",
            }}
          >
            {item.description}
          </motion.p>

          <motion.div
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(79, 70, 229, 0.1)",
            }}
            className="self-start"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-100/80 text-indigo-800 border border-indigo-200">
              {item.category}
            </span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}