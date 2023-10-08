import {
	Box,
	Button,
	Card,
	IconButton,
	Image,
	Center,
	CardFooter,
	Stack,
	Heading,
	Flex,
	Text,
} from '@chakra-ui/react';
import { ArrowBackIcon, CloseIcon } from '@chakra-ui/icons';
import images from '@/public/dataImage.json';
import { useStarshipsContext } from '@/context/StarshipsContext';
import Link from 'next/link';
import Head from 'next/head';

const Favorites = () => {
	const { favorite, removeFavorite, setFavorite } = useStarshipsContext();
	//console.log(favorite);
	const bg =
		'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)';

	const removeAll = () => {
		setFavorite([]);
	};
	return (
		<>
			<audio
				src='https://ia803204.us.archive.org/16/items/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3'
				autoPlay
			/>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Box mt='10'>
				<Flex justifyContent='space-between' alignItems='center'>
					<Box
						display='flex'
						mb='2'
						borderRadius='md'
						p='2'
						justifyContent='center'
						alignItems='center'
						width='100px'
						background={bg}
					>
						<Link href='/'>
							{' '}
							<ArrowBackIcon boxSize={8} color='yellow.400' />
						</Link>
					</Box>
					<IconButton
						_hover={{
							backgroundColor: 'red',
						}}
						bg={bg}
						onClick={removeAll}
						aria-label='Search database'
						icon={<CloseIcon color='yellow.400' />}
					/>
				</Flex>
				<Flex gap='20' justifyContent='center' flexWrap='wrap' mb='6' mt='5'>
					{favorite && favorite.length > 0 ? (
						favorite.map((starship) => {
							const image = images.find((image) => image.name === starship.name);
							return (
								<Box bg='#05061d' key={starship.name}>
									<Card
										bg='transparent'
										borderRadius='5'
										_hover={{
											boxShadow: '10px 10px 47px 0px rgba(29, 209, 161,0.2)',
											transition: '400ms',
										}}
										width='300px'
									>
										<Link href={`/${starship.name}`}>
											<Image
												src={image.img}
												style={{
													width: '300px',
													height: '300px',
													borderRadius: '5px',
												}}
											/>
										</Link>
										<Stack>
											<Heading
												display='flex'
												alignItems='center'
												justifyContent='center'
												minH='72px'
												size='md'
												pt='4'
												color='orange.400'
											>
												{starship.name}
											</Heading>
										</Stack>
										<Center>
											<CardFooter>
												<Button
													fontSize='15'
													variant='solid'
													_hover={{
														backgroundColor: 'whiteAlpha.300',
													}}
													backgroundColor='whiteAlpha.200'
													color='whiteAlpha.800'
													onClick={() => removeFavorite(starship)}
												>
													Remove Favorite
												</Button>
											</CardFooter>
										</Center>
									</Card>
								</Box>
							);
						})
					) : (
						<Text color='whiteAlpha.800' mt='10'>
							You haven't added any starships to your favorites yet !
						</Text>
					)}
				</Flex>
			</Box>
		</>
	);
};

export default Favorites;
