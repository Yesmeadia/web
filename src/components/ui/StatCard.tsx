'use client'

import React, { useEffect, useRef, useState, useCallback } from "react";
import "./StatCard.scss";

interface StatCardProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  duration?: number;
  showPlus?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, count, label, duration = 2000, showPlus = true }) => {
  const [displayedCount, setDisplayedCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCount = useCallback(() => {
    let start = 0;
    const increment = count / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= count) {
        setDisplayedCount(count);
        clearInterval(timer);
      } else {
        setDisplayedCount(Math.ceil(start));
      }
    }, 16);
  }, [count, duration]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated, animateCount]);

  return (
    <div ref={ref} className="stat_item_card">
      <div className="stat_icon_box">{icon}</div>
      <div className="stat_content">
        <h2>{displayedCount.toLocaleString()}{showPlus ? '+' : ''}</h2>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default StatCard;