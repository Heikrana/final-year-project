import React from "react";
import NavButton from "./navbutton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const dp1 ="https://tinyurl.com/snegi";

function Header() {
	return (
		<header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
			<div className="flex items-center space-x-2">
				<img
					className="rounded-full h-20 w-20 object-cover object-top"
					src={dp1}
					alt="dp"
				/>
				<div>
					<h1 className="text-2xl  text-[#A7D2CB] font-bold">
						Defi Raffle
					</h1>
					<p className="text-sm text-white truncate font-medium">
						Sarthak Negi
					</p>
				</div>
			</div>

			<div className="hidden md:flex md:col-span-3 items-center justify-center rounded-md">
				<div className="bg-[#041f3e] p-4 space-x-2">
					<NavButton title="Buy Tickers" isActive />
					<NavButton title="Log Out" />
				</div>
			</div>

			<div className="flex flex-col ml-auto text-right">
				<Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
				<span className="md:hidden">
					<NavButton title="Log Out" />
				</span>
			</div>
		</header>
	);
}

export default Header;
