import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://photonic-crystal-tactile-feedback.zhangruilin-0124.chatgpt.site";
const siteOrigin = new URL(siteUrl).origin;
const socialImage = new URL(`${basePath}/og.png`, siteOrigin).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
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
    url: siteUrl,
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
