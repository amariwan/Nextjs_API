import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Search from '@/components/Search';
import CardList from '@/components/CardList';

export default function Home() {
	return (
		<>
			<audio
				src='https://ia803204.us.archive.org/16/items/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3'
				autoPlay
			/>
			<Head>
				<title>Star Wars / Starships</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link
					rel='shortcut icon'
					href='https://lumiere-a.akamaihd.net/v1/images/favicon-tab-cc_b939a414.png?region=0%2C0%2C512%2C512'
				/>
				<link
					rel='apple-touch-icon'
					href='https://lumiere-a.akamaihd.net/v1/images/favicon-tab-cc_b939a414.png?region=0%2C0%2C512%2C512'
				/>

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Box justifyContent='center' alignItems='center' flexDirection='column'>
				<Search />
				<CardList />
			</Box>
		</>
	);
}
