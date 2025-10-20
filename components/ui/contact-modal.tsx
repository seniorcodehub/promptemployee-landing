"use client";

import { useCallback, useEffect, useState } from "react";
import { X, Mail } from "lucide-react";

type ContactModalContextValue = {
  open: () => void;
  close: () => void;
};

const listeners: Array<(open: boolean) => void> = [];

export const useContactModal = (): ContactModalContextValue => {
  const open = useCallback(() => {
    listeners.forEach((l) => l(true));
  }, []);
  const close = useCallback(() => {
    listeners.forEach((l) => l(false));
  }, []);
  return { open, close };
};

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (open: boolean) => setIsOpen(open);
    listeners.push(handler);
    return () => {
      const idx = listeners.indexOf(handler);
      if (idx >= 0) listeners.splice(idx, 1);
    };
  }, []);

  return (
    <>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-white w-[90%] max-w-lg rounded-2xl shadow-2xl p-6 md:p-8">
            <button
              aria-label="Close"
              className="absolute right-3 top-3 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#ef4444] rounded-lg flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Contact us</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Tell us a bit about your needs. We&apos;ll reach out shortly.
            </p>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);
                const subject = encodeURIComponent(
                  "Promptemployee demo/contact request"
                );
                const body = encodeURIComponent(
                  `Name: ${formData.get("name")}\n` +
                    `Email: ${formData.get("email")}\n` +
                    `Company: ${formData.get("company")}\n` +
                    `Message: ${formData.get("message")}`
                );
                window.location.href = `mailto:info@promptemployee.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Work email"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <input
                name="company"
                placeholder="Company"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                name="message"
                placeholder="How can we help?"
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-[#ef4444] text-white hover:bg-[#dc2626]"
                >
                  Send email
                </button>
              </div>
              <p className="text-xs text-gray-500 pt-2">
                This opens your email client to contact info@promptemployee.com
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

