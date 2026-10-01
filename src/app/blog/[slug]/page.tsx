import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { POSTS, getPostBySlug } from "@/data/posts";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return buildMetadata({
    title: post?.title ?? "Blog Moto11",
    description:
      "Conteúdo em revisão editorial para refletir apenas preços, horários e condições confirmados.",
    path: `/blog/${slug}`,
    noIndex: true,
  });
}

export default function BlogPostPage() {
  permanentRedirect("/blog");
}
