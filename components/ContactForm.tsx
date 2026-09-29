"use client";

import { useState } from "react";
import { company } from "@/data/company";
import { services } from "@/data/services";

const SERVICE_OPTIONS = [
  { value: "website-development", label: "Website Development", short: "Website" },
  { value: "mobile-app-development", label: "Mobile App Development", short: "Mobile App" },
  { value: "cloud-solutions", label: "Cloud Solutions", short: "Cloud" },
  { value: "cybersecurity-services", label: "Cybersecurity Services", short: "Security" },
  { value: "ai-chat-bots", label: "AI Chatbots", short: "AI Chatbot" },
  { value: "ui-ux-design", label: "UI/UX Design", short: "UI/UX" },
  { value: "it-consulting", label: "IT Consulting", short: "Consulting" },
  { value: "maintenance-support", label: "Maintenance & Support", short: "Support" },
  { value: "seo-services", label: "SEO Services", short: "SEO" },
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
      <div className="relative border-b border-lineDark bg-gradient-to-br from-inkText via-inkText to-inkText/95 px-6 py-12 sm:px-8 overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 200">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1200" height="200" fill="url(#grid)" />
          </svg>
        </div>

        {/* Accent Line Top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />

        {/* Decorative Circles */}
        <div className="absolute top-8 right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
            <span className="text-sm font-semibold text-accent tracking-widest">LET'S CREATE</span>
          </div>

          <h1 className="font-sora text-4xl font-800 leading-tight text-white sm:text-5xl max-w-2xl">
            Let's talk about your project
          </h1>
          <p className="mt-4 text-lg text-white/85 max-w-xl leading-relaxed">
            Share your vision and we'll craft the perfect solution for you.
          </p>

          {/* Stats or Features */}
          <div className="flex flex-wrap gap-8 mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">✓</div>
              <span className="text-sm text-white/80">Quick Response</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">✓</div>
              <span className="text-sm text-white/80">Expert Team</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">✓</div>
              <span className="text-sm text-white/80">Custom Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="relative flex-1 overflow-y-auto px-6 py-8 sm:px-8 space-y-6">
        {/* Logo Watermark - Center Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
          <img
            src="/moriva-icon.png"
            alt=""
            className="h-80 w-80 object-contain"
          />
        </div>

        {/* Form Fields - Relative to overlay */}
        <div className="relative z-10 space-y-6">
        {/* Name Field */}
        <div className="group">
          <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-inkText mb-3">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/70 text-white text-xs">
              👤
            </span>
            Name <span className="text-accent font-bold">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full rounded-xl border-2 border-lineDark/50 bg-gradient-to-br from-white to-white/50 px-4 py-3.5 text-base text-inkText outline-none transition-all placeholder:text-inkTextDim/40 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:bg-white group-hover:border-lineDark/70 shadow-sm group-hover:shadow-md"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-transparent group-hover:to-accent/5 pointer-events-none transition-all" />
          </div>
        </div>

        {/* Email Field */}
        <div className="group">
          <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-inkText mb-3">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/70 text-white text-xs">
              ✉️
            </span>
            Email <span className="text-accent font-bold">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full rounded-xl border-2 border-lineDark/50 bg-gradient-to-br from-white to-white/50 px-4 py-3.5 text-base text-inkText outline-none transition-all placeholder:text-inkTextDim/40 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:bg-white group-hover:border-lineDark/70 shadow-sm group-hover:shadow-md"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-transparent group-hover:to-accent/5 pointer-events-none transition-all" />
          </div>
        </div>

        {/* Phone Field */}
        <div className="group">
          <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-inkText mb-3">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/70 text-white text-xs">
              📞
            </span>
            Phone <span className="text-xs font-normal text-inkTextDim">(Optional)</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border-2 border-lineDark/50 bg-gradient-to-br from-white to-white/50 px-4 py-3.5 text-base text-inkText outline-none transition-all placeholder:text-inkTextDim/40 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:bg-white group-hover:border-lineDark/70 shadow-sm group-hover:shadow-md"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-transparent group-hover:to-accent/5 pointer-events-none transition-all" />
          </div>
        </div>

        {/* Services */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-inkText mb-4">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/70 text-white text-xs">
              ⭐
            </span>
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
                  className={`group flex items-center justify-center rounded-xl border-2 py-4 px-3 transition-all duration-300 text-sm font-semibold ${
                    isSelected
                      ? "border-accent bg-gradient-to-br from-accent to-accent/90 text-white shadow-lg shadow-accent/40"
                      : "border-lineDark/40 bg-white text-inkText hover:border-accent hover:shadow-md hover:bg-accent/5"
                  }`}
                >
                  <span className="text-center leading-tight">{service.short}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div className="group">
          <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-inkText mb-3">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/70 text-white text-xs">
              💬
            </span>
            Tell us more <span className="text-accent font-bold">*</span>
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project, timeline, budget, or any other details..."
              rows={5}
              className="w-full resize-none rounded-xl border-2 border-lineDark/50 bg-gradient-to-br from-white to-white/50 px-4 py-3.5 text-base text-inkText outline-none transition-all placeholder:text-inkTextDim/40 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:bg-white group-hover:border-lineDark/70 shadow-sm group-hover:shadow-md"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-transparent group-hover:to-accent/5 pointer-events-none transition-all" />
          </div>
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
      <div className="border-t border-lineDark/50 bg-gradient-to-r from-white via-white to-accent/5 px-6 py-6 sm:px-8">
        <button
          type="submit"
          disabled={loading}
          className="group w-full rounded-xl bg-gradient-to-r from-accent via-accent to-accent/90 px-6 py-4 font-semibold text-white shadow-lg shadow-accent/30 transition-all hover:shadow-xl hover:shadow-accent/40 hover:brightness-110 active:scale-95 disabled:opacity-70 text-base relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center justify-center gap-2">
            {loading ? (
              <>
                <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </span>
        </button>
      </div>
    </form>
  );
}
