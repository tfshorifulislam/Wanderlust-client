import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UpdateModal } from '@/components/Modal';
import { Button } from '@heroui/react';

const DestinationsDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        cache: 'no-store'
    });

    const destination = await res.json();

    return (
        <div className="min-h-screen bg-white">
            {/* Top Navigation */}
            <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b">
                <Link
                    href="/destinations"
                    className="flex items-center gap-2 text-gray-700 hover:text-cyan-600 transition"
                >
                    ← Back to Destinations
                </Link>

                <div className="flex items-center gap-3">
                       <UpdateModal destination={destination} />
                    <Button className="flex items-center gap-2 px-5 py-2 text-red-600 rounded-xl hover:bg-red-50 transition" variant="outline">
                        🗑 Cancel
                    </Button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[550px] max-w-6xl mx-auto">
                <Image
                    src={destination.imageUrl}
                    alt={destination.destinationName}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Content */}
                    <div className="lg:col-span-8">
                        <div className="flex items-center gap-2 text-gray-500 mb-2">
                            📍 {destination.country}
                        </div>

                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            {destination.destinationName}
                        </h1>

                        <div className="flex items-center gap-6 mb-8">
                            <div className="flex items-center gap-1">
                                <span className="text-2xl">⭐</span>
                                <span className="font-semibold text-lg">4.9</span>
                                <span className="text-gray-500">(234 reviews)</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <span>🗓</span>
                                <span className="font-medium">{destination.duration}</span>
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {destination.description}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Highlights</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                                {[
                                    "Luxury beachfront accommodation",
                                    "Visit Uluwatu Temple at sunset",
                                    "Traditional Balinese spa treatment",
                                    "Private beach dinner experience",
                                    "Sunrise trek to Mount Batur",
                                    "Snorkeling in crystal clear waters"
                                ].map((highlight, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="mt-1 text-green-500 text-xl">✓</div>
                                        <p className="text-gray-700">{highlight}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Booking Card */}
                    <div className="lg:col-span-4">
                        <div className="bg-white border border-gray-200 rounded-3xl p-8 sticky top-8 shadow-lg">
                            <div className="mb-6">
                                <p className="text-gray-500 text-sm">Starting from</p>
                                <p className="text-4xl font-bold text-cyan-600 mt-1">
                                    ${destination.price}
                                    <span className="text-base font-normal text-gray-500">/person</span>
                                </p>
                            </div>

                            {/* Date */}
                            <div className="mb-6">
                                <p className="text-sm text-gray-500 mb-2">Departure Date</p>
                                <div className="border border-gray-300 rounded-2xl px-4 py-3 text-lg font-medium">
                                    {new Date(destination.departureDate).toLocaleDateString('en-US', {
                                        month: 'numeric',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </div>
                            </div>

                            {/* Book Now Button */}
                            <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 rounded-2xl text-lg transition-all duration-200 mb-6">
                                Book Now →
                            </Button>

                            {/* Benefits */}
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-500">✓</span>
                                    Free cancellation up to 7 days
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-500">✓</span>
                                    Travel insurance included
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-500">✓</span>
                                    24/7 customer support
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationsDetailsPage;