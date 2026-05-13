import React from 'react';
import DestinationCard from './DestinationCard';
import Link from 'next/link';

const HomeCard = async () => {
    const res = await fetch('http://localhost:5000/destinations', {
        cache: 'no-store'
    });

    const destinations = await res.json();

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            
            {/* Heading & Description */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Popular Destinations
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl">
                        Explore our handpicked destinations loved by travelers around the world. 
                        Start your next adventure today.
                    </p>
                </div>

                {/* View All Button */}
                <Link
                    href="/destinations"
                    className="mt-6 md:mt-0 group flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold transition"
                >
                    View All Destinations
                    <span className="group-hover:translate-x-1 transition">→</span>
                </Link>
            </div>

            {/* Destinations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.slice(0, 9).map((dest, index) => (
                    <DestinationCard 
                        key={dest._id} 
                        dest={dest} 
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeCard;