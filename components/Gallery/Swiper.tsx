import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img01 from "@/public/images/swiper/swiper-image01.jpg";
import img02 from "@/public/images/swiper/swiper-image02.jpg";
import img03 from "@/public/images/swiper/swiper-image03.jpg";
import img04 from "@/public/images/swiper/swiper-image04.jpg";
import img05 from "@/public/images/swiper/swiper-image05.jpg";
import img06 from "@/public/images/swiper/swiper-image06.jpg";
import img07 from "@/public/images/swiper/swiper-image07.jpg";
import img08 from "@/public/images/swiper/swiper-image08.jpg";

export default () => {
  return (
    <Swiper
      className="xl:!pl-16"
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 800px
        800: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide>
        <img
          src={img01.src}
          alt="img"
          className="select-none rounded-3xl h-[240px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img02.src}
          alt="img"
          className="select-none rounded-3xl h-[240px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img03.src}
          alt="img"
          className="select-none rounded-3xl h-[240px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img04.src}
          alt="img"
          className="select-none rounded-3xl h-[240px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img05.src}
          alt="img"
          className="select-none rounded-3xl h-[240px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img06.src}
          alt="img"
          className="select-none rounded-3xl h-[240px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img07.src}
          alt="img"
          className="select-none rounded-3xl h-[240px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img08.src}
          alt="img"
          className="select-none rounded-3xl h-[240px]"
        />
      </SwiperSlide>
    </Swiper>
  );
};
