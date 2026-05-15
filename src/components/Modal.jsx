"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Select, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { redirect } from "next/navigation";

export function UpdateModal({ destination }) {

    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());
        // console.log('New Destination:', destination);

        const { data: tokenData } = await authClient.token()
        const res = await fetch(`http://localhost:5000/destinations/${_id}`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${tokenData.token}`
             },
            body: JSON.stringify(destination)
        })

        const data = await res.json();
        // console.log('Response from modal server:', data);
        redirect(`/destinations/${_id}`);
    }

    return (
        <Modal>
            {/* Trigger Button */}
            <Button
                variant="secondary"
                className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition"
            >
                ✏️ Edit
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="sm:max-w-2xl w-full mx-4">

                        <Modal.CloseTrigger />

                        <Modal.Header className="border-b pb-6">
                            <Modal.Heading className="text-2xl font-semibold text-gray-900">
                                Update Destination
                            </Modal.Heading>
                            <p className="mt-2 text-sm text-gray-600">
                                Update the details of your travel destination.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-0">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="p-8 md:p-10 space-y-10">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                        <TextField defaultValue={destinationName} name="destinationName" isRequired className="md:col-span-2">
                                            <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                                Destination Name
                                            </Label>
                                            <Input
                                                placeholder="Bali Paradise"
                                                className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-base focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <TextField defaultValue={country} name="country" isRequired>
                                            <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                                Country
                                            </Label>
                                            <Input
                                                placeholder="Indonesia"
                                                className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-base focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <div className="space-y-2">
                                            <Label className="block text-sm font-semibold text-gray-700">
                                                Category
                                            </Label>
                                            <Select defaultValue={category} name="category" placeholder="Select category">
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

                                        <TextField defaultValue={price} name="price" type="number" isRequired>
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

                                        <TextField defaultValue={duration} name="duration" isRequired>
                                            <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                                Duration
                                            </Label>
                                            <Input
                                                placeholder="7 Days / 6 Nights"
                                                className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-base focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <TextField defaultValue={departureDate} name="departureDate" type="date" isRequired className="md:col-span-2">
                                            <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                                Departure Date
                                            </Label>
                                            <Input
                                                type="date"
                                                className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-base focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <TextField defaultValue={imageUrl} name="imageUrl" isRequired className="md:col-span-2">
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

                                        <TextField defaultValue={description} name="description" isRequired className="md:col-span-2">
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

                                    <Button
                                        type="submit"
                                        className="w-full h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-lg font-semibold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                                    >
                                        Update Destination
                                    </Button>
                                </form>
                            </Surface>
                        </Modal.Body>

                        <Modal.Footer className="border-t p-6">
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}