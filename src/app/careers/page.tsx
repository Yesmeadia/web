import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers & Opportunities | YES INDIA FOUNDATION",
  description:
    "Join the mission at YES India Foundation. Discover meaningful careers, faculty positions, and leadership roles in education and community upliftment across India.",
  keywords: [
    "YES India Foundation Careers",
    "Teaching Jobs India",
    "NGO Careers India",
    "Education Foundation Jobs",
    "Faculty Opportunities",
    "Academic Coordinator Jobs",
  ],
  openGraph: {
    title: "Careers & Opportunities | YES INDIA FOUNDATION",
    description:
      "Join our nationwide movement for value-based education and community empowerment across 8+ states and 53+ institutions.",
    url: "https://web.yesindiafoundation.com/careers",
    siteName: "YES INDIA FOUNDATION",
    images: [
      {
        url: "/yes-india-og.png",
        width: 1200,
        height: 630,
        alt: "YES INDIA FOUNDATION Careers",
      },
    ],
  },
};

export default function CareersPage() {
  return <CareersClient />;
}