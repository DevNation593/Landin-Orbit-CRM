import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: string[];
  index?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  index = true,
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title: path === "/" ? { absolute: socialTitle } : title,
    description,
    keywords,
    alternates: {
      canonical: path,
      languages: { es: path },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${title} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/opengraph-image"],
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export function createBreadcrumbSchema(
  items: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
