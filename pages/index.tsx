import { useAddress } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Login from "../components/login";

const Home: NextPage = () => {
	const address = useAddress();
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
