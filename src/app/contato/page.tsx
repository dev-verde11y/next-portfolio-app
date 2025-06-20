import { Metadata } from "next";
import ContactForm from "./ContactForm";
import { FiMail, FiMessageSquare } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contato | Envie uma mensagem",
  description: "Entre em contato por email, Discord ou WhatsApp",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Vamos Conversar
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-100">
            Escolha a melhor forma de entrar em contato comigo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário de Email (Destaque) */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 animate-fade-in-left">
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="bg-indigo-100 p-4 rounded-xl mr-6 hover:rotate-6 transition-transform">
                  <FiMail className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Envie um Email
                  </h2>
                  <p className="text-gray-600">
                    Responderei o mais rápido possível
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Outros Métodos de Contato */}
          <div className="space-y-8">
            {/* Card do Discord */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-full animate-fade-in delay-200">
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-xl mr-4 hover:-rotate-6 transition-transform">
                    <FiMessageSquare className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Discord</h2>
                </div>
                <p className="text-gray-600 mb-8 flex-grow">
                  Conecte-se comigo diretamente no Discord para conversas em
                  tempo real
                </p>
                <a
                  href="https://discord.com/users/SEU_ID_DISCORD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-white  inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-black bg-indigo-600 hover:bg-indigo-700 hover:scale-[1.02] transition-all"
                >
                  <FiMessageSquare className="text-white h-5 w-5 mr-2" />
                  Adicionar no Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
