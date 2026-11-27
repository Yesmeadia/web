"use client";

import React, { useState } from "react";
import { alumniData } from "@/utils/alumniData";

const INITIAL_VISIBLE = 42; // 6 rows × 7 columns on desktop
const LOAD_MORE_STEP = 42;

const AlumniGrid = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const visibleAlumni = alumniData.slice(0, visibleCount);
  const hasMore = visibleCount < alumniData.length;

  return (
    <div className="alumni_grid_section" id="alumni-grid">
      <div className="alumni_grid">
        {visibleAlumni.map((alumni, index) => (
          <div key={`${alumni.name}-${index}`} className="alumni_card">
            <div className="alumni_image">
              {alumni.image ? (
                <img src={alumni.image} alt={alumni.name} loading="lazy" />
              ) : (
                <div className="placeholder_image"></div>
              )}
            </div>
            <div className="alumni_info">
              <h3>{alumni.name}</h3>
              {alumni.position && <p className="position">{alumni.position}</p>}
              {alumni.department && (
                <p className="department">{alumni.department}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="alumni_view_more_wrap">
          <button
            type="button"
            className="alumni_view_more_btn"
            onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_STEP)}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default AlumniGrid;
