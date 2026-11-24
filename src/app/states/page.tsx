import React from "react";
import StateCard from "@/components/layout/StateCard";
import { statesData } from "@/utils/statesData";
import WorldMapDottedBg from "@/components/ui/WorldMapDottedBg";

const page = () => {
  return (
    <>
      <section className="wrapper_section">
        <div className="state_bg_container">
          <WorldMapDottedBg />
          <div className="state_banner_contents">
            <h1>
              <span>YES INDIA</span> States <br /> of Operations:
            </h1>
            <div className="button_contanier">
              <button>
                {" "}
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_821_1286"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="18"
                      height="18"
                    >
                      <path
                        d="M1.00033 8.99935C1.00033 13.4174 4.58164 16.9987 8.99968 16.9987C13.4177 16.9987 16.999 13.4174 16.999 8.99935C16.999 4.58131 13.4177 1 8.99968 1C4.58164 0.999999 1.00033 4.58131 1.00033 8.99935Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.4002 7.80078L8.9999 11.4005L12.5996 7.80078"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </mask>
                    <g mask="url(#mask0_821_1286)">
                      <path
                        d="M-2.99707 -1.66602H20.9984V19.6633H-2.99707V-1.66602Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </span>{" "}
                <p>Explore</p>
              </button>
            </div>
            <p>
              <span>YES India Foundation</span> provides a range of educational
              options tailored to different age groups and needs. Our institutes
              cater to various academic levels, from primary to higher
              secondary, and include specialised educational institutes too,
              ensuring quality and combining moral studies too. This diversity
              ensures that students receive an education that is both
              comprehensive and suited to their individual learning stages,
              family financial stability, blending modern subjects with moral
              studies.
            </p>
          </div>
        </div>
      </section>

      <section className="wrapper_section">
        <div className="state_project_container">
          {statesData.map((state, index) => (
            <StateCard key={index} state={state} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
