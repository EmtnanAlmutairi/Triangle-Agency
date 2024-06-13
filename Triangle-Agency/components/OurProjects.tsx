import React from 'react';
import { Card } from '@nextui-org/react';
import ImageSlider from './ImageSlider';
const OurProjects = () => {
    return (
        <div className="flex flex-col items-center gap-20 w-full max-w-6xl px-4 py-8 mx-auto mb-10">
            <div className="flex flex-col items-center gap-8 w-auto">
                <Card className="bg-violet-950 border border-violet-900 rounded-3xl p-6 w-auto">
                    <p className="text-center text-violet-100 text-xl font-medium">OUR PROJECTS</p>
                </Card>
                <div className="text-center text text-2xl font-normal font-['Monda']">At Triangle Agency, we take pride in showcasing a diverse portfolio of innovative and impactful projects that exemplify our commitment to excellence and our ability to deliver results that surpass client expectations.<br/></div>
            </div>
            <ImageSlider/>
        </div>
    );
};

export default OurProjects;