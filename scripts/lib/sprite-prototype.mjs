export function getPrototypeSpriteDefinition(prototype) {
  const entry = {
    parent: prototype.parent || null,
    sprite: null,
    state: null,
    layers: null,
  };

  if (!Array.isArray(prototype.components)) return entry;

  const sprite = prototype.components.find((component) => component?.type === "Sprite");
  if (sprite) {
    entry.sprite = sprite.sprite || null;
    entry.state = sprite.state || null;
    if (Array.isArray(sprite.layers)) {
      entry.layers = sprite.layers
        .filter((layer) => layer?.state)
        .map((layer) => ({
          state: layer.state,
          sprite: layer.sprite || null,
          visible: layer.visible !== false,
        }));
    }
    return entry;
  }

  const action = prototype.components.find(
    (component) => component?.type === "InstantAction" && component.icon?.sprite
  );
  if (action) {
    entry.sprite = action.icon.sprite;
    entry.state = action.icon.state || null;
  }

  return entry;
}

export function selectThumbnailLayers(layers = []) {
  const visibleLayers = layers.filter((layer) => layer.visible !== false);
  return visibleLayers.length > 0 ? visibleLayers : layers.slice(0, 1);
}
