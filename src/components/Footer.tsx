"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiHeart,
} from "react-icons/fi";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2025); // Valor padrão
  
  // Só atualiza o ano no lado do cliente
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/BnOiDev/",
      icon: <FiGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bruno-almeida23/",
      icon: <FiLinkedin className="w-5 h-5" />,
    },
    {
      name: "Email",
      url: "mailto:bno.almeidinha@gmail.com",
      icon: <FiMail className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/BnOiDev",
      icon: <FiTwitter className="w-5 h-5" />,
    },
  ];

  const techStack = [
    { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-5 h-5 text-blue-500" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre</h3>
            <p className="text-gray-600 mb-4">
              Desenvolvedor Full Stack
              com experiência em soluções modernas.
            </p>
            <div className="flex items-center space-x-2">
              <FiHeart className="text-red-500" />
              <span className="text-sm text-gray-500">
                Disponível para novos projetos
              </span>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#sobre"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link
                  href="/#projetos"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/#habilidades"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  href="/#contato"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Conecte-se</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Tecnologias */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tecnologias</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-full"
                >
                  {tech.icon}
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              &copy; {currentYear}{" "}
              <span className="font-semibold text-black">Bruno Almeida</span>.
              Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Feito com</span>
            <FiHeart className="text-red-500" />
            <span className="text-sm text-gray-500">e</span>
            <div className="flex space-x-1">
              <SiNextdotjs className="w-4 h-4" />
              <SiTypescript className="w-4 h-4 text-blue-500" />
              <SiTailwindcss className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;