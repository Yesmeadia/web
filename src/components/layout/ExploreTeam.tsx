"use client";

import "@/components/layout/layout.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ExploreTeam = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/alumni");
  };

  return (
    <section className="explore_team_section">
      <div className="explore_container">
        <div className="content_grid">
          <div className="text_block">
            {/* <span className="subtitle">Our Organization</span> */}
            <h2>The Team is Here</h2>
            <p>
              In this nationwide educational network, we function as a single 
              cohesive unit within a structured hierarchy—serving as Directors, 
              Managers, and Educators. These positions exist to ensure the 
              seamless operation of our mission. Internally, we respect our 
              professional roles; externally, we are a family.
            </p>
          </div>
          <div className="text_block secondary">
            <p>
              Our members, known individually as <strong>'Yesian'</strong> and 
              collectively as the <strong>'YES Team'</strong>, are led by our 
              visionary founder, <strong>Mr. Shaukath Bukhari</strong>. 
              Out of our 875 members, we highlight those who have 
              sacrificed by working away from their home states to provide 
              round-the-clock service.
            </p>
          </div>
        </div>

        <div className="image_hero_wrapper">
          <div className="image_container">
            <Image
              src="/team_photo.png"
              alt="YES Team group photo"
         width={1400} 
      height={600}
      className="team_image"
      priority
      // This helps Next.js serve the right size to mobile vs desktop
      sizes="(max-width: 768px) 100vw, 1400px"
            />
          </div>
          
          <button className="glass_cta" onClick={handleNavigate}>
            <span>Explore Our Team</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreTeam;