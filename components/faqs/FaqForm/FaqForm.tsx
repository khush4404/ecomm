"use client";
import React, { useState } from "react";
import Input from "@/components/common/Input/Input";

type FormData = {
    name: string;
    email: string;
    question: string;
};

export const FaqForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        question: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            name: "",
            email: "",
            question: "",
        });
    };

    return (
        <div className="py-8 md:py-12">
            <div className="max-w-2xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                        In what way can we help?
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        Feel free to reach out to us with your inquiries.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Input */}
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        label="Name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        size="lg"
                    />

                    {/* Email Input */}
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="John.S@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        size="lg"
                    />

                    {/* Question Textarea */}
                    <Input
                        id="question"
                        name="question"
                        label="Write your Question"
                        placeholder="Enter here..."
                        value={formData.question}
                        onChange={handleChange}
                        textarea
                        rows={6}
                        required
                        size="lg"
                    />

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-lg transition"
                        >
                            Submit Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
