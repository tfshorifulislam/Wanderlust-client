import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { CalendarDays, Ticket } from "lucide-react";
import { BookingDeteleOp } from "@/components/BookingDeleteOp";

const BookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    //server side token access system
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    // Fetch bookings
    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }

    });

    const data = await res.json();

    const bookings = Array.isArray(data) ? data : data ? [data] : [];
    console.log(bookings)
    return (
        <section className="min-h-screen bg-[#f7f8fa] py-10 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                        My Bookings
                    </h1>

                    <p className="text-gray-500 mt-2 text-base">
                        Manage and view your upcoming travel plans
                    </p>
                </div>

                {/* Cards */}
                <div className="space-y-6">
                    {bookings.length > 0 ? (
                        bookings.map((booking, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm"
                            >
                                {/* Image */}
                                <div className="relative md:w-[340px]  shrink-0">
                                    <Image
                                        src={
                                            booking.imageUrl

                                        }
                                        alt={booking.destinationName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div>
                                        {/* Badge */}
                                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                                            <span className="w-2 h-2 rounded-full bg-green-600"></span>
                                            Confirmed
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-3xl font-bold text-gray-900 mb-5">
                                            {booking.destinationName || "Bali Paradise"}
                                        </h2>

                                        {/* Info */}
                                        <div className="space-y-3 text-gray-600">
                                            <div className="flex items-center gap-2 text-[15px]">
                                                <CalendarDays size={17} />
                                                <p>
                                                    Departure: {new Date(booking.depertureDate).toLocaleDateString(
                                                        "en-GB",
                                                        {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        }
                                                    )}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-2 text-[15px]">
                                                <Ticket size={17} />
                                                <p>
                                                    Booking ID: {booking._id}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom */}
                                    <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                                        {/* Price */}
                                        <h3 className="text-4xl font-bold text-cyan-600">
                                            ${booking.price || "1299"}
                                        </h3>

                                        {/* Buttons */}
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <BookingDeteleOp booking={booking} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white border border-dashed border-gray-300 rounded-2xl py-20 text-center">
                            <h3 className="text-2xl font-semibold text-gray-700">
                                No bookings found
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Your upcoming bookings will appear here.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BookingsPage;