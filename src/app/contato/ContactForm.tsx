"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiUser,
  FiMessageCircle,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      // Removido a variável 'error' não utilizada
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative hover:scale-[1.01] transition-transform">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Seu Nome
        </label>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none top-7">
          <FiUser className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="block w-full pl-10 pr-3 py-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          placeholder="Como posso te chamar?"
        />
      </div>

      <div className="relative hover:scale-[1.01] transition-transform">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Seu Email
        </label>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none top-7">
          <FiMail className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block w-full pl-10 pr-3 py-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          placeholder="seu@email.com"
        />
      </div>

      <div className="relative hover:scale-[1.01] transition-transform">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Sua Mensagem
        </label>
        <div className="absolute top-10 left-3">
          <FiMessageCircle className="h-5 w-5 text-gray-400" />
        </div>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className="block w-full pl-10 pr-3 py-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          placeholder="No que posso te ajudar?"
        />
      </div>

      <div className="pt-4">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-70"
        >
          <FiMail className="mr-3 h-6 w-6" />
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </motion.button>
      </div>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex items-center p-4 text-base text-green-800 bg-green-50 rounded-xl border border-green-200"
        >
          <FiCheckCircle className="flex-shrink-0 mr-3 h-6 w-6 text-green-600" />
          Mensagem enviada com sucesso! Responderei em breve.
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex items-center p-4 text-base text-red-800 bg-red-50 rounded-xl border border-red-200"
        >
          <FiAlertCircle className="flex-shrink-0 mr-3 h-6 w-6 text-red-600" />
          Ocorreu um erro ao enviar. Tente novamente ou use outro método de
          contato.
        </motion.div>
      )}
    </form>
  );
}