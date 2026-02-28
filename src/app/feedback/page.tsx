import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="feedback_banner_container">
        <div>
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
                d="M18.833 27.1667C18.5274 27.4722 18.1385 27.625 17.6663 27.625C17.1941 27.625 16.8052 27.4722 16.4996 27.1667L9.33298 19.9584C9.02743 19.6528 8.78465 19.2989 8.60465 18.8967C8.42465 18.4945 8.33409 18.0706 8.33298 17.625L8.33298 6.45836L5.20798 9.58336C4.87465 9.91669 4.47909 10.0834 4.02132 10.0834C3.56354 10.0834 3.16743 9.91669 2.83298 9.58336C2.49854 9.25003 2.33187 8.86114 2.33298 8.41669C2.33409 7.97225 2.50076 7.58336 2.83298 7.25003L8.83298 1.20836C8.99965 1.04169 9.18021 0.923914 9.37465 0.855026C9.56909 0.786137 9.77743 0.751137 9.99965 0.750026C10.2219 0.748915 10.4302 0.783914 10.6247 0.855026C10.8191 0.926137 10.9996 1.04391 11.1663 1.20836L17.1663 7.16669C17.4996 7.50003 17.6663 7.89614 17.6663 8.35503C17.6663 8.81391 17.4996 9.20947 17.1663 9.54169C16.833 9.87392 16.4374 10.0478 15.9796 10.0634C15.5219 10.0789 15.1258 9.91891 14.7913 9.58336L11.6663 6.45836L11.6663 17.6667L18.833 24.8334C19.1385 25.1389 19.2913 25.5278 19.2913 26C19.2913 26.4722 19.1385 26.8611 18.833 27.1667ZM1.16632 27.2084C0.832982 26.875 0.672983 26.4795 0.686316 26.0217C0.69965 25.5639 0.859649 25.1817 1.16632 24.875L4.12465 21.875C4.45798 21.5417 4.85409 21.375 5.31298 21.375C5.77187 21.375 6.16743 21.5417 6.49965 21.875C6.83187 22.2084 6.99187 22.6045 6.97965 23.0634C6.96743 23.5222 6.79354 23.9178 6.45798 24.25L3.49965 27.2084C3.19409 27.5139 2.80521 27.6667 2.33298 27.6667C1.86076 27.6667 1.47187 27.5139 1.16632 27.2084Z"
                fill="white"
              />
            </svg>
          </div>

        </div>
        {/* ====== Heading Section ====== */}
        <div className="banner_content">
          <h1>
            Voices of Praise: <br />
            Feedback from <span>Noted Personalities</span>
          </h1>
        </div>

        {/* ====== Floating Icons ====== */}


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
      </section>


      <section className="wrapper_section">
        <div className="feedback_list_container">
          {/* Row 1 */}
          <div className="feedback_group">
            <div className="feedback_card tall left">
              <p className="feedback_text">
                Our locality, Jammu and Kashmir is a challenging hilly region,
                where reaching to remote communities is difficult. Economically
                and educationally, these areas remain underdeveloped. So, here
                comes the importance of organizations which can satisfy the
                needs of people. YES India Foundation is one of such
                organizations which proved very successful in our region. I have
                seen for the last 15 years, they have made successful
                interventions in the system here as I have been invited in many
                programs as guest in the title, the principal and professor of
                Degree College Poonch. So, their main focus is to remain on the
                dimension of creating scientific temperament among younger
                generation and contribute towards the promotion of different
                culture and civilizations here. My opinion about this
                organization is that it has done a wonderful job in this
                challenging area.
              </p>
              <div className="voice_profile">
                <div className="profile_img">
                  <Image
                    src="/feedback/prof_seyd-1.jpg"
                    alt="Prof. Seyd Musarath Hussain Shah"
                    fill
                    className="profile_image"
                  />
                </div>
                <div className="profile_info">
                  <h5>Prof. Seyd Musarath Hussain Shah</h5>
                  <p>Principal Govt. Degree College Mandi</p>
                </div>
              </div>
            </div>

            <div className="stacked_right">
              <div className="feedback_card small">
                <p className="feedback_text">
                  YES India Foundation was established in 2007 under the leadership of its Managing Director Mr.Shoukat Bukhari. He journeyed from Kerala known as "God's Own Country," to the hills of Jammu and Kashmir, recognizing the challenges and backwardness faced by the region.Driven by a desire to make a meaningful impact, he aimed to help this community so they can compete with the people of cities like Delhi and realized that education was the key that Madras, He could truly cause to happen this transformative change So, he visited the far-flung and backward areas of lammu and Kashmir and addressed the people to discuss possible solutions. He reminded them of Darwin's theory-- survival of the fittest and the struggle for existence. And he opened number of schools and other educational institutions.
                </p>
                <div className="voice_profile">
                  <div className="profile_img">
                    <Image
                      src="/feedback/dr-shameem1.jpg"
                      alt="Dr. Shameem Ahmed Bandy"
                      fill
                      className="profile_image"
                    />
                  </div>
                  <div className="profile_info">
                    <h5>Dr. Shameem Ahmed Bandy</h5>
                    <p>Proffessor Govt. Degree College</p>
                  </div>
                </div>
              </div>
              <div className="feedback_card small">
                <p className="feedback_text">
                  It is a reality that Shaukat Sir started lot of educational institutions not only in Poonch but also across various regions of Jammu and Kashmir, Before the interference of Shoukat Sir with Waqf Board, Poonch, we have school and madrassa in this institution. However, the lack of stable management posed significant challenges, hindering the growth and proper functioning of these educational facilities. Through his invaluable efforts and facilitation, he made the institution a true asset to society.YES India Foundation is now operational in 8 states across India, offering free education to students from financially disadvantaged backgrounds. It includes a unique system where selected 8th-grade graduates are provided free education, along with free food and accommodation, to prepare them to serve society.
                </p>
                <div className="voice_profile">
                  <div className="profile_img">
                    <Image
                      src="/feedback/pir-nisar.jpg"
                      alt="Pir Nisar Hussain Shah"
                      fill
                      className="profile_image"
                    />
                  </div>
                  <div className="profile_info">
                    <h5>Pir Nisar Hussain Shah</h5>
                    <p>General Secretary Hazrat Sain Baba Miran &</p>
                    <p>Dervish Ghulam Qadir Darga sharief</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="feedback_group reverse">
            <div className="stacked_left">
              <div className="feedback_card small">
                <p className="feedback_text">
                  At present, YES India Schools are functioning in various regions of Jammu & Kashmir and other states across India. In the initial days of Janab Shoukat Sab’s involvement, Razaul Uloom Islamia Higher Secondary School was operating as a middle school. Under his visionary leadership and guidance, the school transitioned from a middle school to a high school and eventually earned recognition as a higher secondary school. The educational system of the school is commendable, as many alumni have gone on to achieve significant success, including securing prestigious positions such as civil servants. The primary focus of YES India Schools is to prioritize creative and exploratory learning over mugging up learning.
                </p>
                <div className="voice_profile">
                  <div className="profile_img">
                    <Image
                      src="/feedback/mufthi.jpg"
                      alt="Hazrath Moulana"
                      fill
                      className="profile_image"
                    />
                  </div>
                  <div className="profile_info">
                    <h5>Hazrath Moulana</h5>
                    <h5>Mufthi Farooque Hussain Misbahi</h5>
                    <p>Mufti Poonch</p>
                  </div>
                </div>
              </div>
              <div className="feedback_card small">
                <p className="feedback_text">
                  These are my words, inspired by the remarkable vision and impact of YES India Foundation. It is a prestigious foundation, led by Shoukat Sab and his dedicated team. The success of the Foundation is a direct reflection of his sincerity, discipline and hard work. He remained deeply focused on his goals without bothering the society’s, people’s and parents’ support. Despite facing numerous struggles, he triumphed, transforming a middle school into a higher secondary school and expanding from one institution to many. He is a great personality as he prioritizes the education of the underprivileged, orphans and the support of widows.
                </p>
                <div className="voice_profile">
                  <div className="profile_img">
                    <Image
                      src="/feedback/shah.jpg"
                      alt="Althaf Hussain Shah"
                      fill
                      className="profile_image"
                    />
                  </div>
                  <div className="profile_info">
                    <h5>Althaf Hussain Shah</h5>
                    <p>Retired Senior Superintendent of Police</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="feedback_card tall right">
              <p className="feedback_text">
                YES India Foundation was established in 2007 and I have had the privilege of staying connected with the Foundation from its very beginning. The objective of the Foundation is to provide quality education in both rural and urban areas, empower poor communities and instill moral values through education and charitable initiatives. No one can deny the tremendous contribution of YES India Foundation in the field of education in Jammu & Kashmir as well as eight other states of India under the visionary leadership of Shoukat Bukhari Sab and his dedicated team. His visionary educational plan has empowered students to compete with their peers across India. A heartfelt thanks to Shoukat Sab and his dedicated team for their invaluable contribution.
              </p>
              <div className="voice_profile">
                <div className="profile_img">
                  <Image
                    src="/feedback/exmla.jpg"
                    alt="Shah Muhammed Tantray"
                    fill
                    className="profile_image"
                  />
                </div>
                <div className="profile_info">
                  <h5>Shah Muhammed Tantray</h5>
                  <p>Former MLA Poonch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;