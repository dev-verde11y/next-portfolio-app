"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaUser,
  FaBuilding,
  FaMusic,
  FaFilm,
  FaTv,
  FaPizzaSlice,
  FaLaptop,
  FaCity,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGlobe,
  FaCalendarAlt,
  FaCode,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

// Animations config
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const profileData = {
  pt: {
    header: {
      name: "Bruno Almeida",
      title: "Desenvolvedor Full-Stack",
      tagline: "Transformando ideias em soluções digitais de alto impacto",
      location: "Goiânia GO, Brasil",
      connections: "",
      social: [
        { icon: FaLinkedin, url: "#", label: "LinkedIn" },
        { icon: FaGithub, url: "#", label: "GitHub" },
        { icon: FaTwitter, url: "#", label: "Twitter" },
        { icon: FaGlobe, url: "#", label: "Website" },
      ],
    },
    about: {
      title: "Sobre",
      description:
        "Desenvolvedor full-stack com 4+ anos de experiência criando soluções escaláveis e de alto desempenho. Especializado em arquitetura de sistemas distribuídos e desenvolvimento de aplicações web modernas. Muito , café e projetos pessoais",
      stats: [
        { icon: FaRocket, value: "40+", label: "Projetos" },
        { icon: FaCalendarAlt, value: "4", label: "Anos Exp" },
        { icon: FaChartLine, value: "99%", label: "Satisfação" },
      ],
      contact: [
        { icon: FaEnvelope, value: "bnoo.almeida@gmail.com" },
        { icon: FaPhone, value: "+55 (62) 98242-8369" },
      ],
    },
    experience: {
      title: "Experiência Profissional",
      items: [
        {
          role: "Desenvolvimento/Soluções De Sistemas Pleno IV",
          company: "Novomundo SA",
          period: "2021 – Presente",
          location: "Remoto",
          description:
            "Liderança técnica de equipe multidisciplinar com foco em arquitetura de sistemas escaláveis.",
          skills: ["Node.js", "PostgreSQL", "PHP", "Laravel"],
          icon: FaCode,
        },
      ],
    },
    skills: {
      title: "Competências",
      items: [
        { name: "Comunicação", level: 90 },
        { name: "Trabalho em equipe", level: 85 },
        { name: "Planejamento", level: 88 },
        { name: "autodidatico", level: 100 },
        { name: "expertise", level: 75 },
      ],
    },
    interests: {
      title: "Interesses Pessoais",
      items: [
        { icon: FaMusic, category: "Música", items: ["LoFi", "Rock"] },
        { icon: FaFilm, category: "Filmes", items: ["Matrix", "Interestelar"] },
        { icon: FaTv, category: "Séries", items: ["Silicon Valley", "Black Mirror"] },
        { icon: FaPizzaSlice, category: "Gastronomia", items: ["Pizza Artesanal"] },
        { icon: FaLaptop, category: "Tecnologia", items: ["Linux Ecosystem"] },
        { icon: FaCity, category: "Viagens", items: ["BA", "Bahia"] },
      ],
    },
  },
};

const SkillBar = ({ level }: { level: number }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <motion.div 
      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${level}%` }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  </div>
);

export default function PremiumLinkedInProfile() {
  const t = profileData.pt;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "14rem" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-500 to-blue-900 w-full"
        />

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="flex flex-col md:flex-row gap-8 -mt-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Profile Picture */}
            <motion.div 
              variants={fadeInUp}
              className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/me.jpeg"
                alt={t.header.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>

            {/* Profile Info */}
            <motion.div variants={fadeInUp} className="flex-1 pt-0 lg:pt-24">
              <h1 className="text-3xl font-bold text-gray-900">{t.header.name}</h1>
              <motion.p 
                className="text-xl text-blue-700 mt-1 font-medium"
                whileHover={{ x: 5 }}
              >
                {t.header.title}
              </motion.p>
              <p className="text-gray-700 mt-2">{t.header.tagline}</p>
              
              <div className="flex items-center mt-3 text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-blue-600" />
                <span>{t.header.location}</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={fadeInUp}
              className="flex gap-4 self-center md:self-start pt-6"
            >
              {t.header.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-gray-700 shadow-sm border border-gray-200"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "#EFF6FF",
                    color: "#2563EB"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Card */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaUser className="text-blue-500 mr-3" />
                  {t.about.title}
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t.about.description}
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {t.about.stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="text-blue-500 text-2xl" />
                      </div>
                      <p className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-gray-500">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  {t.about.contact.map((contact, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <contact.icon className="text-blue-500 mr-4 text-xl" />
                      <span className="text-gray-700">{contact.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaBuilding className="text-blue-500 mr-3" />
                  {t.experience.title}
                </h2>
              </div>
              <div className="divide-y divide-gray-100">
                {t.experience.items.map((exp, index) => (
                  <motion.div 
                    key={index}
                    className="p-6"
                    whileHover={{ backgroundColor: "#f8fafc" }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-blue-50 rounded-xl text-blue-600 flex-shrink-0">
                        <exp.icon className="text-2xl" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">
                              {exp.role}
                            </h3>
                            <p className="text-blue-600">{exp.company}</p>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <FaCalendarAlt className="mr-2" />
                            <span>
                              {exp.period} • {exp.location}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 mt-4">{exp.description}</p>

                        <div className="mt-5 flex flex-wrap gap-3">
                          {exp.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm"
                              whileHover={{ 
                                scale: 1.05,
                                backgroundColor: "#EFF6FF",
                                color: "#2563EB"
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills Card */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800">
                  {t.skills.title}
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {t.skills.items.map((skill, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">
                          {skill.name}
                        </span>
                        <span className="text-blue-600 text-sm font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Interests Card */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaUser className="text-blue-500 mr-3" />
                  {t.interests.title}
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  {t.interests.items.map((interest, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                        <interest.icon className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {interest.category}
                        </h4>
                        <p className="text-gray-500 text-sm mt-1">
                          {interest.items.join(", ")}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}