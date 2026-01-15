// "use client";

// import Image from "next/image";
// import "./GalleryCarousal.scss";
// import { images } from "@/utils/galleryImages";

// const GalleryGrid = () => {
//   return (
//     <div className="collage-container">
//       {images.map(({ id, src, alt }, index) => (
//         <div 
//           key={id} 
//           className={`photo-item item-${index + 1}`}
//         >
//           <Image
//             src={src}
//             alt={alt}
//             fill
//             sizes="(max-width: 600px) 50vw, (max-width: 1024px) 50vw, 25vw"
//             className="photo"
//             // Next.js handles the loading optimization automatically
//             priority={index < 6} 
//             loading={index < 6 ? "eager" : "lazy"}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GalleryGrid;


"use client";

import { useState } from "react";
import Image from "next/image";
import "./GalleryCarousal.scss";
import { images } from "@/utils/galleryImages";

const GalleryGrid = () => {
  const BATCH_SIZE = 16;
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + BATCH_SIZE);
      setIsLoading(false);
    }, 800);
  };

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <section className="gallery-section">
      <div className="masonry-container">
        {visibleImages.map(({ id, src, alt }, index) => (
          <div 
            key={id} 
            className="masonry-item fade-up"
            style={{ animationDelay: `${(index % BATCH_SIZE) * 0.1}s` }}
          >
            <div className="image-wrapper">
              <Image
                src={src}
                alt={alt}
                width={500}
                height={700}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="photo"
                priority={index < 4}
              />
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="load-more-container">
          <button 
            onClick={handleLoadMore} 
            className={`view-more-btn ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? <span className="spinner"></span> : "View More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;