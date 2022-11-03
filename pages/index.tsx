import { useAddress, useContract } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Login from "../components/login";
import Loading from "../components/loading";
import React from "react";

const Home: NextPage = () => {
	const address = useAddress();
	const [quantity, setQuantity] = React.useState<number>(1);
	const { contract, isLoading } = useContract(
		process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
	);

	console.log(isLoading);

	// if (isLoading)
	// 	return <Loading />

	if (!address) return <Login />;

	return (
		<div className="bg-[#16213E] min-h-screen flex flex-col">
			<Head>
				<title>Defi Raffle</title>
			</Head>

			<div className="flex-1">
				<Header />

				<div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5">
					<div className="stats-container">
						<h1 className="text-5xl text-white font-semibold text-center">
							The Next Draw
						</h1>
						<div className="flex justify-between p-2 space-x-2">
							<div className="stats">
								<h2 className="text-sm">Total Pool</h2>
								<p className="text-xl">0.1 ETH</p>
							</div>
							<div className="stats">
								<h2 className="text-sm">Tickets Remaining</h2>
								<p className="text-xl">100</p>
							</div>
						</div>
					</div>

					<div className="stats-container space-y-2">
						<div className="stats-container">
							<div className="flex justify-between items-center text-white pb-2">
								<h2>Price per ticket</h2>
								<p>0.01 MATIC</p>
							</div>

							<div className="flex text-white items-center space-x-2 bg-[#041f3e] border-[#0a396f] border p-4">
								<p>TICKETS</p>
								<input
									className="flex w-full bg-transparent text-right outline-none"
									type="number"
									min={1}
									max={10}
									value={quantity}
									onChange={(e) =>
										setQuantity(Number(e.target.value))
									}
								/>
							</div>

							<div className="space-y-2 mt-5">
								<div className="flex items-center justify-between text-cyan-300 text-sm italic font-extrabold">
									<p>Total cost of tickets</p>
									<p>0.999</p>
								</div>

								<div className="flex items-center justify-between text-cyan-300 text-xs italic">
									<p>Service fees</p>
									<p>0.001 MATIC</p>
								</div>

								<div className="flex items-center justify-between text-cyan-300 text-xs italic">
									<p>+ Network Fees</p>
									<p>TBC</p>
								</div>
							</div>

							<button
								className="mt-5 w-full bg-gradient-to-br from-emerald-500 to-cyan-600 px-10 py-5
							rounded-md text-white shadow-xl disabled:from-gray-600 disabled:to-gray-600
							disabled:text-gray-100 disabled:cursor-not-allowed"
							>
								Buy Tickets
							</button>
						</div>
					</div>
				</div>
			</div>

			<div></div>
		</div>
	);
};

export default Home;
