'use client'
import { authClient } from '@/lib/auth-client';
import { Button, DateField, Description, Label } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookingCard = ({ destination }) => {
    const { data: session } = authClient.useSession()
    const user = session?.user;
    // console.log('booking user', user)
    const [departureDate, setDepartureDate] = useState(null)

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            destinationId: destination._id,
            destinationName: destination.destinationName,
            price: destination.price,
            imageUrl: destination.imageUrl,
            country: destination.country,
            depertureDate: new Date(departureDate)
        }
        // console.log('booking Data', bookingData)

        const res = await fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        })

        const data = await res.json()
        toast.success(`${destination.destinationName} booked success`)
        console.log(data)
    }

    return (
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
                    <DateField className="w-[256px]" name="date" onChange={setDepartureDate}>
                        <Label>Departure Date</Label>
                        <DateField.Group>
                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        </DateField.Group>
                    </DateField>
                </div>

                {/* Book Now Button */}
                <Button onClick={handleBooking} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 rounded-2xl text-lg transition-all duration-200 mb-6">
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
    );
};

export default BookingCard;