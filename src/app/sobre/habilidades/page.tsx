"use client";
import {
  FaReact,
  FaVuejs,
  FaPython,
  FaJs,
  FaPhp,
  FaNodeJs,
  FaDatabase,
  FaArrowLeft,
  FaCode,
  FaStar,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpo,
  SiLaravel,
  SiPostgresql,
  SiTypescript,
  // Removidos SiGraphql e SiSqlite que não estavam sendo usados
  SiDocker,
} from "react-icons/si";
import Link from "next/link";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function HabilidadesPage() {
  // Dados das habilidades com níveis de proficiência
  const skillsCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        {
          name: "Vue.js",
          icon: <FaVuejs className="text-green-500" />,
          level: 80,
          color: "from-green-500 to-green-600",
        },
        {
          name: "React",
          icon: <FaReact className="text-blue-500" />,
          level: 90,
          color: "from-blue-500 to-blue-600",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black" />,
          level: 80,
          color: "from-black to-gray-800",
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-400" />,
          level: 85,
          color: "from-yellow-400 to-yellow-500",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
          level: 70,
          color: "from-blue-600 to-blue-700",
        },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600" />,
          level: 80,
          color: "from-green-600 to-green-700",
        },
        {
          name: "PHP",
          icon: <FaPhp className="text-purple-500" />,
          level: 80,
          color: "from-purple-500 to-purple-600",
        },
        {
          name: "Laravel",
          icon: <SiLaravel className="text-red-500" />,
          level: 90,
          color: "from-red-500 to-red-600",
        },
        {
          name: "Python",
          icon: <FaPython className="text-blue-400" />,
          level: 80,
          color: "from-blue-400 to-blue-500",
        },
        {
          name: "PL/SQL",
          icon: <FaDatabase className="text-orange-500" />,
          level: 50,
          color: "from-orange-500 to-orange-600",
        },
        {
          name: "API Rest",
          icon: <FaCode className="text-teal-500" />,
          level: 90,
          color: "from-teal-500 to-teal-600",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
          level: 85,
          color: "from-blue-600 to-blue-700",
        },
      ],
    },
    {
      title: "Mobile & DevOps",
      icon: "📱",
      skills: [
        {
          name: "ExpoGO",
          icon: <SiExpo className="text-gray-800" />,
          level: 75,
          color: "from-gray-800 to-gray-900",
        },
        {
          name: "Docker",
          icon: <SiDocker className="text-blue-400" />,
          level: 80,
          color: "from-blue-400 to-blue-500",
        },
      ],
    },
  ];

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
      },
    },
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
      },
    },
  };

  const waveVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear" as const,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Navegação - Voltar */}
        <div className="container mx-auto px-4 pt-8">
          <Link
            href="/sobre"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <motion.div
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <FaArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
              <span>Voltar para Sobre</span>
            </motion.div>
          </Link>
        </div>

        {/* Cabeçalho Premium */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring" as const }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Minhas Habilidades Técnicas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            >
              Tecnologias que domino e utilizo para criar soluções de alto
              impacto
            </motion.p>
          </div>
        </section>

        {/* Lista de Habilidades Premium */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-6xl mx-auto"
            >
              {skillsCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={categoryVariants}
                  className="mb-16 bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="p-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                      <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="mr-3 inline-block"
                      >
                        {category.icon}
                      </motion.span>
                      {category.title}
                    </h2>
                  </motion.div>

                  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillCardVariants}
                        whileHover="hover"
                        className="bg-white rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
                      >
                        <div className="p-6 flex flex-col items-center">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            className="w-16 h-16 flex items-center justify-center text-4xl mb-4"
                          >
                            {skill.icon}
                          </motion.div>
                          <h3 className="font-bold text-gray-800 text-center mb-2">
                            {skill.name}
                          </h3>

                          {/* Barra de progresso premium */}
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3 overflow-hidden">
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              variants={progressBarVariants}
                              custom={skill.level}
                              className="relative h-full rounded-full"
                            >
                              <div
                                className={`absolute inset-0 bg-gradient-to-r ${skill.color}`}
                                style={{ width: `${skill.level}%` }}
                              />
                              <motion.div
                                variants={waveVariants}
                                className="absolute top-0 left-0 h-full w-1/2 bg-white opacity-20"
                              />
                            </motion.div>
                          </div>

                          <div className="flex items-center text-sm text-gray-600">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            >
                              <FaStar className="text-yellow-400 mr-1" />
                            </motion.div>
                            <span>{skill.level}% proficiência</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Rodapé Premium */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-gray-600"
          >
            © {new Date().getFullYear()} - Habilidades atualizadas regularmente
          </motion.p>
        </div>
      </footer>
    </div>
  );
}