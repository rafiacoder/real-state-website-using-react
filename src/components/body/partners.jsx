// src/components/Partners.jsx
import React from 'react';

const Partners = () => {
  return (
    <div className="bg-white py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative angled background */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-[#715A5A] transform -skew-y-3 origin-bottom-left z-0"
        style={{ clipPath: 'polygon(0 80%, 100% 100%, 100% 0, 0 0)' }}
      ></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Section Header */}
        <h3 className="text-gray-500 font-medium text-base sm:text-lg mb-2">
          Our
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          Partners
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8 sm:mb-12">
          We are honored to have these amazing partners.
        </p>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          {[
            { src: 'adobe home.png', alt: 'Adobe Homes Logo' },
            { src: 'aa builders.png', alt: 'AA Builders Logo' },
            { src: 'the capital.png', alt: 'The Capital Logo' },
            { src: 'rosewood.png', alt: 'Rosewood Homes Real Estate Logo' },
            { src: 'ironwood.png', alt: 'Ironwood Apartments Logo' },
          ].map((partner, index) => (
            <div key={index} className="flex justify-center items-center p-2 sm:p-4">
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
