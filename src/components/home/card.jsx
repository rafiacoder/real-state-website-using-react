import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

function Card() {
    return (
        <section className="bg-transparent flex flex-col lg:flex-row items-center lg:items-start justify-between 
         bg-opacity-50 p-6 rounded-lg max-w-4xl mx-auto gap-6">


            {/* Right Section - 2/3 on large screens, full on mobile */}
            <div className="w-full lg:w-2/3 text-white text-center lg:text-left">
                <h2 className="text-5xl font-bold mb-2">Villa on Hollywood Boulevard</h2>
                <p className="mb-4 text-3xl text-white">
                    The very best waterfront location in Harbor Islands complete with private dock and amazing water.
                </p>
                
                {/* Price + Button Responsive */}
                <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                    <span className="text-xl font-semibold text-green-600">$740,000</span>
                    <button className="w-full sm:w-auto bg-[#37353E] text-white px-6 py-2 rounded-md hover:bg-[#5a4545] transition">
                        Know More
                    </button>
                </div>
            </div>

        </section>
    );
}

export default Card;
