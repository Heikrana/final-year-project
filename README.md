# Instructions to run locally

## hardware needed

-   500mb of free storage
-   at least 4 GB of memory

## software needed

-   modern operating system (Any supported GNU/Linux distro, Windows 10+, MacOS Mojave and later)
-   NodeJS v18+, npm v9.5+, git v2.25+
-   any modern browser (firefox v63+, chromium v84+, safari v14+)
-   metamask browser extension for authentication and buying tickets

## installation process

### deploying smart contract on thirweb

-   create an account on thirdweb.com/
-   open a terminal window and write the following command to download prewritten smart contract <br>
    `git clone `
-   run `cd smartContractForLotterySystem` to go inside the downloaded folder
-   run `npm run i` to install the required dependencies
-   run `npx thirdweb deploy` to deploy the contract and enter `y` if given a prompt
-   click the `deploy` button on the website and after deploy, copy the api key

### serving website locally

-   open a bash terminal and write the following command to download the source code <br>
    `git clone `
-   run `cd final-year-project` to go inside the downloaded folder
-   open the code base in some code editor and create a file with the name `.env.local`
-   inside this file write `NEXT_PUBLIC_WALLET_ADDRESS="your_api_key"` and replace `your_api_key` with the api key copied in the above step
-   run `npm run i` in the terminal to install the required dependencies
-   when the installation complete, run `npm dev` to start the server
-   open a browser windown and type `localhost:5173` in the url bar to go to the website
