import Head from 'next/head';
import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import images from '../public/dataImage.json';
import Link from 'next/link';
import { Box, Card, Image, CardBody, Heading, Text, Stack, Flex, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useQuery } from 'react-query';

const StarshipDetail = ({ starship }) => {
	const image = images.find((image) => image.name === starship.name);
	//console.log(starship);

	const { data: films, isLoading } = useQuery('films', async () => {
		const filmsData = await Promise.all(starship.films.map((url) => axios.get(url)));
		return filmsData.map((res) => res.data);
	});

	if (isLoading) {
		return (
			<Flex justifyContent='center' alignItems='center' m='10'>
				<Spinner
					size='lg'
					thickness='4px'
					speed='0.50s'
					emptyColor='white'
					color='yellow.500'
				/>
				<Box p='3' color='whiteAlpha.300' textTransform='uppercase'>
					Starships is loading...
				</Box>
			</Flex>
		);
	}
	//console.log(films);
	const bg =
		'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)';

	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Box
				mt='10'
				as={motion.div}
				className='box'
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					delay: 1,
					ease: [0, 0.71, 0.2, 1.01],
					scale: {
						type: 'spring',
						damping: 5,
						stiffness: 100,
						restDelta: 0.001,
					},
				}}
			>
				<Text
					display='flex'
					mb='2'
					borderRadius='md'
					justifyContent='center'
					alignItems='center'
					width='100px'
					background={bg}
				>
					<Link href='/'>
						<ArrowBackIcon mt='2' boxSize={8} mb='3' color='yellow.400' />
					</Link>
				</Text>
				<Box>
					<Card
						direction={{ base: 'column', sm: 'row' }}
						overflow='hidden'
						variant='outline'
						boxShadow='10px 10px 47px 0px rgba(29, 209, 161,0.2)'
						bg='#05061d'
						p={30}
						borderRadius='md'
						borderColor='whiteAlpha.200'
					>
						<Image
							maxW={{ base: '100%', sm: '200px', md: '400px' }}
							src={image.img}
							alt={starship.name}
							boxShadow='rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
							borderRadius='md'
						/>
						<Stack textAlign='justify'>
							<CardBody>
								<Heading fontWeight='bold' color='orange.400' size='md'>
									{starship.name}
								</Heading>
								<Text color='whiteAlpha.800' py='2'>
									<Text color='orange.200' as='span'>
										Model:
									</Text>{' '}
									{starship.model}
								</Text>
								<Text color='whiteAlpha.800' py='2'>
									<Text color='orange.200' as='span'>
										Hyperdrive rating: :
									</Text>{' '}
									{starship.hyperdrive_rating}
								</Text>
								<Text py='2' color='whiteAlpha.800'>
									<Text color='orange.200' as='span'>
										Max Atmosphering Speed:{' '}
									</Text>
									{starship.max_atmosphering_speed}
								</Text>
								<Text color='whiteAlpha.800' py='2'>
									<Text as='span' color='orange.200'>
										Manufacturer:{' '}
									</Text>{' '}
									{starship.manufacturer}
								</Text>
								<Text color='whiteAlpha.800' py='2'>
									<Text as='span' color='orange.200'>
										Cargo Capacity:{' '}
									</Text>
									{starship.cargo_capacity}
								</Text>
								<Text color='whiteAlpha.800' py='2'>
									<Text as='span' color='orange.200'>
										Passengers:{' '}
									</Text>
									{starship.passengers}
								</Text>
								<Text color='whiteAlpha.800' py='2'>
									<Text as='span' color='orange.200'>
										Crew:{' '}
									</Text>
									{starship.crew}
								</Text>
								<Text color='orange.200' py='2' as='span'>
									Films:{' '}
								</Text>
								<>
									{films && films.length > 0 ? (
										films.map((film, index) => (
											<React.Fragment key={film.episode_id}>
												<Text as='span' color='whiteAlpha.800'>
													{film.title}
												</Text>
												{index !== films.length - 1 && (
													<Text as='span' color='whiteAlpha.800'>
														{' '}
														,{' '}
													</Text>
												)}
											</React.Fragment>
										))
									) : (
										<Text>Nothing Films</Text>
									)}
								</>
							</CardBody>
						</Stack>
					</Card>
				</Box>
			</Box>
		</>
	);
};

export default StarshipDetail;
