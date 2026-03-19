import type { GameEntry } from "@/data/seo-pages";

interface GameComparisonTableProps {
  games: GameEntry[];
  features: { key: keyof Pick<GameEntry, "free" | "multiplayer" | "roleplay" | "sandbox" | "socialDeduction">; label: string }[];
}

export function GameComparisonTable({ games, features }: GameComparisonTableProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
        Tabla Comparativa
      </h2>
      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full text-sm border border-grid-line">
          <thead>
            <tr className="bg-hull-panel">
              <th className="text-left px-3 py-3 border-b border-grid-line font-heading text-text-primary">
                Juego
              </th>
              {features.map((f) => (
                <th
                  key={f.key}
                  className="text-center px-3 py-3 border-b border-grid-line font-heading text-text-primary"
                >
                  {f.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr
                key={game.name}
                className={
                  game.highlighted
                    ? "bg-hazard-yellow/5 border-l-2 border-l-hazard-yellow"
                    : ""
                }
              >
                <td
                  className={`px-3 py-3 border-b border-grid-line font-mono ${
                    game.highlighted
                      ? "text-hazard-yellow font-bold"
                      : "text-text-primary"
                  }`}
                >
                  {game.name}
                </td>
                {features.map((f) => (
                  <td
                    key={f.key}
                    className="text-center px-3 py-3 border-b border-grid-line"
                  >
                    {game[f.key] ? (
                      <span className="text-green-400" aria-label="Sí">&#10003;</span>
                    ) : (
                      <span className="text-red-400/60" aria-label="No">&#10007;</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
