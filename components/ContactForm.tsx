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
      <div className="flex h-[min(78vh,680px)] min-h-[520px] flex-col items-center justify-center overflow-hidden rounded-lg border border-lineDark bg-surface p-8 shadow-[0_30px_80px_-30px_rgba(11,35,71,0.35)]">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <svg
              className="h-16 w-16 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="font-sora text-2xl font-800 tracking-tight text-inkText md:text-3xl">
            Thanks, {data.name?.split(" ")[0]}!
          </h2>
          <p className="mt-3 text-base leading-relaxed text-inkTextDim">
            We've received your message and will get back to you within one working day.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={data.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentDim text-sm font-700 text-white shadow-[0_10px_28px_rgba(245,146,30,0.35)] transition-all hover:brightness-105"
            >
              Send on WhatsApp
            </a>
            <a
              href={data.mailHref}
              data-cursor-hover
              className="inline-flex h-11 items-center justify-center rounded-full border border-lineDark text-sm font-700 text-inkText transition-colors hover:border-accent hover:text-accent"
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
            className="mt-6 rounded-full border border-lineDark px-6 py-2 text-sm font-medium text-inkTextDim transition-colors hover:border-accent hover:text-accent"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-lineDark bg-surface shadow-[0_30px_80px_-30px_rgba(11,35,71,0.35)]">
      {/* Form Header */}
      <div className="relative flex items-center gap-3 border-b border-lineDark bg-paper px-6 py-5 md:px-8">
        <div>
          <h1 className="font-sora text-lg font-800 tracking-tight text-inkText md:text-xl">
            Tell us about your project
          </h1>
          <p className="mt-1 text-sm text-inkTextDim">
            We'll get back to you within one working day
          </p>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} noValidate className="flex flex-col overflow-y-auto px-6 py-6 md:px-8">
        {/* Name Field */}
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-semibold text-inkText">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="mt-2 w-full rounded-lg border border-lineDark bg-white px-4 py-3 text-inkText outline-none transition-all placeholder:text-inkTextDim/60 focus:border-accent focus:shadow-[0_0_0_4px_rgba(245,146,30,0.12)]"
          />
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-semibold text-inkText">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="mt-2 w-full rounded-lg border border-lineDark bg-white px-4 py-3 text-inkText outline-none transition-all placeholder:text-inkTextDim/60 focus:border-accent focus:shadow-[0_0_0_4px_rgba(245,146,30,0.12)]"
          />
        </div>

        {/* Phone Field */}
        <div className="mb-5">
          <label htmlFor="phone" className="block text-sm font-semibold text-inkText">
            Phone Number <span className="text-xs text-inkTextDim">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="mt-2 w-full rounded-lg border border-lineDark bg-white px-4 py-3 text-inkText outline-none transition-all placeholder:text-inkTextDim/60 focus:border-accent focus:shadow-[0_0_0_4px_rgba(245,146,30,0.12)]"
          />
        </div>

        {/* Services Selection */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-inkText">
            Services You're Interested In <span className="text-red-500">*</span>
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            {SERVICE_OPTIONS.map((service) => {
              const isSelected = formData.services.includes(service.value);
              return (
                <button
                  key={service.value}
                  type="button"
                  onClick={() => handleServiceToggle(service.value)}
                  aria-pressed={isSelected}
                  data-cursor-hover
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    isSelected
                      ? "border-accent bg-accent text-white shadow-[0_6px_16px_rgba(245,146,30,0.3)]"
                      : "border-lineDark bg-white text-inkText hover:border-accent/50"
                  }`}
                >
                  {service.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-semibold text-inkText">
            Project Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, goals, timeline, budget, or anything else that would be helpful..."
            rows={5}
            className="mt-2 w-full resize-none rounded-lg border border-lineDark bg-white px-4 py-3 text-inkText outline-none transition-all placeholder:text-inkTextDim/60 focus:border-accent focus:shadow-[0_0_0_4px_rgba(245,146,30,0.12)]"
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          data-cursor-hover
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentDim text-base font-700 text-white shadow-[0_10px_28px_rgba(245,146,30,0.35)] transition-all hover:brightness-105 disabled:opacity-70"
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
