import React from "react";

interface Props {
	title: string;
	isActive?: boolean;
}

function NavButton({ title, isActive }: Props) {
	return (
		<button
			className={`${
				isActive && "text-gray-800 bg-[#87A2FB]"
			} text-stone-200 hover:bg-[#87A2FB] hover:text-gray-800 font-medium py-2 px-4 rounded`}
		>
			{title}
		</button>
	);
}

export default NavButton;
