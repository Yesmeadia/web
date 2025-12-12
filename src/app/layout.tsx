import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Header from "@/components/layout/Header";
import "@/styles/mixins.scss"
import Footer from "@/components/layout/Footer";
import { Funnel_Display } from "next/font/google";

//  Import Google Font professionally
const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display", // custom CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "YES INDIA FOUNDATION | YES India Makes an excellent India",
  description: "YES INDIA FOUNDATION is dedicated to supporting education, social welfare, community development, and youth empowerment across India. Join us in making a stronger, educated, and empowered nation.",
  keywords: [
    "YES India Foundation",
    "India NGO",
    "Non-profit organization",
    "Education support",
    "Social welfare",
    "Community development",
    "Youth empowerment",
    "Charity India",
  ],
  openGraph: {
    title: "YES INDIA FOUNDATION | YES India Makes an excellent India",
    description:
      "A trusted NGO focused on education, healthcare, empowerment, and community development across India. YES India Foundation works to build a better future.",
    url: "https://web.yesindiafoundation.com",
    siteName: "YES INDIA FOUNDATION",
    images: [
      {
        url: "/yes-india-og.png",
        width: 1200,
        height: 630,
        alt: "YES INDIA FOUNDATION",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${funnelDisplay.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        {children}
        <Footer/>
      </body>

      {/* <body className="antialiased">{children}</body> */}
    </html>
  );
}