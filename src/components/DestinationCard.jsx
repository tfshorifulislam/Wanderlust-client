import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DestinationCard = ({ dest }) => {
    return (
        <div
            key={dest._id || dest.destinationName}
            className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 group"
        >
            {/* Image */}
            <div className="relative h-64">
                <Image
                    src={dest.imageUrl}
                    alt={dest.destinationName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 text-gray-800 text-sm font-semibold px-3 py-1 rounded-xl flex items-center gap-1 shadow">
                    4.5 <span className="text-yellow-500">★</span>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
                    📍 {dest.country}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {dest.destinationName}
                </h3>

                <div className="flex justify-between items-end mb-5">
                    <div>
                        <span className="text-3xl font-bold text-gray-900">
                            ${dest.price}
                        </span>
                        <span className="text-gray-500 text-sm">/person</span>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-600">{dest.duration}</p>
                    </div>
                </div>

                {/* Book Now Button */}
                <Link
                    href={`/destinations/${dest._id}`}
                    className="block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3.5 rounded-2xl transition-all duration-200 text-sm tracking-wider"
                >
                    BOOK NOW →
                </Link>
            </div>
        </div>
    );
};

export default DestinationCard;