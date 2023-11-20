import styles from "./slider.module.scss";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });

interface Slide {
  title: string;
  subTitle: string;
  content: string;
  path: string;
}

const slideContent: Slide[] = [
  {
    title: "Пам'ятки КПІ",
    subTitle: "-4 бригада, МРПЗ",
    content: "",
    path: "/slide1.jpg",
  },
  // Add more slide content objects as needed
];

const Slider = () => {
  const [activeButton, setActiveButton] = useState<number | null>(0);
  const [activeSlide, setActiveSlide] = useState<number | null>(0);

  const sliderNav = (index: number) => {
    if (index !== activeButton) {
      // Check if clicked button is different from currently active button
      setActiveButton(index);
      setActiveSlide(index);
    }
  };

  return (
    <section className={`${styles.home} ${rubik.className}`}>
      {slideContent.map((slide, index) => (
        <Image
          key={index}
          src={slide.path}
          alt={`Slide ${index + 1}`}
          fill
          style={{ objectFit: "cover" }}
          className={`${styles.imageSlide} ${
            activeSlide === index ? styles.activeSlide : ""
          }`}
        />
      ))}
      <div className={styles.content}>
        {activeSlide !== null && (
          <>
            <h1 className={styles.title}>
              {slideContent[activeSlide].title}
              <br />
              <span className={styles.span}>
                {slideContent[activeSlide].subTitle}
              </span>
            </h1>
            <p className={styles.contentText}>
              {slideContent[activeSlide].content}
            </p>
          </>
        )}
      </div>
      <div className={styles.sliderNavigation}>
        {slideContent.map((_, index) => (
          <div
            key={index}
            className={`${styles.navBtn} ${
              activeSlide === index ? styles.active : ""
            }`}
            onClick={() => sliderNav(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
