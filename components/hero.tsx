import React from "react";
import { Button } from "@nextui-org/react";

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-20 w-full">
            <div className="relative w-full h-[1140px] bg-cover bg-right">
                <img src='/Bg.svg' className="absolute inset-0 w-full h-full object-cover object-right p-0 m-0" alt="Background" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 text-center px-6 md:px-10 lg:px-20">
                    <h1 className="text-6xl md:text-8xl font-bold font-montserrat">Triangle Agency</h1>
                    <p className="text-base md:text-xl font-normal font-abel leading-[28px] md:leading-[33px] tracking-wide">
                        We transform innovative marketing strategies into powerful results. Our dedicated team works tirelessly to empower clients worldwide, transcending boundaries and inspiring audiences with creativity and strategic insights. We are committed to being the catalyst for your success, delivering unmatched creativity, strategic direction, and measurable ROI.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <a href="mailto:Info@triangle.sa" className="w-full md:w-auto">
                            <Button className="w-full md:w-auto border border-white font-medium bg-black text-white">
                                CONTACT US
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

