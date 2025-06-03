import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { images1, images2 } from '../utils/helper';

const Silder = () => {
    return (
        <section className="bg-[#1C2430] mx-auto ">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: false,
                }}
                speed={5000}>
                {images1.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img src={img} alt="silder"  />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                speed={5000}>
                {images2.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img src={img} alt="silder" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Silder;
