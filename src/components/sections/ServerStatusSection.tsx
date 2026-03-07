"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Users,
  Map,
  Radio,
  RefreshCw,
  WifiOff,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { GlowText } from "@/components/ui/GlowText";
import { FadeInView } from "@/components/animations/FadeInView";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/cn";

const STATUS_API_URL = "/api/status";
const REFRESH_INTERVAL = 60_000; // 1 minute

interface ServerData {
  name: string;
  players: number;
  soft_max_players: number;
  map?: string;
  round_id?: number;
  run_level?: number;
  panic_bunker?: boolean;
  preset?: string;
}

type FetchState =
  | { status: "loading" }
  | { status: "online"; data: ServerData }
  | { status: "offline" }
  | { status: "error" };

function getRunLevelLabel(runLevel?: number): string {
  switch (runLevel) {
    case 0:
      return "Pre-ronda";
    case 1:
      return "En juego";
    case 2:
      return "Post-ronda";
    default:
      return "Desconocido";
  }
}

function getRunLevelColor(runLevel?: number): string {
  switch (runLevel) {
    case 0:
      return "var(--color-hazard-yellow)";
    case 1:
      return "var(--color-success-green)";
    case 2:
      return "var(--color-alert-red)";
    default:
      return "var(--color-text-muted)";
  }
}

export function ServerStatusSection() {
  const [state, setState] = useState<FetchState>({ status: "loading" });
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch(STATUS_API_URL, {
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) throw new Error("Status API error");
      const data: ServerData = await res.json();
      setState({ status: "online", data });
      setLastUpdated(new Date());
    } catch {
      setState({ status: "offline" });
    }
  }, []);

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchStatus]);

  return (
    <section
      id={SECTION_IDS.serverStatus}
      className="relative py-24 sm:py-32 bg-hull-panel overflow-hidden"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInView className="text-center mb-12">
          <p className="font-mono text-hazard-yellow text-sm tracking-widest uppercase mb-4">
            // ESTADO DEL SERVIDOR
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6">
            Servidor <GlowText color="cyan">En Vivo</GlowText>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg">
            Información en tiempo real de Estación Capibara.
          </p>
        </FadeInView>

        {/* Status card */}
        <FadeInView>
          <Card hover={false} className="p-0 overflow-hidden">
            {/* Status bar */}
            <div
              className={cn(
                "flex items-center justify-between px-6 py-3 border-b border-grid-line",
                state.status === "online"
                  ? "bg-success-green/5"
                  : state.status === "offline"
                    ? "bg-alert-red/5"
                    : "bg-hull-panel"
              )}
            >
              <div className="flex items-center gap-3">
                <StatusIndicator status={state.status} />
                <span className="font-mono text-sm text-text-primary">
                  {state.status === "loading"
                    ? "Conectando..."
                    : state.status === "online"
                      ? "Servidor en línea"
                      : state.status === "offline"
                        ? "Servidor desconectado"
                        : "Error de conexión"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {lastUpdated && (
                  <span className="text-text-muted text-xs font-mono hidden sm:inline">
                    {lastUpdated.toLocaleTimeString("es-ES", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                )}
                <button
                  onClick={fetchStatus}
                  className="p-1.5 text-text-muted hover:text-hazard-yellow transition-colors rounded-sm"
                  aria-label="Actualizar estado"
                >
                  <RefreshCw
                    className={cn(
                      "w-4 h-4",
                      state.status === "loading" && "animate-spin"
                    )}
                  />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {state.status === "loading" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                  >
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="space-y-2">
                        <div className="h-4 w-16 bg-grid-line rounded-sm animate-pulse" />
                        <div className="h-8 w-full bg-grid-line rounded-sm animate-pulse" />
                      </div>
                    ))}
                  </motion.div>
                )}

                {state.status === "online" && (
                  <motion.div
                    key="online"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-6"
                  >
                    <StatBlock
                      icon={Users}
                      label="Jugadores"
                      value={`${state.data.players}`}
                      sub={`/ ${state.data.soft_max_players}`}
                      color="var(--color-neon-cyan)"
                    />
                    <StatBlock
                      icon={Map}
                      label="Mapa"
                      value={state.data.map || "—"}
                      color="var(--color-hazard-yellow)"
                    />
                    <StatBlock
                      icon={Radio}
                      label="Estado"
                      value={getRunLevelLabel(state.data.run_level)}
                      color={getRunLevelColor(state.data.run_level)}
                    />
                    <StatBlock
                      icon={Server}
                      label="Ronda"
                      value={state.data.round_id ? `#${state.data.round_id}` : "—"}
                      color="var(--color-text-muted)"
                    />
                  </motion.div>
                )}

                {state.status === "offline" && (
                  <motion.div
                    key="offline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <WifiOff className="w-12 h-12 text-text-muted mx-auto mb-4 opacity-50" />
                    <p className="text-text-muted font-mono text-sm mb-2">
                      El servidor no está activo en este momento.
                    </p>
                    <p className="text-text-muted text-xs">
                      Jugamos viernes, sábados y domingos. Revisa Discord para horarios.
                    </p>
                  </motion.div>
                )}

                {state.status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <WifiOff className="w-12 h-12 text-alert-red mx-auto mb-4 opacity-50" />
                    <p className="text-text-muted font-mono text-sm">
                      No se pudo conectar con el hub de SS14.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Player bar */}
              {state.status === "online" && state.data.players > 0 && (
                <div className="mt-6 pt-4 border-t border-grid-line">
                  <div className="flex justify-between text-xs font-mono text-text-muted mb-2">
                    <span>Capacidad del servidor</span>
                    <span>
                      {state.data.players} / {state.data.soft_max_players}
                    </span>
                  </div>
                  <div className="h-2 bg-space-void rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-success-green"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.min((state.data.players / state.data.soft_max_players) * 100, 100)}%`,
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </Card>
        </FadeInView>
      </div>
    </section>
  );
}

function StatusIndicator({ status }: { status: FetchState["status"] }) {
  const color =
    status === "online"
      ? "bg-success-green"
      : status === "offline"
        ? "bg-alert-red"
        : status === "error"
          ? "bg-alert-red"
          : "bg-text-muted";

  return (
    <span className="relative flex h-3 w-3">
      {(status === "online" || status === "loading") && (
        <span
          className={cn(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            status === "online" ? "bg-success-green" : "bg-text-muted"
          )}
        />
      )}
      <span
        className={cn("relative inline-flex rounded-full h-3 w-3", color)}
      />
    </span>
  );
}

function StatBlock({
  icon: Icon,
  label,
  value,
  sub,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub?: string;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1">
        <Icon className="w-3.5 h-3.5 text-text-muted" />
        <span className="font-mono text-xs text-text-muted uppercase">
          {label}
        </span>
      </div>
      <div className="font-heading font-bold text-xl" style={{ color }}>
        {value}
        {sub && <span className="text-text-muted text-sm font-normal">{sub}</span>}
      </div>
    </div>
  );
}
