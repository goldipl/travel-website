import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import img01 from '@/public/images/swiper/swiper-image01.jpg'
import img02 from '@/public/images/swiper/swiper-image02.jpg'
import img03 from '@/public/images/swiper/swiper-image03.jpg'
import img04 from '@/public/images/swiper/swiper-image04.jpg'
import img05 from '@/public/images/swiper/swiper-image05.jpg'
import img06 from '@/public/images/swiper/swiper-image06.jpg'
import img07 from '@/public/images/swiper/swiper-image07.jpg'
import img08 from '@/public/images/swiper/swiper-image08.jpg'

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <img src={img01.src} alt="img" className='select-none'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img02.src} alt="img" className='select-none'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img03.src} alt="img" className='select-none'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img04.src} alt="img" className='select-none'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img05.src} alt="img" className='select-none'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img06.src} alt="img" className='select-none'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img07.src} alt="img" className='select-none'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img08.src} alt="img" className='select-none'/>
        </SwiperSlide>
    </Swiper>
  );
};