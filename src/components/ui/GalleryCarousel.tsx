"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { carouselImages } from "@/utils/carouselImages";
// 1. Import the generated images array


const GalleryCarousel = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [_, setInit] = useState(false);

  // Note: Local "images" array removed to use the imported one

  return (
    <section className="gallery_section">
      <div className="gallery_wrapper">
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop={carouselImages.length > 3} // Only loop if there are enough images
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setInit(true);
          }}
          breakpoints={{
            320: { slidesPerView: 1.4, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="premium_swiper"
        >
          {/* 2. Map through the dynamic images array */}
          {carouselImages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="gallery_slide">
                <div className="image_container">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="gallery_image"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="gallery_bottom_nav">
          <button ref={prevRef} className="bottom_nav_btn" aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <button ref={nextRef} className="bottom_nav_btn" aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;


