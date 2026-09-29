"use client";

import { useState } from "react";
import { company } from "@/data/company";
import { services } from "@/data/services";

const SERVICE_OPTIONS = [
  { value: "website-development", label: "Website Development" },
  { value: "mobile-app-development", label: "Mobile App Development" },
  { value: "cloud-solutions", label: "Cloud Solutions" },
  { value: "cybersecurity-services", label: "Cybersecurity Services" },
  { value: "ai-chat-bots", label: "AI Chatbots" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "it-consulting", label: "IT Consulting" },
  { value: "maintenance-support", label: "Maintenance & Support" },
  { value: "seo-services", label: "SEO Services" },
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

    // Prepare the message body
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

    // Store the links for the confirmation step
    sessionStorage.setItem("contactFormData", JSON.stringify({ whatsappHref, mailHref, name: formData.name }));
  };

  if (submitted) {
    const storedData = sessionStorage.getItem("contactFormData");
    const data = storedData ? JSON.parse(storedData) : {};

    return (
      <div className="flex h-[min(78vh,680px)] min-h-[520px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-lineDark bg-gradient-to-br from-surface to-surface/95 p-8 shadow-[0_30px_80px_-30px_rgba(11,35,71,0.35)]">
        <div className="text-center max-w-md">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accentDim blur-xl opacity-30 animate-pulse" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent/10 ring-2 ring-accent/30">
                <svg
                  className="h-10 w-10 text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
            </div>
          </div>
          <h2 className="font-sora text-3xl font-800 tracking-tight text-inkText md:text-4xl">
            Perfect! We got it
          </h2>
          <p className="mt-3 text-base leading-relaxed text-inkTextDim">
            Thanks {data.name?.split(" ")[0]}, we've received your message. Our team will review your project details and get back to you within one working day.
          </p>

          <div className="mt-8 space-y-3">
            <div className="rounded-xl border border-lineDark/50 bg-white/30 backdrop-blur-sm px-4 py-3 text-sm text-inkText">
              <p className="font-semibold mb-1">💡 What's next?</p>
              <p className="text-inkTextDim text-xs">We'll review your project requirements and reach out with a tailored proposal</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={data.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accentDim text-sm font-700 text-white shadow-[0_10px_28px_rgba(245,146,30,0.35)] transition-all hover:brightness-105 active:scale-95"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-3.997 6.162-2.122 9.582 1.875 3.42 5.568 4.465 8.835 2.382l.342.205c3.577 2.11 7.213.405 8.905-3.207 1.692-3.613.46-7.98-2.75-9.848-2.505-1.495-5.565-1.24-7.774.706l.002.001z" />
              </svg>
              Send via WhatsApp
            </a>
            <a
              href={data.mailHref}
              data-cursor-hover
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-accent bg-white text-sm font-700 text-accent transition-all hover:bg-accent/5 active:scale-95"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
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
            className="mt-6 rounded-xl border border-lineDark px-6 py-2.5 text-sm font-medium text-inkTextDim transition-all hover:border-accent hover:text-accent hover:bg-accent/5"
          >
            ← Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-lineDark bg-gradient-to-br from-surface to-surface/95 shadow-[0_30px_80px_-30px_rgba(11,35,71,0.35)]">
      {/* Form Header with Background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-inkText via-accent/10 to-accent/5 px-6 py-8 md:px-8">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(rgba(14,42,92,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-pulse" />
              <span className="relative inline-flex h-full w-full rounded-full bg-accent" />
            </span>
            <span className="text-xs font-semibold text-accent">Ready to start</span>
          </div>
          <h1 className="font-sora text-3xl font-800 tracking-tight text-white md:text-4xl">
            Tell us about your project
          </h1>
          <p className="mt-3 text-base text-white/80 max-w-xl">
            We'll get back to you within one working day. Share your vision and let's build something amazing together.
          </p>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} noValidate className="flex flex-col overflow-y-auto px-6 py-8 md:px-8 space-y-6">
        {/* Name Field */}
        <div className="group">
          <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-inkText mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent text-xs">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </span>
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-lineDark bg-white/50 backdrop-blur-sm px-5 py-3.5 text-inkText outline-none transition-all placeholder:text-inkTextDim/60 focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,146,30,0.12)] hover:border-lineDark/70"
          />
        </div>

        {/* Email Field */}
        <div className="group">
          <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-inkText mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent text-xs">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </span>
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full rounded-xl border border-lineDark bg-white/50 backdrop-blur-sm px-5 py-3.5 text-inkText outline-none transition-all placeholder:text-inkTextDim/60 focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,146,30,0.12)] hover:border-lineDark/70"
          />
        </div>

        {/* Phone Field */}
        <div className="group">
          <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-inkText mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent text-xs">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
              </svg>
            </span>
            Phone Number <span className="text-xs text-inkTextDim font-normal">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-lineDark bg-white/50 backdrop-blur-sm px-5 py-3.5 text-inkText outline-none transition-all placeholder:text-inkTextDim/60 focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,146,30,0.12)] hover:border-lineDark/70"
          />
        </div>

        {/* Services Selection */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-inkText">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent text-xs">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
              </svg>
            </span>
            Services You're Interested In <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
            {SERVICE_OPTIONS.map((service) => {
              const isSelected = formData.services.includes(service.value);
              return (
                <button
                  key={service.value}
                  type="button"
                  onClick={() => handleServiceToggle(service.value)}
                  aria-pressed={isSelected}
                  data-cursor-hover
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                    isSelected
                      ? "border-accent bg-gradient-to-r from-accent to-accent/80 text-white shadow-[0_6px_16px_rgba(245,146,30,0.3)]"
                      : "border-lineDark bg-white/50 backdrop-blur-sm text-inkText hover:border-accent/50 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  {service.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-inkText">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent text-xs">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
              </svg>
            </span>
            Project Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, goals, timeline, budget, or anything else that would be helpful..."
            rows={5}
            className="w-full resize-none rounded-xl border border-lineDark bg-white/50 backdrop-blur-sm px-5 py-3.5 text-inkText outline-none transition-all placeholder:text-inkTextDim/60 focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,146,30,0.12)] hover:border-lineDark/70"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="relative overflow-hidden rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-red-50/50 px-4 py-3.5 text-sm font-medium text-red-600">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-red-500 to-red-600" />
            <div className="pl-2">{error}</div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          data-cursor-hover
          className="group relative flex h-14 items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-accent to-accentDim text-base font-700 text-white shadow-[0_10px_28px_rgba(245,146,30,0.35)] transition-all hover:shadow-[0_15px_40px_rgba(245,146,30,0.4)] hover:brightness-105 active:scale-95 disabled:opacity-70"
        >
          {loading ? (
            <>
              <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </>
          ) : (
            <>
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
