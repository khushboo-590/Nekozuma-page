import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import silder1 from '../assets/images/png/silde1.png';
import silder2 from '../assets/images/png/silder2.png';
import silder3 from '../assets/images/png/silder3.png';
import silder4 from '../assets/images/png/silder4.png';

const images1 = [silder1, silder2, silder3, silder4, silder3, silder4];
const images2 = [silder4, silder3, silder2, silder1, silder2, silder1];

const Silder = () => {
    return (
        <section className="bg-[#1C2430] mx-auto ">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={5}
                slidesPerGroup={1}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: false,  
                }}
                speed={5000}
            >
                {images1.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img src={img} alt={``} className="" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={5}
                slidesPerGroup={1}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true,  
                }}
                speed={5000}
            >
                {images2.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img src={img} alt={``} className="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Silder;
