'use client'

import React, { useEffect, useRef, useState, useCallback } from "react";

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
    <div ref={ref} className="flex items-center gap-4 my-6 p-4">
      <div className="text-yellow-700 text-5xl flex-shrink-0">{icon}</div>
      <div>
        <h2 className="text-3xl font-bold text-gray-800">{displayedCount.toLocaleString()}{showPlus ? '+' : ''}</h2>
        <p className="text-gray-600 text-lg mt-1">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;