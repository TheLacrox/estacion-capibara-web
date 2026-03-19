import type { LowSpecGame } from "@/data/seo-pages";

interface SystemRequirementsTableProps {
  games: LowSpecGame[];
}

export function SystemRequirementsTable({ games }: SystemRequirementsTableProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
        Requisitos Mínimos Comparados
      </h2>
      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full text-sm border border-grid-line">
          <thead>
            <tr className="bg-hull-panel">
              <th className="text-left px-3 py-3 border-b border-grid-line font-heading text-text-primary">
                Juego
              </th>
              <th className="text-center px-3 py-3 border-b border-grid-line font-heading text-text-primary">
                RAM
              </th>
              <th className="text-center px-3 py-3 border-b border-grid-line font-heading text-text-primary">
                CPU
              </th>
              <th className="text-center px-3 py-3 border-b border-grid-line font-heading text-text-primary">
                GPU
              </th>
              <th className="text-center px-3 py-3 border-b border-grid-line font-heading text-text-primary">
                Disco
              </th>
              <th className="text-center px-3 py-3 border-b border-grid-line font-heading text-text-primary">
                Gratis
              </th>
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
                <td className="text-center px-3 py-3 border-b border-grid-line font-mono text-text-muted text-xs">
                  {game.minRam}
                </td>
                <td className="text-center px-3 py-3 border-b border-grid-line font-mono text-text-muted text-xs">
                  {game.minCpu}
                </td>
                <td className="text-center px-3 py-3 border-b border-grid-line font-mono text-text-muted text-xs">
                  {game.minGpu}
                </td>
                <td className="text-center px-3 py-3 border-b border-grid-line font-mono text-text-muted text-xs">
                  {game.storage}
                </td>
                <td className="text-center px-3 py-3 border-b border-grid-line">
                  {game.free ? (
                    <span className="text-green-400" aria-label="Sí">&#10003;</span>
                  ) : (
                    <span className="text-red-400/60" aria-label="No">&#10007;</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
