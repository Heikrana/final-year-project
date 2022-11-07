import React from "react";
import Logo from "../public/Logo.jpg";
import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
	return (
			<div className="bg-[#16213E] h-screen flex flex-col items-center justify-center">
				<div className="flex items-center space-x-10 mb-10">
					<img
						className="rounded-full h-20 w-20"
						src={Logo}
						alt="Logo"
					/>
					<h1 className="text-lg text-white font-bold">
						Loading the Raffle, hold on tight!
					</h1>
				</div>
				<ClipLoader color="white" size={90} speedMultiplier={1.5} />
			</div>
	)
}

export default Loading;