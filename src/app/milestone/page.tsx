import "./Milestone.scss";

const MilestonePage = () => {
  const milestones = [
    { year: "2007", title: "The Beginning", desc: "Started as a local initiative to support underprivileged students." },
    { year: "2012", title: "State Expansion", desc: "Expanded operations to 3 states with over 15 coaching centers." },
    { year: "2018", title: "National Recognition", desc: "Reached the milestone of 10,000+ students across India." },
    { year: "2024", title: "Institutional Excellence", desc: "Operating in 8+ states with 50+ centers nationwide." },
  ];

  return (
    <main className="milestone_page">
      {/* HERO SECTION */}
      <section className="milestone_hero">
        <div className="svg_background">
          {/* The SVG is placed here or via CSS */}
          <svg
            width="1440"
            height="689"
            viewBox="0 0 1440 689"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M142.326 159.94C294.861 123.788 446.771 79.074 604.957 102.531C684.045 114.258 764.698 143.026 845.082 169.639C925.49 196.26 1005.64 220.728 1083.81 223.93C1240.15 230.333 1388.7 151.668 1463.04 112.293L1537.37 72.9252L1538.05 72.569L1575.79 482.529L1501.49 487.621L1501.39 486.626L1574.7 481.601L1537.19 74.1641L1463.53 113.177C1389.21 152.537 1240.44 231.343 1083.79 224.927C1005.46 221.719 925.187 197.204 844.786 170.585C764.359 143.958 683.81 115.229 604.831 103.518C446.884 80.0968 295.203 124.738 142.579 160.912C-10.015 197.078 -163.391 224.728 -240.072 238.553L-316.315 252.297L-283.48 608.965L-209.378 603.886L-209.287 604.881L-284.386 610.029L-317.394 251.474L-316.954 251.395L-240.273 237.57C-163.59 223.746 -10.239 196.099 142.326 159.94Z"
              fill="#727272"
            />

            <path
              d="M137.963 87.3716C290.498 51.2192 442.408 6.50581 600.594 29.9622C679.682 41.6898 760.335 70.4581 840.719 97.071C921.127 123.692 1001.27 148.16 1079.44 151.361C1235.79 157.765 1384.34 79.1002 1458.68 39.7246L1533.01 0.35681L1533.68 0.000595534L1571.42 409.96L1497.12 415.053L1497.03 414.057L1570.33 409.033L1532.82 1.59572L1459.17 40.6082C1384.85 79.9685 1236.08 158.775 1079.42 152.359C1001.1 149.15 920.823 124.636 840.422 98.017C759.996 71.3902 679.446 42.6608 600.468 30.9495C442.521 7.52859 290.84 52.1702 138.216 88.3436C-14.3783 124.51 -167.754 152.16 -244.436 165.984L-320.678 179.729L-287.843 536.396L-213.741 531.317L-213.649 532.313L-288.749 537.46L-321.758 178.905L-321.318 178.826L-244.636 165.002C-167.954 151.178 -14.6023 123.531 137.963 87.3716Z"
              fill="#727272"
            />
            <path
              d="M146.779 238.055C299.314 201.903 451.224 157.189 609.41 180.646C688.498 192.373 769.152 221.142 849.535 247.755C929.944 274.376 1010.09 298.843 1088.26 302.045C1244.6 308.448 1393.15 229.784 1467.5 190.408L1541.83 151.04L1542.5 150.684L1580.24 560.644L1505.94 565.737L1505.85 564.741L1579.15 559.717L1541.64 152.279L1467.98 191.292C1393.67 230.652 1244.89 309.458 1088.24 303.042C1009.91 299.834 929.64 275.319 849.239 248.701C768.813 222.074 688.263 193.344 609.284 181.633C451.338 158.212 299.656 202.854 147.032 239.027C-5.56196 275.194 -158.938 302.844 -235.619 316.668L-311.861 330.412L-279.027 687.08L-204.925 682.001L-204.833 682.997L-279.933 688.144L-312.941 329.589L-312.501 329.51L-235.82 315.685C-159.137 301.861 -5.78594 274.215 146.779 238.055Z"
              fill="#727272"
            />
          </svg>
        </div>

        <div className="container hero_inner">
          <div className="hero_content">
  
            <h1>
              Milestones of <br />
              Institutional Excellence
            </h1>
            <p>
              Tracing the evolution of <span>YES India Foundation</span> from a local
              initiative to a national movement in education since 2007.
            </p>

            <div className="hero_stats_wrapper">
              <div className="stat_item">
                <strong>16K+</strong> <span>Students</span>
              </div>
              <div className="stat_item">
                <strong>50+</strong> <span>Centers</span>
              </div>
              <div className="stat_item">
                <strong>08+</strong> <span>States</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: TIMELINE JOURNEY */}
      <section className="timeline_section">
        <div className="container">
          <div className="section_header">
            <span className="subtitle">Our Journey</span>
            <h2>Years of Impact</h2>
          </div>
          <div className="timeline_grid">
            {milestones.map((item, index) => (
              <div className="timeline_card" key={index}>
                <div className="year_tag">{item.year}</div>
                <div className="card_content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: VISUAL ACHIEVEMENTS (Grid with Images) */}
      <section className="achievements_grid_section">
        <div className="container">
          <div className="grid_layout">
            <div className="image_box main_img">
              <img src="/awards/award_img1.jpg" alt="Graduation Ceremony" />
              <div className="overlay_text">National Reach</div>
            </div>
            <div className="content_box">
              <span className="subtitle">By the Numbers</span>
              <h2>Proven Track Record of Educational Success</h2>
              <p>We believe in measurable impact. Our journey is defined by the lives we've touched and the academic excellence we've fostered across the country.</p>
              <ul className="impact_list">
                <li><strong>95%</strong> Success Rate in Exams</li>
                <li><strong>200+</strong> Expert Educators</li>
                <li><strong>15+</strong> Years of Legacy</li>
              </ul>
            </div>
            {/* <div className="image_box secondary_img">
              <img src="/awards/award_img3.jpg" alt="Classroom Session" />
            </div>
            <div className="image_box tertiary_img">
              <img src="/awards/award_img2.jpg" alt="Award Ceremony" />
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MilestonePage;
