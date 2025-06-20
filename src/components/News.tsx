import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface NewsCardProps {
  title: string;
  content: string;
  link: string;
  date?: string;
  tag?: string;
}

const NewsCard = ({ title, content, link, date, tag }: NewsCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="p-6 flex-1">
        {tag && (
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full mb-3">
            {tag}
          </span>
        )}
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{content}</p>
      </div>
      <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
        {date && <span className="text-sm text-gray-500">{date}</span>}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600 transition-colors flex items-center"
        >
          Ler mais <FiArrowRight className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Introdução ao TabNews",
      content: "Descubra como o TabNews está transformando o consumo de conteúdo técnico no Brasil.",
      link: "https://www.tabnews.com.br",
      date: "15 Jun 2023",
      tag: "Tecnologia"
    },
    {
      id: 2,
      title: "Novidades em Desenvolvimento Web",
      content: "As últimas tendências e ferramentas emergentes para desenvolvedores front-end em 2023.",
      link: "https://www.tabnews.com.br",
      date: "10 Jul 2023",
      tag: "Web"
    },
    {
      id: 3,
      title: "Boas Práticas em React",
      content: "Padrões avançados para escrever componentes mais limpos e eficientes.",
      link: "https://www.tabnews.com.br",
      date: "5 Ago 2023",
      tag: "React"
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Artigos e Notícias</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meus últimos artigos e conteúdos técnicos sobre desenvolvimento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              content={news.content}
              link={news.link}
              date={news.date}
              tag={news.tag}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.tabnews.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-black rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Ver todos os artigos <FiArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;