export interface NewsItem {
  id: string;
  day: string;
  monthYear: string;
  title: string;
  description: string;
  href?: string;
  eventDate?: string;
  eventEndDate?: string;
  time?: string;
  location?: string;
  category?: string;
}

export const latestNews: NewsItem[] = [
  {
    id: "ahibba-summit-7",
    day: "28-30",
    monthYear: "Dec 2026",
    title: "AHIBBA SUMMIT 7.0",
    description: "28 to 30 December 2026 at YESUQ, Kerala.",
    href: "/events",
    eventDate: "2026-12-28",
    eventEndDate: "2026-12-30",
    time: "28 – 30 Dec 2026",
    location: "YESUQ, Kerala",
    category: "Summit",
  },
  {
    id: "principals-meet-2026",
    day: "31",
    monthYear: "Dec 2026",
    title: "PRINCIPALS MEET",
    description:
      "Principals meet for all principals of YES India institutes on 31 December 2026.",
    href: "/events",
    eventDate: "2026-12-31",
    eventEndDate: "2026-12-31",
    location: "YESUQ, Kerala",
    category: "Leadership Meet",
  },
  {
    id: "entrace-summit-2026",
    day: "29",
    monthYear: "Nov 2026",
    title: "ENTRACE SUMMIT 2026",
    description:
      "Entrace summit for all new entrance of YES India institutes on 29 November 2026.",
    href: "/events",
    eventDate: "2026-10-29",
    eventEndDate: "2026-10-29",
    location: "YES RUIHSS, Poonch, Jammu & Kashmir",
    category: "Leadership Meet",
  },
];
