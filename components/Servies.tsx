import React from 'react';
import { Card } from '@nextui-org/react';

const ServicesSection = () => {
    return (
        <div className="flex flex-col items-center gap-20 w-full max-w-6xl px-4 py-8 mx-auto mb-10">
            <div className="flex flex-col items-center gap-8 w-auto">
                <Card className="bg-violet-950 border border-violet-900 rounded-3xl p-6 w-full">
                    <p className="text-center text-violet-100 text-xl font-medium">OUR SERVICES</p>
                </Card>
                <h2 className="text-center text-3xl font-bold">WHAT WE DO?</h2>
            </div>
            <div className="grid grid-cols-3 gap-8 p-8">
                {/* Card 1 */}
                <Card className="bg-white/opacity-10 rounded-xl border border-slate-600/opacity-20 p-8 flex flex-col justify-center items-center">
                    <div className="text-xl font-medium uppercase">Marketing Solutions</div>
                    <div className="w-44 h-44 py-10 flex justify-center items-center">
                        <img src="../marketing.svg" alt="Vision" className="w-48 h-48" />
                    </div>
                    <div className="text-purple-300 text-base font-normal">
                        Digital Marketing, Marketing Strategy, Growth Hacking, Market Research, Social Media Management
                    </div>
                </Card>

                {/* Card 2 */}
                <Card className="bg-white/opacity-10 rounded-xl border border-slate-600/opacity-20 p-8 flex flex-col justify-center items-center">
                    <div className="text-2xl font-medium">Business Development</div>
                    <div className="w-44 h-44 py-10 flex justify-center items-center">
                        <img src="../dev.svg" alt="Vision" className="w-24 h-24" />
                    </div>
                    <div className="text-purple-300 text-base font-normal">
                        Business Intelligence, Business Strategy, Localization, Project Management
                    </div>
                </Card>

                {/* Card 3 */}
                <Card className="bg-white/opacity-10 rounded-xl border border-slate-600/opacity-20 p-8 flex flex-col justify-center items-center">
                    <div className="text-xl font-medium uppercase">PR & Communications</div>
                    <div className="w-44 h-44 py-10 flex justify-center items-center">
                        <img src="../Build a community.svg" alt="Vision" className="w-48 h-48" />
                    </div>
                    <div className="text-purple-300 text-xl font-medium">
                        Media Relations, Press Releases, Internal Communications
                    </div>
                </Card>

                {/* Card 4 */}
                <Card className="bg-white/opacity-10 rounded-xl border border-slate-600/opacity-20 p-8 flex flex-col justify-center items-center">
                    <div className=" text-xl font-medium">Creative & Innovative Solutions</div>
                    <div className="w-44 h-44 py-10 flex justify-center items-center">
                        <img src="../Augmented reality.svg" alt="Vision" className="w-48 h-48" />
                    </div>
                    <div className="text-purple-300 text-xl font-medium">
                        Branding, Gamification, 3D Visualization, AR Solutions, Creative Campaigns
                    </div>
                </Card>

                {/* Card 5 */}
                <Card className="bg-white/opacity-10 rounded-xl border border-slate-600/opacity-20 p-8 flex flex-col justify-center items-center">
                    <div className="text-xl font-medium">Pop-Ups & Activations</div>
                    <div className="w-44 h-44 py-10 flex justify-center items-center">
                        <img src="../Project planning.svg" alt="Vision" className="w-48 h-48" />
                    </div>
                    <div className="text-purple-300 text-xl font-medium">
                        Planning, Development, Operations, Sponsorships, Execution
                    </div>
                </Card>

                {/* Card 6 */}
                <Card className="bg-white/opacity-10 rounded-xl border border-slate-600/opacity-20 p-8 flex flex-col justify-center items-center">
                    <div className="text-white text-xl font-medium">Production House</div>
                    <div className="w-44 h-44 py-10 flex justify-center items-center">
                        <img src="../Production.svg" alt="Vision" className="w-48 h-48" />
                    </div>
                    <div className="text-purple-300 text-xl font-medium">
                        Photography, Videography, Advertisement, Motion Graphics
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ServicesSection;

