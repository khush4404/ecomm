"use client";

import React, { useEffect, useState } from "react";
import Input from "@/components/common/Input/Input";
import type { Address } from "../Addresses/Addresses";

interface Props {
	initialData?: Address | null;
	onCancel: () => void;
	onSave: (data: Omit<Address, "id"> & Partial<Pick<Address, "id">>) => void;
}

export const AddressForm: React.FC<Props> = ({
	initialData = null,
	onCancel,
	onSave,
}) => {
	const [form, setForm] = useState<Partial<Address>>({
		name: "",
		buildingNumber: "",
		streetName: "",
		streetAddress: "",
		state: "",
		city: "",
		postCode: "",
		country: "",
	});

	useEffect(() => {
		// Defer state updates to a microtask to avoid synchronous setState inside an effect
		const apply = () => {
			if (initialData) {
				setForm({
					id: initialData.id,
					name: initialData.name ?? "",
					buildingNumber: initialData.buildingNumber ?? "",
					streetName: initialData.streetName ?? "",
					streetAddress: initialData.streetAddress ?? "",
					state: initialData.state ?? "",
					city: initialData.city ?? "",
					postCode: initialData.postCode ?? "",
					country: initialData.country ?? "",
				});
			} else {
				setForm({
					name: "",
					buildingNumber: "",
					streetName: "",
					streetAddress: "",
					state: "",
					city: "",
					postCode: "",
					country: "",
				});
			}
		};

		// schedule on next microtask so setForm is not called synchronously within the effect
		Promise.resolve().then(apply);
	}, [initialData]);

	function update<K extends keyof Address>(key: K, value: Address[K]) {
		setForm((s) => ({ ...s, [key]: value }));
	}

	function handleSubmit(e?: React.FormEvent) {
		e?.preventDefault();
		const payload: Omit<Address, "id"> & Partial<Pick<Address, "id">> = {
			...form,
		} as Omit<Address, "id"> & Partial<Pick<Address, "id">>;
		// Remove undefineds
		(Object.keys(payload) as (keyof Address)[]).forEach((k) => {
			if (payload[k] === undefined) {
				delete payload[k];
			}
		});
		onSave(payload);
	}

	return (
		<form onSubmit={handleSubmit} className="">
			<h2 className="text-2xl font-bold mb-6">Address Inforamtion</h2>
			<div className="grid md:grid-cols-3">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full col-span-2">
					<Input
						label="Name:"
						value={form.name ?? ""}
						onChange={(e) => update("name", e.target.value)}
						placeholder="Full name"
						containerClassName="md:col-span-2"
						className="!w-full"
					/>

					<Input
						label="Building Number:"
						value={form.buildingNumber ?? ""}
						onChange={(e) =>
							update("buildingNumber", e.target.value)
						}
						placeholder="44"
						className="!w-full"
					/>

					<Input
						label="Street Name:"
						value={form.streetName ?? ""}
						onChange={(e) => update("streetName", e.target.value)}
						placeholder="Keele Street"
						className="!w-full"
					/>

					<Input
						label="Street Address:"
						value={form.streetAddress ?? ""}
						onChange={(e) =>
							update("streetAddress", e.target.value)
						}
						placeholder="High Park"
						className="!w-full"
					/>

					<Input
						label="State:"
						value={form.state ?? ""}
						onChange={(e) => update("state", e.target.value)}
						placeholder="Ontario"
						className="!w-full"
					/>

					<Input
						label="City:"
						value={form.city ?? ""}
						onChange={(e) => update("city", e.target.value)}
						placeholder="Toronto"
						className="!w-full"
					/>

					<Input
						label="Post Code:"
						value={form.postCode ?? ""}
						onChange={(e) => update("postCode", e.target.value)}
						placeholder="M6M 3Z7"
						className="!w-full"
					/>
				</div>
			</div>
			<div className="mt-6 flex gap-4">
				<button
					type="submit"
					className="bg-amber-400 text-white px-6 py-2   rounded-md font-semibold hover:bg-amber-500"
				>
					{initialData ? "Save Address" : "Add Address"}
				</button>

				<button
					type="button"
					onClick={onCancel}
					className="bg-white border border-gray-300 px-6 py-2 rounded-md"
				>
					Discard
				</button>
			</div>
		</form>
	);
};

export default AddressForm;
