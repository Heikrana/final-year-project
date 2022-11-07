import { useMetamask } from "@thirdweb-dev/react";
import React from "react";
import Logo from "../public/Logo.jpg";

function Login() {
	const connectWithMetamask = useMetamask();

	return (
		<div className="bg-[#16213E] min-h-screen flex flex-col items-center justify-center text-center">
			<h1>asd</h1>
			<div className="flex flex-col items-center mb-10">
				<img
					className="rounded-full h-56 w-56 mb-10"
					src={Logo}
					alt="Bingo"
				/>

				<h1 className="text-6xl text-white font-bold">Defi Raffle</h1>
				<h2 className="text-white">
					Get started by logging in with your MetaMask
				</h2>

				<button
					onClick={connectWithMetamask}
					className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
				>
					Login with MetaMask
				</button>
			</div>
		</div>
	);
}

export default Login;
