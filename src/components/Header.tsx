"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setOpenSubmenu(null); // Fecha submenus ao abrir menu mobile
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const menuItems = [
    {
      name: "About",
      submenu: [
        { name: "About Me", href: "/sobre" },
        { name: "Skills", href: "/sobre/habilidades" }
      ]
    },
    {
      name: "Projects",
      submenu: [
        { name: "Personal", href: "/projetos" },
        // { name: "Professionals", href: "/projetos/empresas" }
      ]
    },
    { name: "Setup", href: "/setup" },
    { name: "Labs", href: "/labs" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contato" },
  ];

  return (
    <header className="bg-white text-black fixed w-full top-0 left-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center p-3">
        {/* Logo minimalista */}
        <Link href="/" className="text-2xl font-bold hover:text-gray-600 transition-colors">
          bn0
        </Link>

        {/* Menu desktop compacto */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <>
                  <button className="px-3 py-2 text-sm font-medium hover:text-gray-600 transition-colors flex items-center">
                    {item.name}
                    <FiChevronDown className="ml-1 w-4 h-4 group-hover:hidden" />
                    <FiChevronUp className="ml-1 w-4 h-4 hidden group-hover:block" />
                  </button>
                  <div className="absolute hidden group-hover:block bg-white text-black space-y-1 p-2 top-full left-0 min-w-[160px] shadow-lg border border-gray-100 rounded-md">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm hover:bg-gray-50 rounded transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="px-3 py-2 text-sm font-medium hover:text-gray-600 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Botão mobile moderno */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu mobile otimizado */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-3 py-2 space-y-1">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full flex justify-between items-center px-3 py-3 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <span>{item.name}</span>
                      {openSubmenu === item.name ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    {openSubmenu === item.name && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm hover:bg-gray-50 rounded transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="block px-3 py-3 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;