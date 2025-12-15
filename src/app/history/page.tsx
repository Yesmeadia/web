import Image from "next/image";

const History = () => {
  return (
    <>
      <section className="wrapper_section">
        <div className="gpp_banner_container">
          <div className="feedback_image_wrapper">
            <Image
              src={"/images/history_banner.jpg"}
              alt="history_bg"
              fill
              className="feedback_image"
              priority
            />
            <div className="feedback_overlay"></div>
          </div>

          {/* Content overlay */}
          <div className="feedback_content">
            <h1>The Inspiring Journey</h1>
          </div>
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
                    <td>63 Institutions Nationwide</td>
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
                <h2>63</h2>
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