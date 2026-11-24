import React from "react";
import "./WorldMapDottedBg.scss";
import { WORLD_ROWS, MAP_COLS, MAP_ROWS } from "./worldMapData";

const VB_W = 1200;
const STEP = VB_W / MAP_COLS;
const VB_H = MAP_ROWS * STEP;

type Dot = {
  cx: number;
  cy: number;
  key: string;
};

function buildDots(): Dot[] {
  const dots: Dot[] = [];
  for (const [rowStr, spans] of Object.entries(WORLD_ROWS)) {
    const row = Number(rowStr);
    const cy = (row + 0.5) * STEP;
    const offset = row % 2 ? 0.5 : 0; // staggered rows (matches generator)
    for (const [start, end] of spans) {
      for (let col = start; col <= end; col++) {
        dots.push({
          cx: (col + 0.5 + offset) * STEP,
          cy,
          key: `${col}-${row}`,
        });
      }
    }
  }
  return dots;
}

const WORLD_DOTS = buildDots();

const WorldMapDottedBg = () => {
  return (
    <div className="world_map_dotted_bg" aria-hidden="true">
      <svg
        className="world_map_svg"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {WORLD_DOTS.map((dot) => (
          <circle
            key={dot.key}
            cx={dot.cx}
            cy={dot.cy}
            r={1.85}
            className="map_dot"
          />
        ))}
      </svg>
    </div>
  );
};

export default WorldMapDottedBg;
