import { Card } from '@nextui-org/react';

const Aboutussection = () => {
  return (
    <div id="about-us" className="flex flex-col items-center gap-20 w-full max-w-6xl px-4 py-8 mx-auto mb-10">
      <div className="flex flex-col items-center gap-8 w-auto">
        <Card className="bg-violet-950 border border-violet-900 rounded-3xl p-6 w-full">
          <p className="text-center text-violet-100 text-xl font-medium">WHO WE ARE?</p>
        </Card>
        <h2 className="text-center text-3xl font-bold">Find out more about us</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <Card className="bg-white bg-opacity-10 border border-slate-600 border-opacity-20 rounded-xl p-8 flex flex-col items-center">
          <div className="w-44 h-44 py-10 flex justify-center items-center">
            <img src="../clients.svg" alt="Vision" className="w-24 h-24" />
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-center text-xl font-medium uppercase">Our Vision</h1>
            <h4 className="text-center text-purple-300 text-xl font-normal leading-loose">
              Empower our clients with marketing strategies that not only inspire but also drive tangible results.
              We aim to be a beacon of innovation and excellence in the marketing industry, redefining standards and setting new benchmarks.
              Through collaboration, integrity, and a relentless pursuit of excellence, we aspire to be the trusted partner businesses turn to for success in the digital age.
            </h4>
          </div>
        </Card>

        <div className="flex flex-col gap-8">
          <Card className="bg-white bg-opacity-10 border border-slate-600 border-opacity-20 rounded-xl p-8 flex items-center w-full">
            <div className="flex-shrink-0">
              <img src="../goal.svg" alt="Goal" className="w-24 h-24 mr-4" />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-xl font-medium">Our Goal</h1>
              <h4 className="text-purple-300 text-xl font-normal leading-loose">
                Build long-term relationships founded on trust and mutual success. Our dedication is to help clients grow and reach their full potential, striving to be a trusted partner by offering support, guidance, and innovative solutions every step of the way.
              </h4>
            </div>
          </Card>

          <Card className="bg-white bg-opacity-10 border border-slate-600 border-opacity-20 rounded-xl p-8 flex items-center w-full">
            <div className="flex-shrink-0">
              <img src="../mission.svg" alt="Mission" className="w-24 h-24 mr-4" />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-xl font-medium">Our Mission</h1>
              <h4 className="text-purple-300 text-xl font-normal leading-loose">
                Help our clients achieve their goals by providing high-quality, tailored services.
                We use the best methods and techniques to deliver exceptional results, ensuring that each client receives personalized solutions that cater to their unique needs.
                We are committed to excellence in every project, striving to exceed expectations and deliver outstanding performance.
              </h4>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Aboutussection;
