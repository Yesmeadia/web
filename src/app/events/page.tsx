import type { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Events & Gatherings | YES INDIA FOUNDATION",
  description:
    "Explore upcoming conclaves, academic symposiums, workshops, and community events organized by YES India Foundation across India.",
  keywords: [
    "YES India Foundation Events",
    "Educational Conclaves India",
    "Academic Symposiums",
    "Community Workshops",
    "Alumni Meetups",
    "Youth Leadership Conferences",
  ],
  openGraph: {
    title: "Events & Gatherings | YES INDIA FOUNDATION",
    description:
      "Join our conferences, educational workshops, and community assemblies across India.",
    url: "https://web.yesindiafoundation.com/events",
    siteName: "YES INDIA FOUNDATION",
    images: [
      {
        url: "/yes-india-og.png",
        width: 1200,
        height: 630,
        alt: "YES INDIA FOUNDATION Events",
      },
    ],
  },
};

export default function EventsPage() {
  return <EventsClient />;
}

