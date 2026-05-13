'use client';

import {
  Button,
  Select,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
} from '@heroui/react';

import React from 'react';

const DestinationsPage = () => {

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log('New Destination:', destination);
    const res = await fetch('http://localhost:5000/destinations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(destination)
    })

    const data = await res.json();
    console.log('Response from server:', data);
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-sky-50 py-14 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-[32px] overflow-hidden border border-gray-100">

        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-sky-500 px-10 py-12">
          <h1 className="text-4xl font-bold text-white">
            Add New Destination
          </h1>
          <p className="text-cyan-100 mt-3 text-lg">
            Create and manage beautiful travel destinations.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="p-8 md:p-12 space-y-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Destination Name */}
            <TextField name="destinationName" isRequired className="md:col-span-2">
              <Label className="mb-2 block text-sm font-semibold text-gray-700">
                Destination Name
              </Label>
              <Input
                placeholder="Bali Paradise"
                className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-base focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all"
              />
              <FieldError />
            </TextField>

            {/* Country */}
            <TextField name="country" isRequired>
              <Label className="mb-2 block text-sm font-semibold text-gray-700">
                Country
              </Label>
              <Input
                placeholder="Indonesia"
                className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-base focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all"
              />
              <FieldError />
            </TextField>

            {/* Category */}
            <div className="space-y-2">
              <Label className="block text-sm font-semibold text-gray-700">
                Category
              </Label>

              <Select name="category" placeholder="Select category">
                <Button className="w-full h-14 rounded-2xl border border-gray-300 bg-white px-5 text-left text-base text-gray-700 shadow-sm hover:border-cyan-500 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all flex items-center justify-between">
                  <Select.Value />
                  <Select.Indicator />
                </Button>

                <Select.Popover className="rounded-2xl border border-gray-200 bg-white shadow-2xl p-2 mt-2">
                  <ListBox className="space-y-1 max-h-80 overflow-auto">
                    {["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"].map((cat) => (
                      <ListBox.Item
                        key={cat}
                        id={cat}
                        className="rounded-xl px-5 py-3 hover:bg-cyan-50 active:bg-cyan-100 cursor-pointer text-gray-700 transition-colors"
                      >
                        {cat}
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label className="mb-2 block text-sm font-semibold text-gray-700">
                Price (USD)
              </Label>
              <Input
                type="number"
                placeholder="1299"
                className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-base focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all"
              />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label className="mb-2 block text-sm font-semibold text-gray-700">
                Duration
              </Label>
              <Input
                placeholder="7 Days / 6 Nights"
                className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-base focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all"
              />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <TextField name="departureDate" type="date" isRequired className="md:col-span-2">
              <Label className="mb-2 block text-sm font-semibold text-gray-700">
                Departure Date
              </Label>
              <Input
                type="date"
                className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-base focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all"
              />
              <FieldError />
            </TextField>

            {/* Image URL */}
            <TextField name="imageUrl" isRequired className="md:col-span-2">
              <Label className="mb-2 block text-sm font-semibold text-gray-700">
                Image URL
              </Label>
              <Input
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-base focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all"
              />
              <FieldError />
            </TextField>

            {/* Description */}
            <TextField name="description" isRequired className="md:col-span-2">
              <Label className="mb-2 block text-sm font-semibold text-gray-700">
                Description
              </Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="w-full min-h-[180px] rounded-2xl border border-gray-300 p-5 text-base focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all resize-y"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-lg font-semibold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-6"
          >
            Add Destination
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DestinationsPage;