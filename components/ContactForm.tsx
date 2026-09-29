"use client";

import { useState } from "react";
import { company } from "@/data/company";
import { services } from "@/data/services";

const SERVICE_OPTIONS = [
  { value: "website-development", label: "Website Development", icon: "🌐" },
  { value: "mobile-app-development", label: "Mobile App Development", icon: "📱" },
  { value: "cloud-solutions", label: "Cloud Solutions", icon: "☁️" },
  { value: "cybersecurity-services", label: "Cybersecurity Services", icon: "🔒" },
  { value: "ai-chat-bots", label: "AI Chatbots", icon: "🤖" },
  { value: "ui-ux-design", label: "UI/UX Design", icon: "🎨" },
  { value: "it-consulting", label: "IT Consulting", icon: "💼" },
  { value: "maintenance-support", label: "Maintenance & Support", icon: "🔧" },
  { value: "seo-services", label: "SEO Services", icon: "📊" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (formData.services.length === 0) {
      setError("Please select at least one service.");
      return;
    }
    if (!formData.message.trim()) {
      setError("Please tell us more about your project.");
      return;
    }

    setLoading(true);

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : null,
      formData.services.length ? `Interested in: ${formData.services.join(", ")}` : null,
      "",
      formData.message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`*Project inquiry — Moriva website*\n\n${body}`)}`;
    const mailHref = `mailto:${company.email}?subject=${encodeURIComponent(`Project inquiry from ${formData.name}`)}&body=${encodeURIComponent(body)}`;

    setLoading(false);
    setSubmitted(true);

    sessionStorage.setItem("contactFormData", JSON.stringify({ whatsappHref, mailHref, name: formData.name }));
  };

  if (submitted) {
    const storedData = sessionStorage.getItem("contactFormData");
    const data = storedData ? JSON.parse(storedData) : {};

    return (
      <div className="flex h-[min(78vh,680px)] min-h-[520px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-lineDark bg-white shadow-[0_30px_80px_-30px_rgba(11,35,71,0.35)]">
        <div className="text-center max-w-md px-6">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent blur-2xl opacity-20 scale-150" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80">
                <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
            </div>
          </div>
          <h2 className="font-sora text-3xl font-800 tracking-tight text-inkText md:text-4xl">
            Message received
          </h2>
          <p className="mt-3 text-base leading-relaxed text-inkTextDim">
            Thanks {data.name?.split(" ")[0]}, we've got your inquiry. Our team will review everything and reach out within one working day.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={data.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="block rounded-lg bg-gradient-to-r from-accent to-accent/90 px-6 py-3 text-sm font-600 text-white shadow-lg transition-all hover:shadow-xl hover:brightness-105 active:scale-95"
            >
              Continue on WhatsApp
            </a>
            <a
              href={data.mailHref}
              data-cursor-hover
              className="block rounded-lg border-2 border-accent bg-white px-6 py-3 text-sm font-600 text-accent transition-all hover:bg-accent/5 active:scale-95"
            >
              Send by Email
            </a>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", phone: "", services: [], message: "" });
              sessionStorage.removeItem("contactFormData");
            }}
            data-cursor-hover
            className="mt-6 text-sm font-medium text-inkTextDim transition-colors hover:text-accent"
          >
            ← Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex h-full flex-col overflow-hidden rounded-2xl border border-lineDark bg-white shadow-[0_30px_80px_-30px_rgba(11,35,71,0.35)]">
      {/* Header */}
      <div className="border-b border-lineDark bg-gradient-to-r from-inkText via-inkText/95 to-inkText/90 px-6 py-10 sm:px-8">
        <h1 className="font-sora text-3xl font-800 leading-tight text-white sm:text-4xl">
          Let's talk about your project
        </h1>
        <p className="mt-2 text-base text-white/80">
          Share your vision and we'll craft the perfect solution for you.
        </p>
      </div>

      {/* Form Content */}
      <div className="relative flex-1 overflow-y-auto px-6 py-8 sm:px-8 space-y-6">
        {/* Logo Watermark - Center Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
          <img
            src="/moriva-logo.png"
            alt=""
            className="h-64 w-64 object-contain"
          />
        </div>

        {/* Form Fields - Relative to overlay */}
        <div className="relative z-10 space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-inkText mb-2">
            Name <span className="text-accent font-bold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-lg border-2 border-lineDark bg-white px-4 py-3 text-base text-inkText outline-none transition-all placeholder:text-inkTextDim/50 focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-inkText mb-2">
            Email <span className="text-accent font-bold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full rounded-lg border-2 border-lineDark bg-white px-4 py-3 text-base text-inkText outline-none transition-all placeholder:text-inkTextDim/50 focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-inkText mb-2">
            Phone <span className="text-xs font-normal text-inkTextDim">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border-2 border-lineDark bg-white px-4 py-3 text-base text-inkText outline-none transition-all placeholder:text-inkTextDim/50 focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Services */}
        <div>
          <label className="block text-sm font-semibold text-inkText mb-3">
            What services interest you? <span className="text-accent font-bold">*</span>
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
            {SERVICE_OPTIONS.map((service) => {
              const isSelected = formData.services.includes(service.value);
              return (
                <button
                  key={service.value}
                  type="button"
                  onClick={() => handleServiceToggle(service.value)}
                  title={service.label}
                  className={`flex items-center justify-center rounded-lg border-2 py-4 transition-all ${
                    isSelected
                      ? "border-accent bg-accent text-white"
                      : "border-lineDark bg-white text-inkText hover:border-accent/50"
                  }`}
                >
                  <span className="text-4xl">{service.icon}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-inkText mb-2">
            Tell us more <span className="text-accent font-bold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your project, timeline, budget, or any other details..."
            rows={5}
            className="w-full resize-none rounded-lg border-2 border-lineDark bg-white px-4 py-3 text-base text-inkText outline-none transition-all placeholder:text-inkTextDim/50 focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-lg border-l-4 border-red-500 bg-red-50 px-4 py-3 text-sm text-red-700 font-medium">
            {error}
          </div>
        )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-lineDark bg-white px-6 py-6 sm:px-8">
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-gradient-to-r from-accent to-accent/90 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-105 active:scale-95 disabled:opacity-70 text-base"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
