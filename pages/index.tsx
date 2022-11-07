import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { currency } from "../constants";
import { ethers } from "ethers";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import Loading from "../components/Loading";
import CountdownTimer from "../components/CountdownTimer";
import React from "react";

const Home: NextPage = () => {
	const address = useAddress();
	const [quantity, setQuantity] = React.useState<number>(1);
	const { contract, isLoading } = useContract(
		process.env.NEXT_PUBLIC_WALLET_ADDRESS
	);

	const { data: remainingTickets } = useContractRead(
		contract,
		"RemainingTickets"
	);
	const { data: currentWinningReward } = useContractRead(
		contract,
		"CurrentWinningReward"
	);
	const { data: ticketCommission } = useContractRead(
		contract,
		"ticketCommission"
	);
	const { data: expiration } = useContractRead(contract, "expiration");
	const { data: ticketPrice } = useContractRead(contract, "ticketPrice");
	const { data: operatorTotalCommission } = useContractRead(
		contract,
		"operatorTotalCommission"
	);

	if (isLoading) return <Loading />;

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
								<p className="text-xl">
									{currentWinningReward &&
										ethers.utils.formatEther(
											currentWinningReward.toString()
										)}{" "}
									{currency}
								</p>
							</div>
							<div className="stats">
								<h2 className="text-sm">Tickets Remaining</h2>
								<p className="text-xl">
									{remainingTickets?.toNumber()}
								</p>
							</div>
						</div>

						<div className="mt-5 mb-3">
							<CountdownTimer />
						</div>
					</div>

					<div className="stats-container space-y-2">
						<div className="stats-container">
							<div className="flex justify-between items-center text-white pb-2">
								<h2>Price per ticket</h2>
								<p>
									{ticketPrice &&
										ethers.utils.formatEther(
											ticketPrice.toString()
										)}{" "}
									{currency}
								</p>
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
									<p>
										{ticketPrice &&
											Number(
												ethers.utils.formatEther(
													ticketPrice.toString()
												)
											) * quantity}{" "}
										{currency}
									</p>
								</div>

								<div className="flex items-center justify-between text-cyan-300 text-xs italic">
									<p>Service fees</p>
									<p>
										{ticketCommission &&
											ethers.utils.formatEther(
												ticketCommission.toString()
											)}{" "}
										{currency}
									</p>
								</div>

								<div className="flex items-center justify-between text-cyan-300 text-xs italic">
									<p>+ Network Fees</p>
									<p>
										{operatorTotalCommission &&
											ethers.utils.formatEther(
												operatorTotalCommission.toString()
											)}{" "}
										{currency}
									</p>
								</div>
							</div>

							<button
								disabled={
									expiration?.toString() <
										Date.now().toString() ||
									remainingTickets?.toNumber() === 0
								}
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
