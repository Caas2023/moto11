import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Moto11 — Empresa de Motoboy em Guarulhos",
    short_name: "Moto11",
    description:
      "Empresa de motoboy em Guarulhos/SP. Entregas expressas, coletas agendadas e serviços para empresas.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#b91c1c",
    lang: "pt-BR",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
