"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
    MapPin,
    Search,
    Filter,
    ArrowRight,
    ExternalLink,
    Users,
    RefreshCw,
    AlertCircle,
    Tag
} from "lucide-react";

export interface EventItem {
    id: string | number;
    title: string;
    description: string;
    date: string;
    endDate?: string;
    time?: string;
    location?: string;
    isVirtual?: boolean;
    virtualLink?: string;
    category?: string;
    image?: string;
    registrationUrl?: string;
    organizer?: string;
    status?: "upcoming" | "past" | "ongoing";
    capacity?: number;
}

export default function EventsClient() {
    const [events, setEvents] = useState<EventItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Filter States
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [activeTab, setActiveTab] = useState<"upcoming" | "past" | "all">("upcoming");

    const fetchEvents = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/events");
            if (!res.ok) {
                throw new Error(`Failed to load events (${res.status})`);
            }
            const data = await res.json();
            const list = Array.isArray(data) ? data : data.events || [];
            setEvents(list);
        } catch (err: unknown) {
            setError(
                err instanceof Error
                    ? err.message
                    : "An error occurred while loading events. Please try again."
            );
            setEvents([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    // Extract categories dynamically from returned data
    const categories = useMemo(() => {
        const list = new Set<string>();
        events.forEach((evt) => {
            if (evt.category?.trim()) list.add(evt.category.trim());
        });
        return ["All", ...Array.from(list)];
    }, [events]);

    // Filter events client-side based on tabs, search and category
    const filteredEvents = useMemo(() => {
        const now = Date.now();

        return events.filter((evt) => {
            // 1. Tab Status — an event moves to "past" once its end date (or date) has passed
            const targetDateStr = (evt.endDate || evt.date).trim();
            const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(targetDateStr);
            const endOfDay = isoMatch
                ? new Date(Number(isoMatch[1]), Number(isoMatch[2]) - 1, Number(isoMatch[3]), 23, 59, 59, 999)
                : (() => {
                    const d = new Date(targetDateStr);
                    if (!isNaN(d.getTime())) d.setHours(23, 59, 59, 999);
                    return d;
                })();
            const isPast = !isNaN(endOfDay.getTime()) && endOfDay.getTime() < now;
            if (activeTab === "upcoming" && isPast) return false;
            if (activeTab === "past" && !isPast) return false;

            // 2. Category Filter
            if (selectedCategory !== "All" && evt.category !== selectedCategory) {
                return false;
            }

            // 3. Search Keyword
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase();
                const inTitle = evt.title?.toLowerCase().includes(q);
                const inDesc = evt.description?.toLowerCase().includes(q);
                const inLoc = evt.location?.toLowerCase().includes(q);
                const inOrg = evt.organizer?.toLowerCase().includes(q);
                const inCat = evt.category?.toLowerCase().includes(q);
                return inTitle || inDesc || inLoc || inOrg || inCat;
            }

            return true;
        });
    }, [events, activeTab, selectedCategory, searchQuery]);

    return (
        <>
            {/* ====== HERO BANNER (Matches YES India Foundation layout system) ====== */}
            <section className="events_banner_container">
                <div>
                    {/* Background Wavy Lines */}
                    <div className="waves">
                        {[1, 2, 3, 4, 5].map((line) => (
                            <svg
                                key={line}
                                className={`wave_line line${line}`}
                                viewBox="0 0 1441 538"
                                fill="none"
                                preserveAspectRatio="xMidYMid slice"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M147.779 87.8706C300.314 51.7182 452.224 7.0047 610.41 30.4613C689.498 42.1888 770.151 70.9571 850.535 97.57C930.944 124.191 1011.09 148.659 1089.26 151.86C1245.6 158.264 1394.15 79.5992 1468.5 40.2236L1542.83 0.855829L1543.5 0.499615L1581.24 410.459L1505.95 415.62L1505.85 414.624L1580.15 409.532L1542.64 2.09474L1468.98 41.1072C1394.67 80.4674 1245.89 159.274 1089.24 152.858C1010.91 149.65 930.64 125.135 850.239 98.516C769.813 71.8891 689.263 43.1598 610.284 31.4485C452.338 8.02749 300.656 52.6692 148.032 88.8426C-4.56184 125.009 -157.938 152.659 -234.619 166.483L-310.861 180.228L-278.027 536.895L-204.919 531.884L-204.827 532.88L-278.933 537.959L-311.941 179.404L-311.501 179.325L-234.819 165.501C-158.137 151.677 -4.78582 124.03 147.779 87.8706Z"
                                />
                            </svg>
                        ))}
                    </div>

                    {/* Left Floating Icon */}
                    <div className="floating_icon icon_left" title="Community Gatherings">
                        <svg
                            width="20"
                            height="28"
                            viewBox="0 0 20 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.833 27.1667C18.5274 27.4722 18.1385 27.625 17.6663 27.625C17.1941 27.625 16.8052 27.4722 16.4996 27.1667L9.33298 19.9584C9.02743 19.6528 8.78465 19.2989 8.60465 18.8967C8.42465 18.4945 8.33409 18.0706 8.33298 17.625L8.33298 6.45836L5.20798 9.58336C4.87465 9.91669 4.47909 10.0834 4.02132 10.0834C3.56354 10.0834 3.16743 9.91669 2.83298 9.58336C2.49854 9.25003 2.33187 8.86114 2.33298 8.41669C2.33409 7.97225 2.50076 7.58336 2.83298 7.25003L8.83298 1.20836C8.99965 1.04169 9.18021 0.923914 9.37465 0.855026C9.56909 0.786137 9.77743 0.751137 9.99965 0.750026C10.2219 0.748915 10.4302 0.783914 10.6247 0.855026C10.8191 0.926137 10.9996 1.04391 11.1663 1.20836L17.1663 7.16669C17.4996 7.50003 17.6663 7.89614 17.6663 8.35503C17.6663 8.81391 17.4996 9.20947 17.1663 9.54169C16.833 9.87392 16.4374 10.0478 15.9796 10.0634C15.5219 10.0789 15.1258 9.91891 14.7913 9.58336L11.6663 6.45836L11.6663 17.6667L18.833 24.8334C19.1385 25.1389 19.2913 25.5278 19.2913 26C19.2913 26.4722 19.1385 26.8611 18.833 27.1667Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>

                {/* Heading Section */}
                <div className="banner_content">
                    <h1>
                        Events & Gatherings <br />
                        <span>YES India Foundation</span>
                    </h1>
                </div>

                {/* Top Right Floating Icon */}
                <div className="floating_icon icon_top_right" title="Educational Conclaves">
                    <svg
                        width="32"
                        height="18"
                        viewBox="0 0 32 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.142717 13.8203L15.0713 13.8203L24.8927 3.99888L20.4731 3.99888V0.0703126L31.5713 0.0703125V11.1685L27.6427 11.1685V6.74888L17.7722 16.6194C17.4121 16.9795 16.9943 17.2578 16.519 17.4542C16.0436 17.6507 15.5447 17.7489 15.0222 17.7489L0.142717 17.7489V13.8203Z"
                            fill="white"
                        />
                    </svg>
                </div>

                {/* Bottom Right Floating Icon */}
                <div className="floating_icon icon_bottom_right" title="Networking Summits">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.8213 30.812C11.9858 30.5864 9.27477 29.5515 7.01015 27.8304C4.74553 26.1094 3.02255 23.7744 2.04593 21.1029C1.0693 18.4314 0.880076 15.5357 1.50073 12.7598C2.12138 9.98396 3.52583 7.4446 5.54721 5.44343C7.56859 3.44227 10.1219 2.06341 12.9039 1.47069C15.6859 0.877964 18.5795 1.09628 21.241 2.09971C23.9026 3.10313 26.2201 4.84949 27.9184 7.13129C29.6166 9.41309 30.8213 14.972"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </section>

            {/* ====== INTRO TEXT SECTION ====== */}
            <section className="wrapper_section">
                <div className="events_contents_wrapper">
                    <p>
                        <span>YES India Foundation</span> organizes academic summits, pedagogical workshops,
                        alumni conclaves, and community empowerment conferences across India. Our events bring together
                        scholars, educators, institutional leaders, and social innovators to exchange ideas, celebrate
                        milestones, and foster grassroots educational transformation. Discover our scheduled sessions,
                        workshops, and national gatherings below.
                    </p>
                </div>
            </section>

            {/* ====== TWO COLUMN HIGHLIGHTS ====== */}
            <section className="events_milestone_style wrapper_section">
                <div>
                    <h2>
                        Conclaves, Summits <br /> & Workshops
                    </h2>
                    <p>Fostering Learning, Dialogue & Grassroots Impact</p>
                </div>
                <div>
                    <p>
                        From nationwide educational symposiums to local community assemblies, each gathering is
                        crafted to inspire educators, mentor youngsters, and empower institutional leadership.
                        Stay updated with our calendar and register for upcoming physical and virtual events.
                    </p>
                </div>
            </section>

            {/* ====== EVENTS DIRECTORY SECTION ====== */}
            <section className="wrapper_section events_directory_section">
                {/* Controls: Tabs & Search */}
                <div className="events_control_bar">
                    <div className="events_tabs">
                        {(["upcoming", "past", "all"] as const).map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className={activeTab === tab ? "active" : ""}
                            >
                                {tab === "upcoming" ? "Upcoming" : tab === "past" ? "Past Events" : "All Events"}
                            </button>
                        ))}
                    </div>

                    <div className="events_search">
                        <Search className="search_icon" size={18} />
                        <input
                            type="text"
                            placeholder="Search events, topics, or cities..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Dynamic Category Chips (rendered if categories exist) */}
                {categories.length > 1 && (
                    <div className="events_category_chips">
                        <span className="category_label">
                            <Filter size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} />
                            Filter:
                        </span>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setSelectedCategory(cat)}
                                className={selectedCategory === cat ? "active" : ""}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}

                {/* Loading State Skeleton */}
                {isLoading && (
                    <div className="events_grid">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="skeleton_card">
                                <div className="sk_image" />
                                <div className="sk_body">
                                    <div className="sk_line title" />
                                    <div className="sk_line" />
                                    <div className="sk_line short" />
                                    <div className="sk_line btn" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Error State */}
                {!isLoading && error && (
                    <div className="state_card">
                        <div className="icon_badge error">
                            <AlertCircle size={28} />
                        </div>
                        <h3>Unable to Load Events</h3>
                        <p>{error}</p>
                        <button type="button" onClick={fetchEvents} className="reset_btn">
                            <RefreshCw size={15} /> Try Again
                        </button>
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && !error && filteredEvents.length === 0 && (
                    <div className="state_card">
                        <h3>
                            {searchQuery || selectedCategory !== "All"
                                ? "No matching events found"
                                : "No events scheduled at the moment"}
                        </h3>
                        <p>
                            {searchQuery || selectedCategory !== "All"
                                ? "Try adjusting your search criteria or switching the category filter."
                                : "We are currently scheduling our next series of conclaves and workshops. Please check back soon or follow our updates."}
                        </p>
                        {(searchQuery || selectedCategory !== "All") && (
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory("All");
                                }}
                                className="reset_btn"
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>
                )}

                {/* Events List */}
                {!isLoading && !error && filteredEvents.length > 0 && (
                    <div className="events_list">
                        {filteredEvents.map((evt) => {
                            const eventDateObj = new Date(evt.date);
                            const hasValidDate = !isNaN(eventDateObj.getTime());
                            const month = hasValidDate
                                ? eventDateObj.toLocaleDateString("en-US", { month: "short" })
                                : "TBA";
                            const day = hasValidDate ? eventDateObj.getDate() : "--";
                            const formattedFullDate = hasValidDate
                                ? eventDateObj.toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })
                                : "Date to be announced";

                            return (
                                <div key={evt.id} className="event_list_item">
                                    {/* Date Badge */}
                                    <div className="list_date_badge">
                                        <span className="badge_month">{month}</span>
                                        <span className="badge_day">{day}</span>
                                    </div>

                                    {/* Event Details */}
                                    <div className="list_body">
                                        <div className="list_header">
                                            <h3>{evt.title}</h3>
                                            {evt.category && (
                                                <span className="category_pill">{evt.category}</span>
                                            )}
                                        </div>

                                        {evt.description && (
                                            <p className="description">{evt.description}</p>
                                        )}

                                        <div className="list_meta">
                                            <div className="meta_item">
                                                <span>{formattedFullDate}</span>
                                                {evt.time && <span>• {evt.time}</span>}
                                            </div>

                                            {(evt.location || evt.isVirtual) && (
                                                <div className="meta_item">
                                                    <MapPin size={15} />
                                                    <span>
                                                        {evt.isVirtual ? "Virtual Event" : evt.location}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Optional Registration Action */}
                                    {evt.registrationUrl && (
                                        <div className="list_action">
                                            <a
                                                href={evt.registrationUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn_primary"
                                            >
                                                Register Now
                                                <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>
        </>
    );
}

