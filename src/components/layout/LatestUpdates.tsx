"use client";

import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { latestNews } from "@/utils/news";
import "./LatestUpdates.scss";

const LatestUpdates = () => {
  if (!latestNews.length) return null;

  return (
    <section className="latest_updates_section" aria-label="Latest Updates">
      <div className="latest_updates_bar">
        <div className="updates_label">Latest Updates</div>
        <div className="updates_marquee_wrapper">
          <Marquee gradient={false} speed={45} pauseOnHover={true} autoFill={true} loop={0}>
            {latestNews.map((item) => {
              const content = (
                <>
                  <div className="update_date_badge">
                    <span className="date_day">{item.day}</span>
                    <span className="date_month_year">{item.monthYear}</span>
                  </div>
                  <div className="update_text">
                    <span className="update_title">{item.title}</span>
                    <span className="update_desc">{item.description}</span>
                  </div>
                </>
              );

              return item.href ? (
                <Link key={item.id} href={item.href} className="update_item">
                  {content}
                </Link>
              ) : (
                <div key={item.id} className="update_item">
                  {content}
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
