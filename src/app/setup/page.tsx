import SetupList from './SetupList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meu Setup | Itens e Equipamentos',
  description: 'Lista completa dos itens do meu setup de trabalho e estilo de vida.'
};

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Minha Configuração</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Frequentemente recebo perguntas sobre os itens do meu setup. Aqui está tudo em um só lugar!
          </p>
        </header>

        <SetupList />
      </div>
    </div>
  );
}