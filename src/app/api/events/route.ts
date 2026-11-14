import { NextResponse } from "next/server";
import { latestNews } from "@/utils/news";
import type { EventItem } from "@/app/events/EventsClient";

function isPastDate(dateStr: string): boolean {
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr.trim());
  const endOfDay = isoMatch
    ? new Date(Number(isoMatch[1]), Number(isoMatch[2]) - 1, Number(isoMatch[3]), 23, 59, 59, 999)
    : (() => {
        const d = new Date(dateStr);
        if (!isNaN(d.getTime())) d.setHours(23, 59, 59, 999);
        return d;
      })();
  return !isNaN(endOfDay.getTime()) && endOfDay.getTime() < Date.now();
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const status = searchParams.get("status"); // upcoming | past | all
    const query = searchParams.get("q");

    const events: EventItem[] = latestNews.map((item) => {
      const startDate = item.eventDate || `${item.day} ${item.monthYear}`;
      const endDate = item.eventEndDate || startDate;
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        date: startDate,
        endDate,
        time: item.time,
        location: item.location,
        category: item.category,
        status: isPastDate(endDate) ? "past" : "upcoming",
      };
    });

    return NextResponse.json({
      success: true,
      events,
      total: events.length,
      filters: { category, status, query },
    });
  } catch (error) {
    console.error("API /api/events GET error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to retrieve events.", error: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { eventId, name, email, phone, notes } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required for registration." },
        { status: 400 }
      );
    }

    // Process event RSVP / registration here
    return NextResponse.json({
      success: true,
      message: "Registration received successfully.",
      data: { eventId, name, email, phone, notes },
    });
  } catch (error) {
    console.error("API /api/events POST error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit event registration.", error: String(error) },
      { status: 500 }
    );
  }
}

