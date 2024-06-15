import React from 'react';

// Define the type for the clientLogos prop
type ClientLogosProps = {
  clientLogos: string[]; // Assuming clientLogos is an array of image URLs
};

const PreviousClients: React.FC<ClientLogosProps> = ({ clientLogos }) => {
  const renderClientLogos = () => {
    return clientLogos.map((logo, index) => (
      <div key={index} className="w-20 h-20 flex justify-center items-center">
        <img className="w-full h-full object-contain" src={logo} alt={`Client Logo ${index + 1}`} />
      </div>
    ));
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12">
      <h2 className="text-3xl text-center font-normal mb-8">PREVIOUS CLIENTS</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {renderClientLogos()}
      </div>
    </div>
  );
};

const Clients = () => {
  const clientLogos = [
    '/G.svg',
    '/شعار الهيئة العامة للترفيه SVG 2.svg',
    '/Group-1.svg',
    '/شعار موسم جدة – SVG 1.svg',
    '/شعار وزارة الإعلام SVG (2) 2.svg',
    '/شعار وزارة الصحة السعودية – SVG 1.svg',
    '/Gro2.svg',
    '/Group-2.svg',
    '/Group.svg',
    '/w.svg',
    '/شعار موسم الرياض  2021 – SVG 1.svg',
    '/Clip path group-1.svg',
    '/Clip path group-2.svg',
    '/Clip path group.svg',
    '/image 10.svg',
    '/image 11.svg',
    '/image 12.svg',
    '/image 13.svg',  ];

  return (
    <div className="bg-white bg-opacity-10 border border-slate-600 border-opacity-20 rounded-xl p-8 mt-10">
      <PreviousClients clientLogos={clientLogos} />
    </div>
  );
};

export default Clients;

