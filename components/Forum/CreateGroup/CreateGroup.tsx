"use client";

import Input from "@/components/common/Input";
import { Search } from "lucide-react";
import React, { useState } from "react";

interface CreateGroupModalProps {
	isOpen: boolean;
	onClose: () => void;
}

type StepType = "details" | "people" | "info";

interface GroupFormData {
	groupName: string;
	description: string;
	isPublic: boolean;
	selectedPeople: string[];
	selectedTopics: string[];
}

export const CreateGroup: React.FC<CreateGroupModalProps> = ({
	isOpen,
	onClose,
}) => {
	const [currentStep, setCurrentStep] = useState<StepType>("details");
	const [formData, setFormData] = useState<GroupFormData>({
		groupName: "",
		description: "",
		isPublic: true,
		selectedPeople: [],
		selectedTopics: [],
	});

	const [searchPeople, setSearchPeople] = useState("");
	const [searchTopics, setSearchTopics] = useState("");

	// Mock data
	const allPeople = [
		{
			id: "1", name: "Zachary Hughes"
		},
		{ id: "2", name: "Juliette Cordier", image: "" },
		{ id: "3", name: "Luca Cook", image: "" },
		{ id: "4", name: "David Meyer", image: "" },
		{ id: "5", name: "Kelly Foster", image: "" },
	];

	const allTopics = [
		"Transportation process",
		"Sales",
		"Smoking Cannabis",
		"Distribution process",
		"Market trends",
		"Customer Service",
		"Product Development",
	];

	const filteredPeople = allPeople.filter((p) =>
		p.name.toLowerCase().includes(searchPeople.toLowerCase())
	);

	const filteredTopics = allTopics.filter((t) =>
		t.toLowerCase().includes(searchTopics.toLowerCase())
	);

	const handlePeopleSelect = (personId: string) => {
		setFormData((prev) => ({
			...prev,
			selectedPeople: prev.selectedPeople.includes(personId)
				? prev.selectedPeople.filter((id) => id !== personId)
				: [...prev.selectedPeople, personId],
		}));
	};

	const handleTopicSelect = (topic: string) => {
		setFormData((prev) => ({
			...prev,
			selectedTopics: prev.selectedTopics.includes(topic)
				? prev.selectedTopics.filter((t) => t !== topic)
				: [...prev.selectedTopics, topic],
		}));
	};

	const handleNext = () => {
		if (currentStep === "details") {
			setCurrentStep("people");
		} else if (currentStep === "people") {
			setCurrentStep("info");
		}
	};

	const handleBack = () => {
		if (currentStep === "people") {
			setCurrentStep("details");
		} else if (currentStep === "info") {
			setCurrentStep("people");
		}
	};

	const handleSubmit = () => {
		console.log("Group created:", formData);
		onClose();
		// Reset form
		setCurrentStep("details");
		setFormData({
			groupName: "",
			description: "",
			isPublic: true,
			selectedPeople: [],
			selectedTopics: [],
		});
	};

	if (!isOpen) return null;

	return (
		<>
			{/* Desktop Modal - Only visible on lg screens and above */}
			<div
				className="hidden lg:block fixed inset-0 bg-black/50 z-40"
				onClick={onClose}
			/>

			{/* Desktop Modal Popup */}
			<div className="hidden lg:block fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl z-50 bg-white rounded-[10px]  p-8 ">
				{/* Desktop Header */}
				<div className="mb-8 w-full">
					<h2 className="text-xl font-semibold mb-6">
						Create a group
					</h2>

					{/* Progress Steps */}
					<div className="flex items-center justify-between mb-8 relative">
						{/* Background Line */}
						<div className="absolute top-4 left-10 right-15 h-1 bg-gray-300 -z-10" />
						<div
							className="absolute top-4 left-10 h-1 bg-[#F0BA43] -z-10 transition-all duration-300"
							style={{
								width:
									currentStep === "details"
										? "0%"
										: currentStep === "people"
											? "50%"
											: "100%",
							}}
						/>

						{/* Step 1 */}
						<div className="flex flex-col items-center z-10">
							<div
								className={`w-4 h-4 rounded-full flex items-center justify-center text-sm font-semibold mt-2.5 transition-all duration-300 ${currentStep === "details" ||
									currentStep === "people" ||
									currentStep === "info"
									? "bg-[#F0BA43] text-white"
									: "bg-gray-300 text-white"
									}`}
							>
								<span className="bg-white h-1/2 w-1/2 rounded-full"></span>
							</div>
							<span
								className={`text-xs font-medium transition-colors duration-300 ${currentStep === "details"
									? "text-yellow-400"
									: "text-gray-500"
									}`}
							>
								Group details
							</span>
							<span className="text-xs text-gray-400">
								Basic information
							</span>
						</div>

						{/* Step 2 */}
						<div className="flex flex-col items-center z-10">
							<div
								className={`w-4 h-4 rounded-full flex items-center justify-center text-sm font-semibold mt-2.5 transition-all duration-300 ${currentStep === "people" ||
									currentStep === "info"
									? "bg-[#F0BA43] text-white"
									: "bg-gray-300 text-white"
									}`}
							>
								<span className="bg-white h-1/2 w-1/2 rounded-full"></span>
							</div>
							<span
								className={`text-xs font-medium transition-colors duration-300 ${currentStep === "people"
									? "text-yellow-400"
									: "text-gray-500"
									}`}
							>
								People
							</span>
							<span className="text-xs text-gray-400">
								Add people to the group
							</span>
						</div>

						{/* Step 3 */}
						<div className="flex flex-col items-center z-10">
							<div
								className={`w-4 h-4 rounded-full flex items-center justify-center text-sm font-semibold mt-2.5 transition-all duration-300 ${currentStep === "info"
									? "bg-[#F0BA43] text-white"
									: "bg-gray-300 text-white"
									}`}
							>
								<span className="bg-white h-1/2 w-1/2 rounded-full"></span>
							</div>
							<span
								className={`text-xs font-medium transition-colors duration-300 ${currentStep === "info"
									? "text-yellow-400"
									: "text-gray-500"
									}`}
							>
								Group info
							</span>
							<span className="text-xs text-gray-400">
								Select info for the group
							</span>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="mb-8 min-h-[300px]">
					{/* Step 1: Group Details */}
					{currentStep === "details" && (
						<div className="space-y-5">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Group Name
								</label>
								<input
									type="text"
									placeholder="Enter Group Name"
									value={formData.groupName}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											groupName: e.target.value,
										}))
									}
									className="w-full border border-[#BBBBBB] rounded-md px-4 py-2 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									About the group
								</label>
								<textarea
									placeholder="What is this group about?"
									value={formData.description}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											description: e.target.value,
										}))
									}
									rows={4}
									className="w-full border border-[#BBBBBB] rounded-md px-4 py-2 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none"
								/>
							</div>

							<div className="flex items-center gap-3">
								<button
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											isPublic: !prev.isPublic,
										}))
									}
									className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.isPublic
										? "bg-[#F0BA43]"
										: "bg-gray-300"
										}`}
								>
									<span
										className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.isPublic
											? "translate-x-6"
											: "translate-x-1"
											}`}
									/>
								</button>
								<div>
									<p className="text-sm font-medium text-gray-700">
										Public
									</p>
									<p className="text-xs text-gray-500">
										Select if you and to make this group
										public
									</p>
								</div>
							</div>
						</div>
					)}

					{/* Step 2: People */}
					{currentStep === "people" && (
						<div className="space-y-4">
							<div className="relative">
								<input
									type="text"
									placeholder="Search people to add group"
									value={searchPeople}
									onChange={(e) =>
										setSearchPeople(e.target.value)
									}
									className="w-full border border-[#BBBBBB] rounded-md px-4 py-2 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
								/>
								<svg
									className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>

							<div>
								<p className="text-sm font-medium text-gray-700 mb-3">
									People add ({formData.selectedPeople.length}
									)
								</p>
								<div className="bg-gray-50 rounded-md p-3 max-h-[250px] overflow-y-auto space-y-2">
									<p className="text-xs text-gray-500 mb-2">
										{filteredPeople.length} people found
									</p>
									{filteredPeople.map((person) => (
										<div
											key={person.id}
											className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
											onClick={() =>
												handlePeopleSelect(person.id)
											}
										>
											<div className="flex items-center gap-3">
												<span className="text-2xl">
													<img
														src={person.image || "/images/placeholder-man.jpg"}
														alt={person.name}
														className="rounded-full object-contain h-10 w-10"
													/>
												</span>
												<span className="text-sm font-medium text-gray-700">
													{person.name}
												</span>
											</div>
											{formData.selectedPeople.includes(
												person.id
											) && (
													<span className="text-yellow-400 text-lg">
														✓
													</span>
												)}
										</div>
									))}
								</div>
							</div>
						</div>
					)}

					{/* Step 3: Group Info (Topics) */}
					{currentStep === "info" && (
						<div className="space-y-4">
							<div className="relative">
								<input
									type="text"
									placeholder="Search Topic"
									value={searchTopics}
									onChange={(e) =>
										setSearchTopics(e.target.value)
									}
									className="w-full border border-[#BBBBBB] rounded-md px-4 py-2 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
								/>
								<svg
									className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>

							<div>
								<p className="text-sm font-medium text-gray-700 mb-3">
									Topics selected (
									{formData.selectedTopics.length})
								</p>
								<div className="bg-gray-50 rounded-md p-3 max-h-[250px] overflow-y-auto space-y-2">
									<p className="text-xs text-gray-500 mb-2">
										{filteredTopics.length} Topics found
									</p>
									{filteredTopics.map((topic) => (
										<div
											key={topic}
											className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
											onClick={() =>
												handleTopicSelect(topic)
											}
										>
											<span className="text-sm font-medium text-gray-700">
												{topic}
											</span>
											{formData.selectedTopics.includes(
												topic
											) && (
													<span className="text-yellow-400 text-lg">
														✓
													</span>
												)}
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Footer Buttons */}
				<div className="flex items-center justify-between gap-4">
					{currentStep !== "details" && (
						<button
							onClick={handleBack}
							className="px-6 py-2 border border-[#BBBBBB] rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
						>
							Back
						</button>
					)}
					{currentStep === "details" && <div />}

					{currentStep !== "info" && (
						<button
							onClick={handleNext}
							disabled={
								currentStep === "details" && !formData.groupName
							}
							className="px-8 py-2 bg-[#F0BA43] text-[#FFFFFF] font-medium rounded-full  transition-colors disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
						>
							Next
						</button>
					)}

					{currentStep === "info" && (
						<button
							onClick={handleSubmit}
							className="px-8 py-2 bg-yellow-btn text-[#FFFFFF] font-medium rounded-full hover:bg-yellow-500 transition-colors ml-auto"
						>
							Create group
						</button>
					)}
				</div>
			</div>

			{/* Mobile Full-Page Layout - Only visible below lg screens */}
			<div className="lg:hidden w-full">
				{/* Mobile Title */}
				<div className="mb-6">
					<h2 className="text-xl font-semibold text-[#1D1D1D]">
						Create group
					</h2>
				</div>

				{/* Mobile Progress Steps - Compact (vertical) */}
				<div className="flex lg:hidden flex-col mb-8 relative pl-6">
					{/* Vertical Background Line */}
					<div className="absolute top-3 left-4 bottom-8 w-1 bg-gray-300 -z-10" />
					<div
						className="absolute top-3 bottom-10 left-4 w-1 bg-[#F0BA43] -z-10 transition-all duration-300"
						style={{
							height:
								currentStep === "details"
									? "0%"
									: currentStep === "people"
										? "50%"
										: "100%",
						}}
					/>

					{/* Step 1 */}
					<div className="relative -ml-3.5 flex items-start gap-3 z-10 mb-6">
						<div
							className={`w-4 h-4 rounded-full flex items-center justify-center mt-1.5 transition-all duration-300 ${currentStep === "details" ||
								currentStep === "people" ||
								currentStep === "info"
								? "bg-[#F0BA43] text-white"
								: "bg-gray-300 text-white"
								}`}
						>
							<span className="bg-white h-1/2 w-1/2 rounded-full"></span>
						</div>
						<div>
							<span
								className={`text-sm font-medium block ${currentStep === "details"
									? "text-yellow-400"
									: "text-gray-500"
									}`}
							>
								Group details
							</span>
							<span className="text-xs text-gray-400">
								Basic information
							</span>
						</div>
					</div>

					{/* Step 2 */}
					<div className="flex items-start -ml-3.5 gap-3 z-10 mb-6">
						<div
							className={`w-4 h-4 rounded-full flex items-center justify-center mt-1.5 transition-all duration-300 ${currentStep === "people" ||
								currentStep === "info"
								? "bg-[#F0BA43] text-white"
								: "bg-gray-300 text-white"
								}`}
						>
							<span className="bg-white h-1/2 w-1/2 rounded-full"></span>
						</div>
						<div>
							<span
								className={`text-sm font-medium block ${currentStep === "people"
									? "text-yellow-400"
									: "text-gray-500"
									}`}
							>
								People
							</span>
							<span className="text-xs text-gray-400">
								Add people to the group
							</span>
						</div>
					</div>

					{/* Step 3 */}
					<div className="flex items-start -ml-3.5 gap-3 z-10">
						<div
							className={`w-4 h-4 rounded-full flex items-center justify-center mt-1.5 transition-all duration-300 ${currentStep === "info"
								? "bg-[#F0BA43] text-white"
								: "bg-gray-300 text-white"
								}`}
						>
							<span className="bg-white h-1/2 w-1/2 rounded-full"></span>
						</div>
						<div>
							<span
								className={`text-sm font-medium block ${currentStep === "info"
									? "text-yellow-400"
									: "text-gray-500"
									}`}
							>
								Group info
							</span>
							<span className="text-xs text-gray-400">
								Select info for the group
							</span>
						</div>
					</div>
				</div>

				{/* Mobile Content */}
				<div className="mb-6  rounded-[10px]  space-y-4">
					{/* Step 1: Group Details */}
					{currentStep === "details" && (
						<div className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-[#1D1D1D] mb-2">
									Group Name
								</label>
								<Input
									type="text"
									placeholder="Enter Group Name"
									value={formData.groupName}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											groupName: e.target.value,
										}))
									}
									className="w-full border border-[#BBBBBB] rounded-[10px] px-3 py-2 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 bg-white"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-[#1D1D1D] mb-2">
									About the group
								</label>
								<Input
									placeholder="What is this group about?"
									textarea
									value={formData.description}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											description: e.target.value,
										}))
									}
									rows={3}
									className="w-full h-[200px] border border-[#BBBBBB] rounded-[10px] px-3 py-2 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none bg-white"
								/>
							</div>

							<div className="flex flex-col items-start gap-3 pt-2">
								<button
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											isPublic: !prev.isPublic,
										}))
									}
									className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${formData.isPublic
										? "bg-[#F0BA43]"
										: "bg-gray-300"
										}`}
								>
									<span
										className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${formData.isPublic
											? "translate-x-5"
											: "translate-x-1"
											}`}
									/>
								</button>
								<div className="flex flex-col">
									<p className="text-base font-medium text-[#1D1D1D]">
										Public
									</p>
									<p className="text-base text-text-gray">
										Select if you want to make this group
										public
									</p>
								</div>
							</div>
						</div>
					)}

					{/* Step 2: People */}
					{currentStep === "people" && (
						<div className="space-y-4">
							<div className="relative flex">
								<Input
									type="text"
									placeholder="Search people to add group"
									value={searchPeople}
									onChange={(e) =>
										setSearchPeople(e.target.value)
									}
									className="w-full border border-[#BBBBBB] rounded-[10px] px-3 py-2 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 bg-white"
								/>
								<button className="absolute right-3  bottom-4">
									<Search />
								</button>
							</div>

							<div>
								<p className="text-sm font-medium text-[#1D1D1D] mb-2">
									People add ({formData.selectedPeople.length}
									)
								</p>
								<div className="bg-white rounded-[10px] p-3 max-h-[250px] overflow-y-auto space-y-2 border border-[#BBBBBB]">
									<p className="text-xs text-gray-500 mb-2">
										{filteredPeople.length} people found
									</p>
									{filteredPeople.map((person) => (
										<div
											key={person.id}
											className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
											onClick={() =>
												handlePeopleSelect(person.id)
											}
										>
											<div className="flex items-center gap-3">
												<img
													src={person.image || "/images/placeholder-man.jpg"}
													alt={person.name}
													className="rounded-full object-contain h-10 w-10"
												/>
												<span className="text-sm font-medium text-[#1D1D1D]">
													{person.name}
												</span>
											</div>
											{formData.selectedPeople.includes(
												person.id
											) && (
													<span className="text-yellow-400 text-lg">
														✓
													</span>
												)}
										</div>
									))}
								</div>
							</div>
						</div>
					)}

					{/* Step 3: Group Info (Topics) */}
					{currentStep === "info" && (
						<div className="space-y-4">
							<div className="relative flex">
								<Input
									type="text"
									placeholder="Search people to add group"
									value={searchPeople}
									onChange={(e) =>
										setSearchPeople(e.target.value)
									}
									className="w-full border border-[#BBBBBB] rounded-[10px] px-3 py-2 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 bg-white"
								/>
								<button className="absolute right-3  bottom-4">
									<Search />
								</button>
							</div>

							<div>
								<p className="text-sm font-medium text-[#1D1D1D] mb-2">
									Topics selected (
									{formData.selectedTopics.length})
								</p>
								<div className="bg-white rounded-[10px]  max-h-[250px] overflow-y-auto space-y-2 ">
									<p className="text-xs text-gray-500 mb-2">
										{filteredTopics.length} Topics found
									</p>
									{filteredTopics.map((topic) => (
										<div
											key={topic}
											className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
											onClick={() =>
												handleTopicSelect(topic)
											}
										>
											<span className="text-sm font-medium text-[#1D1D1D]">
												{topic}
											</span>
											{formData.selectedTopics.includes(
												topic
											) && (
													<span className="text-yellow-400 text-lg">
														✓
													</span>
												)}
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Mobile Footer Buttons */}
				<div className="flex flex-col gap-2">


					{currentStep !== "info" && (
						<button
							onClick={handleNext}
							disabled={
								currentStep === "details" && !formData.groupName
							}
							className="w-full px-8 py-2.5 bg-[#F0BA43]  font-medium rounded-full hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm text-white"
						>
							Next
						</button>
					)}

					{currentStep === "info" && (
						<button
							onClick={handleSubmit}
							className="w-full px-8 py-2.5 bg-[#F0BA43] text-[#FFFFFF] font-medium rounded-full hover:bg-yellow-500 transition-colors text-sm"
						>
							Create group
						</button>
					)}

					{currentStep !== "details" && (
						<button
							onClick={handleBack}
							className="w-full px-6 py-2.5 border border-[#BBBBBB] rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
						>
							Back
						</button>
					)}
				</div>
			</div>
		</>
	);
};
