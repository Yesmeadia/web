import Image from "next/image";

const History = () => {
  return (
    <>
      <section className="gpp_banner_container">
        {/* ====== Background Wavy Lines ====== */}
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

        {/* ====== Floating Icons ====== */}
        {/* Left Icon - Arrows/Direction */}
        <div className="floating_icon icon_left">
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.833 27.1667C18.5274 27.4722 18.1385 27.625 17.6663 27.625C17.1941 27.625 16.8052 27.4722 16.4996 27.1667L9.33298 19.9584C9.02743 19.6528 8.78465 19.2989 8.60465 18.8967C8.42465 18.4945 8.33409 18.0706 8.33298 17.625L8.33298 6.45836L5.20798 9.58336C4.87465 9.91669 4.47909 10.0834 4.02132 10.0834C3.56354 10.0834 3.16743 9.91669 2.83298 9.58336C2.49854 9.25003 2.33187 8.86114 2.33298 8.41669C2.33409 7.97225 2.50076 7.58336 2.83298 7.25003L8.83298 1.20836C8.99965 1.04169 9.18021 0.923914 9.37465 0.855026C9.56909 0.786137 9.77743 0.751137 9.99965 0.750026C10.2219 0.748915 10.4302 0.783914 10.6247 0.855026C10.8191 0.926137 11.1663 1.20836 17.1663 7.16669C17.4996 7.50003 17.6663 7.89614 17.6663 8.35503C17.6663 8.81391 17.4996 9.20947 17.1663 9.54169C16.833 9.87392 16.4374 10.0478 15.9796 10.0634C15.5219 10.0789 15.1258 9.91891 14.7913 9.58336L11.6663 6.45836L11.6663 17.6667L18.833 24.8334C19.1385 25.1389 19.2913 25.5278 19.2913 26C19.2913 26.4722 19.1385 26.8611 18.833 27.1667ZM1.16632 27.2084C0.832982 26.875 0.672983 26.4795 0.686316 26.0217C0.69965 25.5639 0.859649 25.1817 1.16632 24.875L4.12465 21.875C4.45798 21.5417 4.85409 21.375 5.31298 21.375C5.77187 21.375 6.16743 21.5417 6.49965 21.875C6.83187 22.2084 6.99187 22.6045 6.97965 23.0634C6.96743 23.5222 6.79354 23.9178 6.45798 24.25L3.49965 27.2084C3.19409 27.5139 2.80521 27.6667 2.33298 27.6667C1.86076 27.6667 1.47187 27.5139 1.16632 27.2084Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Top Right Icon - Growth Arrow */}
        <div className="floating_icon icon_top_right">
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

        {/* Bottom Right Icon - Target/Goal */}
        <div className="floating_icon icon_bottom_right">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8213 30.812C11.9858 30.5864 9.27477 29.5515 7.01015 27.8304C4.74553 26.1094 3.02255 23.7744 2.04593 21.1029C1.0693 18.4314 0.880076 15.5357 1.50073 12.7598C2.12138 9.98396 3.52583 7.4446 5.54721 5.44343C7.56859 3.44227 10.1219 2.06341 12.9039 1.47069C15.6859 0.877964 18.5795 1.09628 21.241 2.09971C23.9026 3.10313 26.2201 4.84949 27.9184 7.13129C29.6166 9.41309 30.6242 12.1344 30.8213 14.972"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5089 22.3777C12.4465 21.965 11.5037 21.2939 10.7659 20.4252C10.028 19.5565 9.51832 18.5176 9.28289 17.4025C9.04746 16.2873 9.09372 15.131 9.41748 14.0382C9.74124 12.9454 10.3323 11.9505 11.1372 11.1436C11.9421 10.3366 12.9354 9.74299 14.0274 9.41641C15.1194 9.08984 16.2755 9.04061 17.3913 9.27316C18.5071 9.50572 19.5473 10.0127 20.4179 10.7483C21.2884 11.484 21.9619 12.425 22.3774 13.4863M16.0003 16.0006L21.7146 21.7149M21.7146 21.7149L20.5717 26.2863L25.1431 30.8577L26.286 26.2863L30.8574 25.1434L26.286 20.572L21.7146 21.7149Z"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Content overlay */}
        <div className="banner_content">
          <h1>
            The <span>Inspiring</span> Journey
          </h1>
        </div>
      </section>

      <section className="wrapper_section">
        <div className="gpp_contents">
          <p className="intro_text">
            YES India Foundation was born from the personal journey and vision
            of its founder, Mr. Shaukat Bukhari. His journey inspired crucial
            action plans that ultimately led to the establishment of YES India
            Foundation, a nationwide organization dedicated to educational and
            social advancement across India.
          </p>
        </div>

        <div className="buds_bloom_container">
          <div className="left_column">
            <div className="logo_wrapper">
              <Image
                src={"/history/history1.jpg"}
                alt="history"
                width={300}
                height={180}
                priority
              />
            </div>
            <p>
              In the year 2000-2001, while studying in Moradabad, Uttar
              Pradesh, Mr.Shaukat Bukhari developed a close friendship with
              Kashmiri classmates, which led to an opportunity to visit Kashmir
              with them. Eager to see the land known as &quot;heaven on
              earth,&quot; he journeyed to Kashmir, where he not only
              experienced its legendary beauty but also came to know the
              gentleness and intelligence of its people. It was a short visit.
              At the time, the social environment was more challenging with
              restrictions and limitations on travel and social interaction. He
              returned after only a few days.
            </p>
          </div>

          <div className="right_column">
            <div className="frequency_card">
              <h3>Our Beginning</h3>
              <h4 className="title">The First Visit (2000-2001)</h4>
              <p className="content">
                After completing studies in Moradabad, they separated. Later in
                December 2005, some former Kashmiri classmates reconnected with
                him and extended a warm invitation to attend a conference as a
                guest in Kashmir. That trip helped him connect more deeply with
                the mind and soil of Kashmir, gaining a closer understanding of
                its people and land.
              </p>
            </div>

            <div className="frequency_card">
              <h4 className="title">Recognition of Potential (2005)</h4>
              <p className="content">
                During his stay as a guest in various homes, he recognized the
                remarkable talent and potential of the children he met. It
                became evident that there was a significant shortage of a
                suitable educational system available to them. These experiences
                solidified his belief that introducing innovative educational
                approaches could bring about transformative change.
              </p>
            </div>

            <div className="frequency_card">
              <h4 className="title">Foundation & Trust (2006-2007)</h4>
              <p className="content">
                As the encouragement from his friends grew more fervent, the
                decision was made to establish an educational institution in
                those picturesque hills. In subsequent visits, a series of
                meetings and discussions unfolded with local civic leaders,
                scholars, social workers and individuals from various sectors.
              </p>
            </div>
          </div>
        </div>

        <div className="rainbow_classroom_container">
          <div className="left_column">
            <div className="logo_wrapper">
              <Image
                src={"/images/history2.jpg"}
                alt="history_milestone"
                width={300}
                height={180}
                priority
              />
            </div>

            <p>
              During these interactions, many recognized his vision and
              entrusted him with the significant responsibility of revitalizing
              and modernizing an existing institution that was operating on a
              modest scale in Poonch City. In April 2007, he and his dedicated
              team embarked on their mission, focusing not only on traditional
              teaching but also on fostering awareness and engaging in various
              activities beyond standard working hours.
            </p>
          </div>
          <div className="right_column">
            <div className="table_wrapper">
              <table className="rainbow_table">
                <thead>
                  <tr>
                    <th colSpan={2} className="table_header">
                      KEY MILESTONES
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="code_cell">2000-2001</td>
                    <td>First Visit to Kashmir</td>
                  </tr>
                  <tr>
                    <td className="code_cell">2005</td>
                    <td>Reconnection & Vision</td>
                  </tr>
                  <tr>
                    <td className="code_cell">2006</td>
                    <td>Community Meetings</td>
                  </tr>
                  <tr>
                    <td className="code_cell">2007</td>
                    <td>Mission Begins - Poonch City</td>
                  </tr>
                  <tr>
                    <td className="code_cell">2010s</td>
                    <td>Expansion Across J&K</td>
                  </tr>
                  <tr>
                    <td className="code_cell">2020s</td>
                    <td>Nationwide Growth</td>
                  </tr>
                  <tr>
                    <td className="code_cell">2024</td>
                    <td>60 Institutions Nationwide</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="planets_school_container">
          <div className="left_column">
            <div className="logo_wrapper">
              <Image
                src={"/images/history3.jpg"}
                alt="achievements"
                width={300}
                height={180}
                priority
              />
            </div>
            <p>
              This commitment led to remarkable positive changes among the
              students, which in turn garnered widespread acceptance from the
              community. People were more fascinated by the direct evidence of
              the new generation growing up with the latest technology along
              with moral values.
            </p>
          </div>

          <div className="right_column">
            <div className="parliament_section">
              <div className="numbers_display">
                <h2>60</h2>
                <span>
                  Total <br /> Institutions <br /> Nationwide
                </span>
              </div>

              <div className="parliament_info">
                <h3>OUR ACHIEVEMENTS</h3>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div className="election_info">
                    <span></span>
                    <p>35 in J&K</p>
                  </div>
                  <div className="election_info">
                    <span></span>
                    <p>28 in Other States</p>
                  </div>
                </div>
                <p className="description">
                  As of 2024, YES India Foundation proudly oversees 35
                  institutions across six districts in Jammu & Kashmir with a
                  total of 28 institutions operating in seven other states
                  across India.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="yes_genius_container">
          <div className="left_column">
            <div className="logo_wrapper">
              <Image
                src={"/images/present_day.jpg"}
                alt="present_day"
                width={300}
                height={180}
                priority
              />
            </div>
            <p>
              The institution in Poonch City has grown to be the premier
              institution in the area with around 2500 children studying there.
              In response to the ongoing needs of the local community, new
              institutions are inaugurated annually in various rural areas,
              ensuring the quality education remains accessible to all.
            </p>
          </div>

          <div className="right_column">
            <div className="frequency_card">
              <h3>Growth Phase</h3>
              <h4 className="title">Expansion & Impact</h4>
              <p className="content">
                The number of skilled and dedicated educators from Kerala has
                significantly increased. Supporting the growth of a vibrant
                network of educational institutions, an energetic team is
                devoted to employing creative teaching methods aimed at
                nurturing talent within the unique landscape of rural India.
              </p>
            </div>

            <div className="frequency_card">
              <h4 className="title">Academic Excellence</h4>
              <p className="content">
                An academic system, carefully designed and developed by
                experienced seniors within the team, has become a cause to shape
                a platform as YES India Foundation.
              </p>
            </div>

            <div className="frequency_card">
              <h3>Present Day</h3>
              <h4 className="title">Continuous Growth</h4>
              <p className="content">
                Today, YES India Foundation continues its mission of providing
                quality education across rural India, combining traditional
                values with modern technology, and ensuring every child has
                access to transformative educational opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;