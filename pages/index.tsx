import { useAddress, useContract } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Login from "../components/login";
import Logo from "../public/Logo.jpg";
import ClipLoader from "react-spinners/ClipLoader";

const Home: NextPage = () => {
	const address = useAddress();
	const { contract, isLoading } = useContract(
		process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
	);

	if (isLoading)
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
		);

	if (!address) return <Login />;

	return (
		<div className="bg-[#16213E] min-h-screen flex flex-col">
			<Head>
				<title>Defi Raffle</title>
			</Head>

			<Header />

			<h1 className="text-white text-center m-auto">Work in Progress!</h1>
		</div>
	);
};

export default Home;
