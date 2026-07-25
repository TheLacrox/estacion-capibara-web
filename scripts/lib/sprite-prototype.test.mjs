import assert from "node:assert/strict";
import test from "node:test";

const moduleUrl = new URL("./sprite-prototype.mjs", import.meta.url);

test("uses an InstantAction icon when a prototype has no world Sprite", async () => {
  const { getPrototypeSpriteDefinition } = await import(moduleUrl);
  const prototype = {
    type: "entity",
    id: "CEActionZFlightToggle",
    components: [
      {
        type: "InstantAction",
        icon: {
          sprite: "_CE/Actions/zLevels.rsi",
          state: "toggle_flight",
        },
      },
    ],
  };

  assert.deepEqual(getPrototypeSpriteDefinition(prototype), {
    parent: null,
    sprite: "_CE/Actions/zLevels.rsi",
    state: "toggle_flight",
    layers: null,
  });
});

test("preserves layer visibility and chooses a representative layer only when all are hidden", async () => {
  const { getPrototypeSpriteDefinition, selectThumbnailLayers } = await import(moduleUrl);
  const definition = getPrototypeSpriteDefinition({
    type: "entity",
    id: "DynamicMob",
    components: [
      {
        type: "Sprite",
        sprite: "Mobs/dynamic.rsi",
        layers: [
          { state: "dynamic-base", visible: false },
          { state: "powered-overlay", visible: false },
        ],
      },
    ],
  });

  assert.deepEqual(definition.layers, [
    { state: "dynamic-base", sprite: null, visible: false },
    { state: "powered-overlay", sprite: null, visible: false },
  ]);
  assert.deepEqual(selectThumbnailLayers(definition.layers), [definition.layers[0]]);
  assert.deepEqual(
    selectThumbnailLayers([
      { state: "base", sprite: null, visible: true },
      { state: "hidden-overlay", sprite: null, visible: false },
    ]),
    [{ state: "base", sprite: null, visible: true }]
  );
});
