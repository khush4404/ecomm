import React, {
	forwardRef,
	InputHTMLAttributes,
	TextareaHTMLAttributes,
} from "react";

type BaseProps = {
	label?: string;
	error?: string | boolean;
	className?: string;
	containerClassName?: string;
	size?: "sm" | "md" | "lg";
	variant?: "default" | "outline" | "ghost";
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	textarea?: boolean;
	rows?: number;
	/** optional media above the input. Can be image URL or React node (e.g. <Image/>) */
	media?: string | React.ReactNode;
};

export type InputProps = BaseProps &
	Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
	Partial<TextareaHTMLAttributes<HTMLTextAreaElement>>;

const sizeClasses: Record<NonNullable<BaseProps["size"]>, string> = {
	sm: "px-2 py-1 text-sm",
	md: "px-3 py-2 text-sm",
	lg: "px-4 py-3 text-base",
};

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
	default:
		"border border-[#BBBBBB] bg-white focus:outline-none focus:ring-2 focus:ring-yellow-300",
	outline:
		"border  border-[#BBBBBB]bg-white focus:outline-none focus:ring-2 focus:ring-yellow-300",
	ghost: "bg-transparent border border-transparent focus:outline-none",
};

function merge(...parts: Array<string | undefined | false | null>) {
	return parts.filter(Boolean).join(" ");
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
	(
		{
			label,
			id,
			className,
			containerClassName,
			error,
			size = "md",
			variant = "default",
			prefix,
			suffix,
			textarea,
			rows = 4,
			disabled,
			media,
			...rest
		},
		ref
	) => {
		const rootClass = merge(
			"w-full overflow-hidden flex flex-col items-start",
			containerClassName
		);

		// mobile-first: requested mobile size & desktop overrides
		const mobileControl = "w-full h-[52px] text-[12px] leading-[24px]";
		const desktopControl = "md:w-full md:text-[16px] md:leading-[36px]";

		const controlBase = merge(
			"block disabled:opacity-60 disabled:cursor-not-allowed appearance-none",
			mobileControl,
			desktopControl,
			// rounded 10px and 1px border with requested color
			"rounded-[10px] border-[1px] border-[#BBBBBB]",
			sizeClasses[size],
			variantClasses[variant],
			className
		);

		return (
			<div className={rootClass}>
				{/* media above field (optional) */}
				{typeof media === "string" && (
					<div
						aria-hidden
						className="mb-2 w-[323px] h-[52px] rounded-[10px] border border-[#BBBBBB] bg-center bg-cover"
						style={{ backgroundImage: `url(${media})` }}
					/>
				)}
				{typeof media !== "string" && media && (
					<div className="mb-2 w-[323px] h-[52px] rounded-[10px] border border-[#BBBBBB] overflow-hidden">
						{media}
					</div>
				)}

				{label && (
					<label
						htmlFor={id}
						className="block mb-1 text-sm md:text-base font-medium text-gray-700"
					>
						{label}
					</label>
				)}

				<div className="relative w-full">
					{prefix && (
						<div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
							{prefix}
						</div>
					)}

					{textarea ? (
						<textarea
							id={id}
							ref={ref as React.Ref<HTMLTextAreaElement>}
							rows={rows}
							className={merge(
								controlBase,
								prefix ? "pl-9" : "",
								suffix ? "pr-9" : "",
								error ? "border-red-500 focus:ring-red-200" : ""
							)}
							aria-invalid={!!error}
							disabled={disabled}
							{...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
						/>
					) : (
						<input
							id={id}
							ref={ref as React.Ref<HTMLInputElement>}
							className={merge(
								controlBase,
								prefix ? "pl-9" : "",
								suffix ? "pr-9" : "",
								error ? "border-red-500 focus:ring-red-200" : ""
							)}
							aria-invalid={!!error}
							disabled={disabled}
							{...(rest as InputHTMLAttributes<HTMLInputElement>)}
						/>
					)}

					{suffix && (
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
							{suffix}
						</div>
					)}
				</div>

				{error && typeof error === "string" && (
					<p className="mt-1 text-xs text-red-600">{error}</p>
				)}
			</div>
		);
	}
);

Input.displayName = "Input";

export default Input;
