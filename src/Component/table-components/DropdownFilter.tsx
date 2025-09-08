import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DropdownFilterProps {
	title: string;
	options: string[];
	selectedOption: string;
	onSelect: (option: string) => void;
	isOpen: boolean; 
	onToggle: () => void; 
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
	title,
	options,
	selectedOption,
	onSelect,
	isOpen,
	onToggle,
}) => {
	return (
		<div className="relative">
			<div
				className={`border border-gray-200 px-3 py-2 rounded-md cursor-pointer flex justify-between items-center w-fit h-[34px] ${isOpen
						? "bg-[var(--color-primary)] text-white"
						: "hover:bg-[var(--color-primary)] hover:text-white transition-all ease-in duration-300"
					}`}
				onClick={onToggle} 
			>
				{selectedOption ? selectedOption : title}
				<RiArrowDropDownLine size={20} />
			</div>

			{isOpen && (
				<div className="absolute left-0 right-0 mt-1 w-44 bg-white border border-gray-200 rounded-md z-50">
					{options.length > 0 ? (
						options.map((option) => (
							<div
								key={option}
								className={`px-4 py-2 text-[#646b72] cursor-pointer ${selectedOption === option
										? "bg-[var(--color-primary)] text-white rounded-sm"
										: "hover:bg-[var(--color-active)]"  
									}`}
								onClick={() => {
									onSelect(option);
								}}
							>
								{option}
							</div>
						))
					) : (
						<div className="px-4 py-2 text-[#646b72] text-center italic">
							No data found!
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default DropdownFilter;
