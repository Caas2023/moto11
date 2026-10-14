import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const skillPath = fileURLToPath(
  new URL("../../skills/ponytail/SKILL.md", import.meta.url),
);
const validModes = new Set(["off", "lite", "full", "ultra"]);

function skillBody(markdown) {
  return markdown.replace(/^---[\s\S]*?---\s*/, "").trim();
}

export default {
  id: "ponytail",
  async setup(ctx) {
    const stored = await ctx.storage.get("mode");
    let mode = validModes.has(stored) ? stored : "full";
    const instructions = skillBody(await readFile(skillPath, "utf8"));

    await ctx.session.hook("context", (event) => {
      if (mode === "off") return;
      event.system.push({
        type: "text",
        text: `PONYTAIL MODE ACTIVE — level: ${mode}\n\n${instructions}`,
      });
    });

    await ctx.command.transform((editor) => {
      editor.add({
        name: "ponytail",
        description: "Switch Ponytail intensity: lite, full, ultra, or off",
        execute: async ({ sessionID, prompt }) => {
          const requested = String(prompt.text ?? "").trim().toLowerCase();
          mode = validModes.has(requested) ? requested : "full";
          await ctx.storage.set("mode", mode);
          await ctx.session.synthetic({
            sessionID,
            text: `Ponytail mode: ${mode}.`,
          });
        },
      });
    });
  },
};
