
import React from "react";
import { images1, images2 } from "../utils/helper";

const Slider = () => {
    return (
        <section id="overview" className="bg-[#1C2430] ">
            <div className="overflow-hidden mx-auto max-w-[1920px]">
                <div className="flex slider-left">
                    {images1.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt="silder"
                            className="  w-[220px] sm:w-[320px]  h-[220px] sm:h-[320px] object-cover" />
                    ))}
                </div>
                <div className="flex slider-right">
                    {images2.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt="silder"
                            className="  w-[220px] sm:w-[320px]  h-[220px] sm:h-[320px] object-cover" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Slider;