
import React from "react";
import { sildeImg1, sildeImg2 } from "../utils/helper";

const CustomSlider = () => {
    return (
        <section id="overview" className="bg-[#1C2430] ">
            <div className="overflow-hidden mx-auto max-w-[1920px]">
                <div className="flex slider-left">
                    {sildeImg1.map((object, value) => (
                        <img
                            key={value}
                            src={object}
                            alt="silder"
                            className="  w-[220px] sm:w-[320px]  h-[220px] sm:h-[320px] object-cover pointer-events-none" />
                    ))}
                </div>
                <div className="flex slider-right">
                    {sildeImg2.map((object, value) => (
                        <img
                            key={value}
                            src={object}
                            alt="silder"
                            className="  w-[220px] sm:w-[320px]  h-[220px] sm:h-[320px] object-cover pointer-events-none" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomSlider;
