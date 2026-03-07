"use client";

import { useState, useEffect, useCallback } from "react";

const GA_ID = "G-VZH5Y2ESMQ";
const CONSENT_KEY = "cookie-consent";

type ConsentStatus = "accepted" | "rejected" | null;

function getConsent(): ConsentStatus {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

function loadGA() {
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_ID);
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === "accepted") {
      loadGA();
    } else if (consent === null) {
      setVisible(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    loadGA();
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimiento de cookies"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]"
    >
      <div className="w-[340px] sm:w-[380px] rounded-sm border border-grid-line bg-hull-panel/95 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.5)] p-5">
        <p className="font-heading font-bold text-text-primary text-sm mb-2">
          Uso de cookies
        </p>
        <p className="text-text-muted text-xs font-mono leading-relaxed mb-4">
          Utilizamos Google Analytics para comprender como se usa este sitio y mejorar la
          experiencia. No recopilamos datos personales identificables.{" "}
          <a
            href="/privacidad"
            className="text-neon-cyan hover:text-hazard-yellow underline underline-offset-2 transition-colors"
          >
            Politica de privacidad
          </a>
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleReject}
            className="flex-1 px-4 py-2 text-xs font-mono text-text-muted border border-grid-line rounded-sm hover:text-text-primary hover:border-text-muted transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 px-4 py-2 text-xs font-mono text-space-void bg-hazard-yellow rounded-sm hover:bg-hazard-yellow/90 font-bold transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
