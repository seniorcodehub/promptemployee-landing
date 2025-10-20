"use client";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
  company: [
    { nameKey: "footer_about", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { nameKey: "footer_contact", href: "#contact" },
  ],
  legal: [
    { nameKey: "footer_privacy", href: "#privacy" },
    { nameKey: "footer_terms", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Security", href: "#security" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-[#0a0a0a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#ef4444] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">P</span>
              </div>
              <span className="ml-3 text-white text-2xl font-bold">
                Promptemployee
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t("footer_slogan")}
            </p>
            <div className="flex items-center text-gray-400">
              <Mail className="h-5 w-5 mr-2 text-[#ef4444]" />
              <a
                href="mailto:info@promptemployee.com"
                className="hover:text-[#ef4444] transition-colors"
              >
                info@promptemployee.com
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ef4444] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.nameKey || link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ef4444] transition-colors"
                  >
                    {link.nameKey ? t(link.nameKey) : link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.nameKey || link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ef4444] transition-colors"
                  >
                    {link.nameKey ? t(link.nameKey) : link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Promptemployee. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#ef4444] transition-colors group"
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

