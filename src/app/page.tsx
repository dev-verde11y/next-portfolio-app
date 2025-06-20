import Header from "../components/Header";
import { FaArrowRight, FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { FiCoffee, FiMessageSquare } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* === Hero Section === */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 py-28 md:py-36 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="block mb-3 text-gray-900">Bruno Almeida</span>
                <span className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500">
                  Soluções Full Stack Sob Medida
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                Desenvolvedor especializado em criar experiências digitais performáticas,
                escaláveis e focadas em resultados.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/sobre"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all font-medium flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Conheça Meu Trabalho</span>
                  <FaArrowRight className="text-sm" />
                </a>
                
                <a
                  href="#contato"
                  className="px-8 py-4 border-2 border-teal-500 text-teal-600 rounded-xl hover:bg-teal-50 transition-all font-medium flex items-center justify-center gap-3 group"
                >
                  <FiMessageSquare className="text-teal-600 group-hover:text-teal-700" />
                  <span>Vamos Conversar</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* === Seção de Serviços === */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Como Posso Ajudar</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Soluções completas para suas necessidades digitais
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<FaCode className="text-4xl mb-5 text-indigo-600" />}
                title="Desenvolvimento Web"
                description="Sites e aplicações web responsivas e de alta performance"
                colorClass="hover:border-indigo-200 hover:shadow-indigo-100"
              />
              
              <ServiceCard 
                icon={<FaMobileAlt className="text-4xl mb-5 text-teal-500" />}
                title="Aplicativos Mobile"
                description="Apps nativos e multiplataforma com tecnologias modernas"
                colorClass="hover:border-teal-200 hover:shadow-teal-100"
              />
              
              <ServiceCard 
                icon={<FaServer className="text-4xl mb-5 text-purple-600" />}
                title="Backend & APIs"
                description="Sistemas robustos e integrações personalizadas"
                colorClass="hover:border-purple-200 hover:shadow-purple-100"
              />
            </div>
          </div>
        </section>

        {/* === Seção de Contato === */}
        <section id="contato" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center bg-indigo-100 p-4 rounded-full mb-5">
                  <FiCoffee className="text-3xl text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold mb-3 text-gray-900">Vamos Conversar</h2>
                <p className="text-lg text-gray-600">
                  Entre em contato diretamente pelo Discord para uma conversa mais dinâmica
                </p>
              </div>
              
              <div className="space-y-4">
                {/* Botão do Discord - Destaque */}
                <a
                  href="https://discord.com/users/seu-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 font-medium gap-3 w-full group shadow-md hover:shadow-lg"
                >
                  <SiDiscord className="text-2xl transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-semibold">Chat no Discord</span>
                </a>
                
                {/* Botão de Email Secundário */}
                <a
                  href="mailto:seuemail@exemplo.com"
                  className="flex items-center justify-center px-6 py-3 border-2 border-teal-400 text-teal-600 rounded-xl hover:bg-teal-50 transition-all font-medium gap-2 w-full"
                >
                  <FiMessageSquare />
                  <span>Enviar Email</span>
                </a>
                
                <div className="text-center pt-2">
                  <p className="text-gray-500 text-sm">
                    Resposta rápida pelo Discord ou email em até 24h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Componente de Card de Serviço Atualizado
const ServiceCard = ({ icon, title, description, colorClass }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
}) => (
  <div className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-2 border border-gray-100 ${colorClass}`}>
    <div className="flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);