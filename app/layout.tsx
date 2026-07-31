import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto")?.split(",")[0]?.trim() ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: origin,
    title: "Photonic-Crystal Tactile Feedback | Anonymous Research Preview",
    description:
      "A result-free project preview for matched-trajectory evaluation of photonic-crystal tactile inner-loop feedback on SO-101.",
    keywords: [
      "visuotactile sensing",
      "photonic crystal",
      "robot tactile sensing",
      "slip-responsive grasping",
      "SO-101",
    ],
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      type: "website",
      title: "Photonic-Crystal Tactile Feedback",
      description:
        "Matched trajectories · bounded action · anonymous research preview.",
      url: origin,
      images: [
        {
          url: socialImage,
          width: 1731,
          height: 909,
          alt: "Photonic-crystal tactile feedback anonymous research preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Photonic-Crystal Tactile Feedback",
      description:
        "Matched trajectories · bounded action · anonymous research preview.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
