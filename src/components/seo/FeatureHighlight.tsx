interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureHighlightProps {
  title?: string;
  features: Feature[];
}

const ICON_MAP: Record<string, string> = {
  free: "💰",
  roles: "👥",
  sandbox: "🧪",
  community: "🌎",
  roleplay: "🎭",
  depth: "🔬",
  chaos: "💥",
  opensource: "📖",
};

export function FeatureHighlight({
  title = "¿Por qué Space Station 14?",
  features,
}: FeatureHighlightProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="border border-grid-line bg-hull-panel rounded-sm p-5 hover:border-hazard-yellow/50 transition-colors"
          >
            <div className="text-2xl mb-3">{ICON_MAP[feature.icon] ?? feature.icon}</div>
            <h3 className="font-heading font-bold text-text-primary text-sm mb-2">
              {feature.title}
            </h3>
            <p className="text-text-muted font-mono text-xs leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
