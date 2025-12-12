import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="wrapper_section">

        <div className="feedback_banner_container">
  <div className="feedback_image_wrapper">
    <Image
      src="/feedback/feedback_banner_bg.png"
      alt="feedback_bg"
      fill
      className="feedback_image"
      priority
    />

    {/* Black Overlay */}
    <div className="feedback_overlay"></div>
  </div>

  {/* Content overlay */}
  <div className="feedback_content">
    <div className="quote_icon">
  <svg
                width="100"
                height="100"
                viewBox="0 0 217 155"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M217 96.875C217 128.989 190.989 155 158.875 155H155C146.427 155 139.5 148.073 139.5 139.5C139.5 130.927 146.427 124 155 124H158.875C173.842 124 186 111.842 186 96.875V93H155C137.902 93 124 79.0984 124 62V31C124 13.9016 137.902 0 155 0H186C203.098 0 217 13.9016 217 31V96.875ZM93 96.875C93 128.989 66.9891 155 34.875 155H31C22.4266 155 15.5 148.073 15.5 139.5C15.5 130.927 22.4266 124 31 124H34.875C49.8422 124 62 111.842 62 96.875V93H31C13.9016 93 0 79.0984 0 62V31C0 13.9016 13.9016 0 31 0H62C79.0984 0 93 13.9016 93 31V96.875Z"
                  fill="#2A1B63"
                />
              </svg>
    </div>
    <h1>Voices of Praise:</h1>
    <p>Feedback from Noted Personalities</p>
  </div>
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
                      src="/feedback/pir-nisar.png"
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