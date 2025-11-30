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
				<div className="text-center mb-4 md:mb-8 pb-4 border-b boder-[#BBBBBB] md:border-0">
					<h2 className="text-base md:text-2xl font-semibold text-[#1D1D1D] mb-2.5">
						In what way can we help?
					</h2>
					<p className="text-text-gray text-sm md:text-xl ">
						Feel free to reach out to us with your inquiries.
					</p>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className="space-y-2.5">
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
					/>

					{/* Submit Button */}
					<div className="flex md:justify-end  pt-4">
						<button
							type="submit"
							className="px-8 py-3 w-full md:w-[212px] bg-[#F0BA43] hover:bg-yellow-500 text-[#1D1D1D] font-medium rounded-[10px] transition"
						>
							Submit Now
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
