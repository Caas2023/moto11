import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  return buildMetadata({
    title: service?.title ?? "Serviços de motoboy em Guarulhos",
    description:
      "Consulte os serviços de motoboy da Moto11 e confirme disponibilidade, preço e condições pelo WhatsApp.",
    path: `/servicos/${slug}`,
    noIndex: true,
  });
}

export default function ServicePage() {
  permanentRedirect("/servicos");
}
