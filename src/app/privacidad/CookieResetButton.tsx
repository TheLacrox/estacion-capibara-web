"use client";

import { useCallback } from "react";

export function CookieResetButton() {
  const handleReset = useCallback(() => {
    localStorage.removeItem("cookie-consent");
    window.location.reload();
  }, []);

  return (
    <button
      onClick={handleReset}
      className="mt-3 px-4 py-2 text-xs font-mono text-text-muted border border-grid-line rounded-sm hover:text-hazard-yellow hover:border-hazard-yellow/50 transition-colors"
    >
      Restablecer preferencia de cookies
    </button>
  );
}
