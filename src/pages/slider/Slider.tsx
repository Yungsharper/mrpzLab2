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
  {
    title: "Головний Корпус",
    subTitle: "-by Іван Кошовий",
    content:
      "Перший корпус Київського політехнічного інституту (КПІ) є історичною будівлею, спорудженою у стилі неоренесанс в 1897–1901 роках за проектом архітектора Володимира Ніколаєва. Розташований за адресою проспект Перемоги, 37, Корпус служив основним адміністративним та навчальним приміщенням інституту. Його величний фасад прикрашений декоративними елементами та фресками. Крім навчальних заходів, корпус часто слугує місцем для проведення університетських заходів та свят. Важливим символом КПІ, Головний корпус є не лише історичною пам'яткою, але й визначальним обличчям університету. Це місце, де зустрічається історія і сучасність одного з найпрестижніших технічних вищих навчальних закладів України.",
    path: "/slide2.jpg",
  },
  {
    title: "Пам'ятник Євгена Патона",
    subTitle: "-by Андрій Червоний",
    content:
      "На території Київського Політехнічного Інституту (КПІ) знаходиться пам'ятник видатному українському вченому та винахіднику Євгену Оскаровичу Патону. Цей пам'ятник присвячений видатному інженеру-електротехніку, науковцю і громадському діячу, який вніс величезний внесок у розвиток електросварювання та суднобудівної промисловості.Пам'ятник Євгену Патону був встановлений на території КПІ в 2011 році. Сам пам'ятник представляє собою велику бронзову статую Євгена Патона, який тримає в руках зразок зварювального електрода. Статуя розташована на високому підніжжі, на якому вказано ім'я і прізвище вченого, а також роки його життя.",
    path: "/slide3.jpg",
  },
  {
    title: "Парк Перемоги",
    subTitle: "-by Ангеліна Тимченко",
    content:
      "Парк Перемоги, розташований на території Київського Політехнічного Інституту (КПІ), є популярним місцем для відпочинку та розваг. Він вражає своєю зеленою зоною, створюючи природний оазис серед міського середовища. Здесь можна насолоджуватися красою природи та проводити час активно.Парк пропонує відвідувачам спеціально обладнані майданчики для різноманітних видів спорту, включаючи волейбол, футбол, та баскетбол. Для любителів прогулянок та бігу у парку є алеї та доріжки. Лавки розміщені на всій території, де можна відпочити, почитати чи насолоджуватися природою.",
    path: "/slide4.jpg",
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
