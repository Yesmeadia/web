// utils/galleryImages.ts

const rawImages = [
  "/carousal/carousal_img1.JPG",
  "/carousal/carousal_img2.JPG",
  "/carousal/carousal_img4.jpg",
  "/carousal/carousal_img6.jpeg",
  "/carousal/carousal_img7.jpg",
  "/carousal/carousal_img8.jpg",
  "/carousal/carousal_img9.jpg",
  "/carousal/carousal_img10.jpg",

  "/carousal/gallery/swipermobile3.jpg"
];

export const carouselImages = rawImages.map((src, index) => ({
  id: index + 1,
  src: src,
  alt: `Gallery image ${index + 1}`,
}));