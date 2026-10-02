import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/avaliacoes", destination: "/contato", permanent: true },
      { source: "/rastreamento", destination: "/contato", permanent: true },
      { source: "/melhor-motoboy-guarulhos", destination: "/servicos", permanent: true },
      { source: "/entrega-urgente", destination: "/servicos", permanent: true },
      { source: "/motoboy-barato-guarulhos", destination: "/precos", permanent: true },
      { source: "/quanto-custa-motoboy-guarulhos", destination: "/precos", permanent: true },
      { source: "/orcamento", destination: "/contato", permanent: true },
      { source: "/servicos/:slug", destination: "/servicos", permanent: true },
      { source: "/combos/:slug", destination: "/servicos", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:slug", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
