// app/gallery/page.tsx
"use client";

import GalleryCarousel from "@/components/ui/GalleryCarousel";
import GalleryGrid from "@/components/ui/GalleryGrid";
import InstagramReels from "@/components/ui/InstagramReels";



const page = () => {
  return (
    <>
      <section className="gallery_section">
        <GalleryCarousel />
      </section>

      <section className="wrapper_section">
        <div className="gallery_content_wrap">
          <InstagramReels />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
};

export default page;




