"use client";
import { useState } from "react";
import { FiSearch, FiCalendar, FiX, FiArrowRight, FiLayers, FiCpu, FiDatabase, FiSmartphone, FiGlobe } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: number;
  title: string;
  year: number;
  description: string;
  tags: string[];
  type: "web" | "mobile" | "api" | "ai";
  icon: JSX.Element;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Plataforma de Cursos Online",
    year: 2024,
    description: "Sistema completo de e-learning com videoaulas, exercícios e certificação automática.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    type: "web",
    icon: <FiLayers className="text-blue-600" />
  },
  {
    id: 2,
    title: "App de Gestão Financeira",
    year: 2024,
    description: "Aplicativo mobile para controle de gastos pessoais com gráficos e relatórios mensais.",
    tags: ["React Native", "Firebase", "Redux"],
    type: "mobile",
    icon: <FiSmartphone className="text-purple-600" />
  },
  {
    id: 3,
    title: "API de Pagamentos",
    year: 2023,
    description: "Microserviço para processamento de pagamentos com múltiplos gateways de integração.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
    type: "api",
    icon: <FiDatabase className="text-green-600" />
  },
  {
    id: 4,
    title: "Sistema de Recomendação",
    year: 2023,
    description: "Engine de recomendação de produtos usando machine learning e análise de comportamento.",
    tags: ["Python", "TensorFlow", "Pandas", "Flask"],
    type: "ai",
    icon: <FiCpu className="text-orange-600" />
  },
  {
    id: 5,
    title: "Portal de Notícias",
    year: 2023,
    description: "Plataforma de publicação de notícias com sistema de assinaturas e paywall.",
    tags: ["Next.js", "Tailwind CSS", "Strapi", "GraphQL"],
    type: "web",
    icon: <FiGlobe className="text-red-600" />
  },
  {
    id: 6,
    title: "App de Delivery",
    year: 2022,
    description: "Aplicativo completo para restaurantes com rastreamento em tempo real.",
    tags: ["Flutter", "Firebase", "Google Maps API"],
    type: "mobile",
    icon: <FiSmartphone className="text-yellow-600" />
  },
  {
    id: 7,
    title: "Dashboard Analytics",
    year: 2022,
    description: "Painel administrativo com visualização de métricas e exportação de relatórios.",
    tags: ["Vue.js", "D3.js", "Express", "MongoDB"],
    type: "web",
    icon: <FiLayers className="text-indigo-600" />
  },
  {
    id: 8,
    title: "Chatbot Inteligente",
    year: 2021,
    description: "Assistente virtual para atendimento ao cliente com NLP e integração a CRM.",
    tags: ["Python", "NLTK", "Dialogflow", "Node.js"],
    type: "ai",
    icon: <FiCpu className="text-pink-600" />
  },
  {
    id: 9,
    title: "Marketplace de Serviços",
    year: 2021,
    description: "Plataforma para contratação de profissionais autônomos com sistema de avaliações.",
    tags: ["React", "Redux", "NestJS", "PostgreSQL"],
    type: "web",
    icon: <FiGlobe className="text-teal-600" />
  },
  {
    id: 10,
    title: "API de Geolocalização",
    year: 2021,
    description: "Serviço para cálculo de rotas otimizadas e tempo de entrega estimado.",
    tags: ["Go", "Redis", "Docker", "Kubernetes"],
    type: "api",
    icon: <FiDatabase className="text-blue-400" />
  }
];

const typeColors = {
  web: "bg-blue-100 text-blue-800",
  mobile: "bg-purple-100 text-purple-800",
  api: "bg-green-100 text-green-800",
  ai: "bg-orange-100 text-orange-800"
};

export default function ProjetosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const years = [...new Set(projectsData.map(p => p.year))].sort((a, b) => b - a);

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesYear = selectedYear ? project.year === selectedYear : true;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Portfólio de Projetos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore meus trabalhos de 2021 a 2024. Soluções técnicas com resultados mensuráveis.
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Filtros */}
        <aside className="lg:w-72">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
            <h2 className="font-bold text-lg mb-6 text-gray-800 flex items-center">
              <FiCalendar className="mr-2 text-blue-500" />
              Filtros
            </h2>
            
            {/* Filtro por Ano */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Ano</h3>
              <ul className="space-y-2">
                {years.map((year) => (
                  <li key={year}>
                    <button
                      onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all flex items-center ${
                        selectedYear === year 
                          ? 'bg-blue-50 text-blue-700 font-medium border border-blue-200'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="w-8 text-gray-400">{year}</span>
                      <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                        {projectsData.filter(p => p.year === year).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Barra de Busca */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Buscar</h3>
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tecnologia, projeto..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <FiX />
                  </button>
                )}
              </div>
            </div>

            {/* Filtro por Tipo */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Tipo</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">
                  Web
                </button>
                <button className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-100">
                  Mobile
                </button>
                <button className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-100">
                  API
                </button>
                <button className="px-3 py-2 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium border border-orange-100">
                  AI
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Conteúdo Principal */}
        <div className="flex-1">
          {/* Estatísticas */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {filteredProjects.length} {filteredProjects.length === 1 ? 'Projeto' : 'Projetos'} encontrados
                </h3>
                <p className="text-sm text-gray-500">
                  {selectedYear ? `Filtrado para ${selectedYear}` : 'Todos os anos'}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{projectsData.length}</div>
                  <div className="text-xs text-gray-500">Total</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {projectsData.filter(p => p.year === new Date().getFullYear()).length}
                  </div>
                  <div className="text-xs text-gray-500">2024</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de Projetos */}
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="p-6">
                      {/* Cabeçalho do Card */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                          {project.icon}
                        </div>
                        <div className="flex space-x-2">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${typeColors[project.type]}`}>
                            {project.type.toUpperCase()}
                          </span>
                          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            {project.year}
                          </span>
                        </div>
                      </div>

                      {/* Corpo do Card */}
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Botão */}
                        <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors">
                          Ver detalhes
                          <FiArrowRight className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-8 rounded-xl text-center border border-gray-200"
              >
                <div className="mx-auto max-w-md">
                  <FiSearch className="mx-auto text-4xl text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum projeto encontrado</h3>
                  <p className="text-gray-500">
                    {searchTerm 
                      ? `Nenhum resultado para "${searchTerm}". Tente outro termo.`
                      : "Ajuste os filtros para ver os projetos."}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}