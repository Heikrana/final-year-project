import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";

const Home: NextPage = () => {
	return (
		<div className="bg-[#16213E] min-h-screen flex flex-col">
			<Head>
				<title>Lottery Leud</title>
			</Head>

			<Header />

			<h1 className="text-white text-center m-auto">Work in Progress!</h1>
		</div>
	);
};

export default Home;
