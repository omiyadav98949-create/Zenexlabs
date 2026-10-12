"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { SectionLabel, FadeInUp } from "@/components/motion-primitives";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const projectTypes = [
  "Cinematic Ad",
  "Product Film",
  "Social Creatives",
  "AI UGC",
  "Brand Visuals",
  "Creative Campaign",
  "Not Sure Yet",
];

const budgets = [
  "Under ₹5,000",
  "₹5,000–₹10,000",
  "₹10,000–₹25,000",
  "₹25,000+",
  "Let's discuss",
];

type FormState = {
  name: string;
  email: string;
  brand: string;
  website: string;
  instagram: string;
  product_category: string;
  project_type: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  brand: "",
  website: "",
  instagram: "",
  product_category: "",
  project_type: "",
  budget: "",
  timeline: "",
  message: "",
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) {
      e.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Invalid email";
    }
    if (!form.brand.trim()) e.brand = "Required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        throw new Error("Configuration missing");
      }

      const response = await fetch(`${supabaseUrl}/rest/v1/project_inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          brand: form.brand.trim(),
          website: form.website.trim() || null,
          instagram: form.instagram.trim() || null,
          product_category: form.product_category.trim() || null,
          project_type: form.project_type || null,
          budget: form.budget || null,
          timeline: form.timeline.trim() || null,
          message: form.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      // Fire edge function for email notification (best effort)
      fetch(`${supabaseUrl}/functions/v1/send-inquiry-notification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify(form),
      }).catch(() => {});

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <main className="pt-28 md:pt-32 min-h-screen flex items-center justify-center px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
              <Check className="h-8 w-8 text-accent-foreground" />
            </div>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tightest text-foreground">
            THANK YOU.
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Your inquiry has been received. We&apos;ll get back to you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-xs font-medium tracking-[0.1em] uppercase text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            Send Another
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="pt-28 md:pt-32">
      {/* Header */}
      <section className="px-6 lg:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel number="" label="Contact" />

          <FadeInUp delay={0.1}>
            <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] tracking-tightest text-foreground">
              HAVE A PRODUCT
              <br />
              <span className="text-accent">WORTH SHOWING?</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="mt-8 max-w-md text-base text-muted-foreground leading-relaxed">
              Tell us a little about your brand and what you&apos;re looking to
              create.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Have a query? Mail us at {siteConfig.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </FadeInUp>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 lg:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-[1000px]">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Required fields row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Name"
                required
                error={errors.name}
                value={form.name}
                onChange={(v) => handleChange("name", v)}
                placeholder="Your name"
              />
              <FormField
                label="Email"
                required
                error={errors.email}
                type="email"
                value={form.email}
                onChange={(v) => handleChange("email", v)}
                placeholder="you@brand.com"
              />
              <FormField
                label="Brand / Company"
                required
                error={errors.brand}
                value={form.brand}
                onChange={(v) => handleChange("brand", v)}
                placeholder="Brand name"
              />
              <FormField
                label="Website"
                value={form.website}
                onChange={(v) => handleChange("website", v)}
                placeholder="https://..."
              />
              <FormField
                label="Instagram"
                value={form.instagram}
                onChange={(v) => handleChange("instagram", v)}
                placeholder="@handle"
              />
              <FormField
                label="Product / Category"
                value={form.product_category}
                onChange={(v) => handleChange("product_category", v)}
                placeholder="e.g. Skincare, Jewelry..."
              />
            </div>

            {/* Project type — chips */}
            <div>
              <label className="block text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">
                What are you looking to create?
              </label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((pt) => (
                  <button
                    key={pt}
                    type="button"
                    onClick={() => handleChange("project_type", pt)}
                    className={cn(
                      "rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300",
                      form.project_type === pt
                        ? "bg-accent text-accent-foreground"
                        : "border border-border text-muted-foreground hover:border-accent hover:text-foreground",
                    )}
                  >
                    {pt}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget — chips */}
            {/* <div>
              <label className="block text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">
                Budget Range
              </label>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => handleChange('budget', b)}
                    className={cn(
                      'rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300',
                      form.budget === b
                        ? 'bg-accent text-accent-foreground'
                        : 'border border-border text-muted-foreground hover:border-accent hover:text-foreground'
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Timeline */}
            <FormField
              label="Timeline"
              value={form.timeline}
              onChange={(v) => handleChange("timeline", v)}
              placeholder="e.g. 2 weeks, next month..."
            />

            {/* Message */}
            <div>
              <label className="block text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-3">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={5}
                placeholder="Tell us about your product and vision..."
                className={cn(
                  "w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:outline-none focus:border-accent",
                  errors.message ? "border-destructive" : "border-border",
                )}
              />
              {errors.message && (
                <p className="mt-2 text-xs text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Error */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                Something went wrong. Please try again or email us directly.
              </motion.div>
            )}

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex items-center gap-2 rounded-full bg-foreground px-10 py-4 text-xs font-medium tracking-[0.1em] uppercase text-background transition-all duration-300 hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  required,
  error,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-3">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:outline-none focus:border-accent",
          error ? "border-destructive" : "border-border",
        )}
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
